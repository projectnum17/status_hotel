const benefitsSlider = () => {
    const sliderEl = document.querySelector('.benefits-gallery');
    if (!sliderEl) return;

    const prevBtn = sliderEl.querySelector('.btn--prev');
    const nextBtn = sliderEl.querySelector('.btn--next');
    const slidesCount = sliderEl.querySelectorAll('.swiper-slide').length;

    const updateNavigationVisibility = () => {
        const screenWidth = window.innerWidth;
        const isWideScreen = screenWidth > 767;
        const shouldHideNav =
            (isWideScreen && slidesCount < 4) ||
            (!isWideScreen && slidesCount < 2);

        if (prevBtn && nextBtn) {
            prevBtn.style.display = shouldHideNav ? 'none' : '';
            nextBtn.style.display = shouldHideNav ? 'none' : '';
        }
    };

    updateNavigationVisibility();
    window.addEventListener('resize', updateNavigationVisibility);

    return new Swiper(sliderEl, {
        slidesPerView: 3,
        grabCursor: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 100,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        speed: 1000,
        navigation: {
            prevEl: '.benefits-gallery .btn--prev',
            nextEl: '.benefits-gallery .btn--next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
};

export default benefitsSlider;
