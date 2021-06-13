import { createElement, reactivData } from "../../template";
import "./input.scss";

type Props = {
  class?: string;
  label?: string;
  type?: string;
  value?: string | number;
};

const Input = (props: Props) => {
  console.log("input, props", props);
  const template = `
    <input 
      class="input {{ class }}" 
      placeholder="{{ placeholder }}" 
      type="{{ type }}" 
      value="{{ value }}" 
    />
  `;

  const rData = reactivData({
    placeholder: props.label || "label",
    type: props.type || "type",
    value: props.value || "",
    class: props.class || "",
  });

  return createElement({ template, rData });
};

export default Input;
