const panicToggle = document.getElementById("panicToggle");

let panicEnabled = localStorage.getItem("panicKeyEnabled") === "true";

if (panicToggle) {
    panicToggle.value = panicEnabled ? "on" : "off";

    panicToggle.addEventListener("change", () => {
        panicEnabled = panicToggle.value === "on";

        localStorage.setItem(
            "panicKeyEnabled",
            panicEnabled
        );
    });
}

document.addEventListener("keydown", (event) => {

    if (!panicEnabled) {
        return;
    }

    if (
        event.key.toLowerCase() === "e" &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey &&
        !event.metaKey
    ) {
        event.preventDefault();

        window.top.location.replace("https://www.google.com/");
    }

});