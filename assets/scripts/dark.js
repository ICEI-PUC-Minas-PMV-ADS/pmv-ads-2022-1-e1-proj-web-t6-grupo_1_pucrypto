// MODO NOTURNO
const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  primaryColor: getStyle(html, "----primary-color"),
  secondaryColor: getStyle(html, "--secondary-color"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
  btnDetails: getStyle(html, "--btn-details"),
  hoverDetails: getStyle(html, "--hover-details"),
  linksDetails: getStyle(html, "--details-links"),
  borderDetails: getStyle(html, "--border-details"),
};

const darkMode = {
  primaryColor: "#212121",
  secondaryColor: "#EDF2FC",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
