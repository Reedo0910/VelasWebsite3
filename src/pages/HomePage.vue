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
                <div class="color-bar" style="background-color:#fafafa"></div>
                <h2 class="context-big-headtitle">What is Velas?</h2>
                <div class="hr"></div>
                <p class="context-intro">这是我的个人网站，<br>用于分享我的想法见解和个人爱好。<br>如果这里能为你带来一些灵感或是轻松愉悦的体验，<br id="tbr">那么这将是我的荣幸。</p>
                <div class="color-bar" style="background-color:#fafafa"></div>
                <div class="card-group" id="card-group">
                    <div v-for="card in cards" class="card"  :key="card.title" :style="{'background-image': 'url(' + card.background + ')'}">
                        <div class="card-mask"></div>
                        <div class="card-content">
                            <router-link class="card-title" :to="card.href"><span>{{card.title}}</span><i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                            <p class="card-intro">{{card.intro}}</p>
                            <router-link :to="card.href" class="card-icon"><i class="fa fa-3x" :class="card.icon" aria-hidden="true"></i></router-link>
                        </div>
                    </div>
                </div>
                <div class="color-bar" style="background-color:#fafafa"></div>
                <h2 class="context-big-headtitle">到处逛逛</h2>                
                <div class="link-btn-group">
                    <div class="link-btn" v-for="l in linkBtns" :key="l.title">
                        <a :href="l.href" :style="{'background-image': 'url(' + l.icon + ')'}" target="_blank"></a>
                        <h3>{{l.title}}</h3>
                        <p v-html="l.intro"></p>
                    </div>
                    <div class="link-btn" v-for="r in routeBtns" :key="r.title">
                        <router-link :style="{'background-image': 'url(' + r.icon + ')'}" :to="r.route"></router-link>
                        <h3>{{r.title}}</h3>
                        <p v-html="r.intro"></p>
                    </div>
                </div>
                <div class="postscript">
                    <div class="hr"></div>
                    <p>每一天，我将把自己新的想法和知识投入到Velas中。
                        <br>在你看到或者看不到的地方，Velas都将变得比昨天更成熟一些、更精致一些。
                        <br>感谢你的到来，与我一起将Velas变得更美好。</p>
                    <p class="little">* 想获得本站的最佳体验，请在 <span>Firefox</span> 、 <span>Chrome</span> 或 <span>Edge</span> 上浏览，或确保你的浏览器已升级至最新版本。</p>
                </div>
                <div class="color-bar" style="background-color:#fafafa"></div>                         
            </div>
            <footer-block></footer-block>
        </div>
    </transition>
</template>

<script>
import VTitle from '../components/VTitle'
import FooterBlock from '../components/Footer'
export default {
    name: 'Home',
    components: {
        VTitle,
        FooterBlock
    },
    data () {
        return {
            slogen: 'Everything flows.',
            linkBtns: [
                {
                    title: 'Camp',
                    href: 'http://www.velascamp.cn/',
                    icon: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/Campfire_black.png',
                    intro: '哐哐哐&%*#<br>奇思妙想的碰撞'
                },
                {
                    title: 'Talk',
                    href: 'http://blog.velas.xyz/',
                    icon: 'http://o7a3i0m1t.bkt.clouddn.com/Bird.png',
                    intro: 'blablabla<br>处女座的碎碎念'
                }
            ],
            routeBtns: [
                 {
                    title: '时间胶囊',
                    route: '/news/time-capsule',
                    icon: 'http://o7a3i0m1t.bkt.clouddn.com/image/time_capsule.png',
                    intro: '咦？<br>这是什么东东？'
                }
            ],
            cards: [
                {
                    href: '/music',
                    title: '音乐',
                    background: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/paramore-dallas.jpg',
                    icon: 'fa-music',
                    intro: '来场由耳朵到心灵的旅行'
                },
                {
                    href: '/tasty',
                    title: '美食',
                    background: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/oyakodon.jpg',
                    icon: 'fa-cutlery',
                    intro: '连味蕾也为之颤栗的美味'
                },
                {
                    href: '/movie',
                    title: '电影',
                    background: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/your_name.png',
                    icon: 'fa-film',
                    intro: '在萤幕里体验另一种人生'
                }
            ],
            winHeight: '0px'
        }
    },
    methods: {
        getHeight() {
            if (document.documentElement && document.documentElement.clientHeight) {
                this.winHeight = document.documentElement.clientHeight + 'px';
            }
        }
    },
    created () {
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
        .context-big-headtitle {
            text-transform: uppercase;
            margin: 20px auto 0;
            padding-top: 40px;
            font-weight: bold;
            font-size: 40px;
            color: #444;
        }
        .context-intro {
            color: #444;
            margin: 0 auto 80px;
            line-height: 2em;
            width: 90%;
        }
        .hr {
            margin: 20px auto;
            position: relative;
        }
        .postscript {
            max-height: 999px;
            text-align: center;
            padding: 50px 30px 80px;
            box-sizing: border-box;
            background-color: #fafafa;
            p {
                line-height: 2em;
                font-size: 1em;
                color: #444;
                &.little {
                    font-size: .8em;
                    margin-top: 30px;
                    color: #888;
                }
                span {
                    color: #444;
                }
            }
        }
        .color-bar {
            width: 100%;
            height: 15px;
        }
        .link-btn-group {
            width: 90%;
            margin: 60px auto 120px;
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
            text-align: center;
            .link-btn {
                width: 230px;
                a {
                    display: block;
                    width: 80px;
                    height: 80px;
                    text-decoration: none;
                    border: #eee solid 1.5px;
                    border-radius: 100%;
                    margin: 0 auto;
                    background: {
                        size: 40px;
                        repeat: no-repeat;
                        position: center;
                    }
                    &:hover {
                        background-color: #eee;
                    }
                }
                h3 {
                    margin: 12px 0 8px;
                    font-size: 1.1em;
                }
                p {
                    font-size: .8em;
                    color: #888;
                    margin: 0;
                }
            }
        }
        .card-group {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
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
            .link-btn-group{
                justify-content: space-around;
                .link-btn {
                    width: 110px;
                }
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
    #main-page .context .link-btn-group .link-btn {
        width: 98px;
        p {
            display: none;
        }
        h3 {
            font-size: 1em;
        }
    }
    #main-page .context .postscript {
        p {
            font-size: .8em;
        }
    }
    #tbr {
        display: none;
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
    #main-page .context {
        .link-btn-group {
            width: 95%;
        }
        .card-group .card .card-content {
            padding: 80px 56px 100px;
        }
    }
} 

</style>
