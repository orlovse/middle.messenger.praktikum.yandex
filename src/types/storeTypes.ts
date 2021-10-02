import { ProfileDataType } from "./apiTypes";

export type UserStoreType = {
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

export type LastMessageType = {
  content: string;
  id: number;
  time: number;
  user: ProfileDataType & {
    avatar: string | null 
  }
}

export type ChatDataType = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: LastMessageType;
  title: string;
  unread_count: number;
}

export type ChatsListType = ChatDataType[]
