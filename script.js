// --- 데이터 ---
        const websites = [
            {"category":"디자인","title":"핀터레스트","url":"https://www.pinterest.com","description":"건축과 디자인에 관한 영감을 주는 이미지들을 모아볼 수 있는 소셜 플랫폼입니다","id":"60"},
            {"category":"디자인","title":"아키데일리","url":"https://www.archdaily.com","description":"세계에서 가장 방문자가 많은 건축 웹사이트로, 매일 업데이트되는 건축 프로젝트와 뉴스를 제공합니다","id":"1"},
            {"category":"디자인","title":"디즌","url":"https://www.dezeen.com","description":"건축과 디자인 분야의 최신 트렌드와 혁신적인 프로젝트를 소개하는 영국의 대표적인 디자인 매거진입니다","id":"2"},
            {"category":"디자인","title":"월페이퍼","url":"https://www.wallpaper.com","description":"건축, 디자인, 아트, 패션 등을 다루는 글로벌 라이프스타일 매거진입니다","id":"3"},
            {"category":"디자인","title":"hahaha","url":"https://www.naver.com","description":"1928년부터 발행되어 온 이탈리아의 권위 있는 건축 및 디자인 매거진입니다","id":"4"},
            {"category":"디자인","title":"도머스","url":"https://www.domusweb.it","description":"1928년부터 발행되어 온 이탈리아의 권위 있는 건축 및 디자인 매거진입니다","id":"5"},
            {"category":"디자인","title":"베한스","url":"https://www.behance.net","description":"크리에이티브 전문가들의 포트폴리오와 작품을 공유하는 플랫폼입니다","id":"65"},
            {"category":"디자인","title":"Archinect","url":"https://archinect.com","description":"건축 커뮤니티와 채용정보를 제공하는 글로벌 건축 플랫폼입니다","id":"71"},
            {"category":"공모전","title":"씽굿","url":"https://www.thinkcontest.com","description":"창의적이고 혁신적인 아이디어를 발굴하는 국내 대표 공모전 플랫폼입니다","id":"7"},
            {"category":"공모전","title":"캠퍼스픽","url":"https://www.campuspick.com","description":"대학생을 위한 다양한 공모전과 대외활동 정보를 제공하는 플랫폼입니다","id":"61"},
            {"category":"공모전","title":"요즘것들","url":"https://www.yojeumgeotdeul.com","description":"젊은 크리에이터들을 위한 공모전과 프로젝트 정보를 큐레이션하는 사이트입니다","id":"62"},
            {"category":"공모전","title":"슥삭","url":"https://www.ssakssak.co.kr","description":"건축 및 디자인 분야의 다양한 공모전 정보를 한눈에 볼 수 있는 플랫폼입니다","id":"63"},
            {"category":"공모전","title":"공모전대전","url":"https://www.contestkorea.com","description":"국내 최대 규모의 공모전 정보 플랫폼입니다","id":"64"},
            {"category":"채용정보","title":"대한건축사협회","url":"https://www.kira.or.kr/jsp/main/03/02_01.jsp","description":"@@","id":"12"},
            {"category":"채용정보","title":"월간스페이스","url":"https://vmspace.com/job/job.html","description":"건축사무소와 건축 관련 기업의 채용 정보를 제공하는 전문 사이트입니다","id":"13"},
            {"category":"채용정보","title":"건설워커","url":"https://www.worker.co.kr/","description":"건축 관련 인턴십과 신입 채용 정보를 전문적으로 다루는 플랫폼입니다","id":"14"},
            {"category":"채용정보","title":"사람인","url":"https://www.saramin.co.kr/zf_user/jobs/list/domestic","description":"고급 건축 전문직과 시니어 포지션 채용 정보를 제공하는 헤드헌팅 사이트입니다","id":"15"},
            {"category":"채용정보","title":"잡코리아","url":"https://www.jobkorea.co.kr","description":"국내 대표 채용 정보 사이트로 건축 분야 채용 정보도 풍부합니다","id":"66"},
            {"category":"회사정보","title":"Foster + Partners","url":"https://www.fosterandpartners.com","description":"노먼 포스터가 설립한 세계적인 건축회사로, 혁신적이고 지속가능한 건축 디자인으로 유명합니다","id":"16"},
            {"category":"회사정보","title":"Zaha Hadid","url":"https://www.zaha-hadid.com","description":"자하 하디드가 설립한 건축회사로, 유기적이고 곡선적인 형태의 건축물로 세계적인 명성을 얻었습니다","id":"17"},
            {"category":"회사정보","title":"BIG","url":"https://big.dk","description":"비야케 잉겔스가 이끄는 덴마크의 건축회사로, 혁신적인 건축을 추구합니다","id":"18"},
            {"category":"회사정보","title":"MVRDV","url":"https://www.mvrdv.nl","description":"네덜란드의 혁신적인 건축 스튜디오로, 창의적이고 지속가능한 도시 건축 솔루션을 제공합니다","id":"19"},
            {"category":"회사정보","title":"삼성물산","url":"https://www.samsungcnt.com","description":"국내 대표 건설회사로 다양한 건축 프로젝트를 수행합니다","id":"67"},
            {"category":"프로그램","title":"SketchUp","url":"https://www.sketchup.com","description":"직관적이고 사용하기 쉬운 3D 모델링 소프트웨어로 건축가들에게 인기입니다","id":"24"},
            {"category":"프로그램","title":"AutoCAD","url":"https://www.autodesk.com/products/autocad","description":"건축 설계의 표준 CAD 프로그램으로 전 세계적으로 사용됩니다","id":"25"},
            {"category":"프로그램","title":"Rhino 3D","url":"https://www.rhino3d.com","description":"복잡한 3D 형태를 모델링할 수 있는 전문적인 NURBS 기반 3D 소프트웨어입니다","id":"26"},
            {"category":"프로그램","title":"Revit","url":"https://www.autodesk.com/products/revit","description":"BIM 기반의 건축 설계 소프트웨어로 협업과 정보 관리에 최적화되어 있습니다","id":"27"},
            {"category":"프로그램","title":"Lumion","url":"https://lumion.com","description":"건축 시각화를 위한 3D 렌더링 소프트웨어입니다","id":"68"},
            {"category":"유튜버","title":"Architectural Digest","url":"https://www.youtube.com/@ArchitecturalDigest","description":"유명 건축가와 디자이너의 작품을 소개하는 세계적인 디자인 매거진의 유튜브 채널입니다","id":"29"},
            {"category":"유튜버","title":"Kirsten Dirksen","url":"https://www.youtube.com/@kirstendirksen","description":"지속가능한 건축과 혁신적인 친환경 기술을 다루는 교육적인 다큐멘터리 채널입니다","id":"30"},
            {"category":"유튜버","title":"World Architecture","url":"https://www.youtube.com/@WorldArchitectureCommunity","description":"전 세계의 혁신적인 건축 프로젝트와 건축가를 소개하는 글로벌 커뮤니티 채널입니다","id":"31"},
            {"category":"유튜버","title":"건축유튜버","url":"https://www.youtube.com/results?search_query=건축","description":"국내 건축 관련 유튜브 채널들을 모아서 볼 수 있는 플랫폼입니다","id":"32"},
            {"category":"유튜버","title":"30X40 Design Workshop","url":"https://www.youtube.com/@30X40DesignWorkshop","description":"건축가를 위한 실용적인 디자인 팁과 워크플로우를 제공하는 채널입니다","id":"69"},
            {"category":"커뮤니티","title":"건축Q&A","url":"https://arch-qa.com","description":"건축에 관한 질문과 답변을 나누는 커뮤니티 플랫폼입니다","id":"72"},
            {"category":"커뮤니티","title":"아키토크","url":"https://architalk.kr","description":"건축학도와 건축가들이 모여 소통하는 온라인 커뮤니티입니다","id":"73"},
            {"category":"커뮤니티","title":"건축포럼","url":"https://arch-forum.net","description":"건축 전문가들의 토론과 정보 공유를 위한 포럼입니다","id":"74"},
            {"category":"커뮤니티","title":"디자인리뷰","url":"https://design-review.co.kr","description":"건축 작품에 대한 리뷰와 비평을 나누는 커뮤니티입니다","id":"75"},
            {"category":"지도","title":"Google Earth","url":"https://earth.google.com","description":"전 세계의 건축물과 도시를 위성 이미지로 탐색할 수 있는 플랫폼입니다","id":"39"},
            {"category":"지도","title":"아키맵","url":"https://archi-map.com","description":"국내외 유명 건축물의 위치와 정보를 지도로 확인할 수 있는 서비스입니다","id":"76"},
            {"category":"지도","title":"건축여행","url":"https://arch-travel.kr","description":"건축물을 중심으로 한 여행 코스와 정보를 제공하는 플랫폼입니다","id":"77"},
            {"category":"지도","title":"도시탐험","url":"https://city-explore.net","description":"도시 건축물과 공간을 탐험할 수 있는 가이드를 제공합니다","id":"78"},
            {"category":"기타","title":"건축클래스","url":"https://arch-class.com","description":"온라인 건축 교육과 강의를 제공하는 학습 플랫폼입니다","id":"43"},
            {"category":"기타","title":"건축뉴스","url":"https://arch-news.kr","description":"국내외 건축 관련 최신 뉴스와 트렌드를 제공하는 뉴스 사이트입니다","id":"44"},
            {"category":"기타","title":"건축갤러리","url":"https://arch-gallery.net","description":"우수한 건축 작품과 포트폴리오를 전시하는 온라인 갤러리입니다","id":"45"},
            {"category":"기타","title":"건축도서관","url":"https://arch-library.org","description":"건축 관련 도서와 자료를 검색하고 대출할 수 있는 디지털 도서관입니다","id":"79"}
        ];


        const categoryConfig = {
            "디자인": { icon: "🎨", iconClass: "icon-blue" },
            "공모전": { icon: "🏆", iconClass: "icon-yellow" },
            "채용정보": { icon: "💼", iconClass: "icon-green" },
            "회사정보": { icon: "🏢", iconClass: "icon-orange" },
            "프로그램": { icon: "💻", iconClass: "icon-purple" },
            "유튜버": { icon: "📺", iconClass: "icon-red" },
            "커뮤니티": { icon: "👥", iconClass: "icon-indigo" },
            "지도": { icon: "📍", iconClass: "icon-teal" },
            "기타": { icon: "📚", iconClass: "icon-gray" }
        };

        let favorites = [];
        let showDescriptions = false;
        let expandedCategories = new Set();

        // 방문자 수: localStorage에 오늘 날짜별 방문횟수 카운트
        function loadVisitorCount() {
            const today = new Date().toISOString().slice(0, 10);
            const key = 'sfu-visit-' + today;
            let count = parseInt(localStorage.getItem(key) || "0", 10);
            count++;
            localStorage.setItem(key, count.toString());
            document.getElementById('visitor-count').textContent = count;
        }

        function updateFooterTime(){
            const el = document.getElementById('footer-time');
            if(!el) return;
            const now = new Date();
            const pad = (n)=> String(n).padStart(2,'0');
            el.textContent = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
        }

        function loadFavorites() {
            const saved = localStorage.getItem('sfu-favorites-v2');
            if (saved) favorites = JSON.parse(saved);
        }
        function saveFavorites() {
            localStorage.setItem('sfu-favorites-v2', JSON.stringify(favorites));
        }

        function renderCategories() {
            const grid = document.getElementById('categories-grid');
            grid.innerHTML = '';
            const categoryOrder = ["디자인", "공모전", "채용정보", "회사정보", "프로그램", "유튜버", "커뮤니티", "지도", "기타"];

            // 즐겨찾기에 있는 것은 제외
            const favSet = new Set(favorites);
            const categorizedWebsites = {};
            websites.forEach(website => {
                if (!favSet.has(website.id)) {
                    if (!categorizedWebsites[website.category]) categorizedWebsites[website.category] = [];
                    categorizedWebsites[website.category].push(website);
                }
            });

            categoryOrder.forEach(category => {
                if (categorizedWebsites[category]) {
                    const categoryCard = createCategoryCard(category, categorizedWebsites[category]);
                    grid.appendChild(categoryCard);
                }
            });
        }

        function createCategoryCard(category, sites) {
            const config = categoryConfig[category];
            const isExpanded = expandedCategories.has(category);
            const limit = 4;
            const sitesToShow = isExpanded ? sites : sites.slice(0, limit);
            const hasMore = sites.length > limit;

            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-header">
                    <div class="category-title">
                        <span class="category-icon ${config.iconClass}">${config.icon}</span>
                        <span class="category-name">${category}</span>
                    </div>
                </div>
                <div class="category-content">
                    <div class="website-list">
                        ${sitesToShow.map(website => createWebsiteItem(website)).join('')}
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
                        <img class="website-favicon" src="https://www.google.com/s2/favicons?domain=${website.url}&sz=16" alt=""
                             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><rect width=%2216%22 height=%2216%22 fill=%22%23e5e7eb%22/><text x=%228%22 y=%2212%22 text-anchor=%22middle%22 fill=%22%236b7280%22 font-size=%228%22>🌐</text></svg>'">
                        <div class="website-content">
                            <a href="${website.url}" target="_blank" class="website-title" ${!showDescriptions ? `title="${website.description}"` : ''}>${website.title}</a>
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

        function updateFavoritesDisplay() {
            const favoritesSection = document.getElementById('favorites-section');
            const favoritesContainer = document.getElementById('favorites-container');
            if (favorites.length === 0) {
                favoritesSection.style.display = 'none';
                return;
            }
            favoritesSection.style.display = 'block';
            favoritesContainer.innerHTML = '';

            favorites.forEach((websiteId, index) => {
                const website = websites.find(w => w.id === websiteId);
                if (website) {
                    const favoriteItem = document.createElement('div');
                    favoriteItem.className = 'favorite-item';
                    favoriteItem.setAttribute('draggable', 'true');
                    favoriteItem.setAttribute('data-index', index);

                    favoriteItem.innerHTML = `
                        <img src="https://www.google.com/s2/favicons?domain=${website.url}&sz=16" alt="" style="width:16px;height:16px;"
                             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><rect width=%2216%22 height=%2216%22 fill=%22%23e5e7eb%22/></svg>'">
                        <a href="${website.url}" target="_blank" style="text-decoration:none; color:#111827; font-size:14px; font-weight:500;">${website.title}</a>
                        <button data-id="${website.id}" class="favorite-remove" aria-label="즐겨찾기제거" style="font-size:14px; color:#bfae6b; background:none; border:none; cursor:pointer;">⭐</button>
                    `;
                    // 드래그 앤 드롭 핸들러
                    favoriteItem.addEventListener('dragstart', (e) => {
                        e.dataTransfer.effectAllowed = "move";
                        e.dataTransfer.setData('text/plain', index);
                    });
                    favoriteItem.addEventListener('dragover', (e) => {
                        e.preventDefault();
                        favoriteItem.style.background = "#fffde4";
                    });
                    favoriteItem.addEventListener('dragleave', () => {
                        favoriteItem.style.background = "";
                    });
                    favoriteItem.addEventListener('drop', (e) => {
                        e.preventDefault();
                        favoriteItem.style.background = "";
                        const from = parseInt(e.dataTransfer.getData('text/plain'), 10);
                        const to = parseInt(favoriteItem.getAttribute('data-index'), 10);
                        if (from !== to) {
                            const moved = favorites.splice(from, 1)[0];
                            favorites.splice(to, 0, moved);
                            saveFavorites();
                            updateFavoritesDisplay();
                        }
                    });
                    // 별표 클릭으로 즐겨찾기 제거
                    favoriteItem.querySelector('.favorite-remove').addEventListener('click', (ev)=>{
                        ev.stopPropagation();
                        favorites = favorites.filter(f => f !== website.id);
                        saveFavorites();
                        updateFavoritesDisplay();
                        renderCategories();
                    });
                    favoritesContainer.appendChild(favoriteItem);
                }
            });
        }

        // ---- 이벤트 위임 및 기타 ----
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('btnContact').addEventListener('click', openContactModal);
            document.getElementById('floatingContactBtn').addEventListener('click', openContactModal);
            document.getElementById('contact-close').addEventListener('click', closeContactModal);
            document.getElementById('btnContactSubmit').addEventListener('click', handleContactSubmit);
            document.getElementById('btnToggleDesc').addEventListener('click', toggleDescriptions);
            document.getElementById('btnHomepage').addEventListener('click', setAsHomepage);

            loadFavorites();
            loadVisitorCount();
            renderCategories();
            updateFavoritesDisplay();
            updateFooterTime();

            document.addEventListener('keydown', (e)=>{
                if(e.key === 'Escape') closeContactModal();
            });
        });

        // 카테고리 내 사이트 카드 클릭/별/더보기/그림자 효과 등
        document.addEventListener('click', function(e) {
            // 즐겨찾기 토글
            const favBtn = e.target.closest('.favorite-btn');
            if (favBtn) {
                const id = favBtn.getAttribute('data-id');
                toggleFavorite(id, e);
                return;
            }
            // 더보기 버튼
            const moreBtn = e.target.closest('.more-btn[data-category]');
            if (moreBtn) {
                const cat = moreBtn.getAttribute('data-category');
                toggleCategory(cat);
                return;
            }
            // 모달 바깥쪽 클릭 닫기
            const modal = document.getElementById('contact-modal');
            if (modal.classList.contains('open') && e.target === modal) {
                closeContactModal();
            }
        });

        // 그림자 효과: 마우스 올렸을 때만
        document.addEventListener('mouseover', function(e){
            const card = e.target.closest('.website-item');
            if (card) card.classList.add('shadow-hover');
        });
        document.addEventListener('mouseout', function(e){
            const card = e.target.closest('.website-item');
            if (card) card.classList.remove('shadow-hover');
        });

        function toggleFavorite(websiteId, event) {
            event.preventDefault();
            event.stopPropagation();
            const idx = favorites.indexOf(websiteId);
            if (idx === -1) {
                favorites.push(websiteId);
            } else {
                favorites.splice(idx, 1);
            }
            saveFavorites();
            updateFavoritesDisplay();
            renderCategories();
        }

        function toggleCategory(category) {
            if (expandedCategories.has(category)) expandedCategories.delete(category);
            else expandedCategories.add(category);
            renderCategories();
        }

        function toggleDescriptions() {
            showDescriptions = !showDescriptions;
            renderCategories();
        }

        function openContactModal() {
            const modal = document.getElementById('contact-modal');
            modal.classList.add('open');
            modal.setAttribute('aria-hidden','false');
        }
        function closeContactModal() {
            const modal = document.getElementById('contact-modal');
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden','true');
        }
        function handleContactSubmit() {
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            const subject = encodeURIComponent('꿀단지 문의사항');
            const body = encodeURIComponent(`이름: ${name}
이메일: ${email}

문의내용:
${message}`);
            window.location.href = `mailto:okjsk1@gmail.com?subject=${subject}&body=${body}`;
            document.getElementById('contact-name').value = '';
            document.getElementById('contact-email').value = '';
            document.getElementById('contact-message').value = '';
            closeContactModal();
        }
        function setAsHomepage() {
            try {
                if (window.chrome) alert('크롬에서는 설정 > 시작 그룹에서 직접 설정해주세요.');
                else window.home();
            } catch(e) {
                alert('브라우저 설정에서 직접 시작페이지를 설정해주세요.');
            }
        }
