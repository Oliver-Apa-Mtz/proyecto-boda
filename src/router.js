import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/pages/Admin'
import Home from '@/pages/Home'
Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Admin',
            component: Admin
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
    ]
})