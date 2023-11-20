import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: () => {
            return { path: '/all' };
        },
    },
    {
        path: '/all',
        name: 'all',
        component: MainPage,
        props: { status: 'all', tabName: 'Все' },
    },
    {
        path: '/processed',
        name: 'processed',
        component: MainPage,
        props: { status: 'processed', tabName: 'Обработанные' },
    },
    {
        path: '/unprocessed',
        name: 'unprocessed',
        component: MainPage,
        props: { status: 'unprocessed', tabName: 'Не обработанные' },
    },
    {
        path: '*',
        redirect: () => {
            return { path: '/all' };
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
