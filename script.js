// navbar
document.addEventListener("DOMContentLoaded", function () {
  var headerNav = document.querySelector(".header-nav");
  var sticky = headerNav.offsetTop;

  window.onscroll = function () {
    if (window.scrollY > sticky) {
      headerNav.classList.add("sticky");
    } else {
      headerNav.classList.remove("sticky");
    }
  };
});
