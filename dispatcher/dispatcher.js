import { store } from '../store/store.js';

class Dispatcher{
    #subscribers = [];
    /**
     * { view, eventType }
     */

    actionIn(action) {
        store.actionIn(action);
    };

    eventIn(event) {
        this.#subscribers.forEach(sbs => {
            if ( sbs.eventType === event.type ) {
                sbs.view.eventIn(event);
            }
        });
    };

    addSubscriber(_eventType, _view) {
        this.#subscribers.push({
            view: _view,
            eventType: _eventType
        });
    }

    removeSubscriber(_eventType, _view) {
        const index = this.#subscribers.indexOf({
            view: _view,
            eventType: _eventType
        });
        if (index > -1) {
            this.#subscribers.splice(index, 1);
        }
    }
}

export const dispatcher = new Dispatcher()