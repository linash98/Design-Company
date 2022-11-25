const humburger = document.querySelector(".humbrger");
const navmenu = document.querySelector(".nav-menu");

humburger.addEventListener("click", () => {

    humburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    humburger.classList.remove("active");
    navmenu.classList.remove("active");


}))


