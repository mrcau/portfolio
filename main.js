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
function scrolling(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}
menu.addEventListener('click',(event)=>{
    const link = event.target.dataset.link;
    if(link==null){
        return;
    }
    scrolling(link);
});
const btn__home__contact=document.querySelector('.home__contact');
btn__home__contact.addEventListener('click',()=>{
    scrolling('#contact');
});
const home = document.querySelector('#home');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1-window.scrollY / homeHeight;
});

// Show arrowUp
const arrowUp=document.querySelector('.arrowUp');
document.addEventListener('scroll',()=>{
    if(window.scrollY>homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});
arrowUp.addEventListener('click',()=>{
    scrolling('#home');
})

// Project
const workBtnCategory=document.querySelector('.work__caregory');
const workBtnProject=document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnCategory.addEventListener('click',(e)=>{
    const filter=e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null){
        return;
    }

    //Remove selection from the preious item and slect
    const active = document.querySelector('.category__btn.active');
    active.classList.remove('active');
    e.target.classList.add('active');

    workBtnProject.classList.add('anime');
    
    setTimeout(()=>{
        projects.forEach((project) => {
            if(filter==='*'||filter===project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
        workBtnProject.classList.remove('anime');

    },300);
});




