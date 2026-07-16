const filterButtons = document.querySelectorAll(".filter-btn");
const gameCards = document.querySelectorAll(".game-card");
const searchInput = document.querySelector(".search-bar input");
const noGameResults = document.getElementById("no-game-results");

if (filterButtons.length && gameCards.length && searchInput) {

    function updateGames() {
        const activeFilter = document.querySelector(".filter-btn.active").textContent.toLowerCase();
        const searchText = searchInput.value.toLowerCase().trim();

        let visibleGames = 0;

        gameCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const tag = card.querySelector("p").textContent.toLowerCase();

            const matchesFilter =
                activeFilter === "all" || tag.includes(activeFilter);

            const matchesSearch =
                title.includes(searchText);

            const showCard = matchesFilter && matchesSearch;

            card.style.display = showCard ? "" : "none";

            if (showCard) {
                visibleGames++;
            }
        });

        if (noGameResults) {
            noGameResults.style.display = visibleGames === 0 ? "block" : "none";
        }
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            updateGames();
        });
    });

    searchInput.addEventListener("input", updateGames);

    gameCards.forEach(card => {
        card.addEventListener("click", () => {
            const link = card.dataset.link;
            if (link) {
                window.location.href = link;
            }
        });
    });
}


const items = document.querySelectorAll(".item");

items.forEach(item => {
    const btn = item.querySelector(".question");

    btn.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        }
    });
});

const search = document.getElementById("search");
const noResults = document.getElementById("no-results");

if (search) {
    search.addEventListener("input", () => {

        const value = search.value.toLowerCase();
        let totalMatches = 0;

        document.querySelectorAll(".faq-title").forEach(title => {

            let hasVisibleItems = false;
            let next = title.nextElementSibling;

            while (next && !next.classList.contains("faq-title")) {

                if (next.classList.contains("item")) {

                    const match = next.innerText.toLowerCase().includes(value);

                    next.style.display = match ? "block" : "none";

                    if (match) {
                        hasVisibleItems = true;
                        totalMatches++;
                    }
                }

                next = next.nextElementSibling;
            }

            title.style.display = hasVisibleItems ? "block" : "none";
        });

        if (noResults) {
            noResults.style.display = totalMatches === 0 && value !== "" ? "block" : "none";
        }

    });
}