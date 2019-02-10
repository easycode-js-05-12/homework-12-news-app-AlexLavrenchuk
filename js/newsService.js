const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '03769a9a27d045c9abfa844b45a5d868';
        this.country = 'ua';
        this.category = 'technology';
    }

    /**
     * Get all news upon request from select
     */
    getTopHeadlinesNews(category = this.category, country = this.country) {
        return new Promise ((resolve, reject) => {
            http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`)
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    /**
     * Get all news upon request from search
     */
    getEverythingNews(bitcoint) {
        return new Promise ((resolve, reject) => {
            http.get(`${this.apiUrl}/everything?q=${bitcoint}&apiKey=${this.apiKey}`)
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
}