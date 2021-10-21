const body = document.body;
let lastScroll = 0;

const sidenav = document.querySelector(".sidenav");
const burger = document.querySelector(".c-nav_burger");
const closeButton = document.querySelector(".sidenav_close");

//nav scroll

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.add("scroll-up")
    }
    if ((window.innerHeight + currentScroll + 50) >= body.offsetHeight) {
        body.classList.add("scroll-up")
        body.classList.remove("scroll-down")
    } else {
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up")
            body.classList.add("scroll-down")
        }

        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down")
            body.classList.add("scroll-up")
        }
    }
    lastScroll = currentScroll;
})





document.querySelectorAll(".c-nav_list a").forEach((element => element.addEventListener("click", () => {
        console.log("ss")
        body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
    })))

//sidenav

burger.onclick = function () {
    sidenav.classList.toggle("-visible");
}
closeButton.onclick = function () {
    sidenav.classList.toggle("-visible");
}

document.querySelectorAll(".sidenav_list a").forEach(element => element.addEventListener("click",
    () => {
        sidenav.classList.toggle("-visible");
    }));