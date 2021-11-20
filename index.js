const scrollUpBtn = document.getElementById('back-to-top-btn')
const rootElement = document.documentElement

const homeBtn = document.getElementById('home-btn')
const expBtn = document.getElementById('experience-btn')
const ecsBtn = document.getElementById('ecs-btn')
const comBtn = document.getElementById('community-btn')

const expHeader = document.getElementById('experience-title')
const ecsHeader = document.getElementById('ecs-title')

const darkModeBtn = document.getElementById('dark-mode-btn')
const sunMoon = document.getElementById('sun-moon')
const allAnchors = document.getElementsByTagName('a')
const allBody = document.getElementsByTagName('body')[0]
const allCards = document.getElementsByClassName('card')

let darkMode = false

scrollToTop = () => {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollUpBtn.addEventListener("click", scrollToTop);
homeBtn.addEventListener("click", scrollToTop)

expBtn.addEventListener("click", () => {
    expHeader.scrollIntoView({ behavior: "smooth" })
})

ecsBtn.addEventListener("click", () => {
    expHeader.scrollIntoView({ behavior: "smooth" })
})

darkModeBtn.addEventListener("click", () => {
    if (!darkMode) {
        darkMode = true
    } else {
        darkMode = false
    }
    for (var i = 0; i < allAnchors.length; i++) {
        allAnchors[i].classList.toggle('a-dark');
    }
    for (var i = 0; i < allCards.length; i++) {
        allCards[i].classList.toggle('card-dark');
    }
    allBody.classList.toggle('body-dark')
    sunMoon.classList.toggle('fa-sun');
    sunMoon.classList.toggle('fa-moon');
})
