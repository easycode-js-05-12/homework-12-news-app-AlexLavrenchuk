class CustomHttp {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if (response.status >= 400) {
                        return reject(response);
                    }
                   
                    return response.json();
                })
                .then((data) => {
                    if (data.articles.length === 0) return reject(data);
                    return data;
                })
                .then((data) => resolve(data));
        });
    }

    post(url, data = {}) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then((response) => {
                    if (response.status >= 400) {
                        return reject(response);
                    }

                    return response.json();
                })
                .then((data) => {
                    if (data.articles.length === 0) return reject(data)
                    return data;
                })
                .then((data) => resolve(data));
        });
    }
}