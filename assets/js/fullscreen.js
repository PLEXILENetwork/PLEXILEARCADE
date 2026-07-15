const container = document.getElementById("gameContainer");
const btn = document.getElementById("fullscreenBtn");
const navbar = document.querySelector(".bottom-nav-container");

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

let mobileFullscreen = false;

btn.addEventListener("click", async () => {
    if (isMobile) {
        mobileFullscreen = !mobileFullscreen;

        container.classList.toggle("mobile-fullscreen", mobileFullscreen);
        navbar.style.display = mobileFullscreen ? "none" : "";

        btn.innerHTML = mobileFullscreen
            ? "<i class='bx bx-exit-fullscreen'></i>"
            : "<i class='bx bx-fullscreen'></i>";

        return;
    }

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
    if (!isMobile) {
        btn.innerHTML = document.fullscreenElement
            ? "<i class='bx bx-exit-fullscreen'></i>"
            : "<i class='bx bx-fullscreen'></i>";
    }
});