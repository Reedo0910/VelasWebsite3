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
        </div>
    </transition>
</template>

<script>
import VTitle from '../components/VTitle'
import LogItem from '../components/LogItems'
export default {
    name: 'Log',
    components: {
        LogItem,
        VTitle
    }
}
</script>

<style lang="scss" scoped>
header {
    height: 400px;
    background: #777 url(../../static/images/background-2.jpg) 0px -167px no-repeat;
    background-size: cover;
    width: 100%;
    p {
        color: #fff;
        margin: 0 0 0 15%;
        letter-spacing: 3px;
    }
    h1 {
        margin: 0 11% 0;
        text-align: center;
        padding: 100px 16px 13px;
        width: 15%;
        color: #fff;
        font-size: 2em;
        letter-spacing: 1px;
    }
}

main {
    position: relative;
    width: 100%;
}
</style>
