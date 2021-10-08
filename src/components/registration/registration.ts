import { SignupDataType } from './../../types/apiTypes';
import { Button, Input } from '../';
import { checkFormFields } from '../../utils/checkForm';
import { createBlock } from '../../core/createBlock';
import { getFormData } from '../../utils/getFormData';
import { signupController } from '../../controllers/signupController';

import './registration.scss';

const template = `
<form class="registration-form">
  <div data-component="firstNameComponent"></div>
  <div data-component="secondNameComponent"></div>
  <div data-component="emailComponent"></div>
  <div data-component="phoneComponent"></div>
  <div data-component="loginComponent"></div>
  <div data-component="passwordComponent"></div>
  <div class="submit">
   <div data-component="registrationSubmit"></div>
  </div>
</form>
`;

export const RegistrationComponent = () => {
  const components = {
    firstNameComponent: Input({
      class: 'mt-1',
      placeholder: 'First name',
      name: 'first_name',
      rules: { isRequired: true },
      type: 'text'
    }),
    secondNameComponent: Input({
      class: 'mt-1',
      placeholder: 'Second name',
      name: 'second_name',
      rules: { isRequired: true },
      type: 'text'
    }),
    emailComponent: Input({
      class: 'mt-1',
      placeholder: 'Email',
      name: 'email',
      rules: { isRequired: true, email: true },
      type: 'text'
    }),
    phoneComponent: Input({
      class: 'mt-1',
      placeholder: 'Phone',
      name: 'phone',
      rules: { isRequired: true, phone: true },
      type: 'text'
    }),
    loginComponent: Input({
      class: 'mt-1',
      placeholder: 'Login',
      name: 'login',
      rules: { isRequired: true },
      type: 'text'
    }),
    passwordComponent: Input({
      class: 'mt-1',
      placeholder: 'Password',
      name: 'password',
      rules: { isRequired: true, minSymbols: 6 },
      type: 'password'
    }),
    registrationSubmit: Button({
      class: 'mt-4 px-4',
      name: 'Submit',
      onClick: () => (e: Event) => {
        e.preventDefault();
        const isFormValid = checkFormFields('.registration-form');
        if (isFormValid) {
          const formData = getFormData('form.registration-form');
          signupController.signup(formData as SignupDataType);
        } else {
          console.error('Not all fields are valid');
        }
      }
    })
  };

  return createBlock({ components, template });
};
