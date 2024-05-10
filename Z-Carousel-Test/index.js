let imgSlides = document.querySelectorAll('img');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let dots = document.querySelectorAll('.dot');

let count = 0;
nextBtn.addEventListener('click', nextSlideSection);
function nextSlideSection(){
    imgSlides[count].style.animation = 'firstNext 0.5 ease-in forwards';
    if(count >= imgSlides.length - 1){
        count = 0;
    } else {
        count++;
    }
    imgSlides[count].style.animation = 'secondNext 0.5 ease-in forwards';
    dotIndicators();
}

prevBtn.addEventListener('click', prevSlideSection);
function prevSlideSection(){
    imgSlides[count].style.animation = 'firstPrev 0.5s ease-in forwards';
    if(count == 0){
        count = imgSlides.length - 1;
    } else {
        count--;
    }
    imgSlides[count].style.animation = 'secondPrev 0.5 ease-in forwards';
    dotIndicators();
}

function imgAutoSlide(){
    deletInterval = setInterval(ImgAutoTimer, 6000);
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
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[count].className += ' active';
}

function changeImages(defaultImage){
    defaultImage.classList.add('active');
    let imgID = defaultImage.getAttribute('attr');
    if(imgID > count){
        imgSlides[count].style.animation = 'firstNext 0.5s ease-in forwards';
        count = imgID;
        imgSlides[count].style.animation = 'secondNext 0.5s ease-in forwards';
    } else if(imgID == count){
        return;
    } else {
        imgSlides[count].style.animation = 'firstPrev 0.5s ease-in forwards';
        count = imgID;
        imgSlides[count].style.animation = 'secondPrev 0.5s ease-in forwards';
    }
    dotIndicators();
}