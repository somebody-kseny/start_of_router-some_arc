import { router } from "./router/index.js"

const showCountry = (name) => {
    const contentPlace = document.getElementById('content');
    contentPlace.textContent = name + '- волшебная страна!';
}

const createBtn = (href, view) => {
    href.addEventListener('click', (event) => {
        event.preventDefault();
        router.go(href.id);
    });
};

const makeBasePage = () => {
    document.getElementById('content').innerHTML = `<a id="back">back</a>`;

}

makeBasePage();
window.onload = () => {
    router.go(location.pathname); // - чтобы по сссылке открывалось то, что нужно - нужен перечень страничек

    // const btns = document.getElementsByTagName('a');
    // let i = 1;
    // while (i <= 3) {
    //     createBtn(btns[i++], showCountry);
    // };
    // document.getElementById('back').addEventListener('click', (event) => {
    //     event.preventDefault();
    //     router.back();
    // });
};

self.addEventListener('fetch', (event) => {
    console.log(event.request);
});