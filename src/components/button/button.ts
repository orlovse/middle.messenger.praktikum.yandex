import { createElement, reactivData } from "../../template";
import "./button.scss";

type Props = {
  name?: string;
  class?: string;
};

const template = `<button class="button {{ class }}">{{ props.name }}</button>`;

export const Button = (props: Props) => {
  const rData = reactivData({ props, class: props.class || "" });

  return createElement({ template, rData });
};
