import { ConnectSocketDataType } from '../types/apiTypes';

const WS_URL = 'wss://ya-praktikum.tech/ws';

export const connectWebSocketAPI = (params: ConnectSocketDataType) => {
  const socket = new WebSocket(
    `${WS_URL}/chats/${params.userId}/${params.chatId}/${params.token}/`
  );
  return socket;
};
