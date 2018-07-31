<template>
    <transition name="switch-page" mode="out-in">
        <div id="main-page">
            <header :style="{height: winHeight}">
                <div class="bg-mask"></div>
                <div id="banner">
                    <div class="inner">
                        <div class="velas-logo"></div>
                        <p class="sub-heading">{{slogen}}</p>
                    </div>
                </div>
            </header>
            <div class="context">
                <section class="intro-velas-section lt">
                    <div class="blankspace1"></div>
                    <h2 class="context-big-headtitle">这是哪？</h2>
                    <div class="hr"></div>
                    <p class="context-intro">这是我的个人网站，<br>我用它来分享我的见解、脑洞和文章随笔。<br>如果这里能为你带来一些灵感或是轻松愉悦的体验，<br id="tbr">那么这将是我的荣幸。</p>
                    <div class="blankspace"></div>
                </section>
                <section class="wave-section dk">
                    <h2 class="context-big-headtitle">电波站</h2>
                    <div class="hr"></div>
                    <p class="context-intro">让世界听见我的声音</p>
                    <router-link class="arrow-link" to="/wave">
                        <span>查看更多</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </router-link>
                    <div class="blankspace1"></div>
                    <div class="card-group" id="card-group">
                        <div v-for="card in cards" class="card" :key="card.title" :style="{'background-image': 'url(' + card.background + ')'}">
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
                    <h2 class="context-big-headtitle">博客</h2>
                    <div class="hr"></div>
                    <p class="context-intro">某处女座的碎碎念</p>
                    <router-link class="arrow-link" to="/talk">
                        <span>查看更多</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </router-link>
                    <div class="blankspace1"></div>
                    <div class="post-group">
                        <router-link class="skeleton" v-for="(t, index) in talkposts" :key="index" :to="t.url">
                            <transition name="fade">
                                <div class="post" v-if="isTalkLoaded" :style="{'background-image': 'url(' + t.bg + ')' }">
                                    <div class="post-mask"></div>
                                    <div class="post-content">
                                        <p class="date">{{t.date}}</p>
                                        <h3 class="title">{{t.title}}</h3>
                                        <p class="body">{{t.body}}</p>
                                        <router-link class="arrow-link" :to="t.url">
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
                <section class="news-section wt">
                    <h2 class="context-big-headtitle">新闻</h2>
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
                                <div class="post" v-if="isNewsLoaded" :style="{'background-image': 'url(' + p.image + ')'}">
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
                 <section class="flex-section">
                    <section class="inn-section lt">
                        <div class="blankspace1"></div>
                        <div class="blankspace1"></div>
                        <h2 class="context-big-headtitle">留言板</h2>
                        <div class="hr"></div>
                        <p class="context-intro">你有什么话要传达给Velas呢？</p>
                        <router-link class="arrow-link" to="/inn">
                            <span>说来听听</span>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </router-link>
                        <div class="blankspace"></div>
                        <div class="blankspace1"></div>
                    </section>
                    <section class="time-capsule-section dk">
                        <div class="bg-layer"></div>
                        <div class="ft-content">
                            <div class="blankspace1"></div>
                            <div class="blankspace1"></div>
                            <h2 class="context-big-headtitle">时间胶囊</h2>
                            <div class="hr"></div>
                            <p class="context-intro">聆听时间讲的故事</p>
                            <router-link class="arrow-link" to="/time-capsule">
                                <span>查看详情</span>
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </router-link>
                            <div class="blankspace"></div>
                            <div class="blankspace1"></div>
                        </div>
                    </section>
                </section>
                <section class="camp-section dk">
                    <h2 class="context-big-headtitle">探索</h2>
                    <!-- <p class="jump-icon">www.velascamp.cn</p> -->
                    <div class="hr"></div>
                    <p class="context-intro">无数的奇思妙想从这里诞生</p>
                    <router-link class="arrow-link" to="/camp">
                        <span>查看更多</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </router-link>
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
            </div>
        </div>
    </transition>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import * as io from '../assets/js/io';
import { isBlackList } from '../assets/js/blacklist'
import moment from 'moment';

export default {
    name: 'Home',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            slogen: '',
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
            isNewsLoaded: false,
            talkposts: [
              {
                title: '',
                body: '',
                date: '',
                url: '',
                bg: ''
              },
              {
                title: '',
                body: '',
                date: '',
                url: '',
                bg: ''
              }],
            isTalkLoaded: false,
            cards: [
                {
                    href: '/wave#movie',
                    title: '影视',
                    background: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/your_name.png',
                    icon: 'fa-film',
                    intro: '在萤幕中体验另一番人生'
                },
                {
                    href: '/wave#game',
                    title: '游戏',
                    background: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/tomb_raider.jpg',
                    icon: 'fa-gamepad',
                    intro: '感受从指尖至内心的律动'
                },
                {
                    href: '/wave#book',
                    title: '书籍',
                    background: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/rhema-kallianpur.jpg',
                    icon: 'fa-book',
                    intro: '任心灵在纸墨间浮沉漂流'
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
                autoplay: {
                    disableOnInteraction: false
                },
                speed: 1000,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                observer: true,
                observeParents: true,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
                centeredSlides: true,
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
        blackListFilter(url) {
            if (!url) {
                return 'http://o7a3i0m1t.bkt.clouddn.com/image/website/news/post-header/11.jpg'
            }
            if (isBlackList(url)) {
                return 'http://o7a3i0m1t.bkt.clouddn.com/image/website/news/post-header/11.jpg'
            } else {
                return url;
            }
        },
        linkGenerator: function(seed) {
            const url = 'http://o7a3i0m1t.bkt.clouddn.com/image/website/news/post-header/';
            const TOTAL = 19;
            let s = new Date(seed);
            let result = this.shuffle(s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), TOTAL);
            return url + result + '.jpg';
        },
        shuffle: function(a, b, c, t) {
            return (a * b * c) % t + 1;
        },
        summaryBody: function(body) {
            body = body.trim().replace('[Figure]', '').replace(/[\\\`\*\~\_\[\]\#\+\-\!\>\x]/g, '').substr(0, 45);
            if (body.length === 0) {
                return '';
            } else {
                return body + ' …';
            }
        },
        summaryTitle: function(title) {
            if (title.length > 21) {
                title = title.substr(0, 21) + ' …';
            }
            return title;
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
            vm.isNewsLoaded = true;
        },
        errorHandler: function(error) {
            console.log('news: ' + error);
        }
    },
    mounted() {
        const vm = this;
        io.getIssue()
            .then(this.filter)
            .catch(this.errorHandler)

        io.getBlogList()
            .then(res => {
                moment.locale('zh-cn');
                if (res === 404 || res.length === 0) {
                    throw new Error('网络异常');
                }
                for (let i = 0; i < 2; i++) {
                    const post = res[i];
                    const tarPost = vm.talkposts[i];
                    tarPost.title = vm.summaryTitle(post.title);
                    tarPost.body = vm.summaryBody(post.excerpt);
                    tarPost.bg = vm.blackListFilter(post.cover);
                    tarPost.date = moment(post.date).format('ll');
                    tarPost.url = `/talk/post/${moment(post.date).format('YYYY-MM-DD')}-${post.slug}`;
                }
                vm.isTalkLoaded = true;
            })
            .catch(err => {
                console.log('Talk: ' + err);
            })
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
        image: url(http://o7a3i0m1t.bkt.clouddn.com/image/website/background-18-6-13.jpg);
        repeat: no-repeat;
        size: cover;
        position: center;
        // attachment: fixed;
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
    background-color: #eee;
    header {
        @include link-background;
        width: 100%;
        min-height: 600px;
        background-color: #e0dfea;
        position: relative;
        .bg-mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(255, 255, 255, .65);
        }
        #banner {
            height: 100%;
            position: relative;
            z-index: 2;
            .inner {
                margin: auto;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 89px;
                color: #000;
                box-sizing: border-box;
                text-align: center;
                .velas-logo {
                    display: inline-block;
                    width: 317px;
                    height: 89px;
                    background: {
                        image: url('/static/images/logo-with-text-black-shadow.png');
                        size: cover;
                    }
                }
                .sub-heading {
                    margin: 0;
                    font-size: 1em;
                    box-sizing: border-box;
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
        // .intro-velas-section {
        //     background: radial-gradient(farthest-side at bottom, #121212, #000);
        //     color: #eee;
        // }
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
        .wave-section {
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
                    opacity: 0.9;
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
        .wt {
            color: #000;
            background-color: #fff;
        }
        .flex-section {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            overflow: hidden;
            section {
                flex-grow: 1;
                width: 600px;
            }
        }
    }
}

@media screen and (max-width: 900px) {
    #main-page {
        header {
            #banner .inner {
                .velas-logo {
                    width: 214px;
                    height: 60px;
                }
                .sub-heading {
                    font-size: .8em;
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
        #banner .inner .velas-logo {
            width: 178.1px;
            height: 50px;
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
    #main-page .context .card-group .card .card-content {
        padding: 80px 56px 100px;
    }
}
</style>
