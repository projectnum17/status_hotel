const mobileMenu = () => {
    const openMenuBtn = document.querySelector('.js-burger');
    const closeMenuBtn = document.querySelector('.js-menu-close');
    const menu = document.querySelector('.mobile-menu');

    const langToggle = document.querySelector('.js-lang-parent');
    const langBox = document.querySelector('.js-lang-box');

    const submenuItems = document.querySelectorAll('.js-menu-submenu');

    if (langToggle && langBox) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langBox.classList.toggle('show');
        });
    }

    if (openMenuBtn && menu) {
        openMenuBtn.addEventListener('click', () => {
            menu.classList.add('shown');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenuBtn && menu) {
        closeMenuBtn.addEventListener('click', () => {
            menu.classList.remove('shown');
            document.body.style.overflow = '';
            if (langBox) langBox.classList.remove('show');
        });
    }

    if (submenuItems.length > 0) {
        submenuItems.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.toggle('open');
            });
        });
    }
};

export default mobileMenu;
