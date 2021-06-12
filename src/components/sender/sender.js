import { createElement } from "../../template";
import "./sender.scss";
import Input from "../input";
import Button from "../button";

const Sender = (props) => {
  const senderTemplate = `
    <div class="sender">
      {{ components.OptionsButton }}
      {{ components.Input }}
      {{ components.SendButton }}
    </div>
  `;
  const senderData = {
    props,
    components: {
      Input: Input({ label: "Message" }),
      SendButton: Button({ name: "Send" }),
      OptionsButton: Button({ name: "=>" }),
    },
  };

  return createElement(senderTemplate, senderData);
};

export default Sender;
