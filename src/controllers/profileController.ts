import { router } from '..';
import {
  setProfileAPI,
  setProfileAvatarAPI,
  setProfilePasswordAPI
} from '../api/user';
import { ROUTES } from '../types';
import { PasswordDataType, ProfileDataType } from '../types/apiTypes';

class EditProfileController {
  public async edit(data: ProfileDataType) {
    try {
      await setProfileAPI(data);
    } catch (error) {
      console.log(error);
    }
  }

  public async editAvatar(data: any) {
    try {
      await setProfileAvatarAPI(data);
    } catch (error) {
      console.log(error);
    }
  }

  public async editPassword(data: PasswordDataType) {
    try {
      await setProfilePasswordAPI(data);
      router.go(ROUTES.PROFILE);
    } catch (error) {
      console.log(error);
    }
  }
}
export const editProfileController = new EditProfileController();
