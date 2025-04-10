document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const modalDesc = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
    const images = [
        { src: "images/trabajo1.webp", desc: "Montaje para mis redes sociales" },
        { src: "images/trabajo2.webp", desc: "Flyer en colaboracion para un torneo organizado" },
        { src: "images/trabajo3.webp", desc: "Trabajo para redes sociales" },
        { src: "images/trabajo4.webp", desc: "Parte de un portfolio para una empresa de helados" },
        { src: "images/trabajo5.webp", desc: "Flyer para una empresa de licores" },
        { src: "images/trabajo6.webp", desc: "Flyer para una empresa de licores" },

        //mockups
        { src: "images/mockup1.webp", desc: "Marca realizada para un proyecto de grado" },
        { src: "images/mockup2.webp", desc: "Mockup del logo de marca" },
        { src: "images/mockup3.webp", desc: "Mockup del logo de marca" },
        { src: "images/mockup4.webp", desc: "Practica de mockup con logo existente" },
        { src: "images/mockup5.webp", desc: "Diseño de logo basado en persona existente" },
        { src: "images/mockup6.webp", desc: "Mockup del logo de marca" }
    ];
    
    let currentIndex = 0;
    
    // Abrir modal
    document.querySelectorAll(".gallery-image").forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = parseInt(img.getAttribute("data-index"));
            updateModal();
            modal.style.display = "block";
        });
    });
    
    // Cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    
    // Navegación
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModal();
    });
    
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModal();
    });
    
    // Actualizar contenido del modal
    function updateModal() {
        modalImg.src = images[currentIndex].src;
        modalDesc.textContent = images[currentIndex].desc;
    }
    
    // Cerrar al hacer clic fuera
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});