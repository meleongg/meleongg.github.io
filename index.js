const scrollUpBtn = document.getElementById("back-to-top-btn");
const rootElement = document.documentElement;

const homeBtn = document.getElementById("home-btn");
const allExpBtn = document.getElementsByClassName("experience-btn");
const allEcsBtn = document.getElementsByClassName("ecs-btn");
const allProjsBtn = document.getElementsByClassName("projects-btn");

const expHeader = document.getElementById("experience-title");
const ecsHeader = document.getElementById("ecs-title");
const projsHeader = document.getElementById("projs-title");
const topNav = document.getElementById("top-nav");

const darkModeBtn = document.getElementById("dark-mode-btn");
const sunMoon = document.getElementById("sun-moon");
const hamburgerIcon = document.getElementById("hamburger-icon");
const allAnchors = document.getElementsByTagName("a");
const allBody = document.getElementsByTagName("body")[0];
const allCards = document.getElementsByClassName("card");

scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

scrollUpBtn.addEventListener("click", scrollToTop);
homeBtn.addEventListener("click", scrollToTop);

let topNavDisplayed = false;

hamburgerIcon.addEventListener("click", () => {
  if (topNavDisplayed) {
    topNavDisplayed = false;
    topNav.style.display = "none";
  } else {
    topNavDisplayed = true;
    topNav.style.display = "block";
  }
});

for (let i = 0; i < allExpBtn.length; i++) {
  allExpBtn[i].addEventListener("click", () => {
    expHeader.scrollIntoView({ behavior: "smooth" });
  });
}

for (let i = 0; i < allEcsBtn.length; i++) {
  allEcsBtn[i].addEventListener("click", () => {
    ecsHeader.scrollIntoView({ behavior: "smooth" });
  });
}

for (let i = 0; i < allProjsBtn.length; i++) {
  allProjsBtn[i].addEventListener("click", () => {
    projsHeader.scrollIntoView({ behavior: "smooth" });
  });
}

let darkMode = false;

darkModeBtn.addEventListener("click", () => {
  if (!darkMode) {
    darkMode = true;
  } else {
    darkMode = false;
  }
  for (var i = 0; i < allAnchors.length; i++) {
    allAnchors[i].classList.toggle("a-dark");
  }
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].classList.toggle("card-dark");
  }
  allBody.classList.toggle("body-dark");
  sunMoon.classList.toggle("fa-sun");
  sunMoon.classList.toggle("fa-moon");
});
