document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".episode-button");
    const popup = document.querySelector(".popup");
    const iframe = popup.querySelector("iframe");
    const closeBtn = popup.querySelector(".close");

    // Ouvrir le popup
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const videoURL = button.getAttribute("data-video");
            iframe.src = videoURL;
            popup.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        console.log("Bouton fermer cliqué"); // Debug
        iframe.src = ""; // Vider l'iframe
        popup.style.display = "none"; // Cacher le popup
    });
    

    // Fermer le popup avec la touche "Escape"
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            iframe.src = ""; // Vider l'iframe
            popup.style.display = "none";
        }
    });
});
