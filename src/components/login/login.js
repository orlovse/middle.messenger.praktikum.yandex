import { createElement } from "../../template";
import "./login.scss";
import Input from "../input";

const LoginComponen = (props) => {
  const loginTemplate = `
    <form class="login-form">
        {{ components.LoginInput }}
        {{ components.PasswordInput }}
      <div class="submit">
        {{ components.SubmitButton }}
      </div>
    </form>
  `;
  const loginData = {
    components: {
      LoginInput: Input({
        label: "Login",
        type: "text",
        class: "login-input mt-2",
      }),
      PasswordInput: Input({
        label: "Password",
        type: "password",
        class: "password-input mt-2",
      }),
      SubmitButton: Input({
        label: "Enter",
        type: "submit",
        value: "Enter",
        class: "submit-login-button mt-2",
      }),
    },

    result: { login: "", password: "" },
  };

  // const loginEvents = [
  //   {
  //     selector: ".submit-login-button",
  //     event: "click",
  //     func: (e) => {
  //       e.preventDefault();
  //       console.log("result:", loginData.result);
  //     },
  //   },
  //   {
  //     selector: ".login-form",
  //     event: "input",
  //     func: (e) => {
  //       if (e.target.classList.contains("login-input")) {
  //         loginData.result.login = e.target.value;
  //       } else if (e.target.classList.contains("password-input")) {
  //         loginData.result.password = e.target.value;
  //       }
  //     },
  //   },
  // ];

  return createElement(loginTemplate, loginData);
};

export default LoginComponen;
