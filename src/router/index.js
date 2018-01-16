import Vue from 'vue'
import Router from 'vue-router'

import NotFoundPage from '@/pages/NotFoundPage';
const HomePage = resovle => {
  require(['@/pages/HomePage.vue'], resovle)
};
const CollectionPage = resovle => {
  require(['@/pages/CollectionPage.vue'], resovle)
};
const MusicPage = resovle => {
  require(['@/pages/MusicPage.vue'], resovle)
};
const TastyPage = resovle => {
  require(['@/pages/TastyPage.vue'], resovle)
};
const MoviePage = resovle => {
  require(['@/pages/MoviePage.vue'], resovle)
};
const LogPage = resovle => {
  require(['@/pages/LogPage.vue'], resovle)
};
const SubIndex = resovle => {
  require(['@/pages/SubIndex.vue'], resovle)
};
const NewsPage = resovle => {
  require(['@/pages/NewsPage.vue'], resovle)
};
const NewsPostPage = resovle => {
  require(['@/pages/NewsPostPage.vue'], resovle)
};
const TCPage = resovle => {
  require(['@/pages/TimeCapsulePage.vue'], resovle)
};

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home-page',
      component: HomePage,
      meta: {
        index: 0,
        style: 'dark'
      }
    },
    {
      path: '/collection',
      component: SubIndex,
      children: [{
          path: '/',
          name: 'collection-page',
          component: CollectionPage,
          meta: {
            index: 1,
            style: 'light'
          }
        },
        {
          path: 'music',
          name: 'music-page',
          component: MusicPage,
          meta: {
            index: 1,
            style: 'dark'
          }
        },
        {
          path: 'tasty',
          name: 'tasty-page',
          component: TastyPage,
          meta: {
            index: 1,
            style: 'dark'
          }
        },
        {
          path: 'movie',
          name: 'movie-page',
          component: MoviePage,
          meta: {
            index: 1,
            style: 'dark'
          }
        }
      ]
    },
    {
      path: '/news',
      component: SubIndex,
      children: [{
          path: '/',
          name: 'news-page',
          component: NewsPage,
          meta: {
            index: 2,
            style: 'light'
          }
        },
        {
          path: 'post/:id',
          name: 'news-post',
          component: NewsPostPage,
          meta: {
            index: 2,
            style: 'light'
          }
        },
        {
          path: 'time-capsule',
          name: 'time-capsule-page',
          component: TCPage,
          meta: {
            index: 2,
            style: 'light'
          }
        },
        {
          path: 'log',
          name: 'log-page',
          component: LogPage,
          meta: {
            index: 2,
            style: 'light'
          }
        }
      ]
    },
    {
      path: '*',
      name: '404Page',
      component: NotFoundPage,
      meta: {
        index: -1,
        style: 'dark'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
