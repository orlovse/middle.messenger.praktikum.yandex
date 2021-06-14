import "./avatar.scss";
import { createElement, reactivData } from "../../template";

const template = `<div class="avatar"></div>`;

export const Avatar = () => {
  const rData = reactivData({});

  return createElement({ template, rData });
};
