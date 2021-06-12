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

  // const lregistrationEvents = [
  //   {
  //     selector: ".submit-registration-button",
  //     event: "click",
  //     func: (e) => {
  //       e.preventDefault();
  //       console.log("result:", registrationData.result);
  //     },
  //   },
  //   {
  //     selector: ".registration-form",
  //     event: "input",
  //     func: (e) => {
  //       if (e.target.classList.contains("login-input")) {
  //         registrationData.result.login = e.target.value;
  //       } else if (e.target.classList.contains("password-input")) {
  //         registrationData.result.password = e.target.value;
  //       } else if (e.target.classList.contains("email-input")) {
  //         registrationData.result.email = e.target.value;
  //       } else if (e.target.classList.contains("name-input")) {
  //         registrationData.result.name = e.target.value;
  //       } else if (e.target.classList.contains("surname-input")) {
  //         registrationData.result.surname = e.target.value;
  //       } else if (e.target.classList.contains("phone-input")) {
  //         registrationData.result.phone = e.target.value;
  //       }
  //     },
  //   },
  // ];

  return createElement(registrationTemplate, registrationData);
};

export default RegistrationComponent;
