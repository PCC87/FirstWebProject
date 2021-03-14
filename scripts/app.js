function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
// ------------------------------------------Slider--------------------------------
let slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
    let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); //Get an array of slides

    let index = 0, time = 3000;
    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');

        //Go over each slide increminting the index
        index++;

        //If you go over all the slides, restart the index to show the first slied and start again
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

    }, time);
}