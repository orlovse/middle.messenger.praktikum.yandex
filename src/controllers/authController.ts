import { router } from '..';
import { getUserAPI } from '../api/auth';
import { STORE_EVENTS, userStore } from '../core/store';
import { ROUTES } from '../types';

export class AuthController {
  public async auth(callback: (storeData: any) => void) {
    userStore.on(STORE_EVENTS.UPDATE, callback);
    try {
      const response = await getUserAPI();
      userStore.update(response);
    } catch (error) {
      console.error(error);
      router.go(ROUTES.LOGIN);
    }
  }

  public async redirectToChat() {
    try {
      await getUserAPI();
      router.go(ROUTES.CHAT);
    } catch (error) {
      console.error(error);
    }
  }
}

export const authController = new AuthController();
