function clipboard() {
  document.getElementById("email").addEventListener("click", (e) => {
    const el = document.createElement("textarea");
    el.value = "slavickasd@gmail.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    let popUp = document.createElement("span");
    let popUpTimer = 0.5;

    popUp.style.animation = `fade-to-right ${popUpTimer}s ease-out`;
    popUp.style.top = `${e.pageY - 40}px`;
    popUp.style.left = `${e.pageX - 70}px`;

    popUp.classList.add("clipboard-copy");
    popUp.textContent = "Copied to clipboard!";

    document.querySelector("body").insertAdjacentElement("beforeEnd", popUp);
    setTimeout(() => popUp.remove(), popUpTimer * 1000);
  });
}

module.exports = clipboard;
