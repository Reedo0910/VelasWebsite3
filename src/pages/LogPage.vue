<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <v-title>Velas - 日志</v-title>
            <header>
                <h1>更新日志</h1>
                <p>让每天都来点新意思</p>
            </header>
            <main>
                <log-item></log-item>
                <div class="time-capsule-notice">
                    <p>想找回以前的版本？</p>
                    <p>打开这颗<router-link to="/time-capsule">时间胶囊</router-link><i class="fa fa-angle-right" aria-hidden="true"></i>
                    </p>
                </div>
                <div class="postscript">
                    <div class="hr"></div>
                    <p>我将把自己的奇思妙想和新学到的知识投入到Velas中。
                        <br>每一天，在你看到或者看不到的地方，Velas都变得比昨天更成熟一些，更精致一些。
                        <br>感谢你的到来，与我一起将Velas变得更美好。
                        <br>
                        <br>*想获得本站的最佳体验，请在 <span>Firefox</span> 、 <span>Chrome</span> 或 <span>Edge</span> 上浏览，或确保你的浏览器已升级至最新版本。</p>
                </div>
                <div class="blank"></div>
            </main>
            <footer-block></footer-block>
        </div>
    </transition>
</template>

<script>
import VTitle from '../components/VTitle'
import LogItem from '../components/LogItems'
import FooterBlock from '../components/Footer'
export default {
    name: 'Log',
    components: {
        LogItem,
        VTitle,
        FooterBlock
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/log.scss';
</style>
