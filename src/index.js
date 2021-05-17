import "../static/styles.scss";
import {} from "./pages/main";
import { renderTemplate } from "./template";

const path = window.location.pathname;
const appRouts = {
  "/": 1,
  "/login": 2,
  "/signin": 3,
  "/profile": 4,
  "/chat": 5,
  "/error": 6,
};

if (appRouts[path]) {
  renderTemplate(main);
  console.log("main", main);
  console.log(appRouts[path]);
}
