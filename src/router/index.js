import Vue from 'vue'
import Router from 'vue-router'
const HomePage = resovle => void (require(['../pages/HomePage.vue'], resovle));
const MusicPage = resovle => void (require(['../pages/MusicPage.vue'], resovle));
const TastyPage = resovle => void (require(['../pages/TastyPage.vue'], resovle));
const MoviePage = resovle => void (require(['../pages/MoviePage.vue'], resovle));
const LogPage = resovle => void (require(['../pages/LogPage.vue'], resovle));

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
