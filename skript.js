'use strict';

const btn = document.querySelector('.btn'); 

function animateBox () {
    const box = document.querySelector('.box');
    let pos = 0;

    const teturnFrame = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(teturnFrame);
        } else {
            pos++;
            box.style.left = pos + 'px';
            box.style.top = pos + 'px';
        }
    }
}

btn.addEventListener('click', animateBox);