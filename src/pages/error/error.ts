import { createElement, reactivData } from "../../core";
import "./error.scss";

type Props = {
  type: string;
};

const template = `
<div class="error">
  <div class="window">
    <p class="title">{{ props.type }}</p>
    <a href="/">Back to chats</a>
  </div>
</div>
`;

export const Error = (props: Props) => {
  const rData = reactivData({
    props,
    test: 1,
  });

  return createElement({ template, rData });
};
