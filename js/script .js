// Toggle class active
const navbarNav = document.querySelector(".navbar-extra");
document.querySelector("#makanan-menu").oneclick = () => {
  navbarNav.classList.toggle("active");
};
// JavaScript
// Mendapatkan elemen navbar dan tombol
const navbarNav = document.querySelector(".navbar-extra");
const menuButton = document.querySelector("#makanan-menu");

// Menambahkan event listener klik ke tombol
menuButton.onclick = () => {
  navbarNav.classList.toggle("active");
};
