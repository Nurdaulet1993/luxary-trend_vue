import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home');
const Contacts = () => import('./views/Contacts');
const Products = () => import('./views/Products');
const Testimonials = () => import('./views/Testimonials');
const Benefits = () => import('./views/Benefits');

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/contacts',
            component: Contacts,
        },
        {
            path: '/products',
            component: Products
        },
        {
            path: "/testimonials",
            component: Testimonials
        },
        {
            path: "/benefits",
            component: Benefits
        }
    ],
});

