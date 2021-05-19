import { createTemplate } from "../../template";
import LoginComponent from "../../components/login";
import RegistrationComponent from "../../components/registration";
import "./login.scss";

const Login = (props) => {
  const loginTemplate = `
    <div class="login">
      <div class="sheet">
        <div class="tabs">
          <input type="radio" name="tabs" id="tab1" aria-controls="login" checked>
          <label for="tab1">Login</label>
          <input type="radio" name="tabs" id="tab2" aria-controls="registration">
          <label for="tab2">Registration</label>
          <div class="tab-panels">
            <section class="tab-panel" id="login">
              {{LoginComponent}}
            </section>
            <section class="tab-panel" id="registration">
              {{RegistrationComponent}}
            </section>
          </div>
        </div>
      </div>
    </div>
  `;

  const loginData = {
    LoginComponent,
    RegistrationComponent,
  };

  return createTemplate(loginTemplate, loginData);
};

export default Login;
