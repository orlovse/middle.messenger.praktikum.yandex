import { searchUserAPI } from './../api/user';
import { router } from '..';
import { getUserAPI } from '../api/auth';
import {
  addUsersToChatAPI,
  createChatAPI,
  deleteChatAPI,
  deleteUserFromChatAPI,
  getChatsAPI,
  getTokenAPI
} from '../api/chat';
import { connectWebSocketAPI } from '../api/webSocket';
import {
  chatDataStore,
  chatStore,
  socketStore,
  STORE_EVENTS,
  userStore
} from '../core/store';
import { ROUTES } from '../types';

export class ChatController {
  public subscribeChatsUpdate(callback: (storeData: any) => void) {
    chatStore.on(STORE_EVENTS.UPDATE, callback);
  }

  public subscribeChatUpdate(callback: (storeData: any) => void) {
    chatDataStore.on(STORE_EVENTS.UPDATE, callback);
  }

  public subscribeSocketUpdate(callback: (storeData: any) => void) {
    socketStore.on(STORE_EVENTS.UPDATE, callback);
  }

  public async sendMessage(message: string) {
    const socket: any = socketStore.get()?.socket;
    socket.send(
      JSON.stringify({
        content: message,
        type: 'message'
      })
    );
  }

  public async getChats() {
    try {
      const chatsList = await getChatsAPI();
      chatStore.update(chatsList);
    } catch (error) {
      console.log(error);
    }
  }

  public async createChat(chatName: string) {
    try {
      await createChatAPI(chatName);
      this.getChats();
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteChat() {
    try {
      const chatID = parseInt(router.getUrlParam());
      await deleteChatAPI(chatID);
      router.go(ROUTES.CHAT);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  public async getChatData() {
    try {
      const chatID = router.getUrlParam();
      const chatsList = await getChatsAPI();
      const chat =
        Array.isArray(chatsList) &&
        chatsList.find((chat) => chat.id.toString() === chatID);
      chatDataStore.update(chat);
    } catch (error) {
      console.log(error);
    }
  }

  public async searchUser(userName: string) {
    try {
      const data = await searchUserAPI(userName);
      const oldUserData = userStore.get();
      userStore.update({ ...oldUserData, usersList: data });
    } catch (error) {
      console.log(error);
    }
  }

  public async addUsersToChat(usersList: number[]) {
    try {
      const chatId = router.getUrlParam();
      addUsersToChatAPI({
        users: usersList,
        chatId: parseInt(chatId)
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteUsersFromChat() {
    try {
      const chatId = router.getUrlParam();
      deleteUserFromChatAPI({
        users: [6731],
        chatId: parseInt(chatId)
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async openWS(
    onGetUser: (userId: number) => void,
    onGetMessage: (data: any) => void
  ) {
    try {
      const currentRoute = router.getCurrentRoute();
      if (currentRoute.includes('chat')) {
        const chatId = parseInt(router.getUrlParam());
        const userIdResponse = await getUserAPI();
        const tokenResponse = await getTokenAPI(chatId);

        if (tokenResponse && userIdResponse && chatId) {
          const token = tokenResponse.token;
          const userId = userIdResponse.id;
          onGetUser(userId);
          const socket = connectWebSocketAPI({ userId, chatId, token });

          this.subscribeSocketUpdate((socket: WebSocket) => socket);
          socketStore.update({ socket });

          const socketFromStore = socketStore.get()?.socket;

          socketFromStore?.addEventListener('open', () => {
            socket.send(
              JSON.stringify({
                content: '0',
                type: 'get old'
              })
            );
          });

          socketFromStore?.addEventListener('message', (event) => {
            onGetMessage(JSON.parse(event.data));
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const chatController = new ChatController();
