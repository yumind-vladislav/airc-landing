// ============================================
// AI4C Main Scripts
// Скрипты для лендинга AI FOR CREATORS 4.0
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Lucide иконок
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Плавная прокрутка по якорям
    initSmoothScroll();

    // Обработка формы предзаписи
    initPresaleForm();

    // Активная секция в навигации (опционально)
    initActiveNavigation();
});

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

    if (!form) return;

    form.addEventListener('submit', (e) => {
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

        // Здесь можно добавить отправку на сервер
        // Например: fetch('/api/presale', { method: 'POST', body: JSON.stringify(data) })

        // Показываем сообщение об успехе
        form.style.display = 'none';
        successMessage.classList.remove('hidden');

        // Пере-инициализируем иконки после показа сообщения
        if (typeof lucide !== 'undefined') {
            setTimeout(() => lucide.createIcons(), 100);
        }

        // Логирование (для отладки, убрать в продакшене)
        console.log('Форма отправлена:', data);
    });
}

// ============================================
// Активная секция в навигации (опционально)
// ============================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    // Убираем активный класс у всех ссылок
                    navLinks.forEach(link => {
                        link.classList.remove('text-white');
                        link.classList.add('text-secondary');
                    });

                    // Добавляем активный класс к текущей ссылке
                    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.remove('text-secondary');
                        activeLink.classList.add('text-white');
                    }
                }
            });
        },
        {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
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
