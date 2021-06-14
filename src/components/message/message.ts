import { createElement, reactivData } from "../../template";
import "./message.scss";
import { Avatar } from "../avatar";

type Props = {
  class?: string;
  text: string;
};

const template = `
<div class="message {{ class }}"> 
  <div class="message-avatar">
    {{ components.Avatar }}
  </div>
  {{ props.text }} 
  <span class="message-date">12:58</span>
</div>`;

export const Message = (props: Props) => {
  const rData = reactivData({
    props,
    class: props.class || "",
  });

  const components = {
    Avatar: Avatar(),
  };
  return createElement({ template, rData, components });
};
