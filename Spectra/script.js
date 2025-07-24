window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500); // Optional delay to ensure content is rendered
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll animations for product cards
    const productCards = document.querySelectorAll('.product-card');
    
    const appearOnScroll = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    productCards.forEach(card => {
        appearOnScroll.observe(card);
    });
    
    // Form submission
    const form = document.getElementById('inquiry-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your inquiry has been submitted. We will contact you soon.`);
            
            // Reset form
            form.reset();
        });
    }
    
    // Navbar background change on scroll
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    });
});