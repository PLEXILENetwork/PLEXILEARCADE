const slug = location.hash.substring(1);
const game = games.find(g => g.slug === slug);

if (!game) {
    window.location.href = "/404.html";
} else {
    document.title = `PLEXILE ARCADE - ${game.title}`;

    const title = document.getElementById("gameTitle");
    if (title) {
        title.textContent = game.title;
    }

    document.getElementById("gameFrame").src = game.iframe;
}