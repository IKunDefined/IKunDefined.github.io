var nav = document.querySelector('.categories-nav');
var header = document.querySelector('header');
window.addEventListener('scroll', function() {
  if (window.scrollY >= 180) {
    nav.className = "categories-nav nav_open";
    header.style.marginBottom = "50px";
  } else {
    nav.className = "categories-nav"
    header.style.marginBottom = "0";
  }
});