class Store{
    #counter = 0;
    #lastAction = {};

    actionIn(action){
        //сложнейшая логика. swith/case
        counter++;
        this.#lastAction = action;
    }
    eventOut(){

    }
}

export const store = new Store()