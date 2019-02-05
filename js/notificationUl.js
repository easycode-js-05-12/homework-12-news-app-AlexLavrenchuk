class NotificationUI {
    constructor() {
        this.Alert = document.querySelector('#alert');
    }

    addNotification({ status, message, code }) {
        
        // can I do that?   it is taken from https://materializecss.com/toasts.html

        // M.toast({
        //     html: 'status: ' + status + '. ' + 'message: ' + message + ' code: ' + code + '.',
        //     displayLength: 10000
        // });
        
        const template = NotificationUI.notificationTemplate(status, message, code);
        this.Alert.insertAdjacentElement("afterbegin", template);

    }

    clearAlert() {
        this.Alert.innerHTML = '';
    }

    static notificationTemplate(status, message, code) {
        let paragraph1 = document.createElement("p"),
            paragraph2 = document.createElement("p"),
            paragraph3 = document.createElement("p"),
            
            div = document.createElement('div');

        paragraph1.textContent = status;
        paragraph2.textContent = message;
        paragraph3.textContent = code;

        div.classList = "red darken-1 white-text center-align";

        div.appendChild(paragraph1);
        div.appendChild(paragraph2);
        div.appendChild(paragraph3);

        return div;
    }
}