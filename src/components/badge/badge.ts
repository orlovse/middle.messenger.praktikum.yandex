import { createElement, reactivData } from "../../core";
import "./badge.scss";

type Props = {
  number: number;
};

const template = `<div class="badge">{{ props.number }}</div>`;

export const Badge = (props: Props) => {
  const rData = reactivData({ props });

  return createElement({ template, rData });
};
