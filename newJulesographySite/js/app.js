const a = document.getElementsByTagName("a");
const burger = document.getElementById("burger");
const nav = document.getElementById("navi");
const images = document.getElementsByTagName("figure")
const imgContainer = document.getElementById("img-container")
// Change the color of the selected list item in nav
for(let i = 0; i<a.length; i++){
  a[i].addEventListener("click", (e)=>{
    a[i].style.color = "black";
    nav.classList.toggle("display");
    
    
    burger.children[0].classList.add("burger-top-close");
    burger.children[1].classList.add("burger-bottom-close");
    
    burger.children[0].classList.remove("burger-top-open");
    burger.children[1].classList.remove("burger-bottom-open"); 
    navi.classList.remove("display")
    
    
    for(let j = 0; j < a.length; j++){
      if(j != i){
        a[j].style.color = "darkgray";
      }
    }
  })
}

// burger effect

burger.addEventListener("click", (e)=>{
  if(burger.children[0].classList.contains("burger-top-open")){
    burger.children[0].classList.add("burger-top-close");
    burger.children[1].classList.add("burger-bottom-close");
    
    burger.children[0].classList.remove("burger-top-open");
    burger.children[1].classList.remove("burger-bottom-open"); 
    navi.classList.remove("display")
    
  } else{
    console.log("hey")
    burger.children[0].classList.add("burger-top-open");
    burger.children[1].classList.add("burger-bottom-open"); 
    
      burger.children[0].classList.remove("burger-top-close");
    burger.children[1].classList.remove("burger-bottom-close");
    navi.classList.add("display")
  }
  
})


// loop through images

for(let i = 0;i<images.length;i++){
  images[i].addEventListener("click", function(e){
    if(screen.width > 400){
      images[i].classList.toggle("modal-center");
      images[i].children[0].classList.toggle("modal")
     }
  })
}
