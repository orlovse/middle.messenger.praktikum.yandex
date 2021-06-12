import { createElement } from "../../template/index";
import "./component.scss";
import Button from "../button";

type Props = {
  class?: string;
};

const Component = (props: Props) => {
  const template = `
    <div class="{{ props.class }}"> 
      <div class="name">{{ name }}</div>
      {{ components.componentsList }}
      <div>{{ components.Button }}</div>
    </div>
  `;

  const data = {
    props,
    components: {
      componentsList: [],
      Button: Button({}),
    },
    name: "Test component",
    someData: {
      firstValue: "test",
    },
  };

  const events = [
    {
      selector: "root",
      event: "click",
      func(e: Event) {
        console.log("func must not be arrow.");
        //get data, change data:
        const newValue = "new value";
        this.set("someData.firstValue", newValue);
        console.log(this.get("someData.firstValue"));
      },
    },
  ];

  return createElement(template, data, events);
};

export default Component;
