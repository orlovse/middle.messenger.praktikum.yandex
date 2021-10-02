import { router } from '../..';
import {
  Button,
  ChatsList,
  Loading,
  SearchUser,
  Sender
} from '../../components';
import { authController } from '../../controllers/authController';
import { chatController } from '../../controllers/chatController';
import { createBlock } from '../../core/createBlock';
import { SetPropsType } from '../../types';
import { getDate } from '../../utils/getDate';
import { scrollToBottom } from '../../utils/scrollToBottom';

import './chat.scss';

const template = `
<div class="chat">
  <div class="panel">
    <div data-component="chatsListComponent"></div>
  </div>
  <div class="main active-block">
    <div class="main-field">
      {{#if isEmptyChat}}
        <div>Empty chat</div>
      {{else}}
        <div class="main-top-panel">
          <span class="mx-2">{{ chatName }}</span>
          <div class="buttons-panel">
            <div data-component="addUsersComponent"></div>
            <div data-component="deleteUsersComponent"></div>
            <div data-component="deleteChatComponent"></div>          
          </div>
        </div>
        {{#if loading}}
          <div data-component="loadingComponent"></div>
        {{else}}
          {{#if isShowAddUser}}
            <div data-component="addUsersBlockComponent" class="search-user-container"></div>  
          {{/if}}        
          {{#each messages}}
            <div class="message {{ class }}"> 
              <span class="message-username">{{ userName }}</span>
              <div class="message-avatar">
              </div>
              {{ content }} 
              <span class="message-date">{{ time }}</span>
            </div>
          {{/each}}
        {{/if}}
      {{/if}}
    </div>
    <div class="wrapper">
      <div data-component="senderComponent"></div>
    </div>
  </div>
  </div>
</div>
`;

type DataType = {
  chatName: string | null;
  messages: any[];
  message: any | null;
  setProps: SetPropsType | null;
  isEmptyChat: boolean | null;
  isShowAddUser: boolean;
  loading: boolean;
  userId: number | null;
  userName: string | null;
};

export const Chat = (props) => {
  const data: DataType = {
    chatName: null,
    messages: [],
    message: null,
    isEmptyChat: null,
    isShowAddUser: false,
    setProps: null,
    loading: false,
    userId: null,
    userName: null
  };

  const components = {
    addUsersBlockComponent: SearchUser(),
    senderComponent: Sender({
      callback: (value: string) => {
        chatController.sendMessage(value);
      },
      placeholder: 'Write the message'
    }),
    chatsListComponent: ChatsList(),
    loadingComponent: Loading(),
    deleteChatComponent: Button({
      name: 'Delete chat',
      class: 'chat-button delete-button',
      onClick: () => () => {
        chatController.deleteChat();
      }
    }),
    addUsersComponent: Button({
      name: 'Add users',
      class: 'chat-button',
      onClick: () => () => {
        data.setProps && data.setProps({ isShowAddUser: !data.isShowAddUser });
        data.isShowAddUser = !data.isShowAddUser;
      }
    }),
    deleteUsersComponent: Button({
      name: 'Delete users',
      class: 'chat-button',
      onClick: () => () => {
        //chatController.deleteChat();
      }
    })
  };

  const componentDidMount = (setProps: SetPropsType) => {
    data.setProps = setProps;
    authController.auth((user) => {
      data.userName = user.display_name;
      setProps({ userName: user.display_name });
    });

    chatController.subscribeChatUpdate((chat) => {
      data.chatName = chat.title;
      setProps({ chatName: chat.title });
    });

    chatController.getChatData();

    const currentRout = router.getUrlParam();
    console.log('currentRout', currentRout);
    if (currentRout === 'chat') {
      data.isEmptyChat = true;
      setProps({ isEmptyChat: true });
    }

    setProps({ loading: true });
    chatController.openWS(
      (userId: any) => {
        data.userId = userId;
        setProps({ userId });
      },
      (messages: any) => {
        console.log('messages111', messages);

        if (Array.isArray(messages)) {
          const messagesForRender = messages
            .map((message) => {
              if (message.user_id === data.userId) {
                message.class = 'my';
                message.userName = data.userName;
              } else {
                message.userName = message.user_id;
              }
              message.time = getDate(message.time);
              return message;
            })
            .reverse();
          data.messages = messagesForRender;
          setProps({ loading: false, messages: messagesForRender });
        } else if (messages?.type === 'user connected') {

        } else {
          const newMessage = {
            ...messages,
            class: messages.user_id === data.userId && 'my',
            userName: messages.user_id === data.userId ? data.userName : messages.user_id,
            chat_id: router.getUrlParam(),
            time: getDate(messages.time)
          };
          data.message = newMessage;
          data.messages = [...data.messages, newMessage];
          setProps({
            messages: [...data.messages]
          });
        }
        scrollToBottom('.main-field');
      }
    );
  };
  return createBlock({ componentDidMount, components, data, template, props });
};
