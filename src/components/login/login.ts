import { createElement, reactivData } from "../../template";
import "./login.scss";
import Input from "../input";
import Button from "../button";

const LoginComponen = () => {
  const template = `
    <form class="login-form">
        {{ components.LoginInput }}
        {{ components.PasswordInput }}
      <div class="submit">
        {{ components.SubmitButton }}
      </div>
    </form>
  `;

  const rData = reactivData({
    result: { login: "11", password: "" },
  });

  const events = [
    {
      selector: ".submit-login-button",
      event: "click",
      func(e: Event) {
        e.preventDefault();
        console.log("send this", rData.get("result"));
      },
    },
    {
      selector: "root",
      event: "input",
      func(e: { target: HTMLInputElement }) {
        if (e.target.classList.contains("login-input")) {
          rData.set("result.login", e.target.value, true);
        } else if (e.target.classList.contains("password-input")) {
          rData.set("result.password", e.target.value, true);
        }
      },
    },
  ];

  const components = {
    LoginInput: Input({
      label: "Login",
      type: "text",
      class: `login-input mt-2`,
      rules: { isRequired: true },
    }),
    PasswordInput: Input({
      label: "Password",
      type: "password",
      class: "password-input mt-2",
      rules: { minSymbols: 6 },
    }),
    SubmitButton: Button({
      name: "Save",
      class: "save-profile-button mt-4 px-4",
    }),
  };

  return createElement({ template, rData, events, components });
};

export default LoginComponen;
