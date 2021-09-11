import { Block } from "../core/block";

import { createBlock } from '../core/createBlock';


type IError500PageProps = {
  errorCode: string,
  errorText: string,
}

const template = `
<div class="page-centered">
    <main class="error-page__content">
        <h1 class="error-page__title">{{ errorCode }}</h1>
        <p class="error-page__text">{{ errorText }}</p>
        <a href="{{routes}}" class="error-page__link">Назад к чатам</a>
    </main>
</div>
`;

export const Error500Page = (props: IError500PageProps) => {
  return createBlock({props, template})
}

// export class Error500Page extends Block {
//   constructor(props: IError500PageProps) {
//       super({...props}, {});
//   }

//   componentDidMount() {
//       // eslint-disable-next-line
//      // authController.auth(() => {});
//   }

//   render () {
//     const tmpl = Handlebars.compile(template);

//       return tmpl({ 
//         routes: 'ROUTES',
//         errorCode: 'this.props.errorCode',
//         errorText: 'this.props.errorText',      
//       })
//   }
// }
