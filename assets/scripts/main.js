'use strict';

import mobileMenu from './modules/mobileMenu.js';
import headerFlow from './modules/header.js';
import heroSlider from './modules/heroSlider.js';
import benefitsSlider from './modules/benefitsSlider.js';
import comfortCards from './modules/comfortCards.js';
import specialsSlider from './modules/specialsSlider.js';

document.addEventListener('DOMContentLoaded', () => {
    let isMobileMenuInit = false;
    const handleMobileMenu = () => {
        if (window.innerWidth <= 1065 && !isMobileMenuInit) {
            mobileMenu();
            isMobileMenuInit = true;
        }
    };
    handleMobileMenu();
    window.addEventListener('resize', handleMobileMenu);

    headerFlow();
    heroSlider();
    benefitsSlider();
    comfortCards();
    specialsSlider();
});
