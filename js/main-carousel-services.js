'use strict'

window.addEventListener('load',()=>{
   const elementosCarousel = document.querySelectorAll('.carousel');
   
   M.Carousel.init(elementosCarousel, {
       duration: 150,
       dis: -80,
       shift: 5,
       padding: 5,
       numVisible: 5,
       indicators: true,
       noWrap: true,
   });
})