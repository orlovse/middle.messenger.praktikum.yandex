import { SetPropsType } from './../../types/index';
import { Switch } from '..';
import { router } from '../..';
import { logoutAPI } from '../../api/auth';
import { authController } from '../../controllers/authController';
import { createBlock } from '../../core/createBlock';
import { userStore } from '../../core/store';
import { getIsDark } from '../../utils/localeStorage';
import { setTheme } from '../../utils/theme';

import './menu.scss';

const template = `
<nav class="menu">
  {{#each menuTemplateList}}
    <a href={{link}} class="menu-link {{ class }}">{{ name }}</a>
  {{/each}}
  <div data-component="switchComponent"></div>
</nav>
`;

const menuTemplateList = (isAuth: boolean) =>
  [
    { name: 'Login', link: '/login', isShow: !isAuth },
    {
      name: 'Chats list',
      link: '/show-chats',
      isShow: isAuth,
      class: 'show-on-mobbile'
    },
    { name: 'Profile', link: '/profile', isShow: isAuth },
    { name: 'Chat', link: '/chat', isShow: isAuth, class: 'hide-on-mobile' },
    { name: 'Error', link: '/404', isShow: true, class: 'hide-on-mobile' },
    { name: 'Logout', link: '/logout', isShow: isAuth }
  ].filter(({ isShow }) => isShow);

export const Menu = () => {
  const data = {
    menuTemplateList: [],
    isAuth: false
  };

  const componentDidMount = (setProps: SetPropsType) => {
    authController.auth(() => {
      const isAuth = Boolean(userStore?.state?.id);
      data.isAuth = isAuth;
      setProps({ menuTemplateList: menuTemplateList(isAuth) });

      const menuList = document.querySelectorAll('a.menu-link');
      const url = router.getUrlParam();
      menuList?.forEach((menuItem) => {
        if (url && menuItem.getAttribute('href')?.includes(url)) {
          menuItem.classList.add('active');
        } else {
          menuItem.classList.remove('active');
        }
      });
    });
  };

  const components = {
    switchComponent: Switch({
      onClick: () => (e: Event) => {
        const { target } = e;
        const input = (target as HTMLElement)
          .previousElementSibling as HTMLInputElement;
        input.checked = !input.checked;
        setTheme(true);
        localStorage.setItem('isDark', JSON.stringify(input.checked));
      },
      isChecked: getIsDark()
    })
  };

  const events = {
    onClick: (setProps) => (e: Event) => {
      e.preventDefault();
      const tag = e.target as HTMLElement;
      if (tag.tagName === 'A') {
        const newPath = tag.getAttribute('href') || '/';
        if (newPath === '/logout') {
          logoutAPI();
          setProps({ menuTemplateList: menuTemplateList(false) });
          router.go('/login');
        } else if (newPath === '/show-chats') {
          router.go('/chat');
          const panelBlock = document.querySelector('.panel');
          const mainBlock = document.querySelector('.main');
          mainBlock?.classList.remove('active-block');
          panelBlock?.classList.add('active-block');
        } else {
          router.go(newPath);
          const menuList = tag.parentElement?.querySelectorAll('A');
          menuList?.forEach((menuItem) => {
            menuItem.classList.remove('active');
          });
          tag.classList.add('active');
        }
      }
    }
  };
  return createBlock({ componentDidMount, components, template, data, events });
};
