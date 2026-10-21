
import { country_info } from "./country-index.js";

const params = new URLSearchParams(window.location.search);
const countryId = (params.get("id") || "").toLowerCase();

const country = country_info.find(
    item => item.id.toLowerCase() === countryId
);

const status = document.getElementById("country-status");

if (!country) {
    document.getElementById("country-name").textContent =
        "Country Not Found";

    if (status) {
        status.textContent =
            `No country found for ID "${countryId}".`;
    }
} else {
    document.title = `${country.name} | Country Profile`;

    // Main heading
    document.getElementById("country-name").textContent = country.name;

    // Main Description
    document.getElementById("profile-overview").textContent = `${country.desc}`;

    const infoboxName = document.getElementById("infobox-name");
    if (infoboxName) infoboxName.textContent = country.name;

    // General information
    const fields = {
        "profile-name": country.name,
        "profile-region": country.region,
        "profile-id": country.id,
        "profile-continent": country.continent,
        "profile-capital": country.capital,
        "profile-demonym": country.demonym,
        "profile-leader": country.leader,
        "profile-area": country.area,
        "profile-government": country.government,
        "profile-party": country.party,
        "profile-ideology": country.ideology,
        "profile-population": country.population,
        "profile-gni": country.gni,
        "profile-capita": country.capita,
        "profile-hdi": country.hdi,
        "profile-currency": country.currency,
        "profile-timezone": country.timezone
    };

    for (const [id, value] of Object.entries(fields)) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent =
                value !== "" && value != null ? value : "Not specified";
        }
    }

    // Flag
    const flag = document.getElementById("country-flag");

    if (flag) {
        flag.src = country.flag;
        flag.alt = `${country.name} flag`;

        flag.onerror = () => {
            console.error("Flag failed to load:", country.flag);
        };
    }

    if (status) {
        status.textContent = "Country profile loaded successfully.";
    }
}


