document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // Array de imágenes (puedes agregar más)
    const images = [
        "images/trabajo1.webp",
        "images/trabajo2.webp",
        "images/trabajo3.webp",
        "images/trabajo4.webp",
        "images/trabajo5.webp",
        "images/trabajo6.webp",
        "images/trabajo7.webp",
        "images/mockup1.webp",
        "images/mockup2.webp",
        "images/mockup3.webp",
        "images/mockup4.webp",
        "images/mockup5.webp",
        "images/mockup6.webp",

    ];

    const descriptions = [
        "Descripción del Trabajo 1.",
        "Descripción del Trabajo 2.",
        "Descripción del Trabajo 3.",
        "Descripción del Trabajo 4.",
        "Descripción del Trabajo 5.",
        "Descripción del Trabajo 6."
    ];

    let currentIndex = 0;

    // Función para abrir el modal y mostrar la imagen seleccionada
    function openModal(index) {
        currentIndex = index;
        modalImg.src = images[currentIndex];
        modal.style.display = "block";
    }

    // Función para cambiar a la imagen anterior
    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex];
    }

    // Función para cambiar a la siguiente imagen
    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex];
    }

    // Añadir evento click a cada imagen de la galería
    const galleryImages = document.querySelectorAll(".gallery-image");
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", function () {
            openModal(index);
        });
    });

    // Cerrar el modal al hacer clic en la "x"
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera de la imagen
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Navegación entre imágenes
    prevButton.addEventListener("click", showPrev);
    nextButton.addEventListener("click", showNext);

    // Navegación con teclado
    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "block") {
            if (event.key === "ArrowLeft") {
                showPrev();
            } else if (event.key === "ArrowRight") {
                showNext();
            } else if (event.key === "Escape") {
                modal.style.display = "none";
            }
        }
    });
});