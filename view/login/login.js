import { View } from '../baseView.js';

export class Login {
    #view = {};
    #layout = {};

    constructor() {
        this.#view = new View();
        this.#view.addSubscriber('form_error', this)
        document.getElementById('content').textContent = "login page!";

        document.getElementById('back').addEventListener('click', (event) => {
            event.preventDefault();
            router.back();
        });
    }

    eventIn(event) {
        switch ( event.type ) {
            case 'form_error':
        }  
        // if ( event.type )
    }
}