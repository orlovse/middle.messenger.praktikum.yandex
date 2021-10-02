import { getIsDark } from './localeStorage';

const app = document.querySelector('#app');

const isLocalStorageDark = getIsDark();

export const setTheme = (isSwitch?: boolean) => {
  const isDark = app?.classList.contains('theme-dark');

  const isSetDark = (!isSwitch && isLocalStorageDark) || (isSwitch && !isDark);

  if (isSetDark) {
    app?.classList.add('theme-dark');
    app?.classList.remove('theme-light');
  } else {
    app?.classList.remove('theme-dark');
    app?.classList.add('theme-light');
  }
};
