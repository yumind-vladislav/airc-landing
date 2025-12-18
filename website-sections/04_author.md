# Author — Автор курса

Блок про автора: фото, имя, роль, коллаборации.

---

## Структура

```
[Фото Арины]                    [Иконка] Creator & Mentor
[Цитата: "AI is the new
 punk rock."]                   ZAYCHIKOVA
                                ARINA.

                                Role
                                Content Producer / Visual Art Director

                                Focus
                                AI Creator / Co-founder LORA VAIMP

                                Collabs
                                ЦУМ, Сюзанна, Nikita Kamenskiy...
```

---

## Элементы

### Фото
- Путь: `assets/images/фото Арины.jpg`
- Aspect ratio: `4/5`
- Эффект: grayscale
- Border: `--line`, `p-2`

### Цитата
- Текст: `"AI is the new punk rock."`
- Шрифт: Serif italic, `text-sm`
- Цвет: `--text-secondary`
- Позиция: абсолютная, `-bottom-6 -right-6` (desktop: `-right-12`)
- Фон: `--surface`, border `--line`, padding `p-4 - p-6`

### Лейбл
- Иконка: `sparkle` (Lucide), accent
- Текст: "Creator & Mentor"
- Шрифт: Mono, `text-xs`, uppercase, accent

### Имя
- Текст: `Zaychikova Arina.`
- Шрифт: Display, `text-5xl` → `text-7xl`, uppercase
- Точка: `--text-secondary`

### Информация (левая граница)
- **Role**: "Content Producer / Visual Art Director"
- **Focus**: "AI Creator / Co-founder LORA VAIMP"
- **Collabs**: "ЦУМ, Сюзанна, Nikita Kamenskiy, SYMBOL, Wellew, El Copitas Bar"
- Border-left: `--line`, `pl-6 - pl-10`
- Лейблы: Mono, `text-xs`, uppercase, secondary
- Значения: Sans, `text-xl` (Role/Focus), `text-sm` (Collabs)

---

## Грид

- Desktop: 2 колонки
  - Фото: слева
  - Текст: справа
- Mobile: стек (фото сверху, текст снизу)

---

## Стили

- **Padding**: `py-24`
- **Разделитель**: `border-b border-line`

---

## Цель секции

Показать экспертность автора через:
1. Визуал (фото, цитата)
2. Роль и фокус (что делает)
3. Коллаборации (с кем работает)
