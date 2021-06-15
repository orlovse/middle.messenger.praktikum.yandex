import "./contact.scss";
import { Avatar, Badge } from "../";
import { createElement, reactivData } from "../../core";

const template = `
<div class="contact">
  {{ components.Avatar }}
  <div class="content">
    <p class="title">Test contact</p>
    <p class="subtitle">Message text</p>
  </div>
  {{ components.Badge }}
</div>
`;

export const Contact = () => {
  const rData = reactivData({});

  const components = {
    Avatar: Avatar(),
    Badge: Badge({ number: 2 }),
  };

  return createElement({ template, rData, components });
};
