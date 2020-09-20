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
    scrolling(link);
});

function scrolling(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}

const btn__home__contact=document.querySelector('.home__contact');
btn__home__contact.addEventListener('click',()=>{
    scrolling('#contact');
})
