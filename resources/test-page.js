let total = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            total = 0;
            break;

        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = total;
            total = 0;
            break;

        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;

        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }   
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if (total === 0) {
        total = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        total += intBuffer;
    } else if (previousOperator === '−') {
        total -= intBuffer;
    } else if (previousOperator === '×') {
        total *= intBuffer;
    } else if (previousOperator === '÷') {
        total /= intBuffer;
    }
}

function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    });
}

init();

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

const slider = document.querySelector('.gallery');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);