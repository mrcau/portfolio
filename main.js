'use strict';

const toggle=document.querySelector('.navbar__toggle');
const menu=document.querySelector('.navbar__menu');
const navbar=document.querySelector('#navbar');
// navbar scroll view
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('dark');
    }
    else{
        navbar.classList.remove('dark');
    }
});

