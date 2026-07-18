const slug = location.hash.substring(1);
const game = games.find(g => g.slug === slug);

if (!game) {
    location.replace("/404.html");
}

document.title = `PLEXILE ARCADE - ${game.title}`;

document.getElementById("gameTitle").textContent = game.title;
document.getElementById("gameImage").src = game.image;
document.getElementById("background").src = game.background;

const loader = document.getElementById("loader");
const frame = document.getElementById("gameFrame");
const gameContainer = document.getElementById("gameContainer");
const background = document.querySelector(".background");

const startTime = Date.now();

frame.src = game.iframe;

frame.addEventListener("load", () => {

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, 5000 - elapsed);

    setTimeout(() => {

        loader.style.opacity = "0";

        if (background) {
            background.style.transition = "opacity .1s ease";
            background.style.opacity = "0";
        }

        setTimeout(() => {

            loader.remove();

            if (background) {
                background.remove();
            }

            gameContainer.classList.add("loaded");

        }, 300);

    }, remaining);

});