var aboutButton = document.getElementById('about-button');
var introPage = document.getElementById('intro-page');
var navArrowDown = document.getElementById('nav-arrow-down');
var navWrap = document.getElementById('nav-wrap');
var navArrowBox = document.getElementById('nav-arrow-box');
var arrowBox = document.getElementsByClassName('arrow-box');
var arrow = document.getElementsByClassName('arrow');


function navTransition() {
    if (navWrap.style.top === '-7rem') {
        navWrap.style.top = '.5rem';
        navArrowDown.style.transform = 'rotate(-180deg)';
    } else {
        navWrap.style.top = '.5rem';
        navArrowDown.style.transform = 'rotate(0deg)';
        navWrap.style.top = '-7rem';
    }
}

function buttonChange() {
    var aboutText = document.getElementsByClassName('about-text');
    var about = document.getElementById('about');
    var openingGroup = document.getElementById('opening-group');
    var introBackground = document.getElementById('intro-background');
    

    if (aboutButton.innerHTML === 'About') {

        //aboutButton
        aboutButton.innerHTML = 'Close';

        //about
        about.style.opacity = '0';
        about.style.animation = 'none';
        about.offsetHeight;
        about.style.animation = 'fade-in 0.8s 0.1s forwards';

        //openingGroup
        openingGroup.style.opacity = '1';
        openingGroup.style.animation = 'none';
        openingGroup.offsetHeight;
        openingGroup.style.animation = 'fade-out 0.8s 0.1s forwards';
        
        //navArrowDown
        

        //introBackground
        introBackground.style.opacity = '0.5';

        //introPage
        //introPage.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(resources/background.jpg)';
               

    } else {
        //aboutButton
        aboutButton.innerHTML = 'About';

        //about
        about.style.opacity = '1';
        about.style.animation = 'none';
        about.offsetHeight;
        about.style.animation = 'fade-out 0.8s 0.1s forwards';

        // aboutText
        openingGroup.style.opacity = '0';
        openingGroup.style.animation = 'none';
        openingGroup.offsetHeight;
        openingGroup.style.animation = 'fade-in 0.8s 0.1s forwards';

        //nav 


        //introBackground
        introBackground.style.opacity = '1';

        //introPage
        //introPage.style.background = 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(resources/background.jpg)';
    }
}


//function arrowMouseOver {
    
//}

//function arrowMouseOut {

//}

navArrowBox.onclick = navTransition;
aboutButton.onclick = buttonChange;


//arrowBox.forEach(element => {
    //element.onmouseover = arrowMouseOver;
    //element.onmouseout = arrowMouseOut;
//});