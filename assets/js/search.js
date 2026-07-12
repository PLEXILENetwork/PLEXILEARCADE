// ===========
// MAIN
// ===========


const filterButtons = document.querySelectorAll(".filter-btn");
const gameCards = document.querySelectorAll(".game-card");
const searchInput = document.querySelector(".search-bar input");

if (filterButtons.length && gameCards.length && searchInput) {

    function updateGames() {
        const activeFilter = document.querySelector(".filter-btn.active").textContent.toLowerCase();
        const searchText = searchInput.value.toLowerCase().trim();

        gameCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const tag = card.querySelector("p").textContent.toLowerCase();

            const matchesFilter =
                activeFilter === "all" || tag.includes(activeFilter);

            const matchesSearch =
                title.includes(searchText);

            card.style.display =
                matchesFilter && matchesSearch ? "" : "none";
        });
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

// ===========
// FAQ
// ===========

const items = document.querySelectorAll(".item");

if (items.length) {

    items.forEach(item => {
        const btn = item.querySelector(".question");

        btn.addEventListener("click", () => {

            if (item.classList.contains("active")) {
                item.classList.remove("active");
                return;
            }

            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

        });
    });

    const search = document.getElementById("search");

    if (search) {

        search.addEventListener("input", () => {

            const value = search.value.toLowerCase();

            items.forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(value) ? "block" : "none";
            });

        });

    }
}