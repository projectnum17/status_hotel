const animationScroll = () => {
    const animatedBlocks = document.querySelectorAll('.js-scroll');
    const toTopElements = document.querySelectorAll('.js-scroll-toTop');
    const toSlideElements = document.querySelectorAll('.js-scroll-toSlide');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;

                    if (target.classList.contains('js-scroll')) {
                        const slides =
                            target.querySelectorAll('.js-scroll__item');
                        slides.forEach((slide, index) => {
                            setTimeout(() => {
                                slide.classList.add('_animated');
                            }, index * 150);
                        });
                    } else if (target.classList.contains('js-scroll-toTop')) {
                        target.classList.add('_animated');
                    } else if (target.classList.contains('js-scroll-toSlide')) {
                        target.classList.add('_animated');
                    }
                    observer.unobserve(target);
                }
            });
        },
        {
            threshold: 0.3,
        }
    );

    animatedBlocks.forEach((block) => observer.observe(block));
    toTopElements.forEach((el) => observer.observe(el));
    toSlideElements.forEach((el) => observer.observe(el));
};

export default animationScroll;
