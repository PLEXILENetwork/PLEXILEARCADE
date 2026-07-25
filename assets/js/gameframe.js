function loadGame(){

const slug = location.hash.substring(1);
const game = games.find(g => g.slug === slug);

if (!game) {
    location.replace("/404.html");
    return;
}

document.title = `PLEXILE ARCADE - ${game.title}`;

document.getElementById("gameTitle").textContent = game.title;
document.getElementById("gameImage").src = game.image;

const backgroundVideo = document.getElementById("background");

if(backgroundVideo){

    backgroundVideo.src = game.background;
    backgroundVideo.play();

}


const loader = document.getElementById("loader");
const frame = document.getElementById("gameFrame");
const gameContainer = document.getElementById("gameContainer");
const background = document.querySelector(".background");


const startTime = Date.now();

frame.src = game.iframe;


frame.onload = () => {

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, 5000 - elapsed);


    setTimeout(() => {


        if(loader){

            loader.style.opacity = "0";

        }


        if(background){

            background.style.transition = "opacity .1s ease";
            background.style.opacity = "0";

        }


        setTimeout(() => {


            if(loader){

                loader.remove();

            }


            if(background){

                background.remove();

            }


            if(gameContainer){

                gameContainer.classList.add("loaded");

            }


        },300);


    },remaining);


};

}


loadGame();


window.addEventListener("hashchange", () => {

    location.reload();

});