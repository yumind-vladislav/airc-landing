# Style Guide — AI FOR CREATORS 4.0

Дизайн-система для лендинга. Все токены и правила использования.

---

## Цветовая палитра

### Основные цвета

| Токен | HEX | Использование |
|-------|-----|---------------|
| `--bg` | `#0B0B0D` | Фон страницы (основной) |
| `--black` | `#000000` | True black для плашек и секций |
| `--surface` | `#14141A` | Фон карточек и поверхностей |
| `--line` | `#2A2A2F` | Рамки, разделители (hairline) |
| `--text-primary` | `#F5F5F7` | Основной текст (белый) |
| `--text-secondary` | `#B6B6BE` | Вторичный текст (серый) |
| `--accent` | `#FF2BD6` | Акцент (розовый) — CTA, ссылки, фокус |
| `--accent-hover` | `#FF8FE7` | Hover/glow для акцентных элементов |

### Правила использования

- **Фон**: только `--bg` или `--black` для секций. Никаких градиентов.
- **Текст**: `--text-primary` для заголовков, `--text-secondary` для описаний и meta.
- **Акцент**: розовый только для CTA, ссылок, фокуса и ключевых маркеров. Один акцент на экран.
- **Рамки**: все рамки 1px solid `--line` (hairline). Никаких толстых бордеров.

---

## Типографика

### Шрифтовые роли

| Роль | Шрифт | Использование |
|------|-------|---------------|
| **Display** | `Bebas Neue` | Крупные заголовки, логотип, навигация по секциям |
| **Text** | `Inter` | Основной текст, абзацы, кнопки |
| **Mono** | `Space Mono` | Meta-информация, лейблы, технические надписи |
| **Serif** | `Bodoni Moda` | Акцентные фразы, цитаты (italic) |

### Размеры и стили

| Элемент | Размер (desktop) | Размер (mobile) | Стиль |
|---------|------------------|-----------------|-------|
| H1 (Hero) | `9rem` (144px) | `7xl` (~4.5rem) | Display, uppercase, `leading-[0.85]` |
| H2 (Section) | `5xl - 6xl` | `4xl - 5xl` | Display, uppercase |
| Body Large | `2xl - 3xl` | `xl - 2xl` | Serif italic (подзаголовки) |
| Body | `base - lg` | `sm - base` | Sans, regular |
| Meta | `10px - 12px` | `10px` | Mono, uppercase, `tracking-widest` |

### Правила

- **Caps**: используй uppercase только для display и mono. Избегай caps в основном тексте.
- **Tracking**: display — tight (`-0.02em`), mono — wide (`0.1em`).
- **Line height**: заголовки — tight (`0.85 - 1`), текст — relaxed (`1.5 - 1.75`).

---

## Сетка и отступы

### Контейнер

- **Max-width**: `1400px`
- **Padding**: `px-5` (mobile), `px-16` (desktop)

### Вертикальные отступы

- **Секции**: `py-24` (desktop), `py-12` (mobile)
- **Элементы**: кратно 4px (Tailwind: `gap-4`, `mb-6`, `pt-8`)

### Грид

- **Колонки**: 12-колоночная сетка (Tailwind: `grid-cols-12`)
- **Зазоры**: `gap-8` (mobile), `gap-12` (desktop)

---

## Компоненты

### Кнопки

#### Primary CTA
```css
.btn-primary {
  background: var(--accent);
  color: #fff;
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #fff;
  color: #000;
}
```

#### Ghost (Outline)
```css
.btn-ghost {
  border: 1px solid var(--line);
  border-radius: 9999px; /* fully rounded */
  padding: 0.5rem 1.25rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: 0 0 15px rgba(255, 43, 214, 0.3);
}
```

### Поля ввода (Input)

```css
.input-field {
  background: transparent;
  border: 1px solid #27272a;
  color: var(--text-primary);
  padding: 1rem;
}

.input-field:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}
```

### Карточки (Cards)

```css
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 1.5rem;
  transition: border-color 0.3s;
}

.card:hover {
  border-color: var(--accent);
}
```

### Divider (Разделитель)

```css
.divider {
  width: 100%;
  height: 1px;
  background: var(--line);
  margin: 3rem 0;
}
```

### Accordion (FAQ)

```html
<details class="group border border-line bg-bg open:border-accent">
  <summary class="flex justify-between items-center p-6 cursor-pointer">
    <span>Вопрос</span>
    <i data-lucide="plus" class="group-open:rotate-45 transition-transform"></i>
  </summary>
  <div class="px-6 pb-6 pt-2">
    <p class="text-secondary">Ответ</p>
  </div>
</details>
```

---

## Состояния

### Hover

- **Ссылки**: `color: var(--text-secondary)` → `color: var(--text-primary)` или `var(--accent)`
- **Кнопки**: см. выше (primary, ghost)
- **Изображения**: `grayscale(100%)` → `grayscale(0%)`

### Focus

- **Focus ring**: `outline: 2px solid var(--accent); outline-offset: 2px;`
- Применяется к: `a`, `button`, `input`, `textarea`, `details`

### Error

- **Цвет**: `#FF3B57` (красный, только для ошибок валидации)
- **Стиль**: `border-color: #FF3B57; color: #FF3B57;`

### Success

- **Цвет**: акцент (`var(--accent)`)
- **Фон**: `background: rgba(255, 43, 214, 0.1);`

---

## Спецэффекты

### Grain (Зерно)

- Деликатный grain через `::before` псевдоэлемент (уже есть в `.grain-overlay`)
- `opacity: 0.07` — не делай сильнее

### Grayscale

- Все изображения по умолчанию: `grayscale(100%)`
- Hover: `grayscale(0%)`
- Transition: `0.4s ease`

### Blur

- Только для фонов модалок и sticky элементов: `backdrop-blur-md`

---

## Анимации

### Marquee (бегущая строка)

```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
```

### Плавные переходы

- **По умолчанию**: `transition: all 0.3s ease;`
- **Цвета**: `0.3s`
- **Transform**: `0.3s - 0.5s`
- **Opacity**: `0.4s`

---

## Что НЕ делать

- ❌ Не добавляй новые цвета (только палитра выше)
- ❌ Не используй SaaS-градиенты (синий→фиолетовый, радуги)
- ❌ Не делай толстые рамки (только 1px hairline)
- ❌ Не используй тени на карточках (только на hover у кнопок)
- ❌ Не меняй grain на более сильный
- ❌ Не добавляй анимации, которые отвлекают от контента

---

**Это гайд, а не предложение. Следуй ему.**
