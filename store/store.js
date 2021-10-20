class Store {
    #counter = 0;
    #lastAction = {};

    #views = [];

    actionIn(action){
        //сложнейшая логика. swith/case
        counter++;
        this.#lastAction = action;
    }
    // subscribe(_view){
    //     this.#views.push(_view);
    // }
    eventOut(){

    }
}

export const store = new Store()