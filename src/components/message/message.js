import { createTemplate } from "../../template";
import "./message.scss";
import Avatar from "../avatar";

const Message = (props) => {
  const messageTemplate = `
    <div class="message {{ props.class }}"> 
      <div class="message-avatar">
        {{Avatar}}
      </div>
      {{ props.text }} 
    </div>`;
  const messageData = {
    props,
    Avatar: Avatar,
  };
  return createTemplate(messageTemplate, messageData);
};

export default Message;
