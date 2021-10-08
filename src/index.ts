import 'regenerator-runtime/runtime';
import '../static/styles.scss';
import { authController } from './controllers/authController';
import { Router } from './core/router';
import { userStore } from './core/store';
import { Layout } from './layout';
import { Chat, Error, Login, Profile } from './pages';
import { ROUTES } from './types';
import { appendBlockToDOM } from './utils/appendBlockToDOM';
import { setTheme } from './utils/theme';

setTheme();

appendBlockToDOM('#app', Layout());

export const router = new Router('#layout-children');

authController.auth(() => {
  const isAuth = Boolean(userStore?.state?.id);
  if (!isAuth) {
    router.go(ROUTES.LOGIN);
  } else if (isAuth && !router.getUrlParam()) {
    router.go(ROUTES.CHAT);
  }
});

router
  .use(ROUTES.CHAT, Chat({}))
  .use(ROUTES.LOGIN, Login())
  .use(ROUTES.PROFILE, Profile())
  .use(ROUTES.SERVER_ERROR, Error({ type: '500' }))
  .use(ROUTES.HOME, Error({ type: '404' }))
  .start();
