// TOGGLE NAVBAR

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const clicks = document.querySelectorAll(".click");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});



clicks.forEach(function(click){
  click.addEventListener("click", function () {
    links.classList.remove("show-links");
  });
})


// Carousel functionality
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.hero-slide');
            let currentSlide = 0;
            
            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
            }
            
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }
            
            // Start auto-rotation
            const interval = setInterval(nextSlide, 10000);
            
            // Pause on hover (optional)
            const carousel = document.querySelector('.hero-carousel');
            carousel.addEventListener('mouseenter', () => clearInterval(interval));
            carousel.addEventListener('mouseleave', () => {
                interval = setInterval(nextSlide, 10000);
            });
            
            // Initial setup
            showSlide(0);
        });



// Optional: Pause animation on hover for better UX
const companyTrack = document.querySelector('.company-track');
if (companyTrack) {
    companyTrack.addEventListener('mouseenter', () => {
        companyTrack.style.animationPlayState = 'paused';
    });
    
    companyTrack.addEventListener('mouseleave', () => {
        companyTrack.style.animationPlayState = 'running';
    });
}




// TESTIMONIAL SECTION
// document.addEventListener('DOMContentLoaded', function() {
//   const track = document.querySelector('.marquee-track');
//   if (track) {
//     const items = track.querySelectorAll('.testimonial-card');
//     items.forEach(item => {
//       const clone = item.cloneNode(true);
//       track.appendChild(clone);
//     });
//   }
// });