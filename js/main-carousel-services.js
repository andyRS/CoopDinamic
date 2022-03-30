'use strict'

window.addEventListener('load', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');

    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false,
        items: 5
    });

    $('.dropdown-trigger').dropdown();

  
    
    
})