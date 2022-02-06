const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const nextSlide = () => {
    // Get 'current' class
    const current = document.querySelector('.current');
    // Remove 'current' class
    current.classList.remove('current');
    // Check for next slide: Look for another element in HTML with a class of 'slide' which is a sibling of 'slide current' div
    if(current.nextElementSibling){ //If current has a sibling ...
        // Add 'current' to next sibling
        current.nextElementSibling.classList.add('current');
    } else{
        // If on last slide and current doesn't have a sibling, return to first slide and add 'current' to it
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
    // Get 'current' class
    const current = document.querySelector('.current');
    // Remove 'current' class
    current.classList.remove('current');
    // Check for previous slide: Look for another element in HTML with a class of 'slide' which is a sibling of 'slide current' div
    if(current.previousElementSibling){ //If current has a sibling ...
        // Add 'current' to previous sibling
        current.previousElementSibling.classList.add('current');
    } else{
        // If on first slide go back to the last slide in the node list and add current
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Add event listeners to buttons
next.addEventListener("click", e => {
    nextSlide();
});

prev.addEventListener("click", e => {
    prevSlide();
});
