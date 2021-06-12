import { createElement } from "../../template";
import "./message.scss";
import Avatar from "../avatar";

type Props = {
  class?: string;
  text: string;
};
const Message = (props: Props) => {
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
