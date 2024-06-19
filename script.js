const popup =document.querySelector(".popup")
const more =document.querySelector("#more")
const close_icon = document.querySelector(".close-icon")
const order = document.querySelector("#order")

more.addEventListener("click",()=>{
    popup.classList.add("open");
});
close_icon.addEventListener("click",()=>{
    popup.classList.remove("open");
});
order.addEventListener("click",()=>{
    popup.classList.remove("open");
    
});