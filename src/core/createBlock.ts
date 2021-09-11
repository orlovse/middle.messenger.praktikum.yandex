import { Block } from './block';
import * as Handlebars from 'handlebars';

type CreateBlockProps = {
  components? : any;
  componentDidMount?(): {};
  data?: any;
  events?: any;
  props?: any;
  template: string;
}

export const createBlock = ({components, componentDidMount, events, props, template, data} : CreateBlockProps) => {
  class Component extends Block {
    constructor() {
      super({...props, ...data, ...events}, {...components})
    }

    componentDidMount() {
      componentDidMount && this.setProps({...props, ...componentDidMount()})
      // this.setProps({...props, onnew: 'tut?'})
      // console.log('tetetet')
      // if(componentDidMount && typeof componentDidMount === 'function'){
      //   componentDidMount(this)
      // }
    }

    render() {
      const tmpl = Handlebars.compile(template)
      return tmpl(this.props)
    }
  }

  return new Component()
}
