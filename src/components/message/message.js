import { createElement } from "../../template";
import "./message.scss";
import Avatar from "../avatar";

const Message = (props) => {
  const messageTemplate = `
    <div class="message {{ props.class }}"> 
      <div class="message-avatar">
        {{ components.Avatar }}
      </div>
      {{ props.text }} 
      <span class="message-date">12:58</span>
    </div>`;
  const messageData = {
    props,
    components: {
      Avatar: Avatar(),
    },
  };
  return createElement(messageTemplate, messageData);
};

export default Message;
