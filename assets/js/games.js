const games = [
    {
        title: "Roblox",
        category: "Multiplayer",
        image: "https://raw.githubusercontent.com/willoo0/v6/refs/heads/main/public/images/games-images/roblox.png",
        slug: "roblox",
        iframe: "https://example.com/roblox"
    },
    {
        title: "Bacon May Die",
        category: "Action",
        image: "https://raw.githubusercontent.com/willoo0/v6/refs/heads/main/public/images/games-images/baconmaydie.png",
        slug: "baconmaydie",
        iframe: "https://example.com/baconmaydie"
    },
    {
        title: "Basketball Stars",
        category: "Sports",
        image: "https://raw.githubusercontent.com/willoo0/v6/refs/heads/main/public/images/games-images/basketballstars.png",
        slug: "basketballstars",
        iframe: "https://example.com/basketballstars"
    },
    {
        title: "Bitlife",
        category: "Strategy",
        image: "https://raw.githubusercontent.com/willoo0/v6/refs/heads/main/public/images/games-images/bl.png",
        slug: "bitlife",
        iframe: "https://example.com/bitlife"
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