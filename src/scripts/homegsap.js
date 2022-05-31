"use strict"

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

//Animations

const tl = gsap.timeline({paused: false, defaults: {duration: 1}});

tl.from(".intro__logo", {opacity: 0})
.to(".intro__animlogo", {yPercent: -2000, duration: 1})
.to(".intro", {opacity: 0, duration: 0.1, onComplete: () => document.querySelector('.intro').classList.add('end-loading')})
.from(".header-anim", {yPercent: -100, duration: 0.5, onComplete: () => document.querySelector('.content').classList.remove('is-loading')}, "-=0.5")
.from(".firstlook__titre", {xPercent: -1000}, "-=0.8")
.from(".firstlook__accroche", {xPercent: -1000}, "-=0.8")
.from(".firstlook__figure", {xPercent: 1000}, "-=0.8");
 
gsap.registerPlugin(ScrollTrigger);

gsap.from(".preview__textanim--1", {
    opacity: 0,
    yPercent: 50,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".preview__square",
        start: "bottom bottom",
    },
 });

gsap.from(".preview__textanim--2", {
    opacity: 0,
    yPercent: 50,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".preview__square",
        start: "bottom bottom",
    },
 });