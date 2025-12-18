# Footer — Футер

Нижняя часть страницы с контактами и правовой информацией.

---

## Структура

```
AI4C.                               Политика конфиденциальности  Оферта

Telegram Channel                    Made by AI4C Team © 2024
hello@aiforcreators.ru
```

---

## Элементы

### Логотип
- Текст: `AI4C.`
- Шрифт: Display, `text-4xl`, белый
- Ссылка: `href="#"` (скролл наверх)

### Контакты
- Telegram Channel (ссылка)
- Email: `hello@aiforcreators.ru` (mailto:)
- Шрифт: Mono, `text-xs`, uppercase, secondary
- Hover: белый

### Правовые ссылки
- Политика конфиденциальности
- Оферта
- Шрифт: Mono, `text-[10px]`, uppercase, zinc-600
- Hover: zinc-400

### Копирайт
- Текст: "Made by AI4C Team © 2024"
- Шрифт: Mono, `text-[10px]`, uppercase, zinc-700

---

## Стили

- **Фон**: `bg-black` (true black)
- **Цвет**: `--text-secondary`
- **Разделитель**: `border-t border-line`
- **Padding**: `py-12`

---

## Грид

- Desktop: 2 колонки (flex-row, justify-between)
  - Слева: логотип + контакты
  - Справа: правовые ссылки + копирайт (items-end)
- Mobile: стек (flex-col, gap-8)

---

## Цель секции

1. Дать контакты для связи
2. Добавить доверия (правовые документы)
3. Закрыть страницу (копирайт)
