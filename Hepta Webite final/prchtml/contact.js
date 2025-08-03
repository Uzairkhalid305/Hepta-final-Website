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
