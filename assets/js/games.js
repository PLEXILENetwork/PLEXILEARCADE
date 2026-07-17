const games = [
    {
        title: "1 on 1 Soccer",
        category: "Sports",
        image: "/assets/games/1on1soccer/game.png",
        background: "/assets/games/1on1soccer/game.gif",
        slug: "1on1soccer",
        iframe: "/assets/games/1on1soccer/game.html"
    },
    {
        title: "12 Mini Battles",
        category: "Multiplayer",
        image: "/assets/games/12minibattles/game.png",
        background: "/assets/games/12minibattles/game.gif",
        slug: "12minibattles",
        iframe: "/assets/games/12minibattles/game.html"
    },
    {
        title: "60s Burger Run",
        category: "Action",
        image: "/assets/games/baconmaydie/game.png",
        background: "/assets/games/baconmaydie/game.gif",
        slug: "baconmaydie",
        iframe: "/assets/games/baconmaydie/game.html"
    },
    {
        title: "Basketball Stars",
        category: "Sports",
        image: "/assets/games/basketballstars/game.png",
        background: "/assets/games/basketballstars/game.gif",
        slug: "basketballstars",
        iframe: "/assets/games/basketballstars/game.html"
    },
    {
        title: "Bitlife",
        category: "Strategy",
        image: "/assets/games/bitlife/game.png",
        background: "/assets/games/bitlife/game.gif",
        slug: "bitlife",
        iframe: "/assets/games/bitlife/game.html"
    },
    {
        title: "Super Liquid Soccer",
        category: "Sports",
        image: "/assets/games/superliquidsoccer/game.png",
        background: "/assets/games/superliquidsoccer/game.gif",
        slug: "superliquidsoccer",
        iframe: "/assets/games/superliquidsoccer/game.html"
    },
    {
        title: "Plants Vs Zombies",
        category: "Strategy",
        image: "/assets/games/plantsvszombies/game.png",
        background: "/assets/games/plantsvszombies/game.gif",
        slug: "plantsvszombies",
        iframe: "/assets/games/plantsvszombies/game.html"
    },
    {
        title: "FNAF 1",
        category: "Horror",
        image: "/assets/games/fnaf1/game.png",
        background: "/assets/games/fnaf1/game.gif",
        slug: "fnaf1",
        iframe: "/assets/games/fnaf1/game.html"
    },
    {
        title: "The Worlds Hardest Game",
        category: "Puzzle",
        image: "/assets/games/theworldshardestgame/game.png",
        background: "/assets/games/theworldshardestgame/game.gif",
        slug: "theworldshardestgame",
        iframe: "/assets/games/theworldshardestgame/game.html"
    }
];

const gamesGrid = document.getElementById("gamesGrid");

games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="info">
            <h3>${game.title}</h3>
            <p>#${game.category}</p>
        </div>
    `;

    card.addEventListener("click", () => {
        window.location.href = `/iframe.html#${game.slug}`;
    });

    gamesGrid.appendChild(card);
});