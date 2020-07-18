let carouselItems = document.querySelectorAll('.carousel-items');
let current = 0;



function slider() {
    for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.add('carousel-items_op0');
    }
    carouselItems[current].classList.remove('carousel-items_op0');

    
};

document.querySelector('.carousel__btn_left').onclick = function () {
    if (current-1 == -1) {
        current = carouselItems.length - 1;
    } else {
        current--;
    }
    slider();
};
document.querySelector('.carousel__btn_right').onclick = function () {
    if (current+1 == carouselItems.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
};;

const inputs = document.querySelectorAll('input');

function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('input_focus');
};
function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('input_focus');
    }
};

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

let linkNav = document.querySelectorAll('[href^="#"]'), 
    V = .3;
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash;
            }
        }
    }, false);
}


let countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

let countDownFunction = setInterval(function () {

    let now = new Date().getTime();
    let distance = countDownDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);
    
    document.getElementById('timer').innerHTML = `${days} <span>d</span> ${hours} <span>h</span> ${minutes} <span>m</span> ${seconds} <span>s</span>`;

    if(distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById('timer').innerHTML = 'Promotion is over!'
    }

}, 1000);