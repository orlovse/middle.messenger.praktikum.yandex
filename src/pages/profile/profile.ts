import { Button } from '../../components';
import { createBlock } from '../../core/createBlock';
import { authController } from '../../controllers/authController';
import { userStore } from '../../core/store';
import { SetPropsType } from '../../types';

import './profile.scss';

const template = `
<div class="profile">
  <div class="sheet">
    <form class="profile-form">    
      <div class="avatar"></div>
      <div class="fields">
      {{onnew}}
      {{test}}
      {{ login }}
      </div>
      <div class="actions">
        <div data-component="buttonTest"></div>
      </div>
    </form>
  </div>
</div>
`;

export const Profile = () => {
  const data = {
    test: 1
  };
  const componentDidMount = (setProps: SetPropsType) => {
    authController.auth((user) => {
      setProps(user);
      console.log('userStore', userStore.state);
    });
    // us.then(() => {
    //   console.log('ttt',  userStore.state)
    // })
  };
  const components = {
    buttonTest: Button({
      name: 'click',
      onClickChild: (setProps, props) => (e) => {
        e.preventDefault();
        setProps({ test: props.test + 1 });
        console.log('click', props);
      }
    })
  };

  const result = createBlock({ components, componentDidMount, template, data });
  return result;
};

// export const Profile = () => {
//   const rData = reactivData({
//     result: {
//       email: "",
//       login: "",
//       name: "",
//       surname: "",
//       nickname: "",
//       phone: "",
//     },
//   });

//   const components = {
//     fieldsConfig: [
//       Input({
//         label: "email",
//         class: "profile-email mt-2",
//         rules: { email: true },
//       }),
//       Input({
//         label: "login",
//         class: "profile-login mt-2",
//         rules: { isRequired: true },
//       }),
//       Input({
//         label: "phone",
//         class: "profile-phone mt-2",
//         rules: { phone: true },
//       }),
//       Input({ label: "name", class: "profile-name mt-2" }),
//       Input({ label: "surname", class: "profile-surname mt-2" }),
//       Input({ label: "nickname", class: "profile-nickname mt-2" }),
//     ],
//     SubmitButton: Button({
//       name: "Save",
//       class: "save-profile-button mt-2 px-4",
//     }),
//   };

//   const events = [
//     {
//       selector: ".save-profile-button",
//       event: "click",
//       func(e: Event) {
//         const isValid = checkFormFields(e, ".profile-form");
//         if (isValid) {
//           console.log("result:", rData.get("result"));
//         } else {
//           console.error("Not all fields are valid");
//         }
//       },
//     },
//     {
//       selector: ".profile-form",
//       event: "input",
//       func(e: { target: HTMLInputElement }) {
//         if (e.target?.parentElement?.classList.contains("profile-email")) {
//           rData.set("result.email", e.target.value, true);
//         } else if (
//           e.target?.parentElement?.classList.contains("profile-login")
//         ) {
//           rData.set("result.login", e.target.value, true);
//         } else if (
//           e.target?.parentElement?.classList.contains("profile-name")
//         ) {
//           rData.set("result.name", e.target.value, true);
//         } else if (
//           e.target?.parentElement?.classList.contains("profile-surname")
//         ) {
//           rData.set("result.surname", e.target.value, true);
//         } else if (
//           e.target?.parentElement?.classList.contains("profile-nickname")
//         ) {
//           rData.set("result.nickname", e.target.value, true);
//         } else if (
//           e.target?.parentElement?.classList.contains("profile-phone")
//         ) {
//           rData.set("result.phone", e.target.value, true);
//         }
//       },
//     },
//   ];

//   return createElement({ template, rData, events, components });
// };
