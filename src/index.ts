import 'regenerator-runtime/runtime';
import '../static/styles.scss';
import { Router } from './core/router';
import { Layout } from './layout';
import { Error, Login, Profile } from './pages';
import { appendBlockToDOM } from './utils/appendBlockToDOM';

export enum ROUTES {
  HOME = '/',
  LOGIN = '/login',
  SIGNIN = '/signin',
  PROFILE_EDIT = '/profile-edit',
  PASSWORD_EDIT = '/password-edit',
  CHAT = '/chat/',
  PROFILE = '/profile',
  SERVER_ERROR = '/500',
  NOT_FOUND = '/404'
}

appendBlockToDOM('#app', Layout());

export const router = new Router('#layout-children');

router
  // .use(ROUTES.CHAT, ChatPage)
  .use(ROUTES.LOGIN, Login())
  // .use(ROUTES.SIGNIN, SigninPage)
  // .use(ROUTES.PROFILE_EDIT, ProfileEditPage)
  // .use(ROUTES.PASSWORD_EDIT, PasswordEditPage)
  .use(ROUTES.PROFILE, Profile())
  // .use(ROUTES.SERVER_ERROR, Error500Page)
  .use('/', Error({ type: '404' }))
  // .use(ROUTES.HOME, ChatsPage)
  .start();
