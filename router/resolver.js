// import { View } from '../view/baseView.js'
import {
    Login
} from '../view/index.js'

const paths = [
    {
        url: '/login',
        view: Login
    },
    {
        url: '/register',
        view: Register
    },
    {
        url: '/register',
        view: list
    },
    {
        url: '/country',
        view: list
    },
]

const resolve = (_path) => {
    let view;
    if (view = paths.find(elem => elem.url === _path)) {
        return view;
    }
    return null;
}

export { resolve }