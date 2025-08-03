  document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.getElementById('menu');
        const crossButton = document.getElementById('cross');
        const navLinks = document.querySelector('.nav-links');
        
        menuButton.addEventListener('click', function() {
            navLinks.classList.add('active');
        });
        
        crossButton.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });


    // Gallery logic
const galleryImages = document.querySelectorAll('.gallery img');
const mainImg = document.getElementById('mainImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Set initial main image
mainImg.src = galleryImages[currentIndex].src;

// Clicking main image moves to next
mainImg.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = galleryImages[currentIndex].src;
    mainImg.style.opacity = 1;
  }, 200);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = galleryImages[currentIndex].src;
    mainImg.style.opacity = 1;
  }, 200);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = galleryImages[currentIndex].src;
    mainImg.style.opacity = 1;
  }, 200);
});
