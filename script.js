function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add event listener when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", toggleMenu);
  }
  
  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu-links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    
    if (menu.classList.contains("open") && 
        !event.target.closest(".menu-links") && 
        !event.target.closest(".hamburger-icon")) {
      menu.classList.remove("open");
      hamburgerIcon.classList.remove("open");
    }
  });
});
