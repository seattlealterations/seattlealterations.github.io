function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  console.log("Toggle menu clicked");
  console.log("Menu before:", menu.classList.contains("open"));
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  console.log("Menu after:", menu.classList.contains("open"));
}

// Add event listener when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", toggleMenu);
    console.log("Hamburger icon event listener added");
  } else {
    console.log("Hamburger icon not found");
  }
});
