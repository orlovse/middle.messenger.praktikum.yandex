import { createElement } from "../../template";
import "./sender.scss";
import Input from "../input";
import Button from "../button";

const Sender = () => {
  const senderTemplate = `
    <div class="sender">
      {{ components.OptionsButton }}
      {{ components.Input }}
      {{ components.SendButton }}
    </div>
  `;
  const senderData = {
    components: {
      Input: Input({ label: "Message", class: "mx-1" }),
      SendButton: Button({ name: "Send" }),
      OptionsButton: Button({ name: "=>" }),
    },
  };

  return createElement(senderTemplate, senderData);
};

export default Sender;
