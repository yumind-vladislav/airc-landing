# AI FOR CREATORS 4.0 — Структура проекта

## Обзор
Премиальный лендинг для предзаписи на курс AI FOR CREATORS 4.0. Стиль: editorial / zine / fashion-brutalism с элементами глянца.

## Структура файлов

```
AI4C/
├── site/                          # Рабочая версия сайта
│   ├── index.html                 # Основной HTML (редактируемая версия)
│   ├── styles/custom.css          # Кастомные стили
│   ├── scripts/main.js            # Кастомные скрипты
│   └── assets/                    # Медиа-файлы
│       ├── images/                # Изображения
│       └── fonts/                 # Шрифты (если нужны локальные)
│
├── source/                        # Исходные файлы (архив)
│   └── generated-page.html        # Оригинальная версия (не трогать)
│
├── website-guidelines/            # Документация по дизайну
│   ├── README.md                  # Этот файл
│   ├── 01_style-guide.md          # Палитра, типографика, компоненты
│   ├── 02_component-map.md        # Карта: где править каждую секцию
│   ├── 03_copy-guide.md           # Правила текста и тональности
│   └── 06_validation-checklist.md # QA-чеклист перед деплоем
│
├── website-sections/              # Описание секций (референс)
│   ├── 00_overview.md
│   ├── 01_nav.md
│   ├── 02_hero.md
│   ├── 03_about.md
│   ├── 04_author.md
│   ├── 05_cases.md
│   ├── 06_faq.md
│   ├── 07_form.md
│   └── 08_footer.md
│
├── .cursor/rules/                 # Правила для Cursor AI
│   ├── project-context.mdc
│   ├── no-regressions.mdc
│   └── html-css-js-conventions.mdc
│
└── .claude/                       # Инструкции для Claude Code
    └── CLAUDE.md
```

## Как редактировать

### Изменить текст
1. Открой `site/index.html`
2. Найди секцию по ID (`#hero`, `#author`, `#cases`, `#faq`, `#presale`)
3. Меняй текст внутри тегов (не трогай классы!)
4. Сохрани и обнови браузер

### Изменить стиль
1. Проверь токены в `website-guidelines/01_style-guide.md`
2. Открой `site/styles/custom.css`
3. Меняй CSS variables в `:root` или добавляй новые стили
4. Не меняй палитру без согласования

### Изменить поведение
1. Открой `site/scripts/main.js`
2. Редактируй функции (smooth scroll, форма, навигация)
3. Не подключай внешние библиотеки без необходимости

### Добавить изображение
1. Помести файл в `site/assets/images/`
2. Обнови путь в HTML: `src="assets/images/filename.jpg"`

## Куда идти за правкой

| Что править | Где искать |
|-------------|-----------|
| Текст hero | `site/index.html` → секция `#hero` |
| Цвета | `website-guidelines/01_style-guide.md` + `custom.css` → `:root` |
| Кнопки и ссылки | `custom.css` → `.btn-primary`, `.btn-ghost` |
| Форма | `site/index.html` → секция `#presale` + `main.js` → `initPresaleForm()` |
| FAQ | `site/index.html` → секция `#faq` (элементы `<details>`) |

## Не делай

- ❌ Не меняй `source/generated-page.html` (это архивная версия)
- ❌ Не добавляй цвета вне палитры (см. `01_style-guide.md`)
- ❌ Не переводи на английский (весь контент на русском)
- ❌ Не создавай новые секции без необходимости
- ❌ Не используй SaaS-градиенты и "уникальные возможности" (см. `03_copy-guide.md`)

## Быстрая проверка перед деплоем

Открой `website-guidelines/06_validation-checklist.md` и пройдись по пунктам.
