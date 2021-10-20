import { View } from '../../baseView.js';
import { header } from './header_templ.js';
import { router } from '../../../router/router.js';

export class Header {
    #view = {}; 

    constructor(){
        this.#view = new View();
        console.log("try to make header");

        var html = document.createElement("div");
        html.id = "header";
        html.innerHTML = header();

        var back_btn = document.createElement("a");
        back_btn.textContent="back_btn";
        back_btn.href="/back.....";
        back_btn.addEventListener('click', (event) => {
            console.log("BACK");
            event.preventDefault();
            
            router.back(); // вся хрень с выкидыванием действия?
        });

        var login = document.createElement("a");
        login.textContent="login";
        login.href="/login";
        login.addEventListener('click', (event) => {
            event.preventDefault();
            router.go("/login"); // вся хрень с выкидыванием действия?
        });

        var reg = document.createElement("a");
        reg.textContent="register";
        reg.href="/register";
        reg.addEventListener('click', (event) => {
            event.preventDefault();
            router.go("/register"); // вся хрень с выкидыванием действия?
        });

        html.appendChild(login);
        html.appendChild(reg);
        html.appendChild(back_btn);
        document.getElementById('root').appendChild(html);
    }
    setUser(){

    }
}