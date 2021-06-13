import { ValidationRules } from "./../../types";
import { createElement, reactivData } from "../../template";
import "./input.scss";
import { checkValid } from "../../utils";

type Props = {
  class?: string;
  label?: string;
  type?: string;
  value?: string | number;
  rules?: ValidationRules;
};

const Input = (props: Props) => {
  const template = `
    <div class="input-component {{ class }}">
      <input 
        placeholder="{{ placeholder }}" 
        type="{{ type }}" 
        value="{{ value }}" 
      />
      <span class="input-error-message hide"></span>    
    </div>

  `;

  const rData = reactivData({
    placeholder: props.label || "label",
    type: props.type || "type",
    value: props.value || "",
    class: props.class || "",
  });

  const ruleEvent = {
    selector: "input",
    event: "blur",
    func(e: Event & { target: HTMLInputElement }) {
      const value = e.target.value;
      const messageEl = e.target.nextElementSibling;
      if (props.rules) {
        const { isValid, currentMessage } = checkValid(props.rules, value);
        if (!isValid) {
          (messageEl as HTMLElement).innerText = currentMessage;
          (messageEl as HTMLElement)?.classList.remove("hide");
        } else {
          (messageEl as HTMLElement)?.classList.add("hide");
        }
      }
    },
  };

  const events = props.rules ? [ruleEvent] : null;

  return createElement({ template, rData, events });
};

export default Input;
