const burger = document.querySelector("#js-burger");
const header = document.querySelector("header");
burger.addEventListener("click", function () {
  header.classList.toggle("open");
});
