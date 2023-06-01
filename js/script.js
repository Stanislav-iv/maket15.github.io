let swiper = new Swiper(".swiper", {
  Loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: "auto",
  slidesOffsetBefore: 5,
  spaceBetween: 16,
});
let screen = window.matchMedia("(max-width: 767px)");
if (!screen.matches) {
  swiper.destroy();
}
let btnMore = document.querySelector(".btn__more");
let brandLength = document.querySelectorAll(".brand__button").length;
btnMore.addEventListener("click", () => {
  if (btnMore.textContent != "Скрыть") {
    // btnMore.classList.toggle("opened");
    btnMore.textContent = "Скрыть";
    let array = Array.from(
      document.querySelector(".brand__Navigation").children
    );
    let visItems = array.slice(0, brandLength);
    visItems.forEach((el) => el.classList.add("is-visible"));
  } else {
    // btnMore.classList.toggle("closed");
    btnMore.textContent = "Показать еще";
    let array = Array.from(
      document.querySelector(".brand__Navigation").children
    );
    let visItems = array.slice(0, brandLength);
    visItems.forEach((el) => el.classList.remove("is-visible"));
  }
});
// let showMoreButton = document.querySelector(".btn__more");
// let list = document.querySelectorAll(".brand__button");
// showMoreButton.addEventListener("click", () => {
//   list.classList.toggle("is-visible");
//   // showMoreButton.classList.toggle("opened");
//   showMoreButton.textContent = !list.classList.contains("hidden")
//     ? "Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?"
//     : "Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч?Ч? Ч?Ч?Ч?Ч?Ч?Ч?";
