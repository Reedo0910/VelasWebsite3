<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <div class="blankspace"></div>
            <news-sub-nav></news-sub-nav>
            <header>
                <h1>更新日志</h1>
            </header>
            <main>
                <log-item></log-item>
                <div class="blank"></div>
            </main>
        </div>
    </transition>
</template>

<script>
import LogItem from '../components/Log/LogItems'
import NewsSubNav from '../components/SubNav/NewsSubNav'
export default {
    name: 'Log',
    components: {
        LogItem,
        NewsSubNav
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/log.scss';
</style>
