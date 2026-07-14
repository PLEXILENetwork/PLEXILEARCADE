const settingsBtn = document.getElementById("settingsBtn");
const overlay = document.getElementById("settingsOverlay");

settingsBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

function closeSettings() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        closeSettings();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeSettings();
    }
});

window.closeSettings = closeSettings;