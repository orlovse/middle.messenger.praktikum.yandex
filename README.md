### Описание

PR Sprint 1: https://github.com/orlovse/middle.messenger.praktikum.yandex/pull/1

PR Sprint 2: https://github.com/orlovse/middle.messenger.praktikum.yandex/pull/2

PR Sprint 3: https://github.com/orlovse/middle.messenger.praktikum.yandex/pull/3

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

### Функционал

Реализовано переключение темы на светлую/тёмную.

Роутинг по средствам History API.

Основная часть core покрыта тестами.

Над классом Block реализована функция-обёртка createBlock, которая принимает набор параметров и возвращает экземпляр класса.

Функция createBlock принимает следущие параметры:

- template - единственный обязательный параметр - стринг с HTML разметкой, который будет парситься Handlebars
- components - объект, состоящий из дочерних компонентов
- componentDidMount - функция, вызывающаяся после рендера компонента, принимает в параметрах setProps и props
- events - объект, состоящий из ивентов
- props - пропсы компонента
- data - данные компонента

HTML парсится в Handlebars.

События, которые можно навесть на компонент или его детей:

- onClick
- onBlur
- onInput
- onKeyup

Для монтирования дочернего компонента, необходимо прописать в темплейте строку вида:

```bash
<div data-component="componentName"></div>
```

Переменная components, передаваемая параметром в createBlock должна быть такой:

```bash
const components = {
  componentName: TestComponent();
}
```

Ререндер компонента происходит за счёт вызова метода setProps класса Block.
