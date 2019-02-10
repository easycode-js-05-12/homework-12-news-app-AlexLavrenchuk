class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }
    //adding method
    addNews(news) {
        this.newsContainer.insertAdjacentElement("afterbegin", NewsUI.newsTemplate(news));
    }
    //cleaning method
    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }
    //creature markup method
    static newsTemplate(news) {
        const divCol = createDomElement("div", "col s12 m6");
        const divCard = createDomElement("div", "card");
        const divImage = createDomElement("div", "card-image");
        const img = createDomElement("img", "", "", "src", news.urlToImage || "img/noImage.png", 'alt', "newImage");       
        const divContent = createDomElement("div", "card-content");
        const span = createDomElement("span", "card-title", news.title || '');
        const p = createDomElement("p", '', news.description || '');
        const a = createDomElement('a', "", 'Read more', 'href', news.url, 'target', '_blank');
        const divAction = createDomElement("div", "card-action");

        divImage.appendChild(img);
        divCard.appendChild(divImage);
        divCol.appendChild(divCard);
        divContent.appendChild(span);
        divContent.appendChild(p);
        divCard.appendChild(divContent);
        divAction.appendChild(a);
        divCard.appendChild(divAction);

        return divCol;
    }
}

/**
 * @docs createDomElement - creating nodes with the necessary parameters
 * @param {string} elementName - name node
 * @param {string} className - class name node or ''. ( '' - is required to enter attributes)
 * @param {string} textContent - text or ''. ( '' - is required to enter attributes)
 * @param  {string} attribute - attributes - key, value, key, value...
 * @returns {object} DOM-element 
 */
function createDomElement(elementName, className = "", textContent = "", ...attribute) {
    const element = document.createElement(elementName);

    if (className) element.className = className;
    
    if (textContent) element.textContent = textContent;

    let i = 0;
    while (i < attribute.length) {
        if (attribute[i + 1]) {
            element.setAttribute(attribute[i], attribute[i + 1]);
        }
        i += 2;
    }

    return element;
}
