import { http } from '../core/fetch';
import { PasswordDataType, ProfileDataType } from '../types/apiTypes';

export const setProfileAPI = async (newProfileData: ProfileDataType) => {
  try {
    const data = await http.put('/user/profile', { data: newProfileData });
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Can not save profile: ', error);
  }
};

export const setProfileAvatarAPI = async (newProfileAvatar: any) => {
  try {
    const data = await http.put('/user/profile/avatar', {
      data: newProfileAvatar
    });
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Can not save profile avatar: ', error);
  }
};

export const setProfilePasswordAPI = async (
  newProfilePassword: PasswordDataType
) => {
  try {
    const data = await http.put('/user/password', { data: newProfilePassword });
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Can not save profile password: ', error);
  }
};

export const searchUserAPI = async (userName: string) => {
  try {
    const data = await http.post('/user/search', { data: { login: userName } });
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Search user error: ', error);
  }
};
