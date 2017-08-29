<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <v-title>Velas - 新闻</v-title>
            <news-sub-nav></news-sub-nav>
            <header>
                <div class="content-mask"></div>
                <h1>Velas' News</h1>
                <p>这周有什么新鲜事？</p>
            </header>
            <main>
                <div class="wait">
                    <p>新闻中心建设中，Coming Soon…</p>
                </div>
                <div class="notice time-capsule">
                    <p>
                        <strong>想找回以前的版本？</strong>
                    </p>
                    <p>打开这颗
                        <router-link to="/news/time-capsule">时间胶囊</router-link>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </p>
                </div>
                <div class="notice log">
                    <p>
                        <strong>想查看以前的更新日志？</strong>
                    </p>
                    <p>日志已于2017年8月29日停止更新，你仍可以在
                        <router-link to="/news/log">这里</router-link> 找到他</p>
                </div>
                <div class="blank"></div>
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
    name: 'News',
    components: {
        VTitle,
        FooterBlock,
        NewsSubNav
    }
}
</script>

<style lang="scss" scoped>
//过渡动画样式
@mixin link-transition($time) {
    -webkit-transition: all $time ease-out;
    -moz-transition: all $time ease-out;
    transition: all $time ease-out;
}

//--Vue
.fade-enter-active {
    transition: opacity .8s
}

.fade-enter,
.fade-leave {
    opacity: 0
}

header {
    height: 440px;
    background: #777 url(http://o7a3i0m1t.bkt.clouddn.com/image/website/raspberry.jpg) no-repeat;
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
        letter-spacing: 2px;
        line-height: 25px;
    }
    h1 {
        margin: 0;
        padding: 150px 0 0;
        color: #fff;
        font-size: 3em;
        letter-spacing: 1px;
    }
    .content-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.38);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
}

main {
    position: relative;
    width: 100%;
    margin: 0 auto;
    .blank {
        height: 120px;
    }
    .wait {
        p {
            text-align: center;
            font-size: 3em;
            margin: 150px 0;
            color: #ccc;
            font-weight: 300;
        }
    }
    .notice {
        margin: 30px auto 20px;
        padding: 5px 10px 5px 80px;
        width: 60%;
        box-sizing: border-box;
        background-size: 40px;
        background-repeat: no-repeat;
        background-position: 20px center;
        opacity: .8;
        background-color: #fafafa;
        p {
            display: inline-block;
        }
        a {
            text-decoration: none;
            color: #444;
            margin: 0 5px;
            &:hover {
                border-bottom: 1px solid #444;
            }
        }
        i {
            color: #444;
        }
        &.time-capsule {
            background-image: url(http://o7a3i0m1t.bkt.clouddn.com/image/time_capsule.png);
        }
        &.log {
            background-image: url(http://o7a3i0m1t.bkt.clouddn.com/image/website/Book_easyicon.net.png);
        }
    }
}

@media screen and (max-width: 900px) {
    main {
        .wait p {
            font-size: 1.5em;
        }
        .notice {
            width: 85%;
            p {
                display: block;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    header {
        width: 100%;
    }
}
</style>
