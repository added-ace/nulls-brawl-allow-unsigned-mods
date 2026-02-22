async function run() {
    try {
        const proxy = "https://api.allorigins.win/raw?url=";
        const target = encodeURIComponent("https://dnull.xyz/latest_bs");

        const response = await fetch(proxy + target);
        const text = await response.text();

        const match = text.match(/https?:\/\/[^\s"]+/);
        if (!match) {
            document.body.innerText = "No redirect found";
            return;
        }

        const finalUrl = match[0];
        const fileName = finalUrl.split("/").pop();

        const newUrl = "https://tempweb.nullsusercontent.com/fpapk/" 
            + fileName 
            + "?allowUnsignedMods=1";

        window.location.href = newUrl;
    } catch {
        document.body.innerText = "Failed";
    }
}

run();
