import { createElement, reactivData } from "../../template";
import "./menu.scss";

const Menu = () => {
  const template = `
  <nav class="menu">
    {{ menuTemplateList }}
    <div class="theme-toggle">Toggle theme</div>
  </nav>
  `;

  const rData = reactivData({
    name: "menu",
    menuTemplateList() {
      return [
        { name: "Login", link: "/login" },
        { name: "Profile", link: "/profile" },
        { name: "Chat", link: "/chat" },
        { name: "Error", link: "/error" },
      ]
        .map((menu) => `<a href=${menu.link}>${menu.name}</a>`)
        .join("");
    },
  });
  return createElement({ template, rData });
};

export default Menu;
