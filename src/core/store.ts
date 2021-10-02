import { EventBus } from '../core/eventBus';
import {
  ChatDataType,
  ChatsListType,
  UserStoreType
} from '../types/storeTypes';

export enum STORE_EVENTS {
  UPDATE = 'update'
}

export class Store<T> extends EventBus {
  state: T | null;

  constructor(initialData: T | null = null) {
    super();
    this.state = initialData;
  }

  get() {
    return this.state;
  }

  update(newData: any) {
    this.state = { ...this.state, ...newData };
    this.emit(STORE_EVENTS.UPDATE, newData);
  }
}

export const chatDataStore: Store<ChatDataType> = new Store();

export const chatStore: Store<ChatsListType> = new Store();

export const socketStore = new Store<{ socket: WebSocket }>();

export const userStore: Store<UserStoreType> = new Store();
