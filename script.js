async function run() {
    const log = (msg) => {
        document.body.innerText += msg + "\n";
    };

    try {
        log("Starting request...");
        log("Fetching https://dnull.xyz/latest_bs");

        const response = await fetch("https://dnull.xyz/latest_bs", {
            method: "GET",
            redirect: "follow"
        });

        log("Request finished.");
        log("Status: " + response.status);
        log("Status text: " + response.statusText);
        log("Final URL detected by browser: " + response.url);

        if (!response.ok) {
            log("Response not OK.");
            return;
        }

        const finalUrl = response.url;

        if (!finalUrl || finalUrl === "https://dnull.xyz/latest_bs") {
            log("No redirect detected. Browser likely blocked it (CORS).");
            return;
        }

        const parts = finalUrl.split("/");
        const fileName = parts[parts.length - 1];

        log("Extracted file name: " + fileName);

        if (!fileName.endsWith(".apk")) {
            log("File name does not look like an APK.");
            return;
        }

        const newUrl =
            "https://tempweb.nullsusercontent.com/fpapk/" +
            fileName +
            "?allowUnsignedMods=1";

        log("Constructed new URL:");
        log(newUrl);
        log("Redirecting in 3 seconds...");

        setTimeout(() => {
            window.location.href = newUrl;
        }, 3000);

    } catch (error) {
        log("Exception caught.");
        log("Error name: " + error.name);
        log("Error message: " + error.message);
        log("Stack:");
        log(error.stack || "No stack available");
    }
}

run();
