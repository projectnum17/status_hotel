const heroSlider = () => {
    return new Swiper('.hero__gallery', {
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 2000,
        },
        speed: 1500,
        pagination: {
            el: '.hero__pagination'
        }
    });
};

export default heroSlider;
