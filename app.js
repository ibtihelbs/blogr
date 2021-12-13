const main_list=document.querySelectorAll(".main-list>li>a");
const Sub_list=document.querySelectorAll(".Sub-list");

/**Get all siblings */
let sibling=(item)=>{
    /**Sub_list.indexof(item); */
    Sub_list.forEach(e => {
        if (e!==item){
            e.classList.remove("active");
            e.style.setProperty("--angle", '180deg');
        }
    })
}

main_list.forEach((item,key)=>{
    item.parentElement.addEventListener("click",()=>{
        Sub_list[key].classList.toggle("active");
        item.style.setProperty("--angle", '-180deg');
        item.style.setProperty("--distance", '50%');
        sibling(Sub_list[key]);
       
    })
}) 
 const hamberger=document.getElementById("hamberger");
 const nav =document.querySelector("nav");
hamberger.addEventListener("click",()=>{
    nav.classList.toggle("active_Nav");
    document.querySelector(".main-list").classList.toggle("active_main");
})