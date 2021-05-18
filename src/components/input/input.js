import { createTemplate } from "../../template";
import "./input.scss";

const Input = (props) => {
  const inputTemplate = `
    <input class="input" placeholder={{placeholder}} type={{type}} value="{{value}}" />
  `;

  console.log("props", props);
  const inputData = {
    props,
    placeholder: props.label || "label",
    type: props.type || "type",
    value: props.value || "",
  };

  return createTemplate(inputTemplate, inputData);
};

export default Input;
