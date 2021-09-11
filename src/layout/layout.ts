import { createBlock } from './../core/createBlock';
import "./layout.scss";
import { Menu } from "../components/menu";

const template = `
<div class="layout">
  <div data-component="menuComponent"></div>
  <main class="container" id="layout-children">
  </main>
</div>
`;
export const Layout = () => {
  const components = {menuComponent: Menu()}
  return createBlock({ template, components });
};

