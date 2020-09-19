'use strict';

const toggle=document.querySelector('.navbar__toggle');
const navbar=document.querySelector('#navbar');
const contact=document.querySelector('#contact');

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

// Handle scrolling
const menu=document.querySelector('.navbar__menu');
menu.addEventListener('click',(event)=>{
    const link = event.target.dataset.link;
    if(link==null){
        return;
    }
    console.log(link);
    const scrollTo=document.querySelector(link);
    console.log(scrollTo);
    scrollTo.scrollIntoView({behavior:"smooth"});
});

