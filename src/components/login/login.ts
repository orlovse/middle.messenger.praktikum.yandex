import { checkFormFields } from './../../utils/index';
import { Button, Input } from '../';
import { createBlock } from '../../core/createBlock';
import { SigninController } from '../../controllers/signinController';

import './login.scss';

const template = `
<form class="login-form">
  <div data-component="loginInputComponent"></div>
  <div data-component="passwordInputComponent"></div>
  <div class="submit">
    <div data-component="submitButtonComponent"></div>
  </div>
</form>
`;

const signinController = new SigninController();

export const LoginComponent = () => {
  const components = {
    loginInputComponent: Input({
      class: 'login-input mt-2',
      label: 'Login',
      name: 'login',
      rules: { isRequired: true },
      type: 'text'
    }),
    passwordInputComponent: Input({
      class: 'password-input mt-2',
      label: 'Password',
      name: 'password',
      rules: { minSymbols: 6 },
      type: 'password'
    }),
    submitButtonComponent: Button({
      name: 'Save',
      class: 'submit-login-button mt-4 px-4',
      onClick: (e: Event) => {
        e.preventDefault();
        const isFormValid = checkFormFields('.login-form');
        if (isFormValid) {
          (
            document.querySelector('form.login-form') as HTMLFormElement
          ).reset();
          console.log('result:');
          signinController.signin({ login: 'admn', password: 'testov' });
          //window.history.pushState({ path: "/chat" }, "title", "/chat");
        } else {
          console.error('Not all fields are valid');
        }
      }
    })
  };
  return createBlock({ components, template });
};
