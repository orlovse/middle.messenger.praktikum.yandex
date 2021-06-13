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
    <div class="testbtn tstclass">Testbtn {{ test }}</div>
  </div>
  `;

  const rData = reactivData({
    props,
    test: 1,
  });

  const events = [
    {
      selector: ".testbtn",
      event: "click",
      func() {
        rData.set("test", rData.get("test") + 1);
      },
    },
  ];

  return createElement({ template, rData, events });
};

export default Error;
