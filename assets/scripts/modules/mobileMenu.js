const mobileMenu = () => {
    const toggleVisibleMenu = document.querySelector('.js-burger');
    const menu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.header');
    const submenuItems = document.querySelectorAll('.js-menu-submenu');

    if (toggleVisibleMenu && menu) {
        toggleVisibleMenu.addEventListener('click', () => {
            let isOpen = menu.classList.contains('shown');

            if (isOpen) {
                header.classList.remove('visible');
                menu.classList.remove('shown');
                toggleVisibleMenu.classList.remove('transformed');
                document.body.style.overflow = '';
            } else {
                header.classList.add('visible');
                menu.classList.add('shown');
                toggleVisibleMenu.classList.add('transformed');
                document.body.style.overflow = 'hidden';
            }
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
