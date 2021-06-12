import { createElement } from "../../template";
import "./profile.scss";
import Input from "../../components/input";
import Button from "../../components/button";

const Profile = () => {
  const profileTemplate = `
  <div class="profile">
    <div class="sheet">
      <form class="profile-form">    
        <div class="avatar"></div>
        <div class="fields">
          {{ components.fieldsConfig }}
        </div>
        <div class="actions">
          {{ components.SubmitButton }}
        </div>
      </form>
    </div>
  </div>
  `;

  const profileData = {
    components: {
      fieldsConfig: [
        Input({ label: "email", class: "profile-email mb-1" }),
        Input({ label: "login", class: "profile-login mb-1" }),
        Input({ label: "name", class: "profile-name mb-1" }),
        Input({ label: "surname", class: "profile-surname mb-1" }),
        Input({ label: "nickname", class: "profile-nickname mb-1" }),
        Input({ label: "phone", class: "profile-phone mb-1" }),
      ],
      SubmitButton: Button({
        name: "Save",
        //type: "submit",
        //value: "Save",
        class: "save-profile-button mt-2",
      }),
    },
    result: {
      email: "",
      login: "",
      name: "",
      surname: "",
      nickname: "",
      phone: "",
    },
  };

  const profileEvents = [
    {
      selector: ".save-profile-button",
      event: "click",
      func(e: Event) {
        e.preventDefault();
        console.log("test", this.get("result"));
      },
    },
    {
      selector: ".profile-form",
      event: "input",
      func(e: { target: HTMLInputElement }) {
        if (e.target.classList.contains("profile-email")) {
          this.set("result.email", e.target.value, true);
        } else if (e.target.classList.contains("profile-login")) {
          this.set("result.login", e.target.value, true);
        } else if (e.target.classList.contains("profile-name")) {
          this.set("result.name", e.target.value, true);
        } else if (e.target.classList.contains("profile-surname")) {
          this.set("result.surname", e.target.value, true);
        } else if (e.target.classList.contains("profile-nickname")) {
          this.set("result.nickname", e.target.value, true);
        } else if (e.target.classList.contains("profile-phone")) {
          this.set("result.phone", e.target.value, true);
        }
      },
    },
  ];

  return createElement(profileTemplate, profileData, profileEvents);
};

export default Profile;
