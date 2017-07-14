<template>
    <transition name="switch-page" mode="out-in">
        <div id="main-page">
            <v-title>Velas - 首页</v-title>
            <header>
                <div id="banner">
                    <div class="inner">
                        <div class="velas_logo"></div>
                        <p class="sub-heading">Everything flows.</p>
                    </div>
                </div>
            </header>
            <div class="context">
                <h2 class="context-big-headtitle">What is Velas?</h2>
                <div class="hr"></div>
                <p class="context-intro">这是我的个人博客型网站，
                    <br>用于分享我的想法见解和个人爱好。
                    <br>如果这里能为你带来一些灵感或是轻松愉悦的体验，
                    <br>那么这将是我的荣幸。</p>
                <div class="card-group" id="card-group">
                    <router-link v-for="card in cards" class="card" :to="card.href" :key="card.title">
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
        image: url(http://o7a3i0m1t.bkt.clouddn.com/image/website/rain_drop.jpg);
        repeat: no-repeat;
        size: cover;
        position: 0 0;
        // attachment: fixed;
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
        #banner {
            height: 100%;
            .inner {
                max-width: 70%;
                display: flex;
                margin: 0 auto;
                position: relative;
                top: 215px;
                color: #fff;
                box-sizing: border-box;
                justify-content: space-between;
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
                    padding: 20px 0 0;
                    font-weight: 300;
                    font-size: 36px;
                    box-sizing: border-box;
                    line-height: 2.2em;
                    border-bottom: 2px solid #eee;
                }
            }
        }
    }

    .context {
        width: 100%;
        min-height: 750px;
        background-color: #f7f7f7;
        position: relative;
        text-align: center;
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
                box-shadow: 8px 6px 10px -8px #888;
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
                        image: url(http://o7a3i0m1t.bkt.clouddn.com/image/card1.jpg);
                    }
                }
                &:nth-child(2) {
                    background: {
                        image: url(http://o7a3i0m1t.bkt.clouddn.com/image/card2.jpg);
                    }
                }
                &:nth-child(3) {
                    background: {
                        image: url(http://o7a3i0m1t.bkt.clouddn.com/image/website/card4.jpg);
                    }
                }
                &:hover {
                    opacity: 1;
                    box-shadow: 8px 6px 20px -8px #666;
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
