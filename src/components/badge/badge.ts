import { createElement, reactivData } from "../../template";
import "./badge.scss";

type Props = {
  number: number;
};
const Badge = (props: Props) => {
  const template = `<div class="badge">{{ props.number }}</div>`;
  const rData = reactivData({ props });

  return createElement({ template, rData });
};

export default Badge;
