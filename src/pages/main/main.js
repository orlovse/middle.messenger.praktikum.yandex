import { createTemplate } from "../../template";
import Menu from "../../components/menu";

const Main = (props) => {
  const mainTemplate = `
  <div class={{name}}>
    {{menu}}
  </div>
`;

  const mainData = {
    name: "test",
    menu: Menu,
  };

  createTemplate(mainTemplate, mainData);
};

export default Main;
