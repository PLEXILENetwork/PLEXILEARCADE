function loadGame() {

    const slug = location.hash.substring(1);
    const game = games.find(g => g.slug === slug);

    if (!game) {
        location.replace("/404.html");
        return;
    }

    document.title = `PLEXILE ARCADE - ${game.title}`;

    const gameTitle = document.getElementById("gameTitle");
    const gameImage = document.getElementById("gameImage");
    const backgroundVideo = document.getElementById("background");
    const loader = document.getElementById("loader");
    const frame = document.getElementById("gameFrame");
    const gameContainer = document.getElementById("gameContainer");
    const gameBackground = document.querySelector(".game-background");

    if (gameTitle) {
        gameTitle.textContent = game.title;
    }

    if (gameImage) {
        gameImage.src = game.image;
    }

    if (backgroundVideo) {
        backgroundVideo.src = game.background;
        backgroundVideo.load();

        backgroundVideo.play().catch(() => {});
    }

    const startTime = Date.now();

    if (frame) {
        frame.src = game.iframe;
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


loadGame();


window.addEventListener("hashchange", () => {
    location.reload();
});
