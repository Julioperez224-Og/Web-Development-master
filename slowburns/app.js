var pageHeight = window.innerHeight;
var pageWidth = window.innerWidth;
var scroller = document.getElementById('scroller');
var burger = document.getElementById("burger");
var header = document.getElementsByTagName("header")[0];
var nav = document.getElementById("nav");

scroller.addEventListener("click", function(e){
    window.scrollBy(0,pageHeight);
});

burger.addEventListener("click", function(){
    if(header.style.display == "none"){
        header.style.display = "flex";
    }
    else{
        header.style.display = "none";
    }
});

window.addEventListener('resize', function () { 
    window.reload(); 
});

for(var i = 0; i < nav.children.length; i++){
    nav.children[i].addEventListener("click", function(){
        if(pageWidth < 1201){
            header.style.display = "none";
        }
    });
}