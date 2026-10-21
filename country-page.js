
import { countries } from "./countries.js";

console.log("Country database loaded:", countries);

const grid = document.getElementById("country-grid");
const status = document.getElementById("grid-status");

if (!grid) {
    throw new Error("Cannot find #country-grid in HTML");
}

if (!Array.isArray(countries)) {
    throw new Error("countries.js did not export an array");
}

if (countries.length === 0) {
    if (status) {
        status.textContent = "No countries found in the database.";
    }
}

countries.forEach(country => {
    // Create a clickable link for each country
    const card = document.createElement("a");
    card.className = "country-card";
    card.href = `country.html?id=${encodeURIComponent(country.id)}`;

    // Country flag
    const flag = document.createElement("img");
    flag.src = country.flag;
    flag.alt = `${country.name} flag`;

    // Country name
    const name = document.createElement("h2");
    name.textContent = country.name ?? "Unnamed country";

    // Country region
    const region = document.createElement("p");
    region.textContent = country.region ?? "Region not specified";

    card.append(flag, name, region);
    grid.appendChild(card);
});

console.log(`Rendered ${countries.length} countries.`);
