import "./avatar.scss";
import { createElement } from "../../template";

const Avatar = () => {
  const avatarTemplate = `<div class="avatar"></div>`;
  const avatarData = {};

  return createElement(avatarTemplate, avatarData);
};

export default Avatar;
