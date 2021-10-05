import "./static/scss/style.scss";

const navigation = require("./js/navigation");
const flippyCards = require("./js/flippy-cards");
const projects = require("./js/projects");

document.addEventListener("DOMContentLoaded", () => {
  navigation();
  flippyCards();
  projects();
});
