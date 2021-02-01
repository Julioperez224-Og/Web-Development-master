const info_button = document.querySelectorAll(".info-btn");
const images = document.querySelectorAll(".img-div");
const img_shadow = document.querySelectorAll(".img-shadow");

for(let i =0; i < info_button.length; i++){
    info_button[i].addEventListener("click", ()=>{
        images[i].classList.toggle("focus-img");
        img_shadow[i].classList.toggle("display");
        info_button[i].classList.toggle("display-none");
    })
    images[i].addEventListener("click", function(){
        images[i].classList.toggle("focus-img");
        img_shadow[i].classList.toggle("display");
        info_button[i].classList.toggle("display-none");
    })
}