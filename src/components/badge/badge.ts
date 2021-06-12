import { createElement } from "../../template";
import "./badge.scss";

type Props = {
  number: number;
};
const Badge = (props: Props) => {
  const badgeTemplate = `<div class="badge">{{ props.number }}</div>`;
  const badgeData = { props };

  return createElement(badgeTemplate, badgeData);
};

export default Badge;
