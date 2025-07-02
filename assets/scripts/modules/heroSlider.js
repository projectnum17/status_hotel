const heroSlider = () => {
    const sliderEl = document.querySelector('.hero__gallery');
    if (!sliderEl) return;

    return new Swiper(sliderEl, {
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 2000,
        },
        speed: 1500,
        pagination: {
            el: '.hero__pagination',
        },
    });
};

export default heroSlider;
