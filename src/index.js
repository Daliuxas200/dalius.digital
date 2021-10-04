import "./static/scss/style.scss";

let sidebarFirst = document.querySelector(".sidebar.first");
let sidebarSecond = document.querySelector(".sidebar.second");

window.addEventListener("DOMContentLoaded", (event) => {
  const height = sidebarFirst.clientHeight;
  sidebarFirst.style.transform = `translateY(${height / 2}px)`;
  sidebarSecond.style.transform = `translateY(${height / 2}px)`;
  console.log(height);
});
