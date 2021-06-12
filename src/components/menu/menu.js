import { createElement } from "../../template";
import "./menu.scss";

const Menu = (props) => {
  const menuTemplate = `
  <nav class="menu">
    {{ menuTemplateList }}
  </nav>
  `;

  const menuData = {
    name: "menu",
    props,
    menuList: [
      { name: "Login", link: "/login" },
      { name: "Profile", link: "/profile" },
      { name: "Chat", link: "/chat" },
      { name: "Error", link: "/error" },
    ],
    menuTemplateList() {
      return menuData.menuList
        .map((menu) => `<a href=${menu.link}>${menu.name}</a>`)
        .join("");
    },
  };
  return createElement(menuTemplate, menuData);
};

export default Menu;
