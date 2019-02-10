class NotificationUI {
    constructor() {
        this.Alert = document.querySelector('#alert');
    }

    //adding method
    addNotification(err) {
        if (err.status === 'ok') {err.msg = 'No results found for your request', err.status = "Error"}
        else err.msg = `server error: ${err.statusText}`;
        this.clearAlert();
        const template = NotificationUI.notificationTemplate(err.status, err.msg);
        this.Alert.insertAdjacentHTML("afterbegin", template);
    }

    //cleaning method
    clearAlert() {
        this.Alert.innerHTML = '';
    }

    //creature markup method
    static notificationTemplate(status, msg) {
        return `
            <div class="red darken-1 white-text center-align">
                <p> ${status} </p>
                <p> ${msg} </p>
            </div>
            `
    }
}