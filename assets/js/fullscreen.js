const container = document.getElementById("gameContainer");
const btn = document.getElementById("fullscreenBtn");

btn.addEventListener("click", async () => {
    try {
        if (!document.fullscreenElement) {
            await container.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    } catch (err) {
        console.error("Fullscreen failed:", err);
    }
});

document.addEventListener("fullscreenchange", () => {
    btn.innerHTML = document.fullscreenElement
        ? "<i class='bx bx-exit-fullscreen'></i>"
        : "<i class='bx bx-fullscreen'></i>";
});