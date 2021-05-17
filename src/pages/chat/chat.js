import { createTemplate } from "../../template";
import "./chat.scss";

const chatTemplate = `
<div class="chat">
  <div class="contacts-list">
    <input class="search" placeholder="search"></input>
    <div class="contact">
      <div class="avatar"></div>
      <div class="content">
        <p class="title">Test contact</p>
        <p class="subtitle">Message text</p>
      </div>
      <div class="badge"><span>2</span></div>
    </div>
  </div>
  <div class="main-field"></div>
</div>
`;

const chatData = {};

export default createTemplate(chatTemplate, chatData);
