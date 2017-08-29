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
                <div class="time-capsule-notice">
                    <p>
                        <strong>想找回以前的版本？</strong>
                    </p>
                    <p>打开这颗
                        <router-link to="/news/time-capsule">时间胶囊</router-link>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </p>
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
    .time-capsule-notice {
        margin: 30px auto 20px;
        padding: 5px 10px 5px 80px;
        border-left: #888 solid 3px;
        width: 60%;
        box-sizing: border-box;
        background-image: url(http://o7a3i0m1t.bkt.clouddn.com/image/time_capsule.png);
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
    }
}

@media screen and (max-width: 900px) {

    main {
        .time-capsule-notice {
            width: 85%;
            p {
                display: block;
            }
        }
    }
}
</style>
