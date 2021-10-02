import { loginAPI } from './../api/auth';
import { router } from '..';
import { SigninDataType } from '../types/apiTypes';
import { ROUTES } from '../types';

export class SigninController {
  public async signin(data: SigninDataType) {
    try {
      await loginAPI(data);
      router.go(ROUTES.CHAT);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }
}

export const signinController = new SigninController();
