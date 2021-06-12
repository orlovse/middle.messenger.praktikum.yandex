import { createElement } from "../../template";
import "./sheet.scss";

const Sheet = (props) => {
  const sheetTemplate = `<div class="main-field">{{ props }}</div>`;
  const sheetData = {
    props,
  };

  return createElement(sheetTemplate, sheetData);
};

export default Sheet;
