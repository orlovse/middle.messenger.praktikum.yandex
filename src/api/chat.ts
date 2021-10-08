import { http } from '../core/fetch';
import { UsersForChatType } from '../types/apiTypes';

export const getChatsAPI = async () => {
  const data = await http.get('/chats', {});
  return JSON.parse(data.response);
};

export const createChatAPI = async (title: string) => {
  try {
    const data = await http.post('/chats', { data: { title } });
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Can not create chat: ' + error);
  }
};

export const deleteChatAPI = async (chatId: number) => {
  try {
    const data = await http.delete('/chats', { data: { chatId } });
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Can not delete chat: ' + error);
  }
};

export const addUsersToChatAPI = (data: UsersForChatType) => {
  try {
    http.put('/chats/users', { data });
  } catch (error) {
    console.error('Can not add user to chat: ', +error);
  }
};

export const deleteUserFromChatAPI = (data: UsersForChatType) => {
  try {
    http.delete('/chats/users', { data });
  } catch (error) {
    console.error('Can not delete user to chat: ', +error);
  }
};

export const getTokenAPI = async (chatId: number) => {
  try {
    const data = await http.post('/chats/token/' + chatId, {});
    return JSON.parse(data.response);
  } catch (error) {
    console.error('Token error: ', +error);
  }
};
