// Script to handle navigation link activation and navbar behavior

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

document.addEventListener('click', function(event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarToggler.click();
        }
    }
});

var images = ["images/DSC-front.png", "images/DSC-back.png"]; // Add more images as needed
var currentIndex = 0;

// Function to switch image
function switchImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('heroImage').src = images[currentIndex];
}

// Automatic switch every 5 seconds
setInterval(switchImage, 10000);
