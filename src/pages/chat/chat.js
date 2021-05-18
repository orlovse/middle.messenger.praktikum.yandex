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
      {{Search}}
      <div class="contact-list">
        {{Contact}}
        {{Contact}}
        {{Contact}}
        {{Contact}}
        {{Contact}}
        {{Contact}}
        {{Contact}}
        {{Contact}}
        {{Contact}}
        {{Contact}}
      </div>
    </div>
    <div class="main">
      <div class="main-field">
        {{Message}}
        {{Message2}}
      </div>
      <div class="wrapper">
      {{Sender}}
      </div>

    </div>
    </div>

  </div>
  `;

  const chatData = {
    Contact,
    Search: Input({ label: "Search" }),
    Message: Message({ text: "My test message with mock text", class: "my" }),
    Message2: Message({
      text:
        "Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime, sit in.Odio deserunt porro nesciunt nostrum labore est rerum et.",
    }),
    Sender: Sender,
  };
  return createTemplate(chatTemplate, chatData);
};

export default Chat;
