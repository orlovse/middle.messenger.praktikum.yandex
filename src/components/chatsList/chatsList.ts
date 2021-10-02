import { Button, Sender } from '..';
import { chatController } from '../../controllers/chatController';
import { SetPropsType } from '../../types';
import { createBlock } from './../../core/createBlock';

import './chatsList.scss';

const template = `
  <div class="chats-list-block">
    {{#if isShowNewChatModal}} 
      <div class="create-new-chat">
        <div data-component="closeNewChatComponent"></div> 
        <div data-component="confirmNewChatComponent" style="width: 100%"></div>  
      </div>
    {{else}}
      <div data-component="addChatComponent"></div>  
    {{/if}}
    <div data-component="searchComponent"></div>
    <div class="chats-list">
      {{#if loading}}
        <div>Loading!</div>
      {{else}}
        {{#each chats}}
          <a href="/chat/{{ id }}" class="contact">
            <div class="contact-left-block">
            <div data-href="/chat/{{ id }}" class="avatar"></div>
            <div class="content">
              <p data-href="/chat/{{ id }}" class="title">{{ title }}</p>
              <p data-href="/chat/{{ id }}" class="subtitle">{{ last_message.content }}</p>
            </div>
            </div>
            {{# if unread_count}}
              <div data-href="/chat/{{ id }}" class="badge">{{ unread_count }}</div>
            {{/if}}
          </a>
        {{/each}}
      {{/if}}
    </div>
  </div>
`;

type ChatType = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: string | number;
  title: string;
  unread_count: number;
};

type DataType = {
  chats: ChatType[];
  searchValue: string;
  newChatName: string;
  isShowNewChatModal: boolean;
  filteredChats: ChatType[];
  loading: boolean;
  setProps: SetPropsType | null;
};

export const ChatsList = () => {
  const data: DataType = {
    chats: [],
    searchValue: '',
    newChatName: '',
    isShowNewChatModal: false,
    filteredChats: [],
    loading: false,
    setProps: null
  };
  const components = {
    searchComponent: Sender({
      placeholder: 'Search',
      callback: (value: string) => {
        const filteredChats = data.chats.filter((chat) => {
          return chat?.title.toLowerCase().includes(value.toLowerCase());
        });
        data.filteredChats = filteredChats;
        const chatsToRender = value ? data.filteredChats : data.chats;
        data.setProps && data.setProps({ chats: chatsToRender });
      },
      buttonText: 'Search'
    }),
    addChatComponent: Button({
      name: 'Add new chat',
      class: 'mb-1',
      onClick: () => () => {
        data.setProps && data.setProps({ isShowNewChatModal: true });
      }
    }),
    closeNewChatComponent: Button({
      name: 'Close',
      class: 'mb-1 mr-1',
      onClick: () => () => {
        data.setProps && data.setProps({ isShowNewChatModal: false });
      }
    }),
    confirmNewChatComponent: Sender({
      callback: (value: string) => {
        if (value) {
          chatController.createChat(value);
          data.setProps && data.setProps({ isShowNewChatModal: false });
        }
      },
      class: 'mb-1',
      buttonText: 'Add'
    })
  };

  const componentDidMount = (setProps: SetPropsType, props) => {
    data.setProps = setProps;
    setProps({ loading: true });
    chatController.subscribeChatsUpdate((chats) => {
      setProps({ ...props, chats: chats, loading: false });
      data.chats = chats;
    });
    chatController.getChats();
  };
  return createBlock({ componentDidMount, components, data, template });
};
