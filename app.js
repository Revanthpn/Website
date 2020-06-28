let showMenu = false

const hamburger = document.querySelector(".hamburger")
const lsection = document.querySelector(".l_section")
const navName = document.querySelector(".nav-name")
const links = document.querySelectorAll(".link")

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add("close")
        lsection.classList.add("show")
        navName.classList.add("hide")
        showMenu = true
    }
    else {
        hamburger.classList.remove("close")
        lsection.classList.remove("show")
        navName.classList.remove("hide")
        showMenu = false
    }
}

hamburger.addEventListener("click", toggleMenu)
links.forEach(item => {
    item.addEventListener("click", toggleMenu)
})