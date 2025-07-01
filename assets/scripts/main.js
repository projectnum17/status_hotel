'use strict';

import mobileMenu from './modules/mobileMenu.js';
import headerFlow from './modules/header.js';
import heroSlider from './modules/heroSlider.js';
import benefitsSlider from './modules/benefitsSlider.js';

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) {
        mobileMenu();
    }
    headerFlow();
    heroSlider();
    benefitsSlider();
});
