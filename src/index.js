import "../static/styles.scss";
import { renderTemplate } from "./template";
import main from "./pages/main";
import error from "./pages/error";

const path = window.location.pathname;
const appRouts = {
  "/": main,
  "/login": 2,
  "/signin": 3,
  "/profile": 4,
  "/chat": 5,
  "/error": error,
};

if (appRouts[path]) {
  renderTemplate(appRouts[path]);
} else {
  renderTemplate(appRouts["/error"]);
}
