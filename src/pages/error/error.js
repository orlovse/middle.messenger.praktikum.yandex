import { createTemplate } from "../../template";
import "./error.scss";

const Error = (props) => {
  const errorTemplate = `
  <div class="error">
    <div class="window">
      <p class="title">{{props.type}}</p>
      <a>Back to chats</a>
    </div>
  </div>
  `;

  const errorDate = {
    test: "error page",
    props,
  };

  return createTemplate(errorTemplate, errorDate);
};

export default Error;
