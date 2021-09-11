import { Button } from "..";
import { router } from "../..";
import { logoutAPI } from "../../api/auth";
import { createElement, reactivData } from "../../core";
import { createBlock } from "../../core/createBlock";
import "./menu.scss";

const template = `
<nav class="menu">
  {{#each menuTemplateList}}
    <a href={{link}}>{{name}}</a>
  {{/each}}
  <div class="theme-toggle">Toggle theme</div>
  <div data-component="logoutButtonComponent"></div>
</nav>
`;

export const Menu = () => {
  const data = {
    menuTemplateList: [
              { name: "Login", link: "/login" },
              { name: "Profile", link: "/profile" },
              { name: "Chat", link: "/chat" },
              { name: "Error", link: "/404" },
            ]
  }
  const events = {onClick: (e) => {
    e.preventDefault()
    const tag = e.target
    if(tag.tagName === 'A'){
      const newPath = tag.getAttribute("href")
      router.go(newPath)
    } else if (tag.classList.contains("theme-toggle")) {
      const app = document.querySelector("#app");
      app?.classList.toggle("theme-dark");
      app?.classList.toggle("theme-light");
    }
  }}
  const components = {
    logoutButtonComponent: Button({
      name: "Logout",
      onClick: () => {
        logoutAPI()
      }
    })
  }
  return createBlock({components, template, data, events});
}

