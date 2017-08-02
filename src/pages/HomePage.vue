<template>
    <transition name="switch-page" mode="out-in">
        <div id="main-page">
            <v-title>Velas - 首页</v-title>
            <header>
                <div class="bg"></div>
                <div id="banner">
                    <div class="inner">
                        <div class="velas_logo"></div>
                        <p class="sub-heading">Everything flows.</p>
                    </div>
                </div>
            </header>
            <div class="context">
                <div class="color-bar" style="background-color:#ccc"></div>
                <h2 class="context-big-headtitle">What is Velas?</h2>
                <div class="hr"></div>
                <p class="context-intro">这是我的个人博客型网站，<br>用于分享我的想法见解和个人爱好。<br>如果这里能为你带来一些灵感或是轻松愉悦的体验，<br id="tbr">那么这将是我的荣幸。</p>
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
                <div class="color-bar" style="background-color:#ccc"></div>
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
                <div class="color-bar" style="background-color:#888"></div>                
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
                    intro: '生而为处女座，<br>抱歉了'
                }
            ],
            routeBtns: [
                 {
                    title: '时间胶囊',
                    route: '/time-capsule',
                    icon: 'http://o7a3i0m1t.bkt.clouddn.com/image/time_capsule.png',
                    intro: '咦？<br>我发现了什么？'
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
            ]
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
        position: center 0;
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
        position: relative;
        .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(1, 1, 0, 0.5);
            display: none;
        }
        #banner {
            height: 100%;
            position: relative;
            z-index: 2;
            .inner {
                max-width: 70%;
                display: flex;
                margin: 0 auto;
                position: relative;
                top: 215px;
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
                    font-weight: 300;
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
        background-color: #f7f7f7;
        position: relative;
        text-align: center;
        .context-big-headtitle {
            text-transform: uppercase;
            margin: 50px 0 0;
            padding-top: 40px;
            font-weight: 300;
            font-size: 40px;
            color: #444;
        }
        .context-intro {
            color: #444;
            margin: 0 auto;
            line-height: 30px;
            width: 90%;
        }
        .hr {
            margin: 20px auto;
            position: relative;
        }
        .color-bar {
            width: 100%;
            height: 15px;
        }
        .link-btn-group {
            max-width: 765px;
            margin: 50px auto 80px;
            display: flex;
            justify-content: space-around;
            align-content: space-around;
            flex-flow: row wrap;
            text-align: center;
            .link-btn {
                width: 105px;
                a {
                    display: block;
                    width: 80px;
                    height: 80px;
                    text-decoration: none;
                    border: #ddd solid 1.5px;
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
                    font-weight: 500;
                    margin: 5px;
                    color: #333;
                }
                p {
                    font-size: .8em;
                    color: #888;
                    margin: 0;
                    font-weight: 300;
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
                    padding: 80px 100px;
                    position: relative;
                    z-index: 3;
                    box-sizing: border-box;       
                    .card-icon {
                        @include link-transition(0.2s);
                        display: inline-block;
                        padding: 50px;
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
            .bg {
                display: block;
            }
            #banner .inner {
                justify-content: center;
                top: 180px;                
            }
        }
        .context {
            .context-big-headtitle {
                font-size: 24px;
            }
        }
    }
}


@media screen and (max-width: 600px) {
     #main-page header #banner .inner {
        .velas_logo {
            width: 240px;
            height: 80px;
        }
        .sub-heading {
            font-size: 24px;
            margin: 0;
            padding: 0;
        }
    }
    #tbr {
        display: none;
    }
}


</style>
