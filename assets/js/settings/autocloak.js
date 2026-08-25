let win = null;

const autoCloakSelect = document.getElementById("autoCloakSelect");

function openWindow() {
    if (win && !win.closed) {
        win.focus();
        return;
    }

    const currentUrl = window.location.href;

    win = window.open("about:blank", "_blank");

    if (!win) {
        return;
    }

    win.document.open();
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title></title>
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                iframe {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border: 0;
                }
            </style>
        </head>
        <body>
            <iframe src="${currentUrl.replace(/"/g, "&quot;")}"></iframe>
        </body>
        </html>
    `);
    win.document.close();

    win.focus();
}

function runAutoCloak() {
    if (window.top !== window.self) {
        return;
    }

    const enabled = localStorage.getItem("autoCloakEnabled") === "true";

    if (!enabled) {
        return;
    }

    openWindow();

    window.location.replace("https://www.google.com/");
}

document.addEventListener("DOMContentLoaded", () => {
    let savedSetting = localStorage.getItem("autoCloakEnabled");

    if (savedSetting === null) {
        savedSetting = "false";
        localStorage.setItem("autoCloakEnabled", "false");
    }

    if (autoCloakSelect) {
        autoCloakSelect.value =
            savedSetting === "true" ? "on" : "off";

        autoCloakSelect.addEventListener("change", () => {
            const enabled = autoCloakSelect.value === "on";

            localStorage.setItem(
                "autoCloakEnabled",
                enabled ? "true" : "false"
            );

            if (enabled) {
                runAutoCloak();
            }
        });
    }

    runAutoCloak();
});
