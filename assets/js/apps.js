const apps = [
{
    title: "32257480 Calculator",
    category: "Tools",
    image: "/assets/apps/32257480calculator/app.png",
    background: "/assets/apps/32257480calculator/app.webm",
    slug: "32257480calculator",
    iframe: "/assets/apps/32257480calculator/app.html"
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
    title: "Spotify",
    category: "Media",
    image: "/assets/apps/spotify/app.png",
    background: "/assets/apps/spotify/app.webm",
    slug: "spotify",
    iframe: "/assets/apps/spotify/app.html"
},
{
    title: "Windows 11",
    category: "Media",
    image: "/assets/apps/windows11/app.png",
    background: "/assets/apps/windows11/app.webm",
    slug: "windows11",
    iframe: "/assets/apps/windows11/app.html"
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

const appsGrid = document.getElementById("appsGrid");

if (appsGrid) {
    apps.forEach(app => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
            <img src="${app.image}" alt="${app.title}">
            <div class="info">
                <h3>${app.title}</h3>
                <p>#${app.category}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            let recent = JSON.parse(localStorage.getItem("recentApps")) || [];

            recent = recent.filter(slug => slug !== app.slug);

            recent.unshift(app.slug);

            if (recent.length > 10) {
                recent.pop();
            }

            localStorage.setItem("recentApps", JSON.stringify(recent));

            window.location.href = `/app.html#${app.slug}`;
        });

        appsGrid.appendChild(card);
    });
}

const recentContainer = document.getElementById("recentApps");
const noRecent = document.getElementById("noRecentApps");

if (recentContainer) {

    const recent = JSON.parse(localStorage.getItem("recentApps")) || [];

    const recentList = recent
        .map(slug => apps.find(app => app.slug === slug))
        .filter(Boolean);

    if (recentList.length === 0) {

        if (noRecent) {
            noRecent.style.display = "block";
        }

    } else {

        if (noRecent) {
            noRecent.style.display = "none";
        }

        recentList.forEach(app => {

            const card = document.createElement("div");
            card.className = "game-card";

            card.innerHTML = `
                <img src="${app.image}" alt="${app.title}">
                <div class="info">
                    <h3>${app.title}</h3>
                    <p>#${app.category}</p>
                </div>
            `;

            card.addEventListener("click", () => {
                let recent = JSON.parse(localStorage.getItem("recentApps")) || [];

                recent = recent.filter(slug => slug !== app.slug);

                recent.unshift(app.slug);

                if (recent.length > 10) {
                    recent.pop();
                }

                localStorage.setItem("recentApps", JSON.stringify(recent));

                window.location.href = `/app.html#${app.slug}`;
            });

            recentContainer.appendChild(card);

        });
    }
}