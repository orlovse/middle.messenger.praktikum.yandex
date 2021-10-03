import { SetPropsType } from './../../types/index';
import { Loading, Sender } from '..';
import { chatController } from '../../controllers/chatController';
import { userStore } from '../../core/store';
import { createBlock } from './../../core/createBlock';

import './searchUser.scss';
import { ChatsListType } from '../../types/storeTypes';

const template = `
  <div class="search-user">
    <div data-component="searchUserForChatComponent"></div>
    {{#if loading}}
      <div data-component="loadingComponent"></div>
    {{/if}}
    {{#if noUsers}}
      <div>No users found</div>
    {{else}}
      {{#each usersList}}
        <div data-user-id="{{ id }}" class="search-user-item"> 
          {{ id }} - {{ first_name }}
        </div>
      {{/each}}    
    {{/if}}
  </div>
`;

type DataType = {
  usersList: ChatsListType;
  setProps: SetPropsType | null;
  noUsers: boolean;
  loading: boolean;
};

export const SearchUser = () => {
  const data: DataType = {
    usersList: [],
    setProps: null,
    noUsers: false,
    loading: false
  };

  const componentDidMount = (setProps: SetPropsType) => {
    data.setProps = setProps;
  };

  const components = {
    loadingComponent: Loading(),
    searchUserForChatComponent: Sender({
      buttonText: 'Search',
      placeholder: 'Search user',
      class: 'mb-2',
      callback: async (userName: string) => {
        data.setProps && data.setProps({ loading: true });
        await chatController.searchUser(userName);
        data.setProps && data.setProps({ loading: false });
        const usersList = userStore.get()?.usersList;
        data.usersList = usersList || [];

        if (data.usersList.length === 0) {
          data.noUsers = true;
        } else {
          data.noUsers = false;
        }

        data.setProps && data.setProps({ usersList, noUsers: data.noUsers });

        const users = document.querySelectorAll('[data-user-id]');
        users.forEach((user) => {
          const userId = parseInt(
            (user as HTMLElement)?.dataset?.userId || '0'
          );

          user.addEventListener('click', () => {
            chatController.addUsersToChat([userId]);
          });
        });
      }
    })
  };

  return createBlock({ componentDidMount, components, data, template });
};
