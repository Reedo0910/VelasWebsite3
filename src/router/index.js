import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import MusicPage from '@/pages/MusicPage'
import TastyPage from '@/pages/TastyPage'
import MoviePage from '@/pages/MoviePage'
import LogPage from '@/pages/LogPage'

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
