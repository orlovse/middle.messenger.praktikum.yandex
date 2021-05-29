import { createTemplate } from "../../template";
import "./input.scss";

const Input = (props) => {
  const inputTemplate = `
    <input class="input {{ class }}" placeholder="{{ placeholder }}" type="{{ type }}" value="{{ value }}" />
  `;

  const inputData = {
    props,
    placeholder: props.label || "label",
    type: props.type || "type",
    value: props.value || "",
    class: props.class || "",
  };

  return createTemplate(inputTemplate, inputData);
};

export default Input;
