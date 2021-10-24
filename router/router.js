import { resolve } from "./resolver.js";

class Router {
    start = (_path, _data) => {
        let view;
        if (view = resolve(_path)) {
            this.#changeToView(view);
        }
    }

    go = (_path, _data) => {
        if (location.pathname === _path) return;
        let view;
        if (view = resolve(_path)) {
            this.#pushHistoryState(_path, _data);
            this.#changeToView(view);
        }
    };

    popstate(){
        this.#changeToView(resolve(location.pathname));    
    }

    #pushHistoryState = (_path, _data) => {
        window.history.pushState(_data, _path, _path)
    }

    #changeToView(view){
        let page;
        if(page=document.getElementById("page")){
            page.parentNode.removeChild(page);
        }
        new view();
    }
};

export const router = new Router()
