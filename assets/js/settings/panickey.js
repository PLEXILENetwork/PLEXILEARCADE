const panicToggle = document.getElementById("panicToggle");

let panicEnabled = localStorage.getItem("panicKeyEnabled") === "true";

if (panicToggle) {
    panicToggle.value = panicEnabled ? "on" : "off";

    panicToggle.addEventListener("change", () => {
        panicEnabled = panicToggle.value === "on";
        localStorage.setItem("panicKeyEnabled", panicEnabled);
    });
}

if (!location.pathname.includes("settings.html")) {
    document.addEventListener("keydown", (event) => {
        if (
            panicEnabled &&
            event.ctrlKey &&
            event.code === "BracketRight"
        ) {
            event.preventDefault();
            location.replace("https://www.google.com/");
        }
    });
}
