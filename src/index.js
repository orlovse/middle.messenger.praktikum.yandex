import "../static/styles.scss";
import { renderTemplate } from "./template";
import main from "./pages/main";
import error from "./pages/error";
import login from "./pages/login";
import profile from "./pages/profile";
import chat from "./pages/chat";

const path = window.location.pathname;
const appRouts = {
  "/": main,
  "/login": login,
  "/profile": profile,
  "/chat": chat,
  "/error": error,
};

if (appRouts[path]) {
  renderTemplate(appRouts[path]);
} else {
  renderTemplate(appRouts["/error"]);
}
