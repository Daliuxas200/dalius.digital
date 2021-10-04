import "./static/scss/style.scss";

const adjustSidebar = require("./js/sidebar");
const navigation = require("./js/navigation");

document.addEventListener("DOMContentLoaded", () => {
  navigation();
  adjustSidebar();
});
