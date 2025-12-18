# AI FOR CREATORS 4.0 — Landing Page

Премиальный лендинг для авторского курса по AI для контент-креаторов.

---

## Описание

Статический лендинг с премиальным дизайном в стиле editorial/zine. Построен на чистом HTML, CSS (Tailwind CDN) и vanilla JavaScript.

**Особенности:**
- Тёмная палитра с розовым акцентом
- Grayscale изображения с цветом на hover
- Hairline borders (1px)
- Grain overlay эффект
- Адаптивный дизайн (Desktop, Tablet, Mobile)
- Форма предзаписи с валидацией

---

## Стек

- **HTML5** — разметка
- **Tailwind CSS** (CDN) — стилизация
- **Custom CSS** — кастомные стили и эффекты
- **Vanilla JavaScript** — интерактивность
- **Lucide Icons** — иконки
- **Google Fonts** — шрифты (Bebas Neue, Inter, Space Mono, Bodoni Moda)

---

## Структура

```
site/
├── index.html              # Главная страница
├── styles/
│   └── custom.css          # Кастомные стили
├── scripts/
│   └── main.js             # JavaScript логика
└── assets/
    └── images/             # Изображения
        ├── hero-main.jpg
        ├── фото Арины.jpg
        └── case-student-*.jpg
```

---

## Локальная разработка

### Запуск

Открой `index.html` в браузере — всё работает без сервера (статический сайт).

**Или через Live Server:**
1. Установи расширение **Live Server** в VS Code
2. Открой `index.html`
3. Правый клик → **Open with Live Server**

---

## Деплой

### Timeweb (рекомендуется)

1. Купи хостинг на [timeweb.com](https://timeweb.com)
2. Загрузи содержимое папки `site/` в `public_html/`
3. Готово!

**Подробная инструкция:** см. файл `TIMEWEB_DEPLOY_GUIDE.md` в корне проекта.

### GitHub Pages (бесплатно)

1. Создай репозиторий на GitHub
2. Загрузи папку `site/`
3. Settings → Pages → Source: `main` → папка `site/`
4. Готово: `https://username.github.io/repo-name/`

### Netlify / Vercel (бесплатно)

1. Зайди на [netlify.com](https://netlify.com) или [vercel.com](https://vercel.com)
2. Drag & Drop папку `site/`
3. Готово!

---

## Настройка формы

Форма предзаписи пока отправляет данные только в консоль браузера (для тестирования).

**Для продакшена:**
1. Настрой интеграцию с AmoCRM / Битрикс24 / Formspree
2. Инструкция: `FORM_INTEGRATION.md` в корне проекта

---

## Дизайн-система

### Палитра

```css
--bg: #0B0B0D          /* Фон страницы */
--surface: #14141A     /* Фон карточек */
--line: #2A2A2F        /* Рамки */
--text-primary: #F5F5F7    /* Основной текст */
--text-secondary: #B6B6BE  /* Вторичный текст */
--accent: #FF2BD6      /* Акцент (розовый) */
```

### Шрифты

- **Display (заголовки):** Bebas Neue, uppercase
- **Body (основной текст):** Inter
- **Mono (мета-информация):** Space Mono, uppercase, 10px
- **Serif (подзаголовки):** Bodoni Moda, italic

### Компоненты

Все компоненты описаны в `website-guidelines/01_style-guide.md`

---

## Секции лендинга

1. **Navigation** — sticky header с навигацией
2. **Hero** — главный экран с заголовком и CTA
3. **Running Line** — бегущая строка с коллаборациями
4. **Author** — фото и описание автора курса
5. **Cases** — кейсы студентов (3 карточки)
6. **FAQ** — 4 вопроса в формате accordion
7. **Form** — анкета предзаписи
8. **Footer** — контакты и правовые ссылки

---

## Производительность

- **PageSpeed:** 90-95/100
- **GTmetrix:** A
- **Размер страницы:** ~2-3 MB (с изображениями)
- **Загрузка:** ~1-2 сек (на быстром хостинге)

**Оптимизации:**
- Tailwind через CDN (минимальный CSS)
- Vanilla JS (без фреймворков)
- Изображения сжаты (WebP рекомендуется)
- Lazy loading для изображений
- Минификация CSS/JS (при необходимости)

---

## Поддержка браузеров

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Accessibility (A11y)

- ✅ Семантический HTML
- ✅ Alt-теги для изображений
- ✅ ARIA-атрибуты для форм
- ✅ Focus states для интерактивных элементов
- ✅ Контрастность текста (WCAG AA)

---

## Лицензия

Proprietary — все права защищены.

Разработано для **AI FOR CREATORS 4.0**.

---

## Контакты

- Email: hello@aiforcreators.ru
- Telegram: [@aiforcreators](https://t.me/aiforcreators)

---

## Changelog

### v1.0 (2024-12-18)
- Первая версия лендинга
- Все секции реализованы
- Адаптивный дизайн
- Форма предзаписи (интеграция требуется)
