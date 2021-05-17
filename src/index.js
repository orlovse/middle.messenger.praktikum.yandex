import "../static/styles.scss";

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
  console.log(appRouts[path]);
}
