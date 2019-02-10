const newsService = new NewsService();
const newsUI = new NewsUI();
const notificationUI = new NotificationUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const inputSearch = document.getElementById('search');

/**
 * select change request
 */
function onSelectChange() {
    const country = countrySelect.value;
    const category = categorySelect.value;
    
    if (!country || !category) return console.log('Выберите страну и категорию');

    newsService.getTopHeadlinesNews(category, country)
        .then( ({ articles }) => {
            notificationUI.clearAlert();
            newsUI.clearContainer();
            articles.forEach((news) => newsUI.addNews(news));
        })
        .catch((err) => {
            newsUI.clearContainer();
            notificationUI.addNotification(err);
        });
}
/**
 * search change request
 */
function searchLength() {
    if (3 <= inputSearch.value.length) {
        newsService.getEverythingNews(inputSearch.value)
            .then( ({ articles }) => {
                notificationUI.clearAlert();
                newsUI.clearContainer();
                articles.forEach((news) => newsUI.addNews(news));
            })
            .catch((err) => {
                newsUI.clearContainer();
                notificationUI.addNotification(err);
            });
    }
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
inputSearch.addEventListener('keyup', searchLength);

