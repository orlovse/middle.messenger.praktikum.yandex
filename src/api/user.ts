import { HTTPTransport } from '../core/fetch';
import { PasswordDataType, ProfileDataType } from '../types/apiTypes';

const http = new HTTPTransport('https://ya-praktikum.tech/api/v2/user');

export const setProfileAPI = async (newProfileData: ProfileDataType) => {
  const data = await http.put('/profile', { data: newProfileData });
  return JSON.parse(data.response);
};

export const setProfileAvatarAPI = async (newProfileAvatar: any) => {
  const data = await http.put('/profile/avatar', { data: newProfileAvatar });
  return JSON.parse(data.response);
};

export const setProfilePasswordAPI = async (
  newProfilePassword: PasswordDataType
) => {
  const data = await http.put('/password', { data: newProfilePassword });
  return JSON.parse(data.response);
};

export const searchUserAPI = async (userName: string) => {
  const data = await http.post('/search', { data: { login: userName } });
  return JSON.parse(data.response);
};
