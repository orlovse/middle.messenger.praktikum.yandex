import { createElement } from "../../template";
import "./badge.scss";

const Badge = (props) => {
  const badgeTemplate = `<div class="badge">{{ props.number }}</div>`;
  const badgeData = { props };

  return createElement(badgeTemplate, badgeData);
};

export default Badge;
