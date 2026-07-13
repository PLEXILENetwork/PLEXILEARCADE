const frame = document.getElementById("gameFrame");
const btn = document.getElementById("fullscreenBtn");

btn.addEventListener("click", async () => {
    try {
        if (!document.fullscreenElement) {
            await frame.requestFullscreen();
            btn.innerHTML = "<i class='bx bx-exit-fullscreen'></i>";
        } else {
            await document.exitFullscreen();
            btn.innerHTML = "<i class='bx bx-fullscreen'></i>";
        }
    } catch (err) {
        console.error(err);
    }
});

document.addEventListener("fullscreenchange", () => {
    btn.innerHTML = document.fullscreenElement
        ? "<i class='bx bx-exit-fullscreen'></i>"
        : "<i class='bx bx-fullscreen'></i>";
});