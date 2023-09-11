var navArrowDown = document.getElementById('nav-arrow-down');
var navWrap = document.getElementById('nav-wrap');
var navArrowBox = document.getElementById('nav-arrow-box');
var arrowBox = document.getElementsByClassName('arrow-box');
var arrow = document.getElementsByClassName('arrow');


function navTransition() {
    if (navWrap.style.top === '-7rem') {
        navWrap.style.top = '0rem';
        navArrowDown.style.transform = 'rotate(-180deg)';
    } else {
        navWrap.style.top = '0rem';
        navArrowDown.style.transform = 'rotate(0deg)';
        navWrap.style.top = '-7rem';
    }
}


navArrowBox.onclick = navTransition;



