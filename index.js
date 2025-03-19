let value = document.querySelector("#value");
let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");
let increaseBtn = document.querySelector(".increase");

let count = 0; 

increaseBtn.addEventListener("click", function () {
    count++;
    value.textContent =count;
})
resetBtn.addEventListener("click",function () {
    value.textContent = 0;
})
decreaseBtn.addEventListener("click", function (){
    count--;
    value.textContent =count;
})