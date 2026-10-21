//News data sets
let news = [
    {
    // AUSTRALIA
    id: 1,
    title: "Australia Announces Major Renewable Energy Investments",
    country: "Australia",
    image_set: "Flag_of_Australia.svg.png",
    date: "September 7, 2024",
    news_image: "a.jpg",
    desc: "Australia unveiled expanded renewable energy investment plans supporting solar projects, battery storage facilities, and electrical grid modernization as part of national climate and energy transition objectives."
    }


]

const RandomArticles = document.getElementById("RandomArticles")

//News generated onload
window.onload = function () {
    GenerateNews();
}

//Random Article generated onclick
RandomArticles.onclick = function(){
    GenerateNews();
}

//The function to GenerateNews
function GenerateNews() {
    let usedIndexes = [];
    for (let i = 1; i <= 6; i++) {
        let randomindexgen;
        do { randomindexgen = Math.floor(Math.random() * news.length)}
        while (
            usedIndexes.includes(randomindexgen)
        );
        usedIndexes.push(randomindexgen);
        selected = news[randomindexgen];
        container = document.getElementById("news-container" + i);

        //News information randomized ! ! !
        container.innerHTML = `
        <h>${selected.title}</h>
        <div class="country-row"><sac>${selected.country}</sac><img class="Flags"
        src="Flags/${selected.image_set}"></div>
        <p class="date">${selected.date}</p class="date">
        <img class="News" src="News/${selected.news_image}"</img class="News">
        <p class="description">${selected.desc}</p class="description">
        `;
        console.log(randomindexgen);
        container.classList.remove("fade-card");
        void container.offsetWidth;
        container.classList.add("fade-card");
    }

}

