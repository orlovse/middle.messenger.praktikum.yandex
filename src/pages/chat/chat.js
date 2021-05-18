import { createTemplate } from "../../template";
import "./chat.scss";

const Chat = (props) => {
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
    <div class="main-field">
      <div class="message my">My test message with mock text</div>
      <div class="message">Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime, sit in.Odio deserunt porro nesciunt nostrum labore est rerum et. Voluptatem deleniti quam sunt in odit nam aperiam doloremque eligendi minus, id sequi. Iste facilis voluptatem sapiente quo quas et doloremque!
      </div>
    </div>
  </div>
  `;

  const chatData = {};

  return createTemplate(chatTemplate, chatData);
};

export default Chat;
