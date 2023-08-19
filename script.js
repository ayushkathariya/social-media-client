const htmlElement = document.querySelector("html");
const mode = localStorage.getItem("theme");

if (mode === "light") {
  htmlElement.setAttribute("data-theme", "light");
} else {
  htmlElement.setAttribute("data-theme", "dark");
}
