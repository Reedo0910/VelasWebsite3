<template>
    <div>
        <v-title>404 Not Found</v-title>
        <div id="context" :style="{height: getHeight}">
            <img src="/static/images/Light_Of.png" alt="light off">
            <p>Ops</p>
            <h1 :class="{disappear : !isAppear}">404 Not Found</h1>
            <p>找不到你想要浏览的网页</p>
        </div>
    </div>
</template>

<script>
import VTitle from '../components/VTitle'
export default {
    name: 'NotFound',
    data () {
        return {
            isAppear: true
        }
    },
    computed: {
        getHeight() {
            let winHeight = 0;
            if (document.documentElement && document.documentElement.clientHeight) {
                winHeight = document.documentElement.clientHeight;
            }
            return winHeight + 'px';
        }
    },
    mounted() {
        let that = this;
        setInterval(function () {
            let value = Math.ceil(Math.random() * 1000);
            that.isAppear = value % 4 !== 0;
        }, 300);
    },
    components: {
        VTitle
    }
}
</script>

<style lang="scss" scoped>
#context {
    height: 500px;
    background-color: #000;
    text-align: center;
    padding-top: 150px;
    box-sizing: border-box;
    color: #fff;
    img {
        width: 100px;
        height: 100px;
    }
    h1 {
        font-size: 3.5em;
        margin: 30px 0 40px;
        opacity: 1;
        transition: opacity 800ms ease;
        &.disappear {
            opacity: 0;
        }
    }
    p {
        margin: 10px 0;
        font-size: 1.2em;
    }
}
</style>
