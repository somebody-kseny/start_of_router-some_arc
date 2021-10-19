import { store } from '../store/store.js';
import {

} from '../view/index.js';

class Dispatcher{
    actionIn(action){
        store.actionIn(action);
    };
}

export const dispatcher = new Dispatcher()