// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");

hamburger.addEventListener("click", () => {
  menuLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});

// Close menu when clicking a link
document.querySelectorAll(".menu-links a").forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

// Add event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", function(event) {
      // Prevent the click from propagating to the document
      event.stopPropagation();
      toggleMenu();
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu-links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    
    if (menu && menu.classList.contains("active") && 
        !event.target.closest(".menu-links") && 
        !event.target.closest(".hamburger-icon")) {
      menu.classList.remove("active");
      hamburgerIcon.classList.remove("open");
    }
  });
  
  // Close menu when clicking on a menu link
  const menuLinks = document.querySelectorAll(".menu-links a");
  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      const menu = document.querySelector(".menu-links");
      const hamburgerIcon = document.querySelector(".hamburger-icon");
      menu.classList.remove("active");
      hamburgerIcon.classList.remove("open");
    });
  });
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Offset for fixed navigation
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
