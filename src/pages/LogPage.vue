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
                    <p><strong>想找回以前的版本？</strong> </p>
                    <p>打开这颗<router-link to="/time-capsule">时间胶囊</router-link><i class="fa fa-angle-right" aria-hidden="true"></i></p>
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
