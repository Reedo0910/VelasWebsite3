// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill';
import NProgress from 'nprogress'
import iziToast from './utils/iziToastPlugin';
import './assets/css/global.css'

Vue.config.productionTip = false

Vue.use(iziToast);

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
NProgress.inc(0.2)

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
