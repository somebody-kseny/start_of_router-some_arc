import { resolve } from "./resolver.js";

const pushHistoryState = (_state) => {
    const { state } = _state;
    const { title } = _state;
    const { url } = _state;

    window.history.pushState(state, title, url)
}

class Router {
    #pages = [];

    constructor(){
        // const view;
        // if (view = resolve(location.pathname)) {
        //     view();
        // }
    }

    // register = (_path, _view, _stateName) => {
    //     // this.#pages.push({
    //     //     route: _path, 
    //     //     view: _view,
    //     //     state: _stateName
    //     // });
    //     if (this.#pages.find(elem => elem.route === _path)) {
    //         pushHistoryState( { state: {}, title: page.state, url: page.route } );
    //         page.view(page.state);
    //     }
    // };

    go = (_path, _state) => {
        // if (location.pathname === _path) return;
        console.log("here");
        let view;
        if (view = resolve(_path)) {
            pushHistoryState( { state: _state, title: _path, url: _path } );
            console.log("here");
            new view.view(_state);
        }
    };

    back(){
        history.go(-1);
    };
    forward(){
        history.go(1);
    };
};

export const router = new Router()
