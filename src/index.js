import "./static/scss/style.scss";

const navigation = require("./js/navigation");
const flippyCards = require("./js/flippy-cards");

document.addEventListener("DOMContentLoaded", () => {
  navigation();
  flippyCards();
});
