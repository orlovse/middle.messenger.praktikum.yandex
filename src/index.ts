import "../static/styles.scss";
import { mountTemplate } from "./core";
import { Chat, Error, Login, Profile } from "./pages";
import { Layout } from "./layout";

let path = window.location.pathname;
const appRouts = {
  "/": Chat(),
  "/login": Login(),
  "/profile": Profile(),
  "/chat": Chat(),
  "/error": Error({ type: "500" }),
};

mountTemplate(
  Layout({ component: appRouts[path] || Error({ type: "404" }) }) as HTMLElement
);

const routing = (event: Event & { target: HTMLElement }) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const newPath = event.target.attributes[0].value;
    if (path !== newPath) {
      path = newPath;
      window.history.pushState({ path: newPath }, "title", newPath);
    }
  } else if (event.target.classList.contains("theme-toggle")) {
    const app = document.querySelector("#app");
    app?.classList.toggle("theme-dark");
    app?.classList.toggle("theme-light");
  }
};

if (document) {
  const app = document.querySelector("#app");
  if (app) {
    app.addEventListener("click", routing);
  }
}

(function (history) {
  const pushState = history.pushState;
  history.pushState = function (state) {
    mountTemplate(
      Layout({
        component: appRouts[state.path] || Error({ type: "404" }),
      }) as HTMLElement
    );
    return pushState.apply(history, arguments);
  };
})(window.history);
