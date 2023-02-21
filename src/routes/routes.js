// import Home from '~/pages/Home';
import TopMusic from '~/pages/TopMusic';
import Album from '~/pages/Album';

//Public Routes
const publicRoutes = [
    {
        path: '/',
        component: TopMusic,
    },
    {
        path: '/Album',
        component: Album,
    },
];

//Private Routes
const privateRoutes = [];

export {publicRoutes, privateRoutes};