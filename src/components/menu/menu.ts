import { createElement } from "../../template";
import "./menu.scss";

const Menu = () => {
  const menuTemplate = `
  <nav class="menu">
    {{ menuTemplateList }}
    <div class="theme-toggle">Toggle theme</div>
  </nav>
  `;

  const menuData = {
    name: "menu",
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
