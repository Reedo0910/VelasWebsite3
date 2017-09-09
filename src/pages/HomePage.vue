<template>
    <transition name="switch-page" mode="out-in">
        <div id="main-page">
            <v-title>Velas - 首页</v-title>
            <header :style="{height: winHeight}">
                <div class="bg-mask"></div>
                <div class="bg-decorate-box">
                    <p class="mobile-sub-heading">{{slogen}}</p>
                </div>
                <div id="banner">
                    <div class="inner">
                        <div class="velas_logo"></div>
                        <p class="sub-heading">{{slogen}}</p>
                    </div>
                </div>
            </header>
            <div class="context">
                <section class="intro-velas-section">
                    <div class="blankspace1"></div>
                    <h2 class="context-big-headtitle">What is Velas?</h2>
                    <div class="hr"></div>
                    <p class="context-intro">这是我的个人网站，<br>用于分享我的想法见解和个人爱好。<br>如果这里能为你带来一些灵感或是轻松愉悦的体验，<br id="tbr">那么这将是我的荣幸。</p>
                    <div class="blankspace"></div>
                </section>
                <section class="news-section lt">
                    <h2 class="context-big-headtitle">News</h2>
                    <div class="hr"></div>
                    <p class="context-intro">一切关于Velas的新鲜事</p>
                    <router-link class="arrow-link" to="/news">
                        <span>查看更多</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </router-link>
                    <div class="blankspace1"></div>
                    <div class="post-group">
                        <router-link v-for="(p, index) in newsposts" :key="index" :to="{ path: '/news/post/' + p.number }" class="skeleton">
                            <transition name="fade">
                                <div class="post" v-if="newsIsLoadFinish" :style="{'background-image': 'url(' + p.image + ')'}">
                                    <div class="post-mask"></div>
                                    <div class="post-content">
                                        <p class="date">{{ p.date }}</p>
                                        <h3 class="title">{{ p.title }}</h3>
                                        <p class="body">{{ p.body }}</p>
                                        <router-link class="arrow-link" :to="{ path: '/news/post/' + p.number }">
                                            <span>阅读全文</span>
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </transition>
                        </router-link>
                    </div>
                    <div class="blankspace"></div>
                </section>
                <section class="collection-section dk">
                    <h2 class="context-big-headtitle">Collection</h2>
                    <div class="hr"></div>
                    <p class="context-intro">虽然算不上丰富，但绝对是真心推荐</p>
                    <router-link class="arrow-link" to="/collection">
                        <span>查看更多</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </router-link>
                    <div class="blankspace1"></div>
                    <div class="card-group" id="card-group">
                        <div v-for="card in cards" class="card" :key="card.title" :style="{'background-image': 'url(http://o7a3i0m1t.bkt.clouddn.com/image/website/' + card.background + ')'}">
                            <div class="card-mask"></div>
                            <div class="card-content">
                                <router-link class="card-title" :to="card.href">
                                    <span>{{card.title}}</span>
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </router-link>
                                <p class="card-intro">{{card.intro}}</p>
                                <router-link :to="card.href" class="card-icon">
                                    <i class="fa fa-3x" :class="card.icon" aria-hidden="true"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="talk-section lt">
                    <h2 class="context-big-headtitle">Talk</h2>
                    <p class="jump-icon">blog.velas.xyz</p>
                    <div class="hr"></div>
                    <p class="context-intro">某处女座的碎碎念</p>
                    <a class="arrow-link" href="http://blog.velas.xyz/" target="_blank">
                        <span>查看更多</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <div class="blankspace1"></div>
                    <div class="post-group">
                        <a class="skeleton" :href="talkpost.url" target="_blank">
                            <transition name="fade">
                                <div class="post" v-if="talkIsLoadFinish && talkURLIsLoadFinish">
                                    <div class="post-mask"></div>
                                    <div class="post-content">
                                        <p class="date">{{talkpost.date}}</p>
                                        <h3 class="title">{{talkpost.title}}</h3>
                                        <p class="body">{{talkpost.body}}</p>
                                        <a class="arrow-link" :href="talkpost.url" target="_blank">
                                            <span>阅读全文</span>
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </transition>
                        </a>
                    </div>
                    <div class="blankspace"></div>
                </section>
                <section class="camp-section dk">
                    <h2 class="context-big-headtitle">Camp</h2>
                    <p class="jump-icon">www.velascamp.cn</p>
                    <div class="hr"></div>
                    <p class="context-intro">无数的奇思妙想从这里诞生</p>
                    <a class="arrow-link" href="http://www.velascamp.cn/" target="_blank">
                        <span>查看更多</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <div class="blankspace1"></div>
                    <div class="swipe-group">
                        <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                            <swiper-slide class="slide" v-for="(s, index) in slides" :key="index" :style="{'background-image': 'url(http://o7a3i0m1t.bkt.clouddn.com/image/website/swipe/' + s.image + '.jpg)'}">
                                <div class="link-mask"></div>
                                <a class="slide-link" :href="s.href" target="_blank">
                                    <h3>{{s.title}}
                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    </h3>
                                    <p>{{s.des}}</p>
                                </a>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="swiper-button-prev  swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next  swiper-button-white" slot="button-next"></div>
                        </swiper>
                    </div>
                </section>
                <section class="time-capsule-section dk">
                    <div class="bg-layer"></div>
                    <div class="ft-content">
                        <h2 class="context-big-headtitle">Time Capsule</h2>
                        <div class="hr"></div>
                        <p class="context-intro">聆听时间讲的故事</p>
                        <router-link class="arrow-link" to="/news/time-capsule">
                            <span>查看详情</span>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </router-link>
                        <div class="blankspace"></div>
                    </div>
                </section>
            </div>
            <footer-block></footer-block>
        </div>
    </transition>
</template>

<script>
import VTitle from '../components/VTitle'
import FooterBlock from '../components/Footer'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import * as github from '../assets/js/io';
import moment from 'moment';

require('swiper/dist/css/swiper.css')

export default {
    name: 'Home',
    components: {
        VTitle,
        FooterBlock,
        swiper,
        swiperSlide
    },
    data() {
        return {
            slogen: 'Everything flows.',
            newsposts: [
                {
                    number: -1,
                    image: '',
                    date: '',
                    title: '',
                    body: ''
                },
                {
                    number: -1,
                    image: '',
                    date: '',
                    title: '',
                    body: ''
                }],
            newsIsLoadFinish: false,
            talkpost: {
                title: '',
                body: '',
                date: '',
                url: ''
            },
            talkIsLoadFinish: false,
            talkURLIsLoadFinish: false,
            cards: [
                {
                    href: '/music',
                    title: '音乐',
                    background: 'paramore-dallas.jpg',
                    icon: 'fa-music',
                    intro: '来场由耳朵到心灵的旅行'
                },
                {
                    href: '/tasty',
                    title: '美食',
                    background: 'oyakodon.jpg',
                    icon: 'fa-cutlery',
                    intro: '连味蕾也为之颤栗的美味'
                },
                {
                    href: '/movie',
                    title: '电影',
                    background: 'your_name.png',
                    icon: 'fa-film',
                    intro: '在萤幕里体验另一种人生'
                }
            ],
            slides: [
                {
                    href: 'https://savewhales.velascamp.cn/',
                    title: '保护鲸鱼',
                    des: '宣传保护鲸鱼知识的公益网站',
                    image: 'savewhales'
                },
                {
                    href: 'https://chat.velascamp.cn/',
                    title: '聊天室',
                    des: '一个基于React的小小聊天室',
                    image: 'chatroom'
                },
                {
                    href: 'http://aurora.velascamp.cn/',
                    title: 'Aurora',
                    des: '还在开发中的频谱音乐播放器',
                    image: 'aurora'
                }
            ],
            winHeight: '0px',
            swiperOption: {
                autoHeight: true,
                autoplayDisableOnInteraction: false,
                autoplay: 3000,
                speed: 1000,
                loop: true,
                paginationClickable: true,
                observeParents: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                centeredSlides: true,
                pagination: '.swiper-pagination',
                slidesPerView: 3,
                breakpoints: {
                    1440: {
                        slidesPerView: 2
                    },
                    960: {
                        slidesPerView: 1.5
                    },
                    720: {
                        slidesPerView: 1.25
                    },
                    630: {
                        slidesPerView: 1
                    }
                }
            }
        }
    },
    methods: {
        getHeight() {
            if (document.documentElement && document.documentElement.clientHeight) {
                this.winHeight = document.documentElement.clientHeight + 'px';
            }
        },
        next() {
            this.$refs.swipe.next();
        },
        prev() {
            this.$refs.swipe.prev();
        },
        linkGenerator: function(seed) {
            const url = 'http://o7a3i0m1t.bkt.clouddn.com/image/website/news/post-header/';
            const TOTAL = 19;
            let s = new Date(seed);
            let result = this.shuffle(s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), TOTAL);
            return url + result + '.jpg';
        },
        shuffle: function(a, b, c, t) {
            return ((a + b) * c) % t + 1;
        },
        summaryBody: function(body) {
            return body.replace(/[\\\`\*\~\_\[\]\#\+\-\!\>\x]/g, '').substr(0, 45) + ' …';
        },
        summaryTitle: function(title) {
            if (title.length > 21) {
                title = title.substr(0, 21) + ' …';
            }
            return title;
        },
        securityCheck: function(res) {
            let tar = res.body.trim().split('//')[1].split('/');
            return res.user.login === 'Reedo0910' && tar.length === 2 && tar[0] === 'blog.velas.xyz';
        },
        filter: function(posts) {
            if (posts === 404) {
                throw new Error('网络异常');
            }
            const vm = this;
            moment.locale('zh-cn');
            for (let i = 0; i < 2; i++) {
                vm.newsposts[i].title = vm.summaryTitle(posts[i].title);
                vm.newsposts[i].number = posts[i].number;
                vm.newsposts[i].date = moment(posts[i].created_at).format('ll');
                vm.newsposts[i].body = vm.summaryBody(posts[i].body);
                vm.newsposts[i].image = vm.linkGenerator(posts[i].created_at);
            }
            vm.newsIsLoadFinish = true;
        },
        errorHandler: function(error) {
            console.log('news: ' + error);
        }
    },
    mounted() {
        const vm = this;
        github.getIssue()
            .then(this.filter)
            .catch(this.errorHandler)

        github.getIssueById('reedo0910.github.io', 1)
            .then(function(res) {
                moment.locale('zh-cn');
                if (res === 404 || res.length === 0) {
                    throw new Error('网络异常');
                }
                vm.talkpost.title = vm.summaryTitle(res.title);
                vm.talkpost.body = vm.summaryBody(res.body);
                vm.talkpost.date = moment(res.updated_at).format('ll');
                vm.talkIsLoadFinish = true;
            })
            .catch(function(err) {
                console.log('Talk: ' + err);
            });

        github.getComs('reedo0910.github.io', 1)
            .then(function(res) {
                if (res === 404 || res.length === 0) {
                    throw new Error('网络异常');
                }
                if (!vm.securityCheck(res[0])) {
                    throw new Error('跳转目标网站安全性异常');
                } else {
                    vm.talkpost.url = res[0].body.trim();
                    vm.talkURLIsLoadFinish = true;
                }
            })
            .catch(function(err) {
                console.log('Talk: ' + err);
            });
    },
    created() {
        this.getHeight();
        window.addEventListener('resize', this.getHeight);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getHeight);
    }
}
</script>

<style lang="scss" scoped>
@mixin link-background {
    background: {
        image: url(http://o7a3i0m1t.bkt.clouddn.com/image/website/rain_drop.jpg);
        repeat: no-repeat;
        size: cover;
        position: center;
    }
} //过渡动画样式
@mixin link-transition($time) {
    -webkit-transition: all $time ease-out;
    -moz-transition: all $time ease-out;
    transition: all $time ease-out;
}

.fade-enter-active {
    transition: opacity 1s
}

.fade-enter,
.fade-leave {
    opacity: 0
}

#main-page {
    background-color: #444;
    header {
        @include link-background;
        width: 100%;
        min-height: 600px;
        background-color: #000;
        position: relative;
        .bg-mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(1, 1, 0, 0.5);
            display: none;
        }
        .bg-decorate-box {
            .mobile-sub-heading {
                position: absolute;
                color: #fff;
                margin: auto;
                bottom: -20px;
                left: 0;
                right: 0;
                background-color: #000;
                width: 80%;
                text-align: center;
                font-size: 28px;
                box-sizing: border-box;
            }
            display: none;
            position: absolute;
            width: 70%;
            height: 70%;
            border: rgba(80, 80, 80, .8) solid 4px;
            box-sizing: border-box;
            z-index: 2;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
        }
        #banner {
            height: 100%;
            position: relative;
            z-index: 2;
            .inner {
                width: 72%;
                max-width: 72%;
                display: flex;
                margin: auto;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 135px;
                color: #fff;
                box-sizing: border-box;
                justify-content: space-between;
                flex-wrap: wrap;
                .velas_logo {
                    width: 288px;
                    height: 100px;
                    margin: 20px 0 20px;
                    background: {
                        image: url('/static/images/logo-with-text.png');
                        size: cover;
                    }
                }
                .sub-heading {
                    margin: 20px 0;
                    padding: 36px 0 0;
                    font-size: 36px;
                    box-sizing: border-box;
                    border-bottom: 1.5px solid #eee;
                }
            }
        }
    }
    .context {
        width: 100%;
        min-height: 750px;
        background-color: #fff;
        position: relative;
        text-align: center;
        .arrow-link {
            color: #444444;
            display: inline-block;
            margin: 5px auto 0;
            text-decoration: none;
            padding-bottom: 2px;
            border-bottom: 1px solid transparent;

            span {
                font-size: 16px;
            }
            &:hover {
                border-color: #444;
            }
            i {
                padding-left: .25em;
            }
        }
        .blankspace {
            height: 80px;
            width: 100%;
        }
        .blankspace1 {
            height: 30px;
            width: 100%;
        }
        .jump-icon {
            margin: 0;
            padding: 5px 10px;
            font-size: .6em;
        }
        .context-big-headtitle {
            text-transform: uppercase;
            margin: 0 auto;
            padding-top: 60px;
            font-weight: bold;
            font-size: 40px;
        }
        .context-intro {
            margin: 0 auto;
            line-height: 2em;
            width: 90%;
        }
        .hr {
            margin: 20px auto;
            position: relative;
        }
        .intro-velas-section {
            background: radial-gradient(farthest-side at bottom, #121212, #000);
            color: #eee;
        }
        section {
            .post-group {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                .skeleton {
                    background-color: #bbb;
                    width: 600px;
                    height: 337.5px;
                    margin: 10px 0;
                    position: relative;
                    display: block;
                    text-decoration: none;
                    color: #fff;
                }
                .post {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    .post-mask {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.4);
                        z-index: 2;
                    }
                    .post-content {
                        color: #ffffff;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        width: 80%;
                        height: 230px;
                        z-index: 3;
                        p,
                        h3 {
                            line-height: 2;
                        }
                        .arrow-link {
                            color: #eee;
                            &:hover {
                                border-color: #eee;
                            }
                        }
                    }
                }
            }
        }
        .collection-section {
            .card-group {
                margin: 0 auto;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                overflow: hidden;
                .card {
                    flex-grow: 1;
                    position: relative;
                    z-index: 1;
                    color: #fff;
                    opacity: 0.85;
                    box-sizing: border-box;
                    background: {
                        size: cover;
                        repeat: no-repeat;
                        position: center top;
                    }
                    .card-mask {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 2;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.31);
                    }
                    .card-content {
                        padding: 80px 68px 100px;
                        position: relative;
                        z-index: 3;
                        box-sizing: border-box;
                        .card-icon {
                            @include link-transition(0.2s);
                            display: inline-block;
                            padding: 50px;
                            width: 152px;
                            text-align: center;
                            box-sizing: border-box;
                            border: #fff 2px solid;
                            color: #fff;
                            &:hover {
                                @include link-transition(0.2s);
                                background-color: rgba(238, 238, 238, 0.3);
                            }
                        }
                        .card-title {
                            color: #fff;
                            font-size: 2em;
                            text-decoration: none;
                            span {
                                padding-bottom: 2px;
                            }
                            i {
                                padding-left: .5em;
                            }
                            &:hover span {
                                border-bottom: 1.5px solid;
                            }
                        }
                        .card-intro {
                            margin: 10px auto 20px;
                        }
                    }
                }
            }
        }
        .talk-section .post {
            background-image: url(http://o7a3i0m1t.bkt.clouddn.com/image/blog/background/background-min.jpg);
        }
        .camp-section {
            color: #fff;
            background-color: #444;
            .swipe-group {
                width: 100%;
                position: relative;
                margin: 0 auto;
                .slide {
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    position: relative;
                }
                .link-mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    transition: background-color .8s ease;
                }
                .swiper-slide-active .link-mask {
                    background-color: rgba(0, 0, 0, 0.5);
                }
                .slide-link {
                    position: relative;
                    z-index: 2;
                    width: 80%;
                    height: 100%;
                    display: block;
                    margin: 0 auto;
                    text-decoration: none;
                    color: #fff;
                    text-align: center;
                    padding: 130px 0;
                    p {
                        margin: 15px 0 0;
                    }
                    h3 {
                        font-size: 1.5em;
                        margin: 0;
                    }
                    i {
                        padding-left: .1em;
                        transition: all 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5);
                    }
                    &:hover {
                        i {
                            padding-left: .2em;
                            transition: all 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5);
                        }
                    }
                }
            }
        }
        .time-capsule-section {
            position: relative;
            .bg-layer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url(http://o7a3i0m1t.bkt.clouddn.com/image/website/hourglass.jpg);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                opacity: .4;
                z-index: 1;
            }
            .ft-content {
                position: relative;
                z-index: 2;
            }
        }
        .dk {
            color: #fff;
            background-color: #444;
            .arrow-link {
                color: #eee;
                &:hover {
                    border-color: #eee;
                }
            }
        }
        .lt {
            color: #000;
            background-color: #eee;
        }
    }
}

@media screen and (max-width: 900px) {
    #main-page {
        header {
            min-height: 560px;
            .bg-mask {
                display: block;
            }
            .bg-decorate-box {
                display: block;
            }
            #banner .inner {
                width: initial;
                max-width: initial;
                position: initial;
                display: block;
                .velas_logo {
                    position: absolute;
                    margin: auto;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 350px;
                    height: 115px;
                }
                .sub-heading {
                    display: none;
                }
            }
        }
        .context {
            .context-big-headtitle {
                font-size: 2em;
            }
        }
    }
}


@media screen and (max-width: 600px) {
    #main-page header {
        #banner .inner .velas_logo {
            width: 280px;
            height: 90px;
        }
        .bg-decorate-box .mobile-sub-heading {
            font-size: 22px;
            bottom: -16px;
            width: 90%;
        }
    }
    #tbr {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    #main-page .context section .post-group .post .post-content {
        p,
        h3 {
            line-height: 1.25;
        }
    }
}

@media screen and (max-width: 340px) {
    #main-page header {
        #banner .inner .velas_logo {
            width: 240px;
            height: 80px;
        }
        .bg-decorate-box .mobile-sub-heading {
            background-color: transparent;
            width: 100%;
            bottom: -35px;
        }
    }
    #main-page .context .card-group .card .card-content {
        padding: 80px 56px 100px;
    }
}
</style>
