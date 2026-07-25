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

const pageNames = [
    "Popular",
    "New",
    "Recent"
];

gamesBtn.addEventListener("click", () => {
    gamesDrawer.classList.add("open");
    drawerOverlay.classList.add("show");
    document.body.classList.add("no-scroll");
});

drawerOverlay.addEventListener("click", () => {
    gamesDrawer.classList.remove("open");
    drawerOverlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
});

function createGameCard(game){
    return `

    <div class="game-card" onclick="location.href='/game.html#${game.slug}'">
        <img src="${game.image}">
        <div class="info">
            <h3>${game.title}</h3>
            <p>#${game.category}</p>
        </div>
    </div>

    `;

}

function loadDrawerGames(){
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

    const recent = JSON.parse(localStorage.getItem("recentGames")) || [];

    recentContainer.innerHTML =
        recent
        .slice(0,8)
        .map(createGameCard)
        .join("");
}

function updateDrawer(){
    drawerPages.style.transform =
        `translateX(-${currentPage * 33.333}%)`;

    pageTitle.textContent =
        pageNames[currentPage];
}

document.getElementById("nextPage").addEventListener("click", () => {

    currentPage++;

    if(currentPage > 2){
        currentPage = 0;
    }

    updateDrawer();
});

document.getElementById("prevPage").addEventListener("click", () => {

    currentPage--;

    if(currentPage < 0){
        currentPage = 2;
    }

    updateDrawer();
});

if(typeof games !== "undefined"){
    loadDrawerGames();
} else {

    console.error("games.js did not load before gamesdrawer.js");
}

})();