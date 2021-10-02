import { HTTPTransport } from '../core/fetch';
import { SigninDataType, SignupDataType } from '../types/apiTypes';

const http = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');

export const signupAPI = async (data: SignupDataType) => {
  await http.post('/signup', { data });
};

export const loginAPI = async (data: SigninDataType) => {
  await http.post('/signin', { data });
};

export const logoutAPI = () => {
  http.post('/logout', {});
};

export const getUserAPI = async () => {
  try {
    const data = await http.get('/user', {});
    return JSON.parse(data.response);
  } catch (error) {
    console.log(error);
  }
};
