import "./contact.scss";

import Avatar from "../avatar";
import Badge from "../badge";

import { createElement } from "../../template";

const Contact = () => {
  const contactTemplate = `
  <div class="contact">
    {{ components.Avatar }}
    <div class="content">
      <p class="title">Test contact</p>
      <p class="subtitle">Message text</p>
    </div>
    {{ components.Badge }}
  </div>
  `;
  const contactData = {
    components: {
      Avatar: Avatar(),
      Badge: Badge({ number: 2 }),
    },
  };

  return createElement(contactTemplate, contactData);
};

export default Contact;
