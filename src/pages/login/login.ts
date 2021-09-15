import { LoginComponent } from '../../components';

import { createBlock } from '../../core/createBlock';
import { authController } from '../../controllers/authController';

import './login.scss';

const template = `
<div class="login">
  <div class="sheet">
    <div class="tabs">
      <input type="radio" name="tabs" id="tab1" aria-controls="login" checked>
      <label for="tab1">Login</label>
      <input type="radio" name="tabs" id="tab2" aria-controls="registration">
      <label for="tab2">Registration</label>
      <div class="tab-panels">
        <section class="tab-panel" id="login">
          <div data-component="loginComponent"></div>
        </section>
        <section class="tab-panel" id="registration">
        </section>
      </div>
    </div>
  </div>
</div>
`;

//          <div data-component="registrationComponent"></div>

export const Login = () => {
  const components = {
    loginComponent: LoginComponent()
    //registrationComponent: RegistrationComponent()
  };
  const componentDidMount = () => {
    //authController.redirectToChat()
    return {};
  };
  return createBlock({ components, componentDidMount, template });
};
