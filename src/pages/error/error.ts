import { createBlock } from "../../core/createBlock";
import "./error.scss";

type PropsType = {
  type: string;
};

const template = `
<div class="error">
  <div class="window">
    <p class="title">{{ type }}</p>
    <a href="/">Back to chats</a>
  </div>
</div>
`;

export const Error = (props: PropsType) => {

  return createBlock({template, props})
}
