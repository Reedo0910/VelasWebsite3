<template>
    <transition name="switch-page" mode="out-in">
        <div id="main-page">
            <v-title>Velas - 首页</v-title>
            <header>
                <div id="banner">
                    <div class="inner">
                        <div class="velas_logo"></div>
                        <div class="sub-heading">
                            <p>
                                <strong>“春观夜樱、夏望繁星、秋赏满月、冬会初雪。”</strong>
                            </p>
                            <p>春は夜桜 夏には星 秋に満月 冬には雪。</p>
                        </div>
                        <div class="hr"></div>
                        <div class="decorate-box"></div>
                    </div>
                </div>
                <p class="header-pic-intro">关于图片：中国西藏-尼泊尔 喜玛拉雅山脉 Tibet-Nepal Himalayas</p>
            </header>
            <div class="context">
                <h2 class="context-big-headtitle">Welcome to Velas</h2>
                <div class="hr"></div>
                <p class="context-intro">我是Zeee。
                    <br>Velas是我设计的个人博客型网站，
                    <br>用于分享一些我私人的喜好与个人经验。
                    <br>如果Velas能给你带来一些灵感又或是轻松愉悦的体验的话，
                    <br>将是我的荣幸。</p>
                <div class="context-head"></div>
                <div class="card-group" id="card-group">
                    <router-link v-for="card in cards" class="card" :to="card.href" :key="card">
                        <span class="card-title">{{card.title}}</span>
                        <span class="card-intro">{{card.intro}}</span>
                    </router-link>
                </div>
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
            cards: [{
                href: '/music',
                title: '音乐',
                intro: '我喜欢的'
            },
            {
                href: '/tasty',
                title: '美食',
                intro: '好吃的(╹ڡ╹ )'
            },
            {
                href: '/movie',
                title: '电影',
                intro: '另一种人生'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin link-background {
    background: {
        image: url(/static/images/background.jpg);
        repeat: no-repeat;
        size: cover;
        position: 0 0;
        attachment: fixed;
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
        min-height: 700px;
        background-color: rgba(0, 0, 0, 0.2);
        .header-pic-intro {
            font-size: 10px;
            position: absolute;
            bottom: -15px;
            right: 25px;
            color: #ccc;
            margin: 0;
        }
        #banner {
            height: 100%;
            .inner {
                max-width: 540px;
                margin: 0 auto;
                position: relative;
                top: 215px;
                color: #fff;
                box-sizing: border-box;
                .velas_logo {
                    width: 360px;
                    height: 105px;
                    margin: 0 auto 35px;
                    background: {
                        image: url('/static/images/logo-with-text.png');
                        size: cover;
                    }
                }
                .sub-heading {
                    line-height: 40px;
                    font-weight: 300;
                    margin: 0 10px;
                    text-align: center;
                    p:nth-child(1) {
                        font-size: 18px;
                        margin: 0;
                    }
                    p:nth-child(2) {
                        font-size: 16px;
                        margin-top: 5px;
                    }
                }
            }
        }
    }

    .context {
        width: 100%;
        min-height: 750px;
        background-color: #eee;
        position: relative;
        text-align: center;
        box-shadow: #444 0 0 10px;
        padding-bottom: 60px;
        .context-big-headtitle {
            text-transform: uppercase;
            margin: 0;
            padding-top: 40px;
            font-weight: 300;
            font-size: 40px;
            color: #444;
        }
        .context-intro {
            color: #444;
            margin: 0 auto;
            line-height: 30px;
        }
        .hr {
            margin: 20px auto;
            position: relative;
        }
        .context-head {
            position: absolute;
            top: -55px;
            right: 50px;
            width: 200px;
            height: 200px;
            background: {
                image: url('/static/images/head.png');
                size: cover;
                repeat: no-repeat;
                position: -10px 0;
            }
        }
        .card-group {
            max-width: 765px;
            margin: 50px auto;
            display: flex;
            justify-content: space-around;
            align-content: space-around;
            flex-flow: row wrap;
            .card {
                height: 205px;
                width: 205px;
                position: relative;
                box-shadow: 8px 6px 13px -8px #888;
                text-align: center;
                text-decoration: none;
                margin-bottom: 30px;
                color: #fff;
                opacity: 0.85;
                background: {
                    size: cover;
                    repeat: no-repeat;
                    position: 0 0;
                }
                @include link-transition(0.2s);
                .card-title,
                .card-intro {
                    position: relative;
                    float: left;
                    width: 100%;
                    text-align: left;
                    top: 140px;
                    padding-left: 15px;
                    box-sizing: border-box;
                }
                .card-title {
                    font-size: 1.4em;
                    text-shadow: #222 -1px 1px 3px;
                }
                .card-intro {
                    font-size: .8em;
                    text-shadow: #222 -1px 1px 3px;
                    top: 130px;
                    opacity: 0;
                    @include link-transition(0.2s);
                }
                &:nth-child(1) {
                    background: {
                        image: url(/static/images/cardgroup/card1.jpg);
                    }
                }
                &:nth-child(2) {
                    background: {
                        image: url(/static/images/cardgroup/card2.jpg);
                    }
                }
                &:nth-child(3) {
                    background: {
                        image: url(/static/images/cardgroup/card4.jpg);
                    }
                }
                &:hover {
                    opacity: 1;
                    box-shadow: 8px 6px 25px -8px #666;
                    @include link-transition(0.2s);
                    .card-intro {
                        opacity: 0.9;
                        top: 140px;
                        @include link-transition(0.2s);
                    }
                }
            }
        }
    }
}
</style>
