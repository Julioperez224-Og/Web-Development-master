const nav = document.querySelector("nav");
const burger = document.querySelector("#burger");
const li = document.querySelectorAll("nav li");



burger.addEventListener("click", (e)=>{
    nav.classList.toggle("slideIn");
    for(let i = 0; i < li.length;i++){
        li[i].classList.toggle("slideIn");
    
        // setTimeout(function(){},1000)
    }
})