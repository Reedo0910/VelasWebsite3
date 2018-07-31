import Vue from 'vue'
import Router from 'vue-router'

import NotFoundPage from '@/pages/NotFoundPage';
const HomePage = resovle => {
    require(['@/pages/HomePage.vue'], resovle)
};
const WavePage = resovle => {
    require(['@/pages/WavePage.vue'], resovle)
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
const TimeCapsulePage = resovle => {
    require(['@/pages/TimeCapsulePage.vue'], resovle)
};
const TalkPage = resovle => {
    require(['@/pages/TalkPage.vue'], resovle)
};
const TalkPostPage = resovle => {
    require(['@/pages/TalkPostPage.vue'], resovle)
};
const CampPage = resovle => {
    require(['@/pages/CampPage.vue'], resovle)
};
const InnPage = resovle => {
    require(['@/pages/InnPage.vue'], resovle)
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
            title: '',
            style: 'light'
        }
    },
    {
        path: '/wave',
        name: 'wave-page',
        component: WavePage,
        meta: {
            index: 1,
            title: '电波站',
            style: 'light'
        }
    },
    {
        path: '/talk',
        component: SubIndex,
        children: [{
            path: '/',
            name: 'news-page',
            component: TalkPage,
            meta: {
                index: 2,
                title: '博客',
                style: 'light'
            }
        },
        {
            path: 'post/:full_title',
            name: 'talk-post',
            component: TalkPostPage,
            meta: {
                index: 2,
                title: '博客',
                style: 'light'
            }
        }]
    },
    {
        path: '/news',
        component: SubIndex,
        children: [
        {
            path: '/',
            name: 'news-page',
            component: NewsPage,
            meta: {
                index: 3,
                title: '新闻',
                style: 'light'
            }
        },
        {
            path: 'post/:id',
            name: 'news-post',
            component: NewsPostPage,
            meta: {
                index: 3,
                title: '新闻',
                style: 'light'
            }
        }]
    },
    {
        path: '/camp',
        name: 'camp-page',
        component: CampPage,
        meta: {
            index: 4,
            title: '探索',
            style: 'light'
        }
    },
    {
        path: '/inn',
        name: 'inn-page',
        component: InnPage,
        meta: {
            index: 5,
            title: '留言',
            style: 'light'
        }
    },
    {
        path: '/log',
        name: 'log-page',
        component: LogPage,
        meta: {
            index: -1,
            title: '更新日志',
            style: 'light'
        }
    },
    {
        path: '/time-capsule',
        name: 'time-capsule-page',
        component: TimeCapsulePage,
        meta: {
            index: -1,
            title: '时间胶囊',
            style: 'light'
        }
    },
    {
        path: '*',
        name: '404Page',
        component: NotFoundPage,
        meta: {
            index: -1,
            title: '啊噢，页面不见了',
            style: 'dark'
        }
    }],
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
