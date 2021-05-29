import "./badge.scss";
import { createTemplate } from "../../template";

const Badge = (props) => {
  const badgeTemplate = `<div class="badge">{{ props.number }}</div>`;
  const badgeData = { props };

  return createTemplate(badgeTemplate, badgeData);
};

export default Badge;
