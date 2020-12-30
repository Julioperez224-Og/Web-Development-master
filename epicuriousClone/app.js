let toggleButton = document.getElementById("menu-burger");
let closeButton = document.getElementById("close");

toggleButton.addEventListener("click", function (event) {
  let menu = document.querySelector(".menu");
  menu.classList.add("slideLeft");
});

closeButton.addEventListener("click", function (event) {
  let menu = document.querySelector(".menu");
  menu.classList.remove("slideLeft");
});
