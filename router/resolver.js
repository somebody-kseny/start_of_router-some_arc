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
    // {
    //     url: '/country',
    //     view: list
    // },
]

const resolve = (_path) => {
    let view;
    console.log(_path, "=?");
    if (view = paths.find(elem => elem.url === _path)) {
        return view;
    }
    return null;
}

export { resolve }