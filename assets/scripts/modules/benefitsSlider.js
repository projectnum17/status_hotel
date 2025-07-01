const benefitsSlider = () => {
    return new Swiper('.benefits__gallery', {
        slidesPerView: 3,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        spaceBetween: 100,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        speed: 1000,
        navigation: {
            prevEl: '.benefits__gallery .btn--prev',
            nextEl: '.benefits__gallery .btn--next',
        },
    });
};

export default benefitsSlider;
