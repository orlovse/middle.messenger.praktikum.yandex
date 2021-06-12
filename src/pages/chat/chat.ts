import { createElement } from "../../template";
import "./chat.scss";
import Message from "../../components/message";
import Input from "../../components/input";
import Contact from "../../components/contact";
import Sender from "../../components/sender";

const Chat = () => {
  const chatTemplate = `
  <div class="chat">
    <div class="panel">
      {{ components.Search }}
      <div class="contact-list">
        {{ components.contactsList }}
      </div>
    </div>
    <div class="main">
      <div class="main-field">
        {{ components.messagesList }}
      </div>
      <div class="wrapper">
        {{ components.Sender }}
      </div>
    </div>
    </div>
  </div>
  `;

  const chatData = {
    components: {
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
      ],
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
      ],
      Sender: Sender(),
    },
  };
  return createElement(chatTemplate, chatData);
};

export default Chat;
