import "./toast.css";

export default (text, duration = 3000) => {
  try {
    document.body.removeChild(document.querySelector("div.toast"));
  } catch (e) {}

  const toast = document.createElement("DIV");
  toast.classList.add("toast");
  const content = document.createTextNode(text);
  toast.appendChild(content);
  toast.style.animationDuration = duration / 1000 + "s";
  toast.style["z-index"] = 99999;
  document.body.appendChild(toast);
  setTimeout(() => {
    try {
      document.body.removeChild(toast);
    } catch (e) {}
  }, duration);
};
