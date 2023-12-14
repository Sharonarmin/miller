$('.counter').countUp(
    {
    delay: 5,
    time: 1500
    }
);


// testimonial slider

$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
