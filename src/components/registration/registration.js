import { createTemplate } from "../../template";
import "./registration.scss";
import Input from "../input";

const RegistrationComponent = (props) => {
  const registrationTemplate = `
    <form onsubmit="{{handleSubmit}}" class="registration-form">
        {{EmailInput}}
        {{LoginInput}}
        {{NameInput}}
        {{SurnameInput}}
        {{PhoneInput}}
        {{PasswordInput}}
        {{PasswordInput}}
      <div class="submit">
        {{SubmitButton}}
      </div>
    </form>
  `;
  const registrationData = {
    EmailInput: Input({ label: "Email", type: "email", class: "mt-2" }),
    LoginInput: Input({ label: "Login", type: "text", class: "mt-2" }),
    NameInput: Input({ label: "Name", type: "text", class: "mt-2" }),
    SurnameInput: Input({ label: "Surname", type: "text", class: "mt-2" }),
    PhoneInput: Input({ label: "Phone", type: "tel", class: "mt-2" }),
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

  return createTemplate(registrationTemplate, registrationData);
};

export default RegistrationComponent;
