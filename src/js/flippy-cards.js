function flippyCards() {
  let flippy_cards = [...document.querySelectorAll(".flippy-card")];

  for (let card of flippy_cards) {
    let xClick;
    let yClick;

    card.addEventListener("mousedown", (e) => {
      e.preventDefault();
      xClick = e.clientX;
      yClick = e.clientY;
    });

    card.addEventListener("mouseup", (e) => {
      e.preventDefault();
      card.classList.toggle("flipped");
    });
  }
}

module.exports = flippyCards;
