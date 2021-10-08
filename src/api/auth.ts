import { http } from '../core/fetch';
import { SigninDataType, SignupDataType } from '../types/apiTypes';

export const signupAPI = async (data: SignupDataType) => {
  try {
    await http.post('/auth/signup', { data });
  } catch (error) {
    console.error(error);
  }
};

export const loginAPI = async (data: SigninDataType) => {
  try {
    await http.post('/auth/signin', { data });
  } catch (error) {
    console.error('Login error: ', +error);
  }
};

export const logoutAPI = () => {
  try {
    http.post('/auth/logout', {});
  } catch (error) {
    console.error('Logout error: ', error);
  }
};

export const getUserAPI = async () => {
  try {
    const data = await http.get('/auth/user', {});
    return JSON.parse(data.response);
  } catch (error) {
    console.log(error);
  }
};
