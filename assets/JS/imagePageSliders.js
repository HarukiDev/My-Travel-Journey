document.addEventListener("DOMContentLoaded", () => {
    const imagePages = document.querySelectorAll(".imagePage");
    const dots = document.querySelectorAll(".dotImage");
    let currentSlide = 0;
    let slideInterval;

    // Fungsi untuk menunjukkan slide berdasarkan index
    const showSlide = (index) => {
        imagePages.forEach((page, i) => {
            if (i === index) {
                page.style.display = "flex"; 
                page.style.opacity = "1";
            } else {
                page.style.display = "none"; 
                page.style.opacity = "0";
            }
        });
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    };

    showSlide(currentSlide);

    // Fungsi untuk menjalankan slider otomatis
    const autoSlide = () => {
        currentSlide = (currentSlide + 1) % imagePages.length;
        showSlide(currentSlide);
    };

    slideInterval = setInterval(autoSlide, 5000);

    // Event listener untuk dot navigasi
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            clearInterval(slideInterval); 
            currentSlide = parseInt(e.target.getAttribute('data-index'));
            showSlide(currentSlide);
            slideInterval = setInterval(autoSlide, 5000);
        });
    });
});
