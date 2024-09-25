document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Initialize the first slide as active
    slides[currentSlide].classList.add('active');

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    function showPrevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    document.querySelector('.prev-slide').addEventListener('click', showPrevSlide);
    document.querySelector('.next-slide').addEventListener('click', showNextSlide);

    // Automatically change slide every 10 seconds
    setInterval(showNextSlide, 10000);
});