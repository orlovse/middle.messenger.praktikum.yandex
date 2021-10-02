import { EventBus } from '../core/eventBus';

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

type UserStore = {
  avatar: string | null;
  display_name: string | null;
  email: string | null;
  first_name: string | null;
  id: string | null;
  login: string | null;
  phone: string | null;
  second_name: string | null;
  usersList: [];
};

export const authStore: Store<any> = new Store();

export const chatDataStore: Store<any> = new Store();

export const chatStore: Store<any> = new Store();

export const socketStore = new Store<{ socket: WebSocket }>();

export const userStore: Store<UserStore> = new Store();
