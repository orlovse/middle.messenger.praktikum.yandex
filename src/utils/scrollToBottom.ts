export const scrollToBottom = (query: string) => {
  const el = document.querySelector(query);
  if (el) {
    el!.scrollTop = el!.scrollHeight;
  }
};
