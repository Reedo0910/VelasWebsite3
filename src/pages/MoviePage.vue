<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <v-title>Velas - 电影</v-title>
            <header>
                <div id="banner">
                    <div class="inner">
                        <h1>MOVIE</h1>
                    </div>
                </div>
                <i class="fa fa-angle-double-down fa-2x down_icon" aria-hidden="true"></i>
            </header>
            <div id="context"></div>
            <footer-block></footer-block>
        </div>
    </transition>
</template>

<script>
import VTitle from '../components/VTitle'
import FooterBlock from '../components/Footer'
export default {
    name: 'Movie',
    components: {
        VTitle,
        FooterBlock
    }
}
</script>

<style lang="scss" scoped>
@mixin link-transition($time) {
    -webkit-transition: all $time ease-out;
    -moz-transition: all $time ease-out;
    transition: all $time ease-out;
}

header {
    background-color: #4caf50;
    width: 100%;
    min-height: 700px;
    position: relative;
    #banner {
        .inner {
            position: relative;
            text-align: center;
            top: 270px;
            color: #fff;
            box-sizing: border-box;
            text-shadow: #2e7d32 0px 1px 30px;
            h1 {
                font-family: Qwigley Regular;
                line-height: 90px;
                font-size: 15em;
                letter-spacing: 10px;
                font-weight: 300;
                margin: 0 auto;
            }
        }
    }
    .down_icon {
        color: #fff;
        position: absolute;
        bottom: 50px;
        left: 50%;
        text-shadow: #b71c1c 0px 1px 30px;
    }
}

#context {
    height: 1000px;
}
</style>
