async function run() {
    try {
        const response = await fetch("https://dnull.xyz/latest_bs", {
            method: "GET",
            redirect: "follow"
        });

        const finalUrl = response.url;
        const parts = finalUrl.split("/");
        const fileName = parts[parts.length - 1];

        const newUrl = "https://tempweb.nullsusercontent.com/fpapk/" 
            + fileName 
            + "?allowUnsignedMods=1";

        window.location.href = newUrl;
    } catch (e) {
        document.body.innerText = "Failed to fetch redirect.";
    }
}

run();
