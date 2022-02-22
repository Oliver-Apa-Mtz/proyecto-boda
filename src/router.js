import Vue from 'vue';
import Router from 'vue-router';
import goTo from 'vuetify/lib/services/goto';

import Admin from '@/pages/Admin'
import Home from '@/pages/Home'
Vue.use(Router);

export const router = new Router({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0
        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }
        return goTo(scrollTo)
    },
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