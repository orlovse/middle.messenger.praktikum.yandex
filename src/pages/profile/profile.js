import { createTemplate } from "../../template";
import "./profile.scss";
import Input from "../../components/input";
import Button from "../../components/button";

const Profile = (props) => {
  const profileTemplate = `
  <div class="profile">
    <div class="sheet">
      <div class="avatar"></div>
      <div class="fields">
        {{InputMail}}
        {{InputLogin}}
        {{InputName}}
        {{InputSurname}}
        {{InputNickname}}
        {{InputPhone}}
      </div>
      <div class="actions">
        {{Button}}
      </div>
    </div>
  </div>
  `;

  const profileData = {
    InputMail: Input({ name: "email", value: "mail@test.com" }),
    InputLogin: Input({ name: "login", value: "orlov" }),
    InputName: Input({ name: "name", value: "Sergey" }),
    InputSurname: Input({ name: "surname", value: "Orlov" }),
    InputNickname: Input({ name: "nickname", value: "Sergey" }),
    InputPhone: Input({ name: "phone", value: "+79140000000" }),
    Button: Button({ name: "Save" }),
  };

  return createTemplate(profileTemplate, profileData);
};

export default Profile;
