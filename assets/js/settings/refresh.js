 const settingsElements = [
    "effects",
    "autoCloakSelect",
    "panicToggle",
    "adsToggle",
    "analyticsToggle"
];

settingsElements.forEach(id => {

    const element = document.getElementById(id);

    if (element) {

        element.addEventListener("change", () => {

            window.parent.settingsUpdated();

        });

    }

});