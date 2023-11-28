// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('myCarousel');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator');
    let currentSlide = 0; // Track the current slide

    // Function to move to a specific slide
    function goToSlide(slideNumber) {
        slides[currentSlide].classList.remove('active'); // Remove active class from current slide
        indicators[currentSlide].classList.remove('active'); // Remove active class from current indicator
        currentSlide = slideNumber; // Update current slide
        slides[currentSlide].classList.add('active'); // Add active class to new current slide
        indicators[currentSlide].classList.add('active'); // Add active class to new current indicator
        // Move slide container to show the new slide
        carousel.querySelector('.carousel-slides').style.transform = 'translateX(-' + (100 * currentSlide) + '%)';
    }

    // Event listener for the previous button
    carousel.querySelector('.prev').addEventListener('click', function() {
        goToSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : slides.length - 1); // Go to previous slide or last slide if at the beginning
    });

    // Event listener for the next button
    carousel.querySelector('.next').addEventListener('click', function() {
        goToSlide((currentSlide + 1) % slides.length); // Go to next slide or wrap around to first slide
    });

    // Event listeners for each indicator
    indicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            goToSlide(index); // Move to the slide corresponding to clicked indicator
        });
    });
});
