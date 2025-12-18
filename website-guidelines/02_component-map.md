# Component Map — Карта компонентов

Где искать и как править каждую секцию лендинга.

---

## Секции страницы

### 1. Navigation (`#nav`)

**Файл**: `site/index.html` (строки ~60-80)

**ID/Классы**:
- `#nav` — контейнер навигации
- `.font-display` — логотип AI4C
- Ссылки: `href="#about"`, `#author`, `#cases`, `#faq`
- CTA: `href="#presale"` (кнопка "Анкета предзаписи")

**Стили**: `custom.css` → sticky nav, hairline-b, hover states

**Что править**:
- Текст логотипа: `AI4C<span class="text-accent">.</span>`
- Якоря навигации: добавь/убери ссылки в `<div class="hidden md:flex">`
- CTA текст: "Анкета предзаписи"

---

### 2. Hero (`#hero`)

**Файл**: `site/index.html` (строки ~82-170)

**ID/Классы**:
- `#hero` — контейнер секции
- `.font-display` — заголовок AI For Creators
- `.font-serif` — подзаголовок (italic)

**Стили**: `custom.css` → типографика, gradient text

**Что править**:
- Главный заголовок: `AI For Creators`
- Подзаголовок: "Авторский курс для контент-креаторов нового поколения"
- Два блока "Для новичков" / "Для профи"
- Главное изображение: `src="https://..."`
- Meta-информация сверху: "Issue 4.0", "Moscow / Online"

---

### 3. About / Running Line (`#about`)

**Файл**: `site/index.html` (строки ~172-190)

**ID/Классы**:
- `#about` — контейнер
- `.animate-marquee` — бегущая строка

**Стили**: `custom.css` → `@keyframes marquee`

**Что править**:
- Список коллабораций: `TSUM`, `Suzanna`, `Nikita Kamenskiy`, и т.д.
- Повтори список 2 раза для бесшовного цикла

---

### 4. Author (`#author`)

**Файл**: `site/index.html` (строки ~192-235)

**ID/Классы**:
- `#author` — контейнер секции
- Фото: `src="assets/images/фото Арины.jpg"`
- Цитата: `"AI is the new punk rock."`

**Стили**: `custom.css` → image grayscale, абсолютная позиция цитаты

**Что править**:
- Имя: `Zaychikova Arina`
- Роль: `Content Producer / Visual Art Director`
- Focus: `AI Creator / Co-founder LORA VAIMP`
- Коллаборации: `ЦУМ, Сюзанна, Nikita Kamenskiy...`
- Цитата
- Фото (замени на другой файл в `assets/images/`)

---

### 5. Cases (`#cases`)

**Файл**: `site/index.html` (строки ~237-345)

**ID/Классы**:
- `#cases` — контейнер секции
- `<article class="group">` — карточка кейса
- `.group-hover:text-accent` — hover эффект

**Стили**: `custom.css` → card hover, grayscale images

**Что править**:
- Заголовок: `Results from students`
- Каждая карточка:
  - Meta: `SMM / Beginner` → `Case 01`
  - Изображение: `src="..."`
  - Заголовок кейса: `Первый AI-контент`
  - Список достижений (2-3 пункта)
  - Результат: `Упакован профиль` (розовый)

**Добавить кейс**:
1. Скопируй блок `<article class="group">...</article>`
2. Вставь в грид
3. Обнови текст и изображение

---

### 6. FAQ (`#faq`)

**Файл**: `site/index.html` (строки ~347-410)

**ID/Классы**:
- `#faq` — контейнер секции
- `<details class="group">` — аккордеон
- `.group-open:rotate-45` — анимация иконки +

**Стили**: `custom.css` → details/summary, border-accent on open

**Что править**:
- Вопрос: `<span class="font-sans font-medium">...</span>` внутри `<summary>`
- Ответ: `<p class="text-secondary">...</p>` внутри `<div>`

**Добавить вопрос**:
1. Скопируй блок `<details>...</details>`
2. Вставь в `.space-y-4`
3. Обнови вопрос и ответ

---

### 7. Form (`#presale`)

**Файл**: `site/index.html` (строки ~412-470)

**ID/Классы**:
- `#presale` — контейнер секции
- `#presaleForm` — форма
- `#successMessage` — сообщение после отправки (скрыто по умолчанию)
- Поля: `#name`, `#phone`, `#telegram`
- Чекбокс: `#privacy`

**Стили**: `custom.css` → `.input-field`, focus states

**Скрипты**: `main.js` → `initPresaleForm()`

**Что править**:
- Заголовок: `Анкета предзаписи`
- Подзаголовок: "Заполните анкету..."
- Лейблы полей: `Имя`, `Телефон`, `Telegram`
- Placeholder'ы: `Arina`, `+7 (999) 000-00-00`, `username`
- Текст кнопки: `Отправить заявку`
- Политика: "Нажимая кнопку, вы соглашаетесь..."
- Success message: текст после отправки

**Обработка формы**:
- Логика в `main.js` → `initPresaleForm()`
- Подключи API/backend для отправки данных

---

### 8. Footer (`#footer`)

**Файл**: `site/index.html` (строки ~472-490)

**ID/Классы**:
- `#footer` — контейнер
- `.font-display` — логотип
- `.font-mono` — ссылки

**Стили**: `custom.css` → bg-black, hairline-t

**Что править**:
- Логотип: `AI4C.`
- Ссылки: `Telegram Channel`, `hello@aiforcreators.ru`
- Правовые ссылки: `Политика конфиденциальности`, `Оферта`
- Копирайт: `Made by AI4C Team © 2024`

---

## Глобальные элементы

### Grain Overlay

**Файл**: `site/index.html` (строка ~58)

```html
<div class="grain-overlay"></div>
```

**Стили**: `custom.css` → `.grain-overlay`

**Не трогай**. Это фоновый эффект зерна на всю страницу.

---

### Sticky Mobile CTA

**Файл**: `site/index.html` (строки ~60-68)

```html
<div class="fixed bottom-6 left-4 right-4 z-40 md:hidden">
  <a href="#presale">Анкета предзаписи</a>
</div>
```

**Видна только на мобильных**.

**Что править**:
- Текст кнопки: `Анкета предзаписи`
- Якорь: `href="#presale"`

---

## Быстрая навигация

| Что нужно | Файл | Строка (примерно) |
|-----------|------|-------------------|
| Навигация | `site/index.html` | 60-80 |
| Hero заголовок | `site/index.html` | 100-120 |
| Фото автора | `site/index.html` | 210 |
| Кейсы (карточки) | `site/index.html` | 240-345 |
| FAQ вопросы | `site/index.html` | 350-410 |
| Форма поля | `site/index.html` | 420-450 |
| Цвета (CSS vars) | `site/styles/custom.css` | 8-20 |
| Обработка формы | `site/scripts/main.js` | 50-85 |

---

**Используй глобальный поиск (Cmd+F) по ID или классу, чтобы найти нужный элемент.**
