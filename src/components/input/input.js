import { createTemplate } from "../../template";
import "./input.scss";

const Input = (props) => {
  const inputTemplate = `
    <input class="input" placeholder={{placeholder}} type={{type}} />
  `;

  console.log("props", props.type);
  const inputData = {
    props,
    placeholder: props.label,
    type: props.type,
  };

  return createTemplate(inputTemplate, inputData);
};

export default Input;
