import { createTemplate } from "../../template";

const errorTemplate = `
<div>{{test}}</div>
`;

const errorDate = {
  test: "error page",
};

export default createTemplate(errorTemplate, errorDate);
