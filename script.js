// Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.classList.contains('hidden');

            // Close all other accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.add('hidden');
                item.previousElementSibling.classList.remove('active');
            });

            // Toggle current accordion
            if (isOpen) {
                content.classList.remove('hidden');
                header.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});