import { resolve } from "./resolver.js";

class Router {
    #current = 0;

    #next_uid = 0;

    start = (_path, _data) => {
        let view;
        if (view = resolve(_path)) {
            this.#pushHistoryState(_path, _data);
            this.#changeToView(view);
        }
    }

    go = (_path, _data) => {
        if (location.pathname === _path) return;
        this.#current = this.#next_uid;
        this.start(_path, _data);
    };

    popstate(){
        this.#current = history.state.uid;
        this.#changeToView(resolve(location.pathname));
    }

    #pushHistoryState = (_path, _data) => {
        const state = {
            uid: this.#next_uid,
            data: _data,
        }
        this.#next_uid++;
        
        window.history.pushState(state, _path, _path)
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
