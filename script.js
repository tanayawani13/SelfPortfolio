document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Change Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Contact Form Submission Logic
    const contactForm = document.getElementById('portfolioContactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Grab values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Visual feedback
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        // Simulate an API call
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent.`);
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 1500);
    });


    // 4. PROJECT MODAL POPUP LOGIC
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');

// Open popup and grab custom content properties from clicked card elements
document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.project-card');
        
        const title = card.getAttribute('data-title');
        const desc = card.getAttribute('data-desc');
        const tech = card.getAttribute('data-tech');
        const features = card.getAttribute('data-features');

        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalDesc').innerText = desc;
        document.getElementById('modalTech').innerText = tech;
        document.getElementById('modalFeatures').innerText = features;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    });
});

// Close popup on 'X' click
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
});

// Close popup if background wrapper click happens
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
});


});


