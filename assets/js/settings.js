const settingsBtn = document.getElementById("settingsBtn");
const overlay = document.getElementById("settingsOverlay");

let settingsChanged = false;

settingsBtn.addEventListener("click", () => {

    settingsChanged = false;

    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

});


function settingsUpdated() {

    settingsChanged = true;

}


function closeSettings() {

    overlay.classList.remove("active");

    document.body.style.overflow = "";

    if (settingsChanged) {

        settingsChanged = false;
        window.location.reload();

    }

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
window.settingsUpdated = settingsUpdated;