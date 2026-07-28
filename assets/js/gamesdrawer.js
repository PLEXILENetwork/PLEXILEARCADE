(() => {

const gamesBtn = document.getElementById("gamesBtn");
const gamesDrawer = document.getElementById("gamesDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const drawerPages = document.getElementById("drawerPages");
const pageTitle = document.getElementById("pageTitle");

const popularContainer = document.getElementById("popularGames");
const newContainer = document.getElementById("newGames");
const recentContainer = document.getElementById("recentGames");

let currentPage = 0;
let scrollPosition = 0;

const pageNames = [
    "Recent",
    "Popular",
    "New"
];


if(gamesBtn && gamesDrawer && drawerOverlay){

    gamesBtn.addEventListener("click", () => {

        scrollPosition = window.scrollY;

        gamesDrawer.classList.add("open");
        drawerOverlay.classList.add("show");

        document.body.classList.add("no-scroll");

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = "100%";

    });

}


if(drawerOverlay){

    drawerOverlay.addEventListener("click", () => {

        if(gamesDrawer){
            gamesDrawer.classList.remove("open");
        }

        drawerOverlay.classList.remove("show");

        document.body.classList.remove("no-scroll");

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        window.scrollTo(0, scrollPosition);

    });

}


window.playGame = function(slug){

    let recent = JSON.parse(localStorage.getItem("recentGames")) || [];


    recent = recent.filter(game => game !== slug);


    recent.unshift(slug);


    if(recent.length > 10){

        recent.pop();

    }


    localStorage.setItem(
        "recentGames",
        JSON.stringify(recent)
    );


    if(window.parent !== window){

        window.parent.location.href = `/game.html#${slug}`;

    } else {

        window.location.href = `/game.html#${slug}`;

    }

};



function createGameCard(game){

    return `

    <div class="game-card" onclick="playGame('${game.slug}')">

        <img src="${game.image}">

        <div class="info">

            <h3>${game.title}</h3>

            <p>#${game.category}</p>

        </div>

    </div>

    `;

}


function createEmptyRecent(){

    return `

    <div class="empty-games">

        <i class="bx bx-time-five"></i>

        <h3>No Recent Games</h3>

        <p>Check out our games first!</p>

    </div>

    `;

}


function loadDrawerGames(){

    if(!popularContainer || !newContainer || !recentContainer){
        return;
    }


    const popular = games
        .filter(game => game.popular)
        .slice(0,8);


    const newest = games
        .filter(game => game.new)
        .slice(0,8);


    popularContainer.innerHTML =
        popular.map(createGameCard).join("");


    newContainer.innerHTML =
        newest.map(createGameCard).join("");


    const recentSlugs =
        JSON.parse(localStorage.getItem("recentGames")) || [];


    const recentGames = recentSlugs
        .map(slug => games.find(game => game.slug === slug))
        .filter(Boolean)
        .slice(0,8);


    recentContainer.innerHTML =
        recentGames.length
        ? recentGames.map(createGameCard).join("")
        : createEmptyRecent();

}



function updateDrawer(){

    if(drawerPages){

        drawerPages.style.transform =
            `translateX(-${currentPage * 33.333}%)`;

    }


    if(pageTitle){

        pageTitle.textContent =
            pageNames[currentPage];

    }

}



const nextPage = document.getElementById("nextPage");

if(nextPage){

    nextPage.addEventListener("click", () => {

        currentPage++;

        if(currentPage > 2){
            currentPage = 0;
        }

        updateDrawer();

    });

}



const prevPage = document.getElementById("prevPage");

if(prevPage){

    prevPage.addEventListener("click", () => {

        currentPage--;

        if(currentPage < 0){
            currentPage = 2;
        }

        updateDrawer();

    });

}



function waitForGames(){

    if(typeof games !== "undefined"){

        loadDrawerGames();

    } else {

        setTimeout(waitForGames,100);

    }

}


waitForGames();


})();