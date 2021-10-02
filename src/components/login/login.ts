import { SigninDataType } from './../../types/apiTypes';
import { Button, Input } from '../';
import { createBlock } from '../../core/createBlock';
import { signinController } from '../../controllers/signinController';
import { getFormData } from '../../utils/getFormData';
import { checkFormFields } from '../../utils/checkForm';

const template = `
<form class="login-form">
  <div data-component="loginInputComponent"></div>
  <div data-component="passwordInputComponent"></div>
  <div class="submit">
    <div data-component="submitButtonComponent"></div>
  </div>
</form>
`;

export const LoginComponent = () => {
  const components = {
    loginInputComponent: Input({
      class: 'login-input mt-2',
      placeholder: 'Login',
      name: 'login',
      rules: { isRequired: true },
      type: 'text'
    }),
    passwordInputComponent: Input({
      class: 'password-input mt-2',
      placeholder: 'Password',
      name: 'password',
      rules: { minSymbols: 6 },
      type: 'password'
    }),
    submitButtonComponent: Button({
      name: 'Enter',
      class: 'submit-login-button mt-4 px-4',
      onClick: () => (e: Event) => {
        e.preventDefault();
        const isFormValid = checkFormFields('.login-form');
        if (isFormValid) {
          const formData = getFormData('form.login-form');
          console.log('result:', formData);
          signinController.signin(formData as SigninDataType);
          // login: 'test000',
          // password: 'test$^%usdUA1'
        } else {
          console.error('Not all fields are valid');
        }
      }
    })
  };
  return createBlock({ components, template });
};
