import Home from '~/pages/Home';
import News from '~/pages/News';

//Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/News',
        component: News,
    },
];

//Private Routes
const privateRoutes = [];

export {publicRoutes, privateRoutes};