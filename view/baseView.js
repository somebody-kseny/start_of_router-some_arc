import { dispatcher } from './dispatcher/dispatcher.js'

export class View {
    #component = {};
    #laststate = {};
    constructor(component){
        // dispatcher.add(this);
    }
    out();
    in();
    #deleteIfNeed();
    rerenderIfNeed();
}