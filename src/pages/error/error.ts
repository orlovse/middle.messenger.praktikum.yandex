import { createElement, reactivData } from "../../template";
import "./error.scss";

type Props = {
  type: string;
};

const Error = (props: Props) => {
  const template = `
  <div class="error">
    <div class="window">
      <p class="title">{{ props.type }}</p>
      <a href="/">Back to chats</a>
    </div>
  </div>
  `;

  const rData = reactivData({
    props,
    test: 1,
  });

  return createElement({ template, rData });
};

export default Error;
