const scrollUpBtn = document.getElementById('back-to-top-btn')
const rootElement = document.documentElement

const homeBtn = document.getElementById('home-btn')
const expBtn = document.getElementById('experience-btn')
const ecsBtn = document.getElementById('ecs-btn')
const projsBtn = document.getElementById('projects-btn')

const expHeader = document.getElementById('experience-title')
const ecsHeader = document.getElementById('ecs-title')
const projsHeader = document.getElementById('projs-title')

const darkModeBtn = document.getElementById('dark-mode-btn')
const sunMoon = document.getElementById('sun-moon')
const allAnchors = document.getElementsByTagName('a')
const allBody = document.getElementsByTagName('body')[0]
const allCards = document.getElementsByClassName('card')

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
    ecsHeader.scrollIntoView({ behavior: "smooth" })
})

projsBtn.addEventListener("click", () => {
    projsHeader.scrollIntoView({ behavior: "smooth" })
})

let darkMode = false

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

