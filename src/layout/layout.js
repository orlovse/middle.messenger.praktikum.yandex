import { createTemplate } from "../template";
import "./layout.scss";
import Menu from "../components/menu";

const Layout = (props) => {
  const layoutTemplate = `
    <div class="layout">
      {{ Menu }}
      <main class="container">
        {{ props.child }}
      </main>
    </div>
  `;
  const layoutData = { props, Menu };
  return createTemplate(layoutTemplate, layoutData);
};

export default Layout;
