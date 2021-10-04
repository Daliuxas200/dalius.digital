function scrollNavigation() {
  let mobile_nav_button = document.getElementById("mobile-nav-button");
  let mobile_nav = document.getElementById("mobile-nav");

  // functionality for opening and closing mobile menu sidebar
  if (mobile_nav_button) {
    mobile_nav_button.addEventListener("click", (e) => {
      e.preventDefault();
      mobile_nav_button
        .querySelector(".sidebar-mobile__button__middle-bar")
        .classList.toggle("active");
      mobile_nav.classList.toggle("active");
    });
  }

  // Dynamic generation and engagement of scroll nav menus for each section
  let sections = [...document.querySelectorAll(".section")];
  let scrollMenus = [...document.querySelectorAll(".scroll-menu")];

  sections.forEach((section) => {
    let id = section.id;
    scrollMenus.forEach((menu) => {
      let elNode = document.createElement("LI");
      let textnode = document.createTextNode(section.dataset.title);
      elNode.appendChild(textnode);
      elNode.classList.add("scroll-link");
      elNode.setAttribute("data-target", id);
      menu.appendChild(elNode);
    });
  });

  let scrollLinks = [...document.querySelectorAll(".scroll-link")];
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let offsetTop = document.getElementById(link.dataset.target).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });

  // check and update scroll indicators when navigating site
  function setupScrollBehaviour() {
    function findCurrentSection() {
      return sections
        .filter(
          (s) =>
            window.scrollY >= s.offsetTop - window.innerHeight / 2 &&
            window.scrollY <
              s.offsetTop + s.clientHeight - window.innerHeight / 2
        )
        .pop();
    }
    function checkIfLeftSection(currentSection) {
      if (
        currentSection &&
        window.scrollY >= currentSection.offsetTop - window.innerHeight / 4 &&
        window.scrollY <
          currentSection.offsetTop +
            currentSection.clientHeight -
            window.innerHeight / 4
      ) {
        return false;
      } else {
        return true;
      }
    }
    function triggerNavItemStyle(currentSection) {
      scrollLinks.forEach((sl) => {
        if (currentSection && sl.dataset.target === currentSection.id) {
          sl.classList.add("active");
        } else if (sl.classList.contains("active")) {
          sl.classList.remove("active");
        }
      });
    }
    function updateVerticalText(currentSection) {
      let verticalEl = document.getElementById("sidebar-vertical-text");
      if (currentSection) {
        console.log(currentSection.dataset.name);
        verticalEl.textContent = currentSection.dataset.title.toUpperCase();
      } else {
        verticalEl.textContent = "";
      }
    }

    let currentSection = findCurrentSection();
    triggerNavItemStyle(currentSection);
    updateVerticalText(currentSection);

    document.addEventListener("scroll", (e) => {
      if (checkIfLeftSection(currentSection)) {
        currentSection = findCurrentSection();
        triggerNavItemStyle(currentSection);
        updateVerticalText(currentSection);
      }
    });
  }

  // adjust the height position navigation menus for correct overlap
  function adjustSidebar() {
    let sidebarFirst = document.querySelector(".sidebar.first");
    let sidebarSecond = document.querySelector(".sidebar.second");
    const height = sidebarFirst.clientHeight;
    sidebarFirst.style.transform = `translateY(${height / 2}px)`;
    sidebarSecond.style.transform = `translateY(${height / 2}px)`;
  }

  setupScrollBehaviour();
  adjustSidebar();
}

module.exports = scrollNavigation;
