import "../static/styles.scss";
import { mountTemplate, createTemplate } from "./template";
import Main from "./pages/main";
import Error from "./pages/error";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import Layout from "./layout";

const path = window.location.pathname;
const appRouts = {
  "/": Main,
  "/login": Login,
  "/profile": Profile,
  "/chat": Chat,
  "/error": Error({ type: "500" }),
};

mountTemplate(Layout({ child: appRouts[path] || Error({ type: "404" }) }));

// if (appRouts[path]) {
//   mountTemplate(appRouts[path]);
// } else {
//   mountTemplate(Error({ type: "404" }));
// }
