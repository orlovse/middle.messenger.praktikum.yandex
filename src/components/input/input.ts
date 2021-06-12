import { createElement } from "../../template";
import "./input.scss";

type Props = {
  class?: string;
  label?: string;
  type?: string;
  value?: string | number;
};

const Input = (props: Props) => {
  const inputTemplate = `
    <input 
      class="input {{ class }}" 
      placeholder="{{ placeholder }}" 
      type="{{ type }}" 
      value="{{ value }}" 
    />
  `;

  const inputData = {
    placeholder: props.label || "label",
    type: props.type || "type",
    value: props.value || "",
    class: props.class || "",
  };

  return createElement(inputTemplate, inputData);
};

export default Input;
