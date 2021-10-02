import { ProfileDataType } from './../../types/apiTypes';
import { Button, ProfileInput } from '../../components';
import { createBlock } from '../../core/createBlock';
import { authController } from '../../controllers/authController';
import { SetPropsType } from '../../types';
import { editProfileController } from '../../controllers/profileController';

import './profile.scss';
import { removeEmptyObjectFields } from '../../utils/removeEmptyObjectFields';

const template = `
<div class="profile">
  <div class="sheet">
    <form class="profile-form">    
      <div class="avatar"></div>
      <div class="fields">
        <div data-component="firstNameComponent"></div>
        <div data-component="secondNameComponent"></div>
        <div data-component="displayNameComponent"></div>
        <div data-component="emailComponent"></div>
        <div data-component="phoneComponent"></div>
        <div data-component="loginComponent"></div>
      </div>
      <div class="actions">
        <div data-component="buttonTest"></div>
      </div>
    </form>
  </div>
</div>
`;

type DataType = {
  avatar?: '';
  display_name: string;
  email: string;
  first_name: string;
  login: string;
  phone: string;
  second_name: string;
};

export const Profile = () => {
  let data: DataType = {
    display_name: '',
    email: '',
    first_name: '',
    login: '',
    phone: '',
    second_name: ''
  };

  const componentDidMount = (setProps: SetPropsType) => {
    authController.auth((user: DataType) => {
      setProps(user);
      components.emailComponent.setProps({ value: user?.email });
      components.phoneComponent.setProps({ value: user?.phone });
      components.firstNameComponent.setProps({ value: user?.first_name });
      components.secondNameComponent.setProps({ value: user?.second_name });
      components.displayNameComponent.setProps({ value: user?.display_name });
      components.loginComponent.setProps({ value: user?.login });
      data = { ...data, ...user };
    });
  };

  const components = {
    emailComponent: ProfileInput({
      value: data.email,
      setProfileProps: (value?: string) => {
        if (value) {
          data.email = value;
        }
      },
      label: 'E-mail',
      rules: { email: true }
    }),
    phoneComponent: ProfileInput({
      label: 'Phone',
      value: data.phone,
      setProfileProps: (value?: string) => {
        if (value) {
          data.phone = value;
        }
      },
      rules: { phone: true }
    }),
    firstNameComponent: ProfileInput({
      label: 'First name',
      value: data.first_name,
      setProfileProps: (value?: string) => {
        if (value) {
          data.first_name = value;
        }
      },
      rules: { isRequired: true }
    }),
    secondNameComponent: ProfileInput({
      label: 'Second name',
      value: data.second_name,
      setProfileProps: (value?: string) => {
        if (value) {
          data.second_name = value;
        }
      }
    }),
    displayNameComponent: ProfileInput({
      label: 'Display name',
      value: data.display_name,
      setProfileProps: (value?: string) => {
        if (value) {
          data.display_name = value;
        }
      }
    }),
    loginComponent: ProfileInput({
      label: 'Login',
      value: data.login,
      setProfileProps: (value?: string) => {
        if (value) {
          data.login = value;
        }
      }
    }),
    buttonTest: Button({
      name: 'Save changes',
      onClick: () => (e) => {
        e.preventDefault();
        const filteredData = removeEmptyObjectFields(data);
        const dataToPut = { ...data, ...filteredData };
        editProfileController.edit(dataToPut as ProfileDataType);
      },
      type: 'submit'
    })
  };

  return createBlock({ components, componentDidMount, template, data });
};
