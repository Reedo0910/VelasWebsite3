<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <v-title>Velas - 日志</v-title>
            <div class="blankspace"></div>
            <news-sub-nav></news-sub-nav>
            <header>
                <h1>更新日志</h1>
            </header>
            <main>
                <log-item></log-item>
                <div class="blank"></div>
            </main>
            <footer-block></footer-block>
        </div>
    </transition>
</template>

<script>
import VTitle from '../components/VTitle'
import LogItem from '../components/Log/LogItems'
import FooterBlock from '../components/Footer'
import NewsSubNav from '../components/SubNav/NewsSubNav'
export default {
    name: 'Log',
    components: {
        LogItem,
        VTitle,
        FooterBlock,
        NewsSubNav
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/log.scss';
</style>
