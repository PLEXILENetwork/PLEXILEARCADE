function loadApp() {

    const slug = location.hash.substring(1);
    const app = apps.find(a => a.slug === slug);

    if (!app) {
        location.replace("/404.html");
        return;
    }

    document.title = `PLEXILE ARCADE - ${app.title}`;

    const gameTitle = document.getElementById("gameTitle");
    const gameImage = document.getElementById("gameImage");
    const backgroundVideo = document.getElementById("background");
    const loader = document.getElementById("loader");
    const frame = document.getElementById("gameFrame");
    const gameContainer = document.getElementById("gameContainer");
    const gameBackground = document.querySelector(".game-background");
    const loadingText = document.querySelector(".loading-text");

    if (gameTitle) {
        gameTitle.textContent = app.title;
    }

    if (gameImage) {
        gameImage.src = app.image;
    }

    if (loadingText) {
        loadingText.textContent = "Loading app...";
    }

    if (backgroundVideo) {
        backgroundVideo.src = app.background;
        backgroundVideo.load();

        backgroundVideo.play().catch(() => {});
    }

    const startTime = Date.now();

    if (frame) {
        frame.src = app.iframe;
    }

    if (!frame) {
        return;
    }

    frame.onload = () => {

        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 5000 - elapsed);

        setTimeout(() => {

            if (loader) {
                loader.style.opacity = "0";
            }

            setTimeout(() => {

                if (backgroundVideo) {
                    backgroundVideo.pause();
                    backgroundVideo.removeAttribute("src");
                    backgroundVideo.load();
                }

                if (gameBackground) {
                    gameBackground.remove();
                }

                if (loader) {
                    loader.remove();
                }

                if (gameContainer) {
                    gameContainer.classList.add("loaded");
                }

            }, 300);

        }, remaining);

    };

}


loadApp();


window.addEventListener("hashchange", () => {
    location.reload();
});