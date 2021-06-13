import { createElement, reactivData } from "../../template";
import "./button.scss";

type Props = {
  name?: string;
  class?: string;
};

const Button = (props: Props) => {
  const template = `<button class="button {{ class }}">{{ props.name }}</button>`;
  const rData = reactivData({ props, class: props.class || "" });

  return createElement({ template, rData });
};

export default Button;
