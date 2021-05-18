import { createTemplate } from "../../template";
import "./error.scss";

const Error = (props) => {
  const errorTemplate = `
  <div class="error">
    <div class="window">
      <p class="title">{{props.type}}</p>
      <a href="/">Back to chats</a>
    </div>
  </div>
  `;

  const errorData = {
    test: "error page",
    props,
  };

  return createTemplate(errorTemplate, errorData);
};

export default Error;
