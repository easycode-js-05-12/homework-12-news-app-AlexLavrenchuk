const newsService = new NewsService();
const newsUI = new NewsUI();
const notificationUI = new NotificationUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const inputSearch = document.getElementById('search');

function onSelectChange(e) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    
    if (!country || !category) return console.log('Выберите страну и категорию');

    newsService.getTopHeadlinesNews((response) => {
        const { articles } = response;
        newsUI.clearContainer();
        articles.forEach((news) => newsUI.addNews(news));
    }, category, country);
}

function searchLength(event) {
    if (3 <= inputSearch.value.length) {
        newsService.getEverythingNews((response) => {
            if (response.status === "error") {
                notificationUI.clearAlert();
                notificationUI.addNotification(response);   
            } else {
                const { articles } = response;
                newsUI.clearContainer();
                articles.forEach((news) => newsUI.addNews(news));
            }
        }, inputSearch.value);
    }
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
inputSearch.addEventListener('keyup', searchLength);