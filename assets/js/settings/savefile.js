function exportCookies() {
    const file = new Blob(
        [JSON.stringify({
            localStorage: Object.fromEntries(
                Array.from({ length: localStorage.length }, (_, i) => {
                    const key = localStorage.key(i);
                    return [key, localStorage.getItem(key)];
                })
            )
        }, null, 2)],
        { type: "application/json" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "(DONOTSHARE)plexilearcade_cookies.json";
    link.click();

    URL.revokeObjectURL(link.href);
}

function importCookies() {
    const input = document.getElementById("cookieFile");

    input.click();

    input.onchange = () => {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);

                if (!data.localStorage) {
                    return;
                }

                Object.entries(data.localStorage).forEach(([key, value]) => {
                    localStorage.setItem(key, value);
                });

                location.reload();
            } catch {
            }
        };

        reader.readAsText(file);
    };
}
