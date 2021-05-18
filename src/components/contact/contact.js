import "./contact.scss";
import { createTemplate } from "../../template";
import Avatar from "../avatar";
import Badge from "../badge";

const Contact = (props) => {
  const contactTemplate = `
  <div class="contact">
    {{Avatar}}
    <div class="content">
      <p class="title">Test contact</p>
      <p class="subtitle">Message text</p>
    </div>
    {{Badge}}
  </div>
  `;
  const contactData = {
    Avatar: Avatar,
    Badge: Badge({ number: 2 }),
  };

  return createTemplate(contactTemplate, contactData);
};

export default Contact;
