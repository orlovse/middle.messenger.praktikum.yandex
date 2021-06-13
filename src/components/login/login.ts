import { createElement, reactivData } from "../../template";
import "./login.scss";
import Input from "../input";

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
          console.log("input", rData.get("result"));
          //console.log(this.get("test"));
          if (e.target.value === "111") {
            rData.set("result.login", e.target.value);
          }
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
      class: `login-input mt-2 ${rData.get("result.login")}`,
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
  };

  return createElement({ template, rData, events, components });
};

export default LoginComponen;
