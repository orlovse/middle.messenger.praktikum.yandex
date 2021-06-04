import { createTemplate } from "../../template";
import "./avatar.scss";

const Avatar = (props) => {
  const avatarTemplate = `<div class="avatar"></div>`;
  const avatarData = { props };

  return createTemplate(avatarTemplate, avatarData);
};

export default Avatar;
