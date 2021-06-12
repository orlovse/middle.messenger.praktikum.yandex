import { createElement } from "../../template";
import "./profile.scss";
import Input from "../../components/input";
import Button from "../../components/button";

const Profile = (props) => {
  const profileTemplate = `
  <div class="profile">
    <div class="sheet">
      <div class="avatar"></div>
      <div class="fields">
        {{ components.fieldsConfig }}
      </div>
      <div class="actions">
        {{ components.Button }}
      </div>
    </div>
  </div>
  `;

  const profileData = {
    components: {
      fieldsConfig: [
        Input({ name: "email", value: "mail@test.com", class: "mb-1" }),
        Input({ name: "login", value: "orlov", class: "mb-1" }),
        Input({ name: "name", value: "Sergey", class: "mb-1" }),
        Input({ name: "surname", value: "Orlov", class: "mb-1" }),
        Input({ name: "nickname", value: "Sergey", class: "mb-1" }),
        Input({ name: "phone", value: "+79140000000", class: "mb-1" }),
      ].join(" "),
      Button: Button({ name: "Save" }),
    },
  };

  return [profileTemplate, profileData];
};

export default Profile;
