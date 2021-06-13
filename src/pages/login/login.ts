import { createElement, reactivData } from "../../template";
import LoginComponent from "../../components/login";
import Registration from "../../components/registration";
import "./login.scss";

const Login = () => {
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
              {{ components.Login }}
            </section>
            <section class="tab-panel" id="registration">
              {{ components.Registration }}
            </section>
          </div>
        </div>
      </div>
    </div>
  `;

  const rData = reactivData({});

  const components = {
    Login: LoginComponent(),
    Registration: Registration(),
  };

  return createElement({ template, rData, components });
};

export default Login;
