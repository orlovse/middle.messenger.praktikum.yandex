import { createTemplate } from "../../template";
import "./login.scss";
import Input from "../input";

const LoginComponen = (props) => {
  const loginTemplate = `
    <form onsubmit="">
      {{LoginInput}}
      {{PasswordInput}}
      <div class="submit">
        {{SubmitButton}}
      </div>
    </form>
  `;
  const loginData = {
    LoginInput: Input({ label: "Login", type: "text" }),
    PasswordInput: Input({ label: "Password", type: "password" }),
    SubmitButton: Input({ type: "submit" }),
  };

  return createTemplate(loginTemplate, loginData);
};

export default LoginComponen;
