import { router } from '..';
import { signupAPI } from '../api/auth';
import { ROUTES } from '../types';
import { SignupDataType } from '../types/apiTypes';

export class SignupController {
  public async signup(data: SignupDataType) {
    try {
      await signupAPI(data);
      router.go(ROUTES.CHAT);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }
}

export const signupController = new SignupController();
