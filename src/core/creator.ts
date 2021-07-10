import * as Handlebars from "handlebars";
import { Block } from "./block";

type props = {
  template: string;
  componentDidMount?: () => void;
  children?: any;
  data?: any;
  props?: any;
  events?: any;
};

export const creator = ({
  template,
  componentDidMount,
  children,
  data,
  props,
  events,
}: props) => {
  return class ClassName extends Block {
    constructor(propses: props) {
      super({
        data,
        children,
        events,
        props: { ...props, ...propses?.data },
      });
    }
    componentDidMount() {
      componentDidMount && componentDidMount();
    }

    render() {
      const newChildren = Object.keys(this.props.children).reduce(
        (acc, key) => {
          acc[key] = this.props.children[key].render();
          return acc;
        },
        {}
      );
      return Handlebars.compile(template)({
        ...newChildren,
        ...this.props.data,
        props: this.props.props,
      });
    }
  };
};
