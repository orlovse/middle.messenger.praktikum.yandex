import { createElement, reactivData } from "../../core";
import "./sender.scss";
import { Button, Input } from "../";

const template = `
<div class="sender">
  {{ components.OptionsButton }}
  {{ components.Input }}
  {{ components.SendButton }}
</div>
`;
export const Sender = () => {
  const rData = reactivData({});

  const components = {
    Input: Input({ label: "Message", class: "px-2" }),
    SendButton: Button({ name: "Send" }),
    OptionsButton: Button({ name: "=>" }),
  };

  return createElement({ template, rData, components });
};
