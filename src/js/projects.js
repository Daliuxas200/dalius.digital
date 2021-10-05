function setupProjectsNav() {
  let projects = [...document.querySelectorAll(".project")];
  projects.forEach((project) => {
    let tabs = [...project.querySelectorAll(".project__navigation__item")];
    let contents = [...project.querySelectorAll(".project__content")];
    let active = tabs.find((t) => t.classList.contains("active")).dataset
      .target;

    function checkElement(element, target) {
      if (
        element.dataset.id !== active &&
        element.dataset.id === target.dataset.id
      ) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        if (active !== tab.dataset.id) {
          tabs.forEach((el) => {
            checkElement(el, tab);
          });
          contents.forEach((el) => {
            checkElement(el, tab);
          });
          active = tab.dataset.id;
        }
      });
    });
  });
}

module.exports = setupProjectsNav;
