import { createTemplate } from "../../template";
import "./menu.scss";

const Menu = (props) => {
  const menuTemplate = `
  <div class="menu">
    {{menuTemplateList}}
  </div>
  `;

  const menuData = {
    menuList: [
      { name: "Main", link: "/" },
      { name: "Login", link: "/login" },
      { name: "Profile", link: "/profile" },
      { name: "Chat", link: "/chat" },
    ],
    menuTemplateList() {
      return menuDate.menuList
        .map((menu) => `<a href=${menu.link}>${menu.name}</a>`)
        .join("");
    },
  };
  return createTemplate(menuTemplate, menuData);
};

export default Menu;
