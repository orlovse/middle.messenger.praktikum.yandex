### Описание

PR Sprint 1: https://github.com/orlovse/middle.messenger.praktikum.yandex/pull/1

PR Sprint 2: https://github.com/orlovse/middle.messenger.praktikum.yandex/pull/2

Project https://admiring-payne-a8eb48.netlify.app/

Сейчас в проекте используются:

- HTML;
- Handlebars;
- TypeScript;
- Sass;
- Express;
- ESLint, Stylelint, Prettier;
- Mocha;

### Сборка и запуск

Сборка проекта. Используемый сборщик [Parcel](https://parceljs.org/):

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

Реализовано переключение темы на светлую/тёмную

Роутинг по средствам History API

Над классом Block реализована функция-обёртка createBlock, которая принимает набор параметров и возвращает экземпляр класса.

HTML парсится в Handlebars
