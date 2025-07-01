const specialsSlider = () => {
    return new Swiper('.specials__gallery', {
        slidesPerView: 3,
        grabCursor: true,
        // centeredSlides: true,
        loop: true,
        spaceBetween: 24,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        speed: 1000,
        pagination: {
            el: '.specials__pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 1.5,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
};

export default specialsSlider;
