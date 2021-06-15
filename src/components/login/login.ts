import { checkFormFields } from "./../../utils/index";
import { createElement, reactivData } from "../../core";
import "./login.scss";
import { Button, Input } from "../";

const template = `
<form class="login-form">
    {{ components.LoginInput }}
    {{ components.PasswordInput }}
  <div class="submit">
    {{ components.SubmitButton }}
  </div>
</form>
`;

export const LoginComponen = () => {
  const rData = reactivData({
    result: { login: "", password: "" },
  });

  const events = [
    {
      selector: ".submit-login-button",
      event: "click",
      func(e: Event) {
        const isValid = checkFormFields(e, ".login-form");
        if (isValid) {
          window.history.pushState({ path: "/chat" }, "title", "/chat");
          console.log("result:", rData.get("result"));
        } else {
          console.error("Not all fields are valid");
        }
      },
    },
    {
      selector: "root",
      event: "input",
      func(e: { target: HTMLInputElement }) {
        if (e.target?.parentElement?.classList.contains("login-input")) {
          rData.set("result.login", e.target.value, true);
        } else if (
          e.target?.parentElement?.classList.contains("password-input")
        ) {
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
      class: "submit-login-button mt-4 px-4",
    }),
  };

  return createElement({ template, rData, events, components });
};
