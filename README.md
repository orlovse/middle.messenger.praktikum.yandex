### Описание

PR Sprint 1: https://github.com/orlovse/middle.messenger.praktikum.yandex/pull/1

PR Sprint 2: https://github.com/orlovse/middle.messenger.praktikum.yandex/pull/2

Деплой проекта на netlify https://admiring-payne-a8eb48.netlify.app/

Сейчас в проекте используются:

- HTML
- Handlebars
- TypeScript
- Sass
- Express
- ESLint, Stylelint, Prettier
- Mocha

### Сборка и запуск

Проект собирается в [Parcel](https://parceljs.org/):

```bash
npm run build
```

Сборка и запуск статического сервера на Express:

```bash
npm run start
```

Сборка проекта в Parcel:

```bash
npm run dev
```

Автоматическое форматирование:

```bash
npm run prettier
```

Запуск тестов

```bash
npm run test
```

Реализовано переключение темы на светлую/тёмную.

Роутинг по средствам History API.

Над классом Block реализована функция-обёртка createBlock, которая принимает набор параметров и возвращает экземпляр класса.

Функция createBlock принимает следущие параметры:

- trmplate - единственный обязательный параметр
- components - обьект, состоящий из дочерних компонентов
- componentDidMount - функция, вызывающаяся после рендера компонента, принимает в параметрах setProps и props
- events - объект, состоящий из ивентов
- props - пропсы компонента
- data - данные компонента

HTML парсится в Handlebars.

Ререндер компонента происходит за счёт вызова метода setProps класса Block.
