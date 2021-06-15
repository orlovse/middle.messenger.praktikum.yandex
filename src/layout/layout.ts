import { createElement, reactivData } from "../core/index";
import "./layout.scss";
import { Menu } from "../components/menu";

type Props = {
  component: HTMLElement;
};

const template = `
<div class="layout">
  {{ components.Menu }}
  <main class="container">
    {{ components.Child }}
  </main>
</div>
`;
export const Layout = (props: Props) => {
  const rData = reactivData({ props });
  const components = {
    Menu: Menu(),
    Child: props.component,
  };
  return createElement({ template, rData, components });
};
