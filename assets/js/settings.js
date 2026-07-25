const settingsBtn = document.getElementById("settingsBtn");
const overlay = document.getElementById("settingsOverlay");

let settingsChanged = false;
let scrollPosition = 0;


settingsBtn.addEventListener("click", () => {

    settingsChanged = false;

    scrollPosition = window.scrollY;

    overlay.classList.add("active");

    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

});


function settingsUpdated() {

    settingsChanged = true;

}


function closeSettings() {

    overlay.classList.remove("active");

    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollPosition);


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