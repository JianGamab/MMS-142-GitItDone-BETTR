// - This JS is for Navigation Scripts (navbar, footer sections and other navigation functions) -

// -- Navbar: Current Page Highlight Switcher --
const navLinks = document.querySelectorAll('#mainNav, .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // 1. Remove active state and aria-current from all links
        navLinks.forEach(item => {
            item.classList.remove('active', 'text-decoration-underline', 'underline-primary');
            item.removeAttribute('aria-current');
        });

        // 2. Add active state and aria-current to clicked link
        this.classList.add('active', 'text-decoration-underline', 'underline-primary');
        this.setAttribute('aria-current', 'page');
    })
})
