import { createTemplate } from "../../template";
import "./login.scss";
import Input from "../input";

const LoginComponen = (props) => {
  const loginTemplate = `
    <form onsubmit="{{ handleSubmit }}" class="login-form">
        {{ LoginInput }}
        {{ PasswordInput }}
      <div class="submit">
        {{ SubmitButton }}
      </div>
    </form>
  `;
  const loginData = {
    LoginInput: Input({ label: "Login", type: "text", class: "mt-2" }),
    PasswordInput: Input({
      label: "Password",
      type: "password",
      class: "mt-2",
    }),
    SubmitButton: Input({
      label: "Enter",
      type: "submit",
      value: "Enter",
      class: "mt-2",
    }),
    handleSubmit: () => {
      console.log("click");
    },
  };

  return createTemplate(loginTemplate, loginData);
};

export default LoginComponen;
