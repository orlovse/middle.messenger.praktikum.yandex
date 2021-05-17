import "../static/styles.scss";

const path = window.location.pathname;
const appRouts = {
  "/home": 1,
  "/": 1,
  "/login": 2,
  "/signin": 3,
  "/profile": 4,
  "/chat": 5,
};

if (appRouts[path]) {
  console.log(appRouts[path]);
}
