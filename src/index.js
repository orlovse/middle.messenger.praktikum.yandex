import "../static/styles.scss";
import { mountTemplate, createTemplate } from "./template";
import Error from "./pages/error";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import Layout from "./layout";

let path = window.location.pathname;
const appRouts = {
  "/": Chat,
  "/login": Login,
  "/profile": Profile,
  "/chat": Chat,
  "/error": Error({ type: "500" }),
};

mountTemplate(Layout({ child: appRouts[path] || Error({ type: "404" }) }));

const routing = (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const newPath = event.target.attributes[0].value;
    if (path !== newPath) {
      path = newPath;
      window.history.replaceState({}, "title", newPath);
      mountTemplate(
        Layout({ child: appRouts[newPath] || Error({ type: "404" }) })
      );
    }
  }
};

app.addEventListener("click", routing);
