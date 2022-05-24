"use strict"

import { gsap } from "gsap";

console.log(gsap.version);

//Animations





//Dark mode

const darkTheme = document.querySelector(".darkmode");

darkTheme.addEventListener("click", function(){
    if(document.body.dataset.theme === "dark"){
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    } 
});

const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

let theme = localStorage.getItem('theme');
if((!theme && userDark) || (theme === "dark")){
    dark();
} else if(theme === "light"){
    light();
}

function dark(){
    document.body.setAttribute("data-theme", "dark");
}

function light(){
    document.body.setAttribute("data-theme", "light");
}

//Back to top

const backtotopbutton = document.querySelector(".backtotop");

const scrollContainer = () => {
    return document.documentElement || document.querySelector("body");
};

const goToTop = () => {
    document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backtotopbutton.addEventListener("click", goToTop);