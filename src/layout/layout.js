import { createTemplate } from "../template";
import "./layout.scss";
import Menu from "../components/menu";

const Layout = (props) => {
  const layoutTemplate = `
    <div class="layout">
      {{Menu}}
      <div class="container">
        {{props.child}}
      </div>
    </div>
  `;
  const layoutData = { props, Menu };
  return createTemplate(layoutTemplate, layoutData);
};

export default Layout;
