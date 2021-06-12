import { createElement } from "../../template";
import "./registration.scss";
import Input from "../input";

const RegistrationComponent = (props) => {
  const registrationTemplate = `
    <form class="registration-form">
        {{ components.EmailInput }}
        {{ components.LoginInput }}
        {{ components.NameInput }}
        {{ components.SurnameInput }}
        {{ components.PhoneInput }}
        {{ components.PasswordInput }}
      <div class="submit">
        {{ components.SubmitButton }}
      </div>
    </form>
  `;
  const registrationData = {
    components: {
      EmailInput: Input({
        label: "Email",
        type: "email",
        class: "email-input mt-2",
      }),
      LoginInput: Input({
        label: "Login",
        type: "text",
        class: "login-input mt-2",
      }),
      NameInput: Input({
        label: "Name",
        type: "text",
        class: " name-input mt-2",
      }),
      SurnameInput: Input({
        label: "Surname",
        type: "text",
        class: "surname-input mt-2",
      }),
      PhoneInput: Input({
        label: "Phone",
        type: "tel",
        class: "phone-input mt-2",
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
        class: "submit-registration-button mt-2",
      }),
    },

    result: {
      email: "",
      login: "",
      name: "",
      surname: "",
      phone: "",
      password: "",
    },
  };

  const lregistrationEvents = [
    {
      selector: ".submit-registration-button",
      event: "click",
      func(e) {
        e.preventDefault();
        console.log("result:", this.get("result"));
      },
    },
    {
      selector: "root",
      event: "input",
      func(e) {
        if (e.target.classList.contains("login-input")) {
          this.set("result.login", e.target.value, true);
        } else if (e.target.classList.contains("password-input")) {
          this.set("result.password", e.target.value, true);
        } else if (e.target.classList.contains("email-input")) {
          this.set("result.email", e.target.value, true);
        } else if (e.target.classList.contains("name-input")) {
          this.set("result.name", e.target.value, true);
        } else if (e.target.classList.contains("surname-input")) {
          this.set("result.surname", e.target.value, true);
        } else if (e.target.classList.contains("phone-input")) {
          this.set("result.phone", e.target.value, true);
        }
      },
    },
  ];

  return createElement(
    registrationTemplate,
    registrationData,
    lregistrationEvents
  );
};

export default RegistrationComponent;
