const frame = document.getElementById("gameFrame");
const btn = document.getElementById("fullscreenBtn");

if (btn && frame) {

    btn.addEventListener("click", async () => {

        try {

            if (document.fullscreenElement) {
                await document.exitFullscreen();
                return;
            }

            if (frame.requestFullscreen) {
                await frame.requestFullscreen();
            } else if (frame.webkitRequestFullscreen) {
                frame.webkitRequestFullscreen();
            } else if (frame.msRequestFullscreen) {
                frame.msRequestFullscreen();
            }

        } catch (error) {

            console.error("Fullscreen failed:", error);

        }

    });

}