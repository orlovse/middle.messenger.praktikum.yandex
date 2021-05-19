import "./sender.scss";
import { createTemplate } from "../../template";
import Input from "../input";
import Button from "../button";

const Sender = (props) => {
  const senderTemplate = `
    <div class="sender">
      {{OptionsButton}}
      {{Input}}
      {{SendButton}}
    </div>
  `;
  const senderData = {
    props,
    Input: Input({ label: "Message" }),
    SendButton: Button({ name: "Send" }),
    OptionsButton: Button({ name: "=>" }),
  };

  return createTemplate(senderTemplate, senderData);
};

export default Sender;
