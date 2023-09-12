import "./style/style.css"

const slides = document.querySelectorAll(".card");
const prevBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0

function showSlide(index) {
    slides.forEach((slide, i)=>{
        if (i === index) {
            slide.style.display = "block"
        } else {
            slide.style.display = "none"
        }   
    })
}

function nextSlide() {
    currentSlide++
    if (currentSlide >= slides.length) {
        currentSlide = 0 
    }
    showSlide(currentSlide)
}

function backslide() {
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = slides.length - 1
    }
    showSlide(currentSlide)
}

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", backslide)

showSlide(currentSlide)