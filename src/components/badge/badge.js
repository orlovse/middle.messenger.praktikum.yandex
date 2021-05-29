import "./badge.scss";
import { createTemplate } from "../../template";

const Badge = (props) => {
  const badgeTemplate = `<div class="badge"><span>{{ props.number }}</span></div>`;
  const badgeData = { props };

  return createTemplate(badgeTemplate, badgeData);
};

export default Badge;
