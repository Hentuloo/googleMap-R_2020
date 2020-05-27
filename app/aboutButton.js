const aboutButton = () => {
  const button = document.querySelector(".header__button");
  const modal = document.querySelector(".header__card");
  if (!button || !modal) return;
  button.addEventListener("click", () => {
    modal.classList.toggle("card--hidden");
  });
};
