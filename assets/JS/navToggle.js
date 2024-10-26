document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector(".navContainer"),
    navToggle = document.getElementById("toggle"),
    navClose = document.getElementById("Close");

  // Fungsi untuk menyesuaikan tampilan berdasarkan lebar layar
  const updateNavDisplay = () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("show-menu");
      navToggle.style.display = "none";  // desktop
    } else {
      navToggle.style.display = "block"; // mobile
    }
  };

  // Panggil fungsi saat halaman dimuat dan ketika ukuran layar berubah
  window.addEventListener("resize", updateNavDisplay);
  updateNavDisplay(); 

  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.style.display = "none";
  });

  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.style.display = "block";
  });
})