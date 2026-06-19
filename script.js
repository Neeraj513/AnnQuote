const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let currentSlide = 0;

function showSlide() {
    slides.style.transform =
    `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= images.length){
        currentSlide = 0;
    }

    showSlide();

}, 3000);