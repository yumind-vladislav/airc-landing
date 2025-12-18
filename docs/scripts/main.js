// ============================================
// AI4C Main Scripts
// Скрипты для лендинга AI FOR CREATORS 4.0
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Lucide иконок (с проверкой defer загрузки)
    initLucideIcons();

    // Плавная прокрутка по якорям
    initSmoothScroll();

    // Обработка формы предзаписи
    initPresaleForm();

    // Активная секция в навигации (опционально)
    initActiveNavigation();
    
    // Lazy loading для видео
    initLazyVideo();
});

// ============================================
// Инициализация Lucide иконок
// ============================================
function initLucideIcons() {
    // Если lucide уже загружен
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        return;
    }
    
    // Если defer — ждём загрузки скрипта
    const checkLucide = setInterval(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
            clearInterval(checkLucide);
        }
    }, 50);
    
    // Таймаут на случай ошибки загрузки
    setTimeout(() => clearInterval(checkLucide), 5000);
}

// ============================================
// Lazy loading для видео (IntersectionObserver)
// ============================================
function initLazyVideo() {
    const videos = document.querySelectorAll('video[preload="metadata"]');
    
    if (videos.length === 0) return;
    
    const videoObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.preload = 'auto';
                    video.play().catch(() => {});
                    videoObserver.unobserve(video);
                }
            });
        },
        { rootMargin: '100px' }
    );
    
    videos.forEach(video => videoObserver.observe(video));
}

// ============================================
// Плавная прокрутка по якорям
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Пропускаем пустые якоря
            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // Плавная прокрутка
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Обновление URL без перезагрузки
                history.pushState(null, null, href);
            }
        });
    });
}

// ============================================
// Обработка формы предзаписи
// ============================================
function initPresaleForm() {
    const form = document.getElementById('presaleForm');
    const successMessage = document.getElementById('successMessage');
    const statusMessage = document.getElementById('presaleStatus');

    if (!form) return;

    const endpoint = form.dataset.appsScriptUrl;

    const setStatus = (message) => {
        if (statusMessage) {
            statusMessage.textContent = message;
        }
    };

    if (!endpoint) {
        setStatus('Укажите URL веб-приложения Apps Script.');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Получение данных формы
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            telegram: formData.get('telegram'),
            privacy: formData.get('privacy')
        };

        // Валидация
        if (!data.name || !data.phone || !data.telegram || !data.privacy) {
            alert('Пожалуйста, заполните все поля и примите политику конфиденциальности');
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;
        setStatus('Отправляем заявку...');

        const payload = new URLSearchParams({
            name: data.name,
            phone: data.phone,
            telegram: data.telegram,
            privacy: data.privacy,
            source: window.location.href,
            submittedAt: new Date().toISOString()
        });

        try {
            await fetch(endpoint, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: payload.toString()
            });

            setStatus('Заявка отправлена!');
            form.reset();

            if (successMessage) {
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
            }

            if (typeof lucide !== 'undefined') {
                setTimeout(() => lucide.createIcons(), 100);
            }
        } catch (error) {
            console.error('Apps Script submit failed:', error);
            setStatus('Не удалось отправить. Попробуйте позже или напишите нам в Telegram.');
        } finally {
            if (submitButton) submitButton.disabled = false;
        }
    });
}

// ============================================
// Активная секция в навигации (оптимизировано)
// ============================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    // Кэшируем ссылки по ID для быстрого доступа
    const linkMap = new Map();
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            linkMap.set(href.slice(1), link);
        }
    });

    let currentActive = null;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Пропускаем если уже активна
                    if (currentActive === id) return;

                    // Убираем активный класс у предыдущей ссылки
                    if (currentActive && linkMap.has(currentActive)) {
                        const prevLink = linkMap.get(currentActive);
                        prevLink.classList.remove('text-white');
                        prevLink.classList.add('text-secondary');
                    }

                    // Добавляем активный класс к текущей ссылке
                    if (linkMap.has(id)) {
                        const activeLink = linkMap.get(id);
                        activeLink.classList.remove('text-secondary');
                        activeLink.classList.add('text-white');
                        currentActive = id;
                    }
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '-100px 0px -40% 0px'
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// Утилиты (если понадобятся)
// ============================================

// Debounce функция (для оптимизации событий скролла/resize)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Проверка видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
