import { advertisements } from "./advertisements.js";

console.log("1. ads.js loaded");
console.log("2. Advertisement database:", advertisements);

const container = document.getElementById("ad-container");

console.log("3. Ad container:", container);

function GenerateAds() {
    if (!container) {
        console.error('Missing element: #ad-container');
        return;
    }

    if (!advertisements || advertisements.length === 0) {
        container.textContent = "No advertisements found.";
        console.error("Advertisement database is empty.");
        return;
    }

    const selected =
        advertisements[Math.floor(Math.random() * advertisements.length)];

    console.log("4. Selected ad:", selected);

    const image = document.createElement("img");
    image.className = "Advertisement";
    image.src = selected.image;
    image.alt = `${selected.organization} advertisement`;

    image.onload = () => console.log("5. Image loaded:", image.src);
    image.onerror = () => {
        console.error("5. Image failed to load:", image.src);
        container.textContent = `Image not found: ${selected.image}`;
    };

    container.replaceChildren(image);
}

GenerateAds();
