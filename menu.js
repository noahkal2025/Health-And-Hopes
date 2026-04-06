document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.hhmi-nav__burger');
    const navPanel = document.getElementById('hhmi-nav-panel');
    const navLinks = document.querySelectorAll('.hhmi-nav__link');

    if (!burger || !navPanel) return;

    // Toggle menu on burger click
    burger.addEventListener('click', () => {
        const isExpanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', !isExpanded);
        burger.classList.toggle('open');
        navPanel.classList.toggle('hhmi-nav--open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.setAttribute('aria-expanded', 'false');
            burger.classList.remove('open');
            navPanel.classList.remove('hhmi-nav--open');
        });
    });

    // Close menu when clicking outside (optional polish)
    document.addEventListener('click', (e) => {
        if (!navPanel.contains(e.target) && !burger.contains(e.target) && navPanel.classList.contains('hhmi-nav--open')) {
            burger.setAttribute('aria-expanded', 'false');
            burger.classList.remove('open');
            navPanel.classList.remove('hhmi-nav--open');
        }
    });
});
