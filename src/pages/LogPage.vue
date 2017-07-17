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
