import { Block } from "../../core/block";
import { ROUTES } from "../../router";
import * as Handlebars from "handlebars";

const tmpl = `
<div>
<button>Click</button>
<div>errorText: {{errorText}}</div>
</div>

`

export const createF = ({props, componentDidMount, template}) => {
  return class ClassName extends Block {
    constructor() {
      super({...props}, {});
  }
  
  componentDidMount() {
    componentDidMount && this.setProps({...props, ...componentDidMount()})
      // eslint-disable-next-line
      //authController.auth(() => {});
      // console.log('ABC')
      // this.setProps({errorCode: 'testov'})
  }
  
  render (): string {
    const ab = Handlebars.compile(template)
      return ab(this.props);
  }
  }
}

export const Button = (props) => createF({template: tmpl, props: {...props, errorText: "Show error?"}, componentDidMount: () => {
  return {
    errorText: "Changed text"
  }
}})
