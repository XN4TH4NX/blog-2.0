document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            });
        });
    }
    document.querySelectorAll('.btn-secondary').forEach(button => {
        button.addEventListener('click', () => {
            const receta = button.getAttribute('data-receta'); 
            if (receta) {
                window.location.href = receta; 
            }
        });
    });  

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            alert(`¡Gracias por suscribirte con ${emailInput.value}!`);
            emailInput.value = ''; 
        });
    }
});
