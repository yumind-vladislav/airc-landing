# Navigation — Навигация

Sticky nav bar в верхней части страницы.

---

## Структура

```
[Логотип AI4C.]  [О курсе | Автор | Кейсы | FAQ]  [Анкета предзаписи →]
```

---

## Элементы

### Логотип
- Текст: `AI4C.` (точка акцентная)
- Шрифт: Display (Bebas Neue)
- Цвет: белый, hover — акцент
- Ссылка: `href="#"` (скролл наверх)

### Навигация (desktop)
- Ссылки: `#about`, `#author`, `#cases`, `#faq`
- Шрифт: Mono, uppercase, `text-xs`
- Цвет: `--text-secondary`, hover — `--text-primary`
- Скрыта на mobile (`hidden md:flex`)

### CTA кнопка
- Текст: "Анкета предзаписи"
- Стиль: ghost (outline с rounded-full)
- Hover: border и текст → accent, тень розовая
- Скрыта на mobile

---

## Стили

- **Sticky**: `fixed top-0 w-full z-30`
- **Фон**: `bg-[#0B0B0D]/80 backdrop-blur-md`
- **Разделитель**: `hairline-b` (1px solid `--line`)
- **Высота**: `h-16`

---

## Mobile версия

- Логотип остаётся
- Навигация скрыта
- CTA кнопка скрыта (заменена на sticky mobile CTA внизу)

---

## Поведение

- Sticky (прилипает к верху при скролле)
- Плавный переход к секциям при клике на якоря
- Активная ссылка подсвечивается (опционально, через JS)
