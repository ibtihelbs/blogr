//const button = document.querySelectorAll(".togglejs");
const button =document.querySelectorAll(".togglejs");
const list = document.querySelectorAll(".toggle");
const hum =document.querySelector(".fa-align-justify");
const yap=document.querySelectorAll(".yap");
const acitve =document.querySelector(".active");
const mobile =document.querySelector(".mobile");
console.log(mobile)
//const nav =document.
button.forEach(function(item, index, array){
    console.log(index);
    console.log(list[index]);
    button[index].addEventListener("click", function () {
      list[index].classList.toggle("show");
  });
});
hum.addEventListener("click", () => {
    yap.forEach(function (item, index, array) {
      mobile.classList.toggle("active1");
      yap[index].classList.toggle("active");
    });
  });
/*mobile.forEach(function(item, index, array){
  console.log(index);
  console.log(list[index]);
  hum.addEventListener("click", function () {
    yap[index].classList.toggle("active");
});
});

  hum.addEventListener("click", function () {
    mobile.classList.toggle("active");
    /*yap.forEach(function(item, index, array){
      
    yap[index].classList.toggle("active");
  });*/

//

  
    /*button.classList.toggle("redbackgouend");*/
  
 /* buttons.addEventListener("click", function () {
    
    list.classList.toggle("show");
    
    buttons.classList.toggle("redbackgouend");*/
 

hum.addEventListener("click", function () {  
 
});
/*

button.addEventListener("click", function () {
    
    list.classList.toggle("show");
    
    button.classList.toggle("redbackgouend");
  });
*/
 


