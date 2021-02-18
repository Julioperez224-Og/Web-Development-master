const numbers = document.querySelectorAll(".btn-number");
const operators = document.querySelectorAll(".btn-operator");
const decimal = document.querySelector(".btn-decimal");
const compute = document.querySelector(".btn-compute");
const clear = document.querySelector(".btn-clear");

let output = document.querySelector("#output");
let prevNum;
let currentNum;


for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        currentNum = numbers[i].innerText;
        displayValue(currentNum)
    })
}


function displayValue(currentNum){
    if(output.innerText === undefined){
        output.innerText = currentNum
    }
    else{
        output.innerText = output.innerText + currentNum
    }
}

function clearContent(){
    clear.addEventListener("click", function(){
        displayValue(undefined);
    })
}