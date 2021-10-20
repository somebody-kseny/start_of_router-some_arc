import { dispatcher } from '../dispatcher/dispatcher.js'

export class View {
    #lastState = {};

    #interestingEvents = [];

    // constructor(component) {
    //     dispatcher.add(this);
    // }

    // eventIn(event){
        
    // };

    addSubscriber(eventType, view) {
        dispatcher.addSubscriber(eventType, view);
    };

    #deleteIfNeed(event){};
    #rerenderIfNeed() {};
}