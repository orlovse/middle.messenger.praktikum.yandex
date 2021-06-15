import { createElement, reactivData } from "../../core";
import "./component.scss";
import { Button } from "../button";

type Props = {
  class?: string;
};

const template = `
<div class="{{ props.class }}">
  <div class="name">{{ name }}</div>
  {{ components.componentsList }}
  <div>{{ components.Button }}</div>
</div>
`;

export const Component = (props: Props) => {
  const rData = reactivData({
    props,
    name: "Test component",
    someData: {
      firstValue: "test",
    },
  });

  const components = {
    componentsList: [Button({}), Button({}), Button({})],
    Button: Button({}),
  };
  const events = [
    {
      selector: "root",
      event: "click",
      func(e: Event) {
        console.log("func must not be arrow.");
        //get data, change data:
        const newValue = "new value";
        rData.set("someData.firstValue", newValue);
        console.log(rData.get("someData.firstValue"));
      },
    },
  ];
  return createElement({ template, rData, events, components });
};
