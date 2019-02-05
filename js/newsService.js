const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '03769a9a27d045c9abfa844b45a5d868';
        this.country = 'ua';
        this.category = 'technology';
    }

    /**
     * Get all news
     */
    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback);
    }

    /**
     * Get search news
     */
    getEverythingNews(callback, bitcoint) {
        http.get(`${this.apiUrl}/everything?q=${bitcoint}&apiKey=${this.apiKey}`, callback);
    }
}