// Smooth Scroll Effect for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Testimonials Slider
let testimonialIndex = 0;
const testimonials = [
    "ZOUNTE helped us scale our brand's digital presence!",
    "Their SEO strategies skyrocketed our website traffic!",
    "Amazing content marketing strategies from ZOUNTE!"
];

function showTestimonial(index) {
    document.getElementById("testimonial-text").textContent = testimonials[index];
}

setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
}, 3000);

// CTA Pop-up Modal Activation
window.onload = function() {
    setTimeout(() => {
        document.getElementById("cta-modal").style.display = "block";
    }, 5000);
};

// Close Modal Functionality
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("cta-modal").style.display = "none";
});
