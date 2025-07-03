const specialsSlider = () => {
    const sliderEl = document.querySelector('.specials-gallery');
    const paginationEl = document.querySelector('.specials-pagination');
    if (!sliderEl) return;

    const slidesCount = sliderEl.querySelectorAll('.swiper-slide').length;

    const updatePaginationVisibility = () => {
        const isLargeScreen = window.innerWidth > 991;

        if (paginationEl) {
            if (isLargeScreen && slidesCount < 3) {
                paginationEl.style.display = 'none';
            } else {
                paginationEl.style.display = '';
            }
        }
    };

    updatePaginationVisibility();
    window.addEventListener('resize', updatePaginationVisibility);

    const shouldCenterSlides = slidesCount > 4;

    return new Swiper(sliderEl, {
        slidesPerView: 2.5,
        grabCursor: true,
        centeredSlides: shouldCenterSlides,
        // centeredSlidesBounds: true,
        loop: shouldCenterSlides,
        spaceBetween: 24,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true,
        // },
        speed: 1000,
        pagination: {
            el: '.specials-pagination',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 1.5,
                centeredSlides: shouldCenterSlides,
            },
            992: {
                slidesPerView: 2.5,
                centeredSlides: shouldCenterSlides,
            },
        },
    });
};

export default specialsSlider;
