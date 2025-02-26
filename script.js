fetch("/crypto-news")
    .then(response => response.json())
    .then(data => {
        const newsList = document.getElementById("newsList");
        newsList.innerHTML = "";

        data.results.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.className = "news-item";
            newsItem.innerHTML = `<h3>${article.title}</h3>`;
            newsItem.onclick = () => showNews(article);
            newsList.appendChild(newsItem);
        });
    })
    .catch(error => console.error("Error fetching news:", error));

function showNews(article) {
    const newsContent = document.getElementById("newsContent");
    newsContent.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.summary || "No summary available."}</p>
        <a href="${article.url}" target="_blank">Read full article</a>
    `;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
