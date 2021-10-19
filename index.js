import { router } from "./router/index.js"

// const showCountry = (name) => {
//     const contentPlace = document.getElementById('content');
//     contentPlace.textContent = name + '- волшебная страна!';
// }

// const createBtn = (href, view) => {
//     router.register(href.id, view, href.id);
//     href.addEventListener('click', (event) => {
//         event.preventDefault();
//         router.go(href.id);
//     });
// };

window.onload = () => {
    // router.go(location.href); // - чтобы по сссылке открывалось то, что нужно - нужен перечень страничек

    const btns = document.getElementsByTagName('a');
    let i = 1;
    while (i <= 3) {
        createBtn(btns[i++], showCountry);
    };
    document.getElementById('back').addEventListener('click', (event) => {
        event.preventDefault();
        router.back();
    });
};