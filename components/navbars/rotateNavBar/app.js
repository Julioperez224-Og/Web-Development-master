const button = document.getElementById("toggle-button");
const navBar = document.getElementById("nav-bar")

button.addEventListener("click", ()=>{
    navBar.classList.toggle("rotate")
})