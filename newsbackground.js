function loadMoreNews() {
    // Проверяем, достиг ли скролл конца страницы
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        var newsContainer = document.getElementById("newstext");
        var news = document.createElement("p");
        news.innerText = "Новая новость";
        newsContainer.appendChild(news);
    }
}
window.addEventListener("scroll", loadMoreNews);
