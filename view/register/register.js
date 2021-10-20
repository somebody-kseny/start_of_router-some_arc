export class Register {
    #view = {};

    constructor() {
        this.#view = new View();
        this.#view.addSubscriber('form_error', this)
        document.getElementById('content').textContent = "register page!";
    }
}