import { createTemplate } from "../../template";
import "./menu.scss";

const Menu = (props) => {
  const menuTemplate = `
  <div class="menu">
    {{menuTemplateList}}
  </div>
  `;

  const menuDate = {
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
  return createTemplate(menuTemplate, menuDate);
};

export default Menu;
