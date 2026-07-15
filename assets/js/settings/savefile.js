function exportCookies() {
    const cookies = document.cookie;

    const file = new Blob(
        [JSON.stringify({
            cookies: cookies,
            expires: "1 year"
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

        const reader = new FileReader();

        reader.onload = () => {
            const data = JSON.parse(reader.result);

            if (!data.cookies) {
                alert("Invalid cookie file.");
                return;
            }

            data.cookies.split("; ").forEach(cookie => {
                document.cookie = cookie + "; path=/; max-age=31536000; SameSite=Lax";
            });

            alert("Cookies imported!");
            location.reload();
        };

        reader.readAsText(file);
    };
}
