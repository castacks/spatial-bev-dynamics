// Toggle the Bulma navbar menu on small screens.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.navbar-burger').forEach(function (burger) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      document.querySelectorAll('.navbar-menu').forEach(function (menu) {
        menu.classList.toggle('is-active');
      });
    });
  });
});
