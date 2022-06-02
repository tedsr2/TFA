"use strict"

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

//Animations

const tl = gsap.timeline({paused: false, defaults: {duration: 1}});

tl.from(".intro__logo", {opacity: 0,})
.to(".intro__animlogo", {yPercent: -2000, duration: 1})
.to(".intro", {opacity: 0, duration: 0.1, onComplete: () => document.querySelector('.intro').classList.add('end-loading')})
.from(".header-anim", {yPercent: -100, duration: 0.5, onComplete: () => document.querySelector('.content').classList.remove('is-loading')}, "-=0.5")
.from(".firstlook__titre", {xPercent: -1000}, "-=0.8")
.from(".firstlook__accroche", {xPercent: -1000}, "-=0.8")
.from(".firstlook__logo", {xPercent: -1000}, "-=0.8")
.from(".firstlook__figure", {xPercent: 1000}, "-=0.8");
 
gsap.registerPlugin(ScrollTrigger);

gsap.from(".preview__square--anim1", {
    xPercent: 200,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".preview__square--anim1",
        start: "bottom bottom",
    },
});

gsap.from(".preview__square--anim2", {
    xPercent: 200,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".preview__square--anim2",
        start: "bottom bottom",
    },
});

gsap.from(".preview__square--anim3", {
    xPercent: -200,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".preview__square--anim3",
        start: "bottom bottom",
    },
});

gsap.from(".preview__image--anim1", {
    yPercent: 200,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".preview__square--anim1",
        start: "top center",
    },
});

gsap.from(".preview__image--anim2", {
    yPercent: 200,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".preview__square--anim2",
        start: "top center",
    },
});

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

//Date

const date = document.querySelector('.footer__date');

function setDate() {
    let date = (new Date).getFullYear();
    return + date > 2021 ? `2021-${date}` : date
}
date.innerText = `${setDate()}`;