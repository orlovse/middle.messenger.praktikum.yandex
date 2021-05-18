import { createTemplate } from "../../template";
import LoginComponent from "../../components/login";
import "./login.scss";

const Login = (props) => {
  const loginTemplate = `
    <div class="login">
      <div class="window">
        <div class="tab">
          <a>Login</a>
          <a>Registration</a>
        </div>
        {{LoginComponent}}
      </div>
    </div>
  `;

  const loginData = {
    LoginComponent,
  };

  return createTemplate(loginTemplate, loginData);
};

export default Login;
