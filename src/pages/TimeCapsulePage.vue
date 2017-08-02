<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <v-title>Velas - 时间胶囊</v-title>
            <header>
                <h1>时间胶囊</h1>
                <p>Yesterday Once More.</p>
            </header>
            <main>
                <div class="notice" v-if="isNotice">
                    <h3>未适配移动端</h3>
                    <p>在<strong>Velas 2017夏季更新之前</strong>的网站版本均未使用响应式设计，且未对移动端进行适配。</p>
                    <p>若你正使用移动设备进行浏览，可能不能获得良好的体验。</p>
                    <button @click="isNotice = false, setCookie('notice', 'false', 10)">我知道了</button>
                </div>
                <div class="capsule-group">
                    <div class="capsule-card" v-for="CC in CCs" :key="CC.verison" >
                        <a class="capsule-cover" :href="CC.link" target="_blank" :style="{'background-image': 'url(' + CC.screenshot + ')'}"></a>
                        <div class="capsule-intro">
                            <h2>{{CC.name}}</h2>
                            <p>首次更新时间： {{CC.date}}</p>
                            <p style="margin-bottom:5px">特色功能：</p>
                            <ul><li v-for="intro in CC.intros" :key="intro">{{intro}}</li></ul>
                            <a :href="CC.link" class="capsule-view" target="_blank">浏览</a><i class="fa fa-angle-right" aria-hidden="true"></i>
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
export default {
    name: 'TimeCapsule',
    components: {
        VTitle,
        FooterBlock
    },
    data() {
        return {
            isNotice: true,
            CCs: [{
                version: 1,
                screenshot: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/screenshot-2016.velas.xyz.png',
                name: 'Velas 2016',
                link: 'http://2016.velas.xyz/',
                date: '2016年5月3日',
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
                date: '2017年2月11日',
                intros: [
                    '有明、暗、透明三套主题的导航栏，支持折叠',
                    '初次引入Vue框架',
                    '具有多层结构和多选择器的Log（日志）页',
                    '果冻主题+毛玻璃的音乐卡片'
                ]
            },
            {
                version: 3,
                screenshot: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/screenshot-velas.xyz.png',
                name: 'Velas 2017 夏季更新',
                link: 'http://www.velas.xyz/',
                date: '2017年7月10日',
                intros: [
                    '使用Vue前端路由，可多页面快速切换',
                    '响应式设计，支持多分辨率',
                    '更丰富的交互动画'
                ]
            }]
        }
    },
    methods: {
        // cookie操作
        setCookie: function (name, value, days) {
            let d = new Date();
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
            window.document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString();
        },
        getCookie: function (name) {
            let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return v ? v[2] : null;
        },
        checkCookie: function () {
            let c = this.getCookie('notice')
            if (c !== null && c !== '' && c === 'false') {
                this.isNotice = false;
            }
        },
        deleteCookie: function (name) {
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

header {
  height: 440px;
  background: #777 url(http://o7a3i0m1t.bkt.clouddn.com/image/website/hourglass.jpg) 0px -100px no-repeat;
  background-size: cover;
  width: 100%;
  p {
    color: #fff;
    margin: 0 0 0 15%;
    letter-spacing: 3px;
  }
  h1 {
    margin: 0 11% 0;
    text-align: center;
    padding: 100px 16px 13px;
    width: 15%;
    color: #fff;
    font-size: 2em;
    letter-spacing: 1px;
  }
}

main {
    min-height: 1200px;
    background-color: #555;
    padding-top: 50px; 
    .notice {
        position: relative;
        width: 650px;
        background-image: url(http://o7a3i0m1t.bkt.clouddn.com/image/website/phones_notxt_white.png);
        background-repeat: no-repeat;
        background-size: 40px;
        background-position: 20px 45px;
        padding: 10px 20px 40px 80px;
        color: #fff;
        margin: 0 auto;
        background-color: #666;
        box-sizing: border-box;
        button {
            position: absolute;
            bottom: 10px;
            right: 30px;
            height: 40px;
            background: none;
            border: none;
            color: #ddd;
            cursor: pointer;
            &:hover {
                border-bottom: 1.5px solid;
            }
        }
    }
    .capsule-group {
        padding: 0 0 80px;
        .capsule-card {
            padding: 80px 100px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .capsule-intro {
                width: 40%;
                color: #fff;
                ul {
                    padding-left: 20px;
                }
                .capsule-view {
                    display: inline-block;
                    margin: 1.5em .5em 0 0;
                    font-size: 1.3em;
                    text-decoration: none;
                    color: #ddd;
                    line-height: 2em;
                    &:hover {
                        border-bottom: 2px solid;
                    }
                }
                i {
                    color: #ddd;
                }
            }
            &:nth-child(odd) {
                 .capsule-intro {
                     margin-left: 50px;
                 }
            }
            &:nth-child(even) {
                background-color: #444;
                flex-direction: row-reverse;
                .capsule-intro {
                    margin-right: 50px;
                }
            }
            .capsule-cover {
                width: 600px;
                height: 350px;
                background-size: cover;
                background-position: center 0;
                box-shadow: #222 0 0 20px;
            }
        }
    }
}


@media screen and (max-width: 900px) {
    header {
        height: 300px;
        background-position: 0 0;
        h1 {
            width: 100%;
            margin: 0;
            text-align: left;
            padding-left: 15%;
            box-sizing: border-box;
        }
        p {
            margin: 0;
            padding-left: 15%;
            text-align: left;
        }
    }

    main {
        .notice {
            width: 85%;
        }
        .capsule-group .capsule-card {
            padding: 50px;
            &:nth-child(even) {
                flex-direction: initial;
            }
            &:nth-child(odd) .capsule-intro,
            &:nth-child(even) .capsule-intro {
                margin: 20px auto;
                width: 90%;
            }
            .capsule-cover {
                width: 100%;
            }
        }
    }
}

</style>
