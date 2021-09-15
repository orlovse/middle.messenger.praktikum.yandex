export const createHTMLfromTemplate = (stringHTML: string) => {
  const blockAsHtml = new DOMParser().parseFromString(stringHTML, 'text/html')
    .body.firstChild;
  return (blockAsHtml as HTMLElement) || document.createElement('div');
};
