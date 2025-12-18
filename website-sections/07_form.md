# Form — Форма предзаписи

Секция с формой для сбора контактов.

---

## Структура

```
                [🔴] Limited Seats

                АНКЕТА ПРЕДЗАПИСИ

    Заполните анкету. Мы свяжемся с вами в Telegram...

    ┌───────────────────────────────────────┐
    │ Имя                                   │
    │ [Arina_____________________________]  │
    ├───────────────────────────────────────┤
    │ Телефон                               │
    │ [+7 (999) 000-00-00________________]  │
    ├───────────────────────────────────────┤
    │ Telegram                              │
    │ [@username_________________________]  │
    ├───────────────────────────────────────┤
    │ ☐ Нажимая кнопку, вы соглашаетесь...  │
    ├───────────────────────────────────────┤
    │       [ОТПРАВИТЬ ЗАЯВКУ]              │
    └───────────────────────────────────────┘
```

После submit:
```
    ✓ Заявка отправлена!
    Мы свяжемся с вами в ближайшее время в Telegram.
```

---

## Элементы

### Бейдж (Limited Seats)
- Красная точка: `bg-accent animate-pulse`
- Текст: "Limited Seats"
- Шрифт: Mono, `text-[10px]`, uppercase, accent
- Стиль: border accent/30, rounded-full, `px-3 py-1`

### Заголовок
- Текст: `Анкета предзаписи`
- Шрифт: Display, `text-5xl` → `text-6xl`, uppercase

### Подзаголовок
- Текст: "Заполните анкету. Мы свяжемся с вами в Telegram, чтобы подтвердить место и обсудить цели."
- Шрифт: Sans, `text-base`, secondary, `font-light`

### Поля формы

#### Имя
- Label: "Имя" (mono, `text-xs`, uppercase, secondary)
- Input: `type="text"`, required
- Placeholder: "Arina"
- ID: `name`

#### Телефон
- Label: "Телефон"
- Input: `type="tel"`, required
- Placeholder: "+7 (999) 000-00-00"
- ID: `phone`

#### Telegram
- Label: "Telegram"
- Input: `type="text"`, required
- Placeholder: "username"
- Prefix: `@` (абсолютная позиция, `left-4 top-4`)
- ID: `telegram`

#### Чекбокс политики
- Input: `type="checkbox"`, required
- Label: "Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных"
- ID: `privacy`

### Кнопка Submit
- Текст: "Отправить заявку"
- Стиль: Primary (bg белый, текст чёрный)
- Hover: bg accent, текст белый
- Full width: `w-full`

### Success Message
- Иконка: `check-circle` (Lucide), accent
- Текст: "Заявка отправлена!" (белый, `font-medium`)
- Подтекст: "Мы свяжемся с вами в ближайшее время в Telegram." (secondary, `text-sm`)
- Стиль: border accent, `bg-accent/10`
- По умолчанию скрыт: `hidden`

---

## Стили

### Input Field
- **Фон**: transparent
- **Border**: `1px solid #27272a` (zinc-800)
- **Padding**: `p-4`
- **Focus**: border → accent, ring accent

### Form
- **Max-width**: `600px`
- **Padding**: `py-24`
- **Разделитель**: `border-t border-line`

### Background Decoration
- Градиент справа: `bg-gradient-to-l from-accent/5` (декоративный, не отвлекает)

---

## Поведение (JS)

### Валидация
- Все поля обязательны (HTML5 required)
- Чекбокс обязателен
- При пустых полях → alert

### Submit
1. PreventDefault
2. Собрать данные (FormData)
3. Валидация
4. (Опционально) Отправка на сервер через fetch
5. Скрыть форму (`form.style.display = 'none'`)
6. Показать success message (`successMessage.classList.remove('hidden')`)
7. Пере-инициализировать иконки Lucide

---

## Accessibility

- Все поля: `aria-required="true"`
- Labels связаны с inputs через `for` и `id`
- Focus ring на accent

---

## Цель секции

**Главная цель всего лендинга** — собрать контакты для предзаписи.

Форма должна быть:
1. Простой (3 поля + чекбокс)
2. Понятной (лейблы и placeholder'ы)
3. Доверительной (политика конфиденциальности)
