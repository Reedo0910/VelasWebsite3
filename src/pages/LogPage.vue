<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <div class="blankspace"></div>
            <div class="top-space-holeder"></div>
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
export default {
    name: 'Log',
    components: {
        LogItem
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/log.scss';

.top-space-holeder {
    margin: 0 auto;
    padding: 80px 0 10px;
    height: 1px;
    width: 80%;
}
</style>
