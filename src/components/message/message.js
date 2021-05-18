import { createTemplate } from "../../template";
import "./message.scss";

const Message = (props) => {
  const messageTemplate = `
    <div class="message {{props.class}}"> 
    {{ props.text }} 
  </div>`;
  const messageData = {
    props,
  };
  return createTemplate(messageTemplate, messageData);
};

export default Message;
