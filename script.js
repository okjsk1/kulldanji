// ==========================
// 📌 데이터 & 설정
// ==========================
const websites = [
    // ... 네가 제공한 websites 배열 전체 그대로 붙여넣기 ...
];

const categoryConfig = {
    "디자인":   { icon: "🎨", iconClass: "icon-blue" },
    "공모전":   { icon: "🏆", iconClass: "icon-yellow" },
    "채용정보": { icon: "💼", iconClass: "icon-green" },
    "회사정보": { icon: "🏢", iconClass: "icon-orange" },
    "프로그램": { icon: "💻", iconClass: "icon-purple" },
    "유튜버":   { icon: "📺", iconClass: "icon-red" },
    "커뮤니티": { icon: "👥", iconClass: "icon-indigo" },
    "지도":     { icon: "📍", iconClass: "icon-teal" },
    "기타":     { icon: "📚", iconClass: "icon-gray" }
};

let favorites = [];
let showDescriptions = false;
let expandedCategories = new Set();

// ==========================
// 📌 방문자 수
// ==========================
function loadVisitorCount() {
    const today = new Date().toISOString().slice(0, 10);
    const key = 'sfu-visit-' + today;
    let count = parseInt(localStorage.getItem(key) || "0", 10);
    count++;
    localStorage.setItem(key, count.toString());
    const vcEl = document.getElementById('visitor-count');
    if (vcEl) vcEl.textContent = count;
}

// ==========================
// 📌 Footer 시간 업데이트
// ==========================
function updateFooterTime() {
    const el = document.getElementById('footer-time');
    if (!el) return;
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    el.textContent = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

// ==========================
// 📌 즐겨찾기 로드 & 저장
// ==========================
function loadFavorites() {
    const saved = localStorage.getItem('sfu-favorites-v2');
    favorites = saved ? JSON.parse(saved) : [];
}
function saveFavorites() {
    localStorage.setItem('sfu-favorites-v2', JSON.stringify(favorites));
}

// ==========================
// 📌 카테고리 & 사이트 렌더링
// ==========================
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const categoryOrder = Object.keys(categoryConfig);
    const favSet = new Set(favorites);

    const categorizedWebsites = {};
    websites.forEach(site => {
        if (!favSet.has(site.id)) {
            (categorizedWebsites[site.category] ??= []).push(site);
        }
    });

    categoryOrder.forEach(category => {
        if (categorizedWebsites[category]) {
            const card = createCategoryCard(category, categorizedWebsites[category]);
            grid.appendChild(card);
        }
    });
}

function createCategoryCard(category, sites) {
    const { icon, iconClass } = categoryConfig[category];
    const isExpanded = expandedCategories.has(category);
    const limit = 4;
    const visibleSites = isExpanded ? sites : sites.slice(0, limit);
    const hasMore = sites.length > limit;

    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
        <div class="category-header">
            <div class="category-title">
                <span class="category-icon ${iconClass}">${icon}</span>
                <span class="category-name">${category}</span>
            </div>
        </div>
        <div class="category-content">
            <div class="website-list">
                ${visibleSites.map(createWebsiteItem).join('')}
                ${hasMore ? `<button class="more-btn" data-category="${category}">${isExpanded ? '⬆️ 접기' : `⬇️ 더보기 (${sites.length - limit}개 더)`}</button>` : ''}
            </div>
        </div>
    `;
    return card;
}

function createWebsiteItem(website) {
    const isFavorited = favorites.includes(website.id);
    const itemClass = showDescriptions ? 'website-item expanded' : 'website-item';

    return `
        <div class="${itemClass}" data-id="${website.id}">
            <div class="website-header">
                <img class="website-favicon" src="https://www.google.com/s2/favicons?domain=${website.url}&sz=16" alt="favicon"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22><rect width=%2216%22 height=%2216%22 fill=%22%23e5e7eb%22/><text x=%228%22 y=%2212%22 text-anchor=%22middle%22 fill=%22%236b7280%22 font-size=%228%22>🌐</text></svg>'">
                <div class="website-content">
                    <a href="${website.url}" target="_blank" rel="noopener noreferrer" class="website-title" ${!showDescriptions ? `title="${website.description}"` : ''}>
                        ${website.title}
                    </a>
                    ${showDescriptions ? `<div class="website-description">${website.description}</div>` : ''}
                </div>
                <button class="favorite-btn" data-id="${website.id}" aria-label="즐겨찾기">
                    <svg class="star-icon ${isFavorited ? 'favorited' : 'not-favorited'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// ==========================
// 📌 즐겨찾기 표시
// ==========================
function updateFavoritesDisplay() {
    const section = document.getElementById('favorites-section');
    const container = document.getElementById('favorites-container');
    if (!section || !container) return;

    if (favorites.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    container.innerHTML = '';

    favorites.forEach((id, index) => {
        const site = websites.find(w => w.id === id);
        if (!site) return;

        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.draggable = true;
        item.dataset.index = index;
        item.innerHTML = `
            <img src="https://www.google.com/s2/favicons?domain=${site.url}&sz=16" alt="favicon" width="16" height="16">
            <a href="${site.url}" target="_blank" rel="noopener noreferrer">${site.title}</a>
            <button data-id="${site.id}" class="favorite-remove" aria-label="즐겨찾기 제거">⭐</button>
        `;

        // Drag & Drop
        item.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', index);
        });
        item.addEventListener('dragover', e => {
            e.preventDefault();
            item.style.background = "#fffde4";
        });
        item.addEventListener('dragleave', () => item.style.background = "");
        item.addEventListener('drop', e => {
            e.preventDefault();
            item.style.background = "";
            const from = parseInt(e.dataTransfer.getData('text/plain'), 10);
            const to = parseInt(item.dataset.index, 10);
            if (from !== to) {
                const moved = favorites.splice(from, 1)[0];
                favorites.splice(to, 0, moved);
                saveFavorites();
                updateFavoritesDisplay();
            }
        });

        // Remove 버튼
        item.querySelector('.favorite-remove').addEventListener('click', e => {
            e.stopPropagation();
            favorites = favorites.filter(f => f !== site.id);
            saveFavorites();
            updateFavoritesDisplay();
            renderCategories();
        });

        container.appendChild(item);
    });
}

// ==========================
// 📌 즐겨찾기/카테고리 토글
// ==========================
function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx === -1) favorites.push(id);
    else favorites.splice(idx, 1);
    saveFavorites();
    updateFavoritesDisplay();
    renderCategories();
}

function toggleCategory(category) {
    expandedCategories.has(category) ? expandedCategories.delete(category) : expandedCategories.add(category);
    renderCategories();
}

function toggleDescriptions() {
    showDescriptions = !showDescriptions;
    renderCategories();
}

// ==========================
// 📌 모달 관련
// ==========================
function openContactModal() {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}
function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}
function handleContactSubmit() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const subject = encodeURIComponent('꿀단지 문의사항');
    const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n문의내용:\n${message}`);

    window.location.href = `mailto:okjsk1@gmail.com?subject=${subject}&body=${body}`;

    ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    closeContactModal();
}

// ==========================
// 📌 유틸
// ==========================
function setAsHomepage() {
    try {
        if (window.chrome) alert('크롬에서는 [설정 > 시작 그룹]에서 직접 설정해주세요.');
        else window.home();
    } catch {
        alert('브라우저 설정에서 직접 시작페이지를 설정해주세요.');
    }
}

// ==========================
// 📌 초기화
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    // 버튼 이벤트
    const btnMap = {
        'btnContact': openContactModal,
        'floatingContactBtn': openContactModal,
        'contact-close': closeContactModal,
        'btnContactSubmit': handleContactSubmit,
        'btnToggleDesc': toggleDescriptions,
        'btnHomepage': setAsHomepage
    };
    for (const [id, handler] of Object.entries(btnMap)) {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', handler);
    }

    // ESC로 모달 닫기
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeContactModal();
    });

    // 클릭 이벤트 위임
    document.addEventListener('click', e => {
        const favBtn = e.target.closest('.favorite-btn');
        if (favBtn) {
            toggleFavorite(favBtn.dataset.id);
            return;
        }
        const moreBtn = e.target.closest('.more-btn[data-category]');
        if (moreBtn) {
            toggleCategory(moreBtn.dataset.category);
            return;
        }
        const modal = document.getElementById('contact-modal');
        if (modal?.classList.contains('open') && e.target === modal) {
            closeContactModal();
        }
    });

    // hover 효과
    document.addEventListener('mouseover', e => {
        const card = e.target.closest('.website-item');
        if (card) card.classList.add('shadow-hover');
    });
    document.addEventListener('mouseout', e => {
        const card = e.target.closest('.website-item');
        if (card) card.classList.remove('shadow-hover');
    });

    // 초기 실행
    loadFavorites();
    loadVisitorCount();
    renderCategories();
    updateFavoritesDisplay();
    updateFooterTime();
});
