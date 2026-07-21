const slug = location.hash.substring(1);
const app = apps.find(a => a.slug === slug);

if (!app) {
    location.replace("/404.html");
}

document.title = `PLEXILE ARCADE - ${app.title}`;

document.getElementById("gameTitle").textContent = app.title;
document.getElementById("gameImage").src = app.image;

const backgroundVideo = document.getElementById("background");
backgroundVideo.src = app.background;
backgroundVideo.play();

document.querySelector(".loading-text").textContent = "Loading app...";

const loader = document.getElementById("loader");
const frame = document.getElementById("gameFrame");
const gameContainer = document.getElementById("gameContainer");
const background = document.querySelector(".background");

const startTime = Date.now();

frame.src = app.iframe;

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