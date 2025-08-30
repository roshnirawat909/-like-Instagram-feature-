let container =document.querySelector(".container");
let i =document.querySelector("i");

 let interval = container.addEventListener("dblclick",()=>{
   i.style.transform ="translate(-50%,-50%) scale(1)";
   i.style.opacity ="0.8";
   i.style.color ="red";

   
setTimeout(()=>{
   i.style.transform ="translate(-50%,-50%) scale(0)";
},2000)

setTimeout(()=>{
   i.style.opacity ="0";
},1000)

})

