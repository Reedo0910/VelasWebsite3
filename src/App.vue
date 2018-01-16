<template>
    <div id="app">
        <navbar v-if="!isCompact"></navbar>
        <navbar-compact v-else></navbar-compact>
        <router-view></router-view>
        <footer-block></footer-block>
    </div>
</template>

<script>
import Navbar from './components/Nav'
import NavbarCompact from './components/NavCompact'
import FooterBlock from './components/Footer'
import { init } from './assets/js/io'

export default {
    name: 'app',
    components: {
        Navbar,
        NavbarCompact,
        FooterBlock
    },
    data() {
        return {
            isCompact: false
        }
    },
    methods: {
        displayCheck() {
            const MaxWidth = 800; // 移动设备最大宽度
            let winWidth = 0;
            if (document.documentElement && document.documentElement.clientWidth) {
                winWidth = document.documentElement.clientWidth;
            }
            this.isCompact = winWidth <= MaxWidth;
        }
    },
    created() {
        init(); // clear session storage
        this.displayCheck();
        window.addEventListener('resize', this.displayCheck);
        document.body.addEventListener('touchstart', function () {});
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.displayCheck);
        document.body.removeEventListener('touchstart', function () {});
    }
}
</script>

<style lang="scss">
$total-font: "Microsoft YaHei",
'微软雅黑',
Arial,
sans-serif;

$font-size-p:16px;

.switch-page-enter-active {
    transition: all .5s ease;
}

.switch-page-enter,
.switch-page-leave {
    transform: translateY(-8px);
    opacity: 0.5;
}

.switch-page-leave-active {
    transition: all 0s;
}

body {
    font-family: $total-font;
}

@font-face {
    font-family: 'NotoSansHans-Regular';
    src: url(/static/fonts/NotoSansHans-Regular.ttf);
    src: url(/static/fonts/NotoSansHans-Regular.eot);
}

@font-face {
    font-family: "Qwigley Regular";
    src: url(/static/fonts/Qwigley-Regular.ttf);
}

.clearfix:after {
    content: ' ';
    display: block;
    clear: both;
}

ul {
    margin: 0;
}

h3 {
    font-size: 20px;
}

p {
    font-size: $font-size-p;
    letter-spacing: 1px;
}

[v-cloak] {
    display: none;
}
</style>
