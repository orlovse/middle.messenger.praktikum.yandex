import * as Handlebars from 'handlebars';
import { Block } from './block';
import { CreateBlockPropsType } from '../types';

export const createBlock = ({
  components,
  componentDidMount,
  events,
  props,
  template,
  data
}: CreateBlockPropsType) => {
  class Component extends Block {
    constructor() {
      super({ ...props, ...data, ...events }, { ...components });
    }

    componentDidMount() {
      componentDidMount && componentDidMount(this.setProps, this.props);
    }

    render() {
      const tmpl = Handlebars.compile(template);
      return tmpl(this.props);
    }
  }

  const CompoentToRender = new Component();
  return CompoentToRender;
};
