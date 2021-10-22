import {
    Login,
    Register,
    List

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
        url: '/',
        view: List
    },
]

const resolve = (_path) => {
    let view;
    if (view = paths.find(elem => elem.url === _path)) {
        return view.view;
    }
    return null;
}

export { resolve }