// Change navbar color on scroll
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
