<template>
    <div>
        <v-title>404 Not Found</v-title>
        <div id="context" :style="{height: winHeight}">
            <div class="bg" :class="{disappear : !isAppear}"></div>
            <div class="ft">
                <img src="/static/images/Light_Of.png" alt="light off">
                <p>Ops</p>
                <h1 :class="{disappear : !isAppear}">404 Not Found</h1>
                <p>找不到你想要浏览的网页</p>
            </div>
        </div>
    </div>
</template>

<script>
import VTitle from '../components/VTitle'
export default {
    name: 'NotFound',
    data () {
        return {
            isAppear: true,
            timer: null,
            winHeight: '0px'
        }
    },
    methods: {
        getHeight() {
            if (document.documentElement && document.documentElement.clientHeight) {
                this.winHeight = document.documentElement.clientHeight + 'px';
            }
        }
    },
    created() {
        this.getHeight();
        window.addEventListener('resize', this.getHeight);
    },
    mounted() {
        let that = this;
        let value = 0;
        this.timer = setInterval(function () {
            value = Math.ceil(Math.random() * 1000);
            that.isAppear = value % 4 !== 0;
        }, 300);
    },
    beforeDestroy() {
        clearInterval(this.timer);
        window.removeEventListener('resize', this.getHeight);
    },
    components: {
        VTitle
    }
}
</script>

<style lang="scss" scoped>
#context {
    position: relative;
    height: 500px;
    text-align: center;
    padding-top: 150px;
    box-sizing: border-box;
    color: #fff;
    background: #000;
    .bg {
        transition: opacity 800ms ease;
        background: radial-gradient(#444, #000);
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        &.disappear {
            opacity: 0;
        }
    }
    .ft {
        position: relative;
        z-index: 2;
        img {
            width: 100px;
            height: 100px;
        }
        h1 {
            font-family: Arial, Helvetica, sans-serif;
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
}
</style>
