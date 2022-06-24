const burgermenu = document.getElementById("burger-menu");
burgermenu.addEventListener("click",()=>{
    burgermenu.classList.toggle("active");
    burgericon.classList.toggle("active");
});
const burgericon = document.getElementById("burger-icon")
burgericon.addEventListener("click",()=>{
    burgermenu.classList.toggle("active");
    burgericon.classList.toggle("active");
});