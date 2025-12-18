# Cases — Кейсы учеников

Грид с результатами студентов предыдущих потоков.

---

## Структура

```
RESULTS from students                   Real cases / Real metrics
                                        Batch 3.0 Archive

┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│ SMM/Beginner  │  │ Designer/Pro  │  │ Creator/Free  │
│ Case 01       │  │ Case 02       │  │ Case 03       │
│               │  │               │  │               │
│ [Изображение] │  │ [Изображение] │  │ [Изображение] │
│               │  │               │  │               │
│ Первый AI-    │  │ Смена стиля   │  │ Вирусный      │
│ контент       │  │ бренда        │  │ Reels         │
│               │  │               │  │               │
│ • Освоили MJ  │  │ • Lookbook    │  │ • Анимация AI │
│ • Мудборд     │  │ • 300к+ эконом│  │ • Генерация   │
│               │  │               │  │               │
│ Результат:    │  │ Результат:    │  │ Результат:    │
│ Упакован      │  │ Sold out      │  │ +15k подписч. │
└───────────────┘  └───────────────┘  └───────────────┘
```

---

## Элементы

### Заголовок
- Текст: `Results from students`
- Шрифт: Display, `text-5xl` → `text-6xl`, uppercase
- "from students" — serif italic, accent, lowercase, `text-4xl - 5xl`

### Meta (справа сверху)
- Текст: "Real cases / Real metrics" + "Batch 3.0 Archive"
- Шрифт: Mono, `text-xs`, uppercase, secondary, `text-right`

### Карточка кейса (повторяется 3 раза)

#### Meta верх
- Слева: `SMM / Beginner`
- Справа: `Case 01`
- Шрифт: Mono, `text-[10px]`, uppercase, secondary
- Разделитель: `border-b border-line`

#### Изображение
- Aspect ratio: `4/5`
- Border: `--line`
- Эффект: grayscale, hover → цвет
- Бейдж: `7 Days` (accent bg, белый текст, `text-[10px]`, mono)

#### Заголовок кейса
- Шрифт: Display, `text-2xl`, uppercase
- Hover: `text-accent`

#### Список достижений
- 2-3 пункта (буллеты)
- Шрифт: Sans, `text-sm`, secondary, `font-light`

#### Результат
- Формат: `Результат: <метрика>`
- Метрика: accent (`text-accent`)
- Шрифт: Mono, `text-xs`
- Разделитель сверху: `border-t border-line`

---

## Грид

- Desktop: 3 колонки (`lg:grid-cols-3`)
- Tablet: 2 колонки (`md:grid-cols-2`)
- Mobile: 1 колонка
- Зазор: `gap-y-16 gap-x-8`

---

## Стили

- **Padding**: `py-24`
- **Hover**: карточка группа (`group`), заголовок меняет цвет на hover

---

## Цель секции

Показать реальные результаты учеников:
1. Разнообразие (новички и профи)
2. Конкретные метрики (+15k, sold out, 300к экономии)
3. Визуальное доказательство (скриншоты/фото работ)
