import { router } from '../../../router/index.js';

export class Header {
    constructor(){
        var html = document.createElement("div");
        html.id = "header";

        var logo = document.createElement("div");
        var text = document.createElement("a");
        text.innerText = "путешествия";
        var img = document.createElement("img");
        img.src="../../image/vk-logo.png";
        logo.appendChild(img);
        logo.appendChild(text);
        logo.id="header__logo";
        logo.href="/";
        logo.addEventListener('click', (event) => {
            event.preventDefault();
            router.go("/"); // выкидывание действия?
        });

        var login = document.createElement("a");
        login.textContent="login";
        login.href="/login";
        login.addEventListener('click', (event) => {
            event.preventDefault();
            router.go("/login"); // выкидывание действия?
        });

        var reg = document.createElement("a");
        reg.textContent="register";
        reg.href="/register";
        reg.addEventListener('click', (event) => {
            event.preventDefault();
            router.go("/register"); // вся хрень с выкидыванием действия?
        });

        html.appendChild(logo);
        html.appendChild(login);
        html.appendChild(reg);
        document.getElementById('root').appendChild(html);
    }
    setUser(){

    }
}