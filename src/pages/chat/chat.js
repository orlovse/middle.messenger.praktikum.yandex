import { createTemplate } from "../../template";
import "./chat.scss";
import Message from "../../components/message";
import Input from "../../components/input";
import Contact from "../../components/contact";
import Sender from "../../components/sender";

const Chat = (props) => {
  const chatTemplate = `
  <div class="chat">
    <div class="panel">
      {{ Search }}
      <div class="contact-list">
        {{ contactsList }}
      </div>
    </div>
    <div class="main">
      <div class="main-field">
        {{ messagesList }}
      </div>
      <div class="wrapper">
        {{ Sender }}
      </div>
    </div>
    </div>

  </div>
  `;

  const chatData = {
    contactsList: [
      Contact(),
      Contact(),
      Contact(),
      Contact(),
      Contact(),
      Contact(),
      Contact(),
      Contact(),
      Contact(),
      Contact(),
    ].join(" "),
    Search: Input({ label: "Search" }),
    messagesList: [
      Message({ text: "My test message with mock text", class: "my" }),
      Message({
        text:
          "Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime, sit in.Odio deserunt porro nesciunt nostrum labore est rerum et.",
      }),
      Message({
        text:
          "Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime",
      }),
      Message({
        text:
          "Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime, sit in.Odio deserunt porro nesciunt nostrum labore est rerum et.",
      }),
      Message({
        text:
          "Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime",
      }),
      Message({ text: "My test message with mock text", class: "my" }),
    ].join(" "),
    Sender: Sender,
  };
  return createTemplate(chatTemplate, chatData);
};

export default Chat;
