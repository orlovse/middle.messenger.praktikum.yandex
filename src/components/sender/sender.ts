import { createElement, reactivData } from "../../template";
import "./sender.scss";
import Input from "../input";
import Button from "../button";

const Sender = () => {
  const template = `
    <div class="sender">
      {{ components.OptionsButton }}
      {{ components.Input }}
      {{ components.SendButton }}
    </div>
  `;
  const rData = reactivData({});

  const components = {
    Input: Input({ label: "Message", class: "mx-1" }),
    SendButton: Button({ name: "Send" }),
    OptionsButton: Button({ name: "=>" }),
  };

  return createElement({ template, rData, components });
};

export default Sender;
