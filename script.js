// 간단한 스토리지 유틸
const Storage = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
};

const KEYS = {
  favorites: 'gd_favorites',
  layout: 'gd_fav_layout',
  theme: 'gd_theme',
  starred: 'gd_starred_links'
};

document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  // 테마 초기화
  const savedTheme = Storage.get(KEYS.theme, 'light');
  html.setAttribute('data-theme', savedTheme);

  // 요소 참조
  const favoritesGrid = document.getElementById('favoritesGrid');
  const btnGrid = document.getElementById('btnGrid');
  const btnList = document.getElementById('btnList');
  const btnTheme = document.getElementById('btnTheme');

  const btnExport = document.getElementById('btnExport');
  const btnImport = document.getElementById('btnImport');
  const importInput = document.getElementById('importInput');

  const btnStartPage = document.getElementById('btnStartPage');
  const modal = document.getElementById('startPageDialog');
  const homeUrl = document.getElementById('homeUrl');
  const btnCopyUrl = document.getElementById('btnCopyUrl');

  // 현재 URL 표시
  homeUrl.value = location.href;

  // 레이아웃 초기화
  const savedLayout = Storage.get(KEYS.layout, 'grid');
  applyLayout(savedLayout);

  // 즐겨찾기 초기화 (HTML 초기 카드 + 저장된 데이터 통합)
  const initialCards = readCardsFromDOM();
  const savedFavs = Storage.get(KEYS.favorites, []);
  const merged = mergeFavorites(initialCards, savedFavs);
  renderFavorites(merged);
  Storage.set(KEYS.favorites, merged);

  // 카테고리별 별표 초기화
  const savedStarred = Storage.get(KEYS.starred, []);
  restoreStarredButtons(savedStarred);

  // 이벤트 바인딩
  btnGrid.addEventListener('click', () => setLayout('grid'));
  btnList.addEventListener('click', () => setLayout('list'));
  btnTheme.addEventListener('click', toggleTheme);

  favoritesGrid.addEventListener('click', onFavoritesClick);
  document.body.addEventListener('click', onStarToggleClick);

  btnExport.addEventListener('click', onExport);
  btnImport.addEventListener('click', () => importInput.click());
  importInput.addEventListener('change', onImportFile);

  btnStartPage.addEventListener('click', () => modal.showModal());
  btnCopyUrl.addEventListener('click', copyUrl);

  // 접근성: Enter로 카드 열기
  favoritesGrid.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const link = e.target.closest('.card')?.querySelector('.card-link');
      if (link) link.click();
    }
  });

  // 함수들
  function applyLayout(mode) {
    favoritesGrid.classList.toggle('list-layout', mode === 'list');
  }
  function setLayout(mode) {
    applyLayout(mode);
    Storage.set(KEYS.layout, mode);
  }

  function toggleTheme() {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    Storage.set(KEYS.theme, next);
  }

  function readCardsFromDOM() {
    const cards = [...document.querySelectorAll('#favoritesGrid .card')];
    return cards.map(card => ({
      name: card.dataset.name,
      url: card.dataset.url,
      // 이미지 존재 여부만 보관(경로는 카드 내부 a>img의 src에서 가져옴)
      img: card.querySelector('img')?.getAttribute('src') || null
    }));
  }

  function mergeFavorites(initial, saved) {
    const map = new Map();
    [...initial, ...saved].forEach(item => {
      if (!item?.name || !item?.url) return;
      map.set(item.url, { name: item.name, url: item.url, img: item.img || null });
    });
    return [...map.values()];
  }

  function renderFavorites(list) {
    favoritesGrid.innerHTML = '';
    list.forEach(item => {
      favoritesGrid.appendChild(createCard(item));
    });
  }

  function createCard(item) {
    const article = document.createElement('article');
    article.className = 'card';
    article.setAttribute('role', 'listitem');
    article.dataset.name = item.name;
    article.dataset.url = item.url;

    const a = document.createElement('a');
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'card-link';
    a.setAttribute('aria-label', `${item.name} 새 탭에서 열기`);

    if (item.img) {
      const img = document.createElement('img');
      img.alt = item.name;
      img.src = item.img;
      img.onerror = () => {
        article.classList.add('no-img');
        img.remove();
      };
      a.appendChild(img);
    } else {
      article.classList.add('no-img');
    }

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = avatarText(item.name);
    a.appendChild(avatar);

    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = item.name;
    a.appendChild(title);

    const star = document.createElement('button');
    star.className = 'favorite-star active';
    star.title = '즐겨찾기 제거';
    star.setAttribute('aria-pressed', 'true');
    star.innerHTML = '<i class="fas fa-star"></i>';

    article.appendChild(a);
    article.appendChild(star);
    return article;
  }

  function avatarText(name) {
    const s = (name || '').trim();
    return s ? s[0].toUpperCase() : '●';
  }

  function onFavoritesClick(e) {
    const starBtn = e.target.closest('.favorite-star');
    if (!starBtn) return;
    const card = e.target.closest('.card');
    if (!card) return;

    const url = card.dataset.url;
    const favorites = Storage.get(KEYS.favorites, []);
    const next = favorites.filter(f => f.url !== url);
    Storage.set(KEYS.favorites, next);

    // 카테고리 스타 상태도 해제
    const starred = Storage.get(KEYS.starred, []);
    const nextStarred = starred.filter(u => u !== url);
    Storage.set(KEYS.starred, nextStarred);
    syncStarButtons(nextStarred);

    card.remove();
  }

  function onStarToggleClick(e) {
    const btn = e.target.closest('.star-toggle');
    if (!btn) return;

    e.preventDefault();
    const name = btn.dataset.name;
    const url = btn.dataset.url;

    const starred = new Set(Storage.get(KEYS.starred, []));
    const favorites = Storage.get(KEYS.favorites, []);

    if (btn.classList.contains('active')) {
      // 제거
      btn.classList.remove('active');
      starred.delete(url);
      const nextFavs = favorites.filter(f => f.url !== url);
      Storage.set(KEYS.f
