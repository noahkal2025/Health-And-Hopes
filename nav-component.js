// Navigation Component with Dropdown Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle mobile menu toggle
    const burger = document.querySelector('.hhmi-nav__burger');
    const navPanel = document.querySelector('.hhmi-nav');

    if (burger && navPanel) {
        burger.addEventListener('click', () => {
            const isExpanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', !isExpanded);
            navPanel.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Handle dropdown toggles
    const dropdownToggles = document.querySelectorAll('.hhmi-nav__dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;
            const isOpen = parent.classList.contains('open');

            // Close all other dropdowns
            document.querySelectorAll('.hhmi-nav__item--dropdown.open').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('open');
                }
            });

            // Toggle current dropdown
            parent.classList.toggle('open');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hhmi-nav__item--dropdown')) {
            document.querySelectorAll('.hhmi-nav__item--dropdown.open').forEach(item => {
                item.classList.remove('open');
            });
        }
    });
});
