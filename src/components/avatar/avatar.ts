import "./avatar.scss";
import { createElement, reactivData } from "../../template";

const Avatar = () => {
  const template = `<div class="avatar"></div>`;
  const rData = reactivData({});

  return createElement({ template, rData });
};

export default Avatar;
