const url = "/";
let win;

const autoCloakSelect = document.getElementById("autoCloakSelect");

function openWindow() {
    if (win && !win.closed) {
        win.focus();
        return;
    }

    win = window.open("", "_blank");

    if (!win) return;

    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";

    const iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.src = url;

    win.document.body.appendChild(iframe);
}

function runAutoCloak() {

    if (window.top !== window.self) {
        return;
    }

    const enabled = localStorage.getItem("autoCloakEnabled") === "true";

    if (enabled) {
        openWindow();
        window.location.href = "https://www.google.com/";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedSetting = localStorage.getItem("autoCloakEnabled");

    if (savedSetting === null) {
        localStorage.setItem("autoCloakEnabled", "false");
    }

    if (autoCloakSelect) {
        autoCloakSelect.value =
            localStorage.getItem("autoCloakEnabled") === "true" ? "on" : "off";

        autoCloakSelect.addEventListener("change", () => {
            localStorage.setItem(
                "autoCloakEnabled",
                autoCloakSelect.value === "on"
            );
        });
    }

    runAutoCloak();
});
