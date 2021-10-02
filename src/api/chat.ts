import { HTTPTransport } from '../core/fetch';
import { UsersForChatType } from '../types/apiTypes';

const http = new HTTPTransport('https://ya-praktikum.tech/api/v2');

export const getChatsAPI = async () => {
  const data = await http.get('/chats', {});
  return JSON.parse(data.response);
};

export const createChatAPI = async (title: string) => {
  const data = await http.post('/chats', { data: { title } });
  return JSON.parse(data.response);
};

export const deleteChatAPI = async (chatId: number) => {
  const data = await http.delete('/chats', { data: { chatId } });
  return JSON.parse(data.response);
};

export const addUsersToChatAPI = (data: UsersForChatType) => {
  http.put('/chats/users', { data });
};

export const deleteUserFromChatAPI = (data: UsersForChatType) => {
  http.delete('/chats/users', { data });
};

export const getTokenAPI = async (chatId: number) => {
  const data = await http.post('/chats/token/' + chatId, {});
  return JSON.parse(data.response);
};
