import "./contact.scss";

import Avatar from "../avatar";
import Badge from "../badge";

import { createElement } from "../../template";

const Contact = (props) => {
  const contactTemplate = `
  <div class="contact">
    {{ Avatar }}
    <div class="content">
      <p class="title">Test contact</p>
      <p class="subtitle">Message text</p>
    </div>
    {{ Badge }}
  </div>
  `;
  const contactData = {
    Avatar: Avatar,
    Badge: Badge({ number: 2 }),
  };

  return createElement(contactTemplate, contactData);
};

export default Contact;
