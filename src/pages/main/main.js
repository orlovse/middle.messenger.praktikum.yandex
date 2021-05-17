import { createTemplate } from "../../template";
import menu from "../../components/menu";

const mainTemplate = `
  <div class={{name}}>
    {{menu}}
  </div>
`;

const mainData = {
  name: "test",
  menu: createTemplate(menu),
};

export default createTemplate(mainTemplate, mainData);
