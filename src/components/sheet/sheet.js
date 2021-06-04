import "./sheet.scss";
import { createTemplate } from "../../template";

const Sheet = (props) => {
  const sheetTemplate = `<div class="main-field">{{ props }}</div>`;
  const sheetData = {
    props,
  };

  return createTemplate(sheetTemplate, sheetData);
};

export default Sheet;
