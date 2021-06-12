import { createElement } from "../../template";
import "./error.scss";

const Error = (props) => {
  const errorTemplate = `
  <div class="error">
    <div class="window">
      <p class="title">{{ props.type }}</p>
      <a href="/">Back to chats</a>
    </div>
    <div class="testbtn tstclass">Testbtn {{ test }}</div>
  </div>
  `;

  const errorData = {
    test: "error page",
    props,
    test: 1,
  };

  const events = [
    {
      selector: ".testbtn",
      event: "click",
      func(e) {
        this.set("test", this.get("test") + 1);
      },
    },
  ];

  return createElement(errorTemplate, errorData, events);
};

export default Error;
