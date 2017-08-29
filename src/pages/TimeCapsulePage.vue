<template>
    <transition name="switch-page" mode="out-in">
        <div class="template-content">
            <v-title>Velas - 时间胶囊</v-title>
            <news-sub-nav></news-sub-nav>
            <header>
                <div class="content-mask"></div>
                <h1>时间胶囊</h1>
                <p>喜欢以前的Velas吗？</p>
                <p>现在，你可以在下面找回他们</p>
            </header>
            <main>
                <div class="capsule-group">
                    <div class="notice" v-if="isNotice">
                        <h3>未适配移动端</h3>
                        <p>在
                            <strong>Velas 2017夏季更新之前</strong>的网站版本均未使用响应式设计，且未对移动端进行适配。</p>
                        <p>若你正使用移动设备进行浏览，可能不能获得良好的体验。</p>
                        <button @click="isNotice = false, setCookie('notice', 'false', 10)">我知道了</button>
                    </div>
                    <div class="capsule-card-group">
                        <div class="capsule-card" v-for="CC in CCs" :key="CC.verison" :style="{'background-image': 'url(' + CC.screenshot + ')'}">
                            <div class="capsule-intro">
                                <a :href="CC.link" target="_blank">
                                    <h2>{{CC.name}}</h2>
                                </a>
                                <p>上线时间： {{CC.date}}</p>
                                <p style="margin-bottom:5px">特色功能：</p>
                                <ul>
                                    <li v-for="intro in CC.intros" :key="intro">{{intro}}</li>
                                </ul>
                                <a :href="CC.link" class="capsule-view" target="_blank">浏览</a>
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer-block></footer-block>
        </div>
    </transition>
</template>

<script>
import VTitle from '../components/VTitle'
import FooterBlock from '../components/Footer'
import NewsSubNav from '../components/SubNav/NewsSubNav'
export default {
    name: 'TimeCapsule',
    components: {
        VTitle,
        FooterBlock,
        NewsSubNav
    },
    data() {
        return {
            isNotice: true,
            CCs: [{
                version: 1,
                screenshot: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/screenshot-2016.velas.xyz.png',
                name: 'Velas 2016',
                link: 'http://2016.velas.xyz/',
                date: '2016年5月3日 - 2017年2月10日',
                intros: [
                    '瀑布流布局的Talk页面，支持折叠、月份列表、图片懒加载等',
                    '手风琴式伸缩特效的日志页面',
                    '卡片式布局的实验室页面',
                    '各种实验功能'
                ]
            },
            {
                version: 2,
                screenshot: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/screenshot-2017.velas.xyz.png',
                name: 'Velas 2017 春季更新',
                link: 'http://2017.velas.xyz/',
                date: '2017年2月11日 - 2017年7月9日',
                intros: [
                    '有明、暗、透明三套主题的导航栏，支持折叠',
                    '初次引入Vue框架',
                    '具有多层结构和多选择器的Log（日志）页',
                    '果冻主题+毛玻璃的音乐卡片',
                    '将实验室与Talk从Velas分离'
                ]
            },
            {
                version: 3,
                screenshot: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/screenshot-velas.xyz.png',
                name: 'Velas 2017 夏季更新',
                link: 'http://www.velas.xyz/',
                date: '2017年7月10日 至今',
                intros: [
                    '使用Vue前端路由，可多页面快速切换',
                    '响应式设计，支持各种分辨率的设备',
                    '更丰富的交互动画',
                    '全新的实验室页面: Camp'
                ]
            }]
        }
    },
    methods: {
        // cookie操作
        setCookie: function(name, value, days) {
            let d = new Date();
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
            window.document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString();
        },
        getCookie: function(name) {
            let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return v ? v[2] : null;
        },
        checkCookie: function() {
            let c = this.getCookie('notice')
            if (c !== null && c !== '' && c === 'false') {
                this.isNotice = false;
            }
        },
        deleteCookie: function(name) {
            this.setCookie(name, '', -1);
        }
    },
    created() {
        this.checkCookie();
    }
}
</script>

<style lang="scss" scoped>
@mixin link-transition($time) {
    -webkit-transition: all $time ease-out;
    -moz-transition: all $time ease-out;
    transition: all $time ease-out;
}

.template-content {
    background-color: #f5f5f5;
}

header {
    height: 440px;
    background: #777 url(http://o7a3i0m1t.bkt.clouddn.com/image/website/5-most-beautiful-glaciers-in-norway-3.jpg) no-repeat;
    background-size: cover;
    background-position: center center;
    width: 90%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    h1,
    p {
        text-align: center;
        position: relative;
        z-index: 3;
    }
    p {
        color: #fff;
        margin: 5px 0;
        line-height: 25px;
    }
    h1 {
        margin: 0 0 15px;
        padding: 150px 0 0;
        color: #fff;
        font-size: 3em;
        letter-spacing: 1px;
    }
    .content-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
}

main {
    min-height: 1200px;
    padding-top: 40px;
    width: 90%;
    margin: 0 auto;

    .capsule-group {
        padding: 80px 0 80px;
        width: 90%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
        background-color: #f7f7f7;
        position: relative;
        top: -88px;
        z-index: 3;
        box-shadow: rgba(132, 132, 132, 0.4) 0 0 10px;
        .notice {
            position: relative;
            width: 650px;
            background-image: url(http://o7a3i0m1t.bkt.clouddn.com/image/website/phones_notxt.png);
            background-repeat: no-repeat;
            background-size: 40px;
            background-position: 20px 45px;
            padding: 10px 20px 40px 80px;
            margin: 0 auto 50px;
            box-sizing: border-box;
            button {
                position: absolute;
                bottom: 10px;
                right: 30px;
                height: 40px;
                background: none;
                border: none;
                color: #666;
                cursor: pointer;
                &:hover {
                    border-bottom: 1.5px solid;
                }
            }
        }
        .capsule-card-group {
            width: 100%;
        }
        .capsule-card {
            width: 900px;
            height: 460px;
            margin: 0 auto 150px;
            position: relative;
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: rgba(128, 127, 127, 0.2) 0 0 30px;
            .capsule-intro {
                position: absolute;
                vertical-align: middle;
                width: 50%;
                height: 100%;
                padding: 70px 40px 0;
                box-sizing: border-box;
                ul {
                    padding-left: 20px;
                }
                a.capsule-view,
                i {
                    color: #666666;
                }
                a {
                    text-decoration: none;
                    color: initial;
                }
                a.capsule-view {
                    display: inline-block;
                    margin: 1.5em .5em 0 0;
                    font-size: 1.3em;
                    color: #666;
                    line-height: 2em;
                    &:hover {
                        border-bottom: 2px solid;
                    }
                }
            }
            &:nth-child(odd) {
                background-position: left 0;
                .capsule-intro {
                    background-color: #efefef;
                    right: 0;
                }
            }
            &:nth-child(even) {
                background-position: right 0;
                .capsule-intro {
                    background-color: #545454;
                    color: #fff;
                    left: 0;
                    a {
                        color: #ffffff;
                    }
                    a.capsule-view,
                    i {
                        color: #eee;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    main {
         .capsule-group {
             .capsule-card {
                 width: 700px;
                 height: 500px;
             }
         }
    }
}


@media screen and (max-width: 900px) {
    main {
        .notice {
            width: 85%;
        }
        .capsule-group {
            width: 95%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding-bottom: 50px;
            .capsule-card {
                background-position: center 0;
                width: 400px;
                height: 400px;
                &:nth-child(odd) .capsule-intro,
                &:nth-child(even) .capsule-intro {
                    padding: 30px 20px;
                    width: 100%;
                    height: 90%;
                    left: initial;
                    right: initial;
                    bottom: 0;
                }
            }
        }
    }
}

@media screen and (max-width: 500px) {
    header {
        width: 100%;
    }
    main {
        width: 100%;
        .capsule-group {
            width: 100%;
            box-shadow: initial;
            .capsule-card {
                width: 95%;
                height: 550px;
            }
        }
    }
}
</style>
