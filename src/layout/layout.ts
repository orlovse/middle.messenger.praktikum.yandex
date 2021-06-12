import { createElement } from "../template/index";
import "./layout.scss";
import Menu from "../components/menu";

type Props = {
  component: HTMLElement;
};
const Layout = (props: Props) => {
  const layoutTemplate = `
    <div class="layout">
      {{ components.Menu }}
      <main class="container">
        {{ props.component }}
      </main>
    </div>
  `;
  const layoutData = { props, components: { Menu: Menu() } };
  return createElement(layoutTemplate, layoutData);
};

export default Layout;
