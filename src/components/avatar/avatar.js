import "./avatar.scss";
import { createElement } from "../../template";

const Avatar = (props) => {
  const avatarTemplate = `<div class="avatar"></div>`;
  const avatarData = { props };

  return createElement(avatarTemplate, avatarData);
};

export default Avatar;
