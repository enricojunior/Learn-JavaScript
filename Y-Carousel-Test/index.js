let imageContainers = document.querySelectorAll('.slide-images .image-container');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let dots = document.querySelectorAll('.dot');

let count = 0;
let isAnimating = false;

nextBtn.addEventListener('click', nextSlideSection);
prevBtn.addEventListener('click', prevSlideSection);

function nextSlideSection() {
    if (isAnimating) return;
    isAnimating = true;

    imageContainers[count].classList.remove('active');
    if (count === imageContainers.length - 1) {
        count = 0;
    } else {
        count++;
    }
    imageContainers[count].classList.add('active');

    dotIndicators();
}

function prevSlideSection() {
    if (isAnimating) return;
    isAnimating = true;

    imageContainers[count].classList.remove('active');
    if (count === 0) {
        count = imageContainers.length - 1;
    } else {
        count--;
    }
    imageContainers[count].classList.add('active');

    dotIndicators();
}

function dotIndicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[count].classList.add('active');
}

function changeImages(clickedDot) {
    const imgID = parseInt(clickedDot.getAttribute('attr'));
    if (imgID === count) return;

    imageContainers[count].classList.remove('active');
    count = imgID;
    imageContainers[count].classList.add('active');

    dotIndicators();
}

// Auto slide
let intervalId = setInterval(nextSlideSection, 3000);

// Pause on hover
