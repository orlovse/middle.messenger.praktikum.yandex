import "./contact.scss";

import Avatar from "../avatar";
import Badge from "../badge";

import { createElement, reactivData } from "../../template";

const Contact = () => {
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
  const rData = reactivData({});

  const components = {
    Avatar: Avatar(),
    Badge: Badge({ number: 2 }),
  };

  return createElement({ template, rData, components });
};

export default Contact;
