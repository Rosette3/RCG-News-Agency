
import { news } from "./news_data.js";

function createNewsCard(article) {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
        <h2>${article.headline}</h2>

        <div class="country-row">
            <span>${article.country}</span>
            <img class="Flags" src="Flags/${article.flag}">
        </div>

        <p class="date">${article.date}</p>

        <img class="News" src="News/${article.image}" alt="News Image">

        <p class="description">${article.desc}</p>
    `;

    return card;
}


function renderLatestNews() {
    const grid = document.getElementById("news-grid");

    if (!grid) {
        console.error("News grid #news-grid was not found.");
        return;
    }

    grid.replaceChildren();

    const latestArticles = [...news]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6);

    latestArticles.forEach(article => {
        grid.appendChild(createNewsCard(article));
    });
}

renderLatestNews();
