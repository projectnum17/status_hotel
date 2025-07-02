const benefitsSlider = () => {
    const sliderEl = document.querySelector('.benefits__gallery');
    if (!sliderEl) return;

    return new Swiper(sliderEl, {
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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 3,
            },
        },
    });
};

export default benefitsSlider;
