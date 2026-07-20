const games = [
{
    title: "Android Emulator",
    category: "Gaming",
    image: "/assets/apps/androidemulator/app.png",
    background: "/assets/apps/androidemulator/app.webm",
    slug: "androidemulator",
    iframe: "/assets/apps/androidemulator/app.html"
},
{
    title: "Audio Player",
    category: "Media",
    image: "/assets/apps/audioplayer/app.png",
    background: "/assets/apps/audioplayer/app.webm",
    slug: "audioplayer",
    iframe: "/assets/apps/audioplayer/app.html"
},
{
    title: "ChatAI",
    category: "AI",
    image: "/assets/apps/chatai/app.png",
    background: "/assets/apps/chatai/app.webm",
    slug: "chatai",
    iframe: "/assets/apps/chatai/app.html"
},
{
    title: "HTML/CSS Calculator",
    category: "Tools",
    image: "/assets/apps/htmlcsscalculator/app.png",
    background: "/assets/apps/htmlcsscalculator/app.webm",
    slug: "htmlcsscalculator",
    iframe: "/assets/apps/htmlcsscalculator/app.html"
},
{
    title: "Code Editor",
    category: "Tools",
    image: "/assets/apps/codeeditor/app.png",
    background: "/assets/apps/codeeditor/app.webm",
    slug: "codeeditor",
    iframe: "/assets/apps/codeeditor/app.html"
},
{
    title: "Draw",
    category: "Creative",
    image: "/assets/apps/draw/app.png",
    background: "/assets/apps/draw/app.webm",
    slug: "draw",
    iframe: "/assets/apps/draw/app.html"
},
{
    title: "EmulatorJS",
    category: "Gaming",
    image: "/assets/apps/emulatorjs/app.png",
    background: "/assets/apps/emulatorjs/app.webm",
    slug: "emulatorjs",
    iframe: "/assets/apps/emulatorjs/app.html"
},
{
    title: "emojiCOPY",
    category: "Tools",
    image: "/assets/apps/emojicopy/app.png",
    background: "/assets/apps/emojicopy/app.webm",
    slug: "emojicopy",
    iframe: "/assets/apps/emojicopy/app.html"
},
{
    title: "Online Soundboard",
    category: "Media",
    image: "/assets/apps/onlinesoundboard/app.png",
    background: "/assets/apps/onlinesoundboard/app.webm",
    slug: "onlinesoundboard",
    iframe: "/assets/apps/onlinesoundboard/app.html"
},
{
    title: "Ruffle",
    category: "Gaming",
    image: "/assets/apps/ruffle/app.png",
    background: "/assets/apps/ruffle/app.webm",
    slug: "ruffle",
    iframe: "/assets/apps/ruffle/app.html"
},
{
    title: "Silk",
    category: "Creative",
    image: "/assets/apps/silk/app.png",
    background: "/assets/apps/silk/app.webm",
    slug: "silk",
    iframe: "/assets/apps/silk/app.html"
},
{
    title: "YouTube",
    category: "Media",
    image: "/assets/apps/youtube/app.png",
    background: "/assets/apps/youtube/app.webm",
    slug: "youtube",
    iframe: "/assets/apps/youtube/app.html"
}
];

const gamesGrid = document.getElementById("gamesGrid");

if (gamesGrid) {
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
            let recent = JSON.parse(localStorage.getItem("recentGames")) || [];

            recent = recent.filter(slug => slug !== game.slug);

            recent.unshift(game.slug);

            if (recent.length > 10) {
                recent.pop();
            }

            localStorage.setItem("recentGames", JSON.stringify(recent));

            window.location.href = `/iframe.html#${game.slug}`;
        });

        gamesGrid.appendChild(card);
    });
}


const recentContainer = document.getElementById("recentGames");
const noRecent = document.getElementById("noRecentGames");

if (recentContainer) {

    const recent = JSON.parse(localStorage.getItem("recentGames")) || [];

    const recentList = recent
        .map(slug => games.find(game => game.slug === slug))
        .filter(Boolean);

    if (recentList.length === 0) {

        if (noRecent) {
            noRecent.style.display = "block";
        }

    } else {

        if (noRecent) {
            noRecent.style.display = "none";
        }

        recentList.forEach(game => {

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
                let recent = JSON.parse(localStorage.getItem("recentGames")) || [];

                recent = recent.filter(slug => slug !== game.slug);

                recent.unshift(game.slug);

                if (recent.length > 10) {
                    recent.pop();
                }

                localStorage.setItem("recentGames", JSON.stringify(recent));

                window.location.href = `/iframe.html#${game.slug}`;
            });

            recentContainer.appendChild(card);

        });
    }
}