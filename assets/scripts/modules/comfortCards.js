const comfortCard = () => {
    const parent = document.querySelector('.comfort')
    const cards = document.querySelectorAll('.comfort-card');
    const showMoreBtn = document.querySelector('.comfort__link');
    const visibleCount = 2;

    if (!cards.length) return;

    cards.forEach((card, index) => {
        if (index >= visibleCount) {
            card.style.display = 'none';
        }
    });

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            cards.forEach((card) => {
                card.style.display = '';
            });
            showMoreBtn.remove();

            if (parent) {
                parent.scrollIntoView({
                    block: 'end',
                    behavior: 'smooth'
                })
            }
        });
    }
};

export default comfortCard;
