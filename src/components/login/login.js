import { createTemplate } from "../../template";
import "./login.scss";
import Input from "../input";

const LoginComponen = (props) => {
  const loginTemplate = `
    <form onsubmit="{{handleSubmit}}">
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
    SubmitButton: Input({ label: "Enter", type: "submit", value: "Enter" }),
    handleSubmit: () => {
      console.log("click");
    },
  };

  return createTemplate(loginTemplate, loginData);
};

export default LoginComponen;
