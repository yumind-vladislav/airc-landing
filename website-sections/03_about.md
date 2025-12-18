# About — Бегущая строка

Секция с бегущей строкой коллабораций (marquee).

---

## Структура

```
[TSUM • Suzanna • Nikita Kamenskiy • SYMBOL • Wellew • El Copitas Bar ...]
```

---

## Элементы

### Marquee (бегущая строка)
- Шрифт: Display, `text-4xl`, uppercase
- Цвет: `--text-secondary`, `opacity-50`
- Анимация: `animate-marquee` (20s linear infinite)
- Список повторяется 2 раза для бесшовного цикла

### Контент
- Список коллабораций: `TSUM`, `Suzanna`, `Nikita Kamenskiy`, `SYMBOL`, `Wellew`, `El Copitas Bar`
- Разделитель: пробел (`mx-8`)

---

## Стили

- **Разделители**: `border-y border-line`
- **Padding**: `py-4`
- **Overflow**: `overflow-hidden` (обрезает выходящий текст)
- **Фон**: `bg-bg`

---

## Цель секции

Показать социальное доказательство (с кем работал автор) и создать визуальный ритм между секциями.

---

## Примечание

Это также якорь для навигации `#about` ("О курсе"). Можно добавить текстовый блок сюда, если нужно расширить информацию о курсе.
