import Vue from 'vue'
import Router from 'vue-router'
const HomePage = resovle => { require(['@/pages/HomePage.vue'], resovle) };
const MusicPage = resovle => { require(['@/pages/MusicPage.vue'], resovle) };
const TastyPage = resovle => { require(['@/pages/TastyPage.vue'], resovle) };
const MoviePage = resovle => { require(['@/pages/MoviePage.vue'], resovle) };
const LogPage = resovle => { require(['@/pages/LogPage.vue'], resovle) };

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: HomePage
        },
        {
            path: '/music',
            name: 'music-page',
            component: MusicPage
        },
        {
            path: '/tasty',
            name: 'tasty-page',
            component: TastyPage
        },
        {
            path: '/movie',
            name: 'movie-page',
            component: MoviePage
        },
        {
            path: '/log',
            name: 'log-page',
            component: LogPage
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
