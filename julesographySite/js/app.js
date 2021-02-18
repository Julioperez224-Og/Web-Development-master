const nav = document.querySelector("nav");
const burger = document.querySelector("#burger");
const li = document.querySelectorAll("nav li");
const xWidth = screen.width;
const landingAtag = document.querySelector(".main-img-a");


burger.addEventListener("click", (e)=>{
    nav.classList.toggle("slideIn");
    for(let i = 0; i < li.length;i++){
        li[i].classList.toggle("slideIn");
    
        // setTimeout(function(){},1000)
    }
})

landingAtag.addEventListener("click", function(){
    if(xWidth <= 720){
        landingAtag.href="portraits.html"; 
    }
    
    if(xWidth > 720){
        landingAtag.href="landscape.html"; 
    }
})

