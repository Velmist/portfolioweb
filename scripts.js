document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // Array de imágenes (puedes agregar más)
    const images = [
        "images/trabajo1.jpg",
        "images/trabajo2.jpg",
        "images/trabajo3.jpg",
        "images/trabajo4.jpg",
        "images/trabajo5.jpg",
        "images/trabajo6.jpg",
        "images/trabajo7.jpg",
        "images/mockup1.jpg",
        "images/mockup2.jpg",
        "images/mockup3.jpg",
        "images/mockup4.jpg",
        "images/mockup5.jpg",
        "images/mockup6.jpg",

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