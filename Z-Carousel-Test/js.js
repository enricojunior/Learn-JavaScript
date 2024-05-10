let imgSlides = document.querySelectorAll('.slide-images img');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let dots = document.querySelectorAll('.dot');

let count = 0;
let isAnimating = false; // Flag to prevent multiple animations

nextBtn.addEventListener('click', nextSlideSection);
function nextSlideSection(){
    if (isAnimating) return; // Prevent multiple animations
    isAnimating = true;
    
    imgSlides[count].style.animation = 'firstNext 0.5s ease-in forwards';
    if(count >= imgSlides.length - 1){
        count = 0;
    } else {
        count++;
    }
    
    imgSlides[count].style.animation = 'secondNext 0.5s ease-in forwards';
    dotIndicators();
}

prevBtn.addEventListener('click', prevSlideSection);
function prevSlideSection(){
    if (isAnimating) return; // Prevent multiple animations
    isAnimating = true;
    
    imgSlides[count].style.animation = 'firstPrev 0.5s ease-in forwards';
    if(count == 0){
        count = imgSlides.length - 1;
    } else {
        count--;
    }
    
    imgSlides[count].style.animation = 'secondPrev 0.5s ease-in forwards';
    dotIndicators();
}

function imgAutoSlide(){
    deleteInterval = setInterval(ImgAutoTimer, 6000);
    function ImgAutoTimer(){
        nextSlideSection();
        dotIndicators();
    }
}
imgAutoSlide();

const slideWrapper = document.querySelector('.slide-wrapper');
slideWrapper.addEventListener('mouseover', function(){
    clearInterval(deleteInterval);
});

slideWrapper.addEventListener('mouseout', imgAutoSlide);

function dotIndicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove('active');
    }
    dots[count].classList.add('active');
}

function changeImages(clickedDot){
    const imgID = parseInt(clickedDot.getAttribute('attr'));
    if(imgID === count){
        return;
    }
    
    if (isAnimating) return; // Prevent multiple animations
    isAnimating = true;
    
    imgSlides[count].style.animation = 'firstPrev 0.5s ease-in forwards';
    count = imgID;
    imgSlides[count].style.animation = 'secondPrev 0.5s ease-in forwards';
    dotIndicators();
}

// Reset the isAnimating flag when the animation ends
imgSlides.forEach(img => {
    img.addEventListener('animationend', function(){
        isAnimating = false;
    });
});
