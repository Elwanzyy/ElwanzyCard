
/* ===== MENJALANKAN IKON ===== */

// Memastikan library Lucide tersedia
if (window.lucide) {
    lucide.createIcons();
}


/* ===== MENU NAVIGASI HP ===== */

// Mengambil tombol menu
const menuToggle = document.getElementById("menuToggle");

// Mengambil daftar navigasi
const navMenu = document.getElementById("navMenu");

// Memeriksa apakah kedua elemen tersedia
if (menuToggle && navMenu) {

    // Membuka dan menutup menu saat tombol ditekan
    menuToggle.addEventListener("click", function () {

        // Mengubah status menu
        const isOpen = navMenu.classList.toggle("show");

        // Memperbarui status aksesibilitas
        menuToggle.setAttribute("aria-expanded", isOpen);

        // Mengganti ikon menu
        menuToggle.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';

        // Memuat ulang ikon
        if (window.lucide) {
            lucide.createIcons();
        }
    });


    /* ===== MENUTUP MENU SETELAH DIPILIH ===== */

    // Mengambil semua link navigasi
    const navLinks = navMenu.querySelectorAll("a");

    // Menutup menu ketika salah satu link ditekan
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML = '<i data-lucide="menu"></i>';

            if (window.lucide) {
                lucide.createIcons();
            }
        });
    });
}


/* ===== ANIMASI SCROLL SECTION ===== */

// Mengambil semua elemen dengan class reveal
const revealElements = document.querySelectorAll(".reveal");

// Memeriksa dukungan Intersection Observer
if ("IntersectionObserver" in window) {

    // Membuat pengamat posisi elemen
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                // Menjalankan animasi saat elemen terlihat
                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    // Berhenti mengamati setelah muncul
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    // Memulai pengamatan setiap section
    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

} else {

    // Menampilkan semua section jika browser tidak mendukung
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}


/* ===== TAHUN FOOTER OTOMATIS ===== */

// Mengambil elemen copyright
const copyright = document.querySelector(".copyright");

// Mengubah tahun mengikuti tahun perangkat
if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} ELWANZY. All rights reserved.`;
}
