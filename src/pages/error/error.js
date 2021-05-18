import { createTemplate } from "../../template";

const Error = (props) => {
  const errorTemplate = `
  <div>{{test}}</div>
  `;

  const errorDate = {
    test: "error page",
  };

  return createTemplate(errorTemplate, errorDate);
};

export default Error;
