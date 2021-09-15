import { checkFormFields } from './../../utils/index';
import { Button, Input } from '../';
import { signupAPI } from '../../api/auth';

import './registration.scss';
import { createBlock } from '../../core/createBlock';

const template = `
<form class="registration-form">
    {{ first_name }}
    {{ second_name }}
    {{ login }}
    {{ email }}
    {{ password }}
    {{ phone }}
  <div class="submit">
   <div data-component="registrationSubmit"></div>
  </div>
</form>
`;

export const RegistrationComponent = () => {
  const data = {
      first_name: 'Test',
      second_name: 'Testov',
      login: 'test0001',
      email: '111@dydyd.test',
      password: '123456',
      phone: '+79172932974'
  };

  const components = {
    registrationSubmit: Button({name: 'Submit'})
  }

  // const components = {
  //   EmailInput: Input({
  //     label: 'Email',
  //     type: 'email',
  //     class: 'email-input mt-2',
  //     rules: { email: true }
  //   }),
  //   LoginInput: Input({
  //     label: 'Login',
  //     type: 'text',
  //     class: 'login-input mt-2',
  //     rules: { isRequired: true }
  //   }),
  //   NameInput: Input({
  //     label: 'Name',
  //     type: 'text',
  //     class: 'name-input mt-2'
  //   }),
  //   SurnameInput: Input({
  //     label: 'Surname',
  //     type: 'text',
  //     class: 'surname-input mt-2'
  //   }),
  //   PhoneInput: Input({
  //     label: 'Phone',
  //     type: 'tel',
  //     class: 'phone-input mt-2',
  //     rules: { phone: true }
  //   }),
  //   PasswordInput: Input({
  //     label: 'Password',
  //     type: 'password',
  //     class: 'password-input mt-2',
  //     rules: { minSymbols: 6 }
  //   }),
  //   SubmitButton: Button({
  //     name: 'Save',
  //     class: 'save-profile-button mt-4 px-4'
  //   })
  // };

  // const events = [
  //   {
  //     selector: '.save-profile-button',
  //     event: 'click',
  //     func(e: Event) {
  //       const isValid = checkFormFields(e, '.registration-form');
  //       if (isValid) {
  //         signupAPI({
  //           first_name: rData.get('result.first_name'),
  //           second_name: rData.get('result.second_name'),
  //           login: rData.get('result.login'),
  //           email: rData.get('result.email'),
  //           password: rData.get('result.password'),
  //           phone: rData.get('result.phone')
  //         }),
  //           (
  //             document.querySelector(
  //               'form.registration-form'
  //             ) as HTMLFormElement
  //           ).reset();
  //         window.history.pushState({ path: '/chat' }, 'title', '/chat');
  //         console.log('result:', rData.get('result'));
  //       } else {
  //         console.error('Not all fields are valid');
  //       }
  //     }
  //   },
  //   {
  //     selector: 'root',
  //     event: 'input',
  //     func(e: { target: HTMLInputElement }) {
  //       if (e.target?.parentElement?.classList.contains('login-input')) {
  //         rData.set('result.login', e.target.value, true);
  //       } else if (
  //         e.target?.parentElement?.classList.contains('password-input')
  //       ) {
  //         rData.set('result.password', e.target.value, true);
  //       } else if (e.target?.parentElement?.classList.contains('email-input')) {
  //         rData.set('result.email', e.target.value, true);
  //       } else if (e.target?.parentElement?.classList.contains('name-input')) {
  //         rData.set('result.first_name', e.target.value, true);
  //       } else if (
  //         e.target?.parentElement?.classList.contains('surname-input')
  //       ) {
  //         rData.set('result.second_name', e.target.value, true);
  //       } else if (e.target?.parentElement?.classList.contains('phone-input')) {
  //         rData.set('result.phone', e.target.value, true);
  //       }
  //     }
  //   }
  // ];

  return createBlock({ components, data, template  });
};
