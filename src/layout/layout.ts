import { createElement, reactivData } from "../template/index";
import "./layout.scss";
import Menu from "../components/menu";

type Props = {
  component: HTMLElement;
};
const Layout = (props: Props) => {
  const template = `
    <div class="layout">
      {{ components.Menu }}
      <main class="container">
        {{ components.Child }}
      </main>
    </div>
  `;
  const rData = reactivData({ props });
  const components = {
    Menu: Menu(),
    Child: props.component,
  };
  return createElement({ template, rData, components });
};

export default Layout;
