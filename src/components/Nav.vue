<template>
    <div id="navbar" :class="styleSeletor">
        <div id="logo">
            <router-link to="/">Velas</router-link>
        </div>
        <div class="nav-sub">
            <a v-for="(slink, index) in sublinks" :key="slink.name" :href="slink.href" target="_blank" @mouseover.stop="hoverIndex = index + links.length" @mouseout.stop="hoverIndex = -1" @mousedown="handleMouseDown">
                <i :class="['fa', slink.iconClass]" aria-hidden="true"></i>
                <p>{{slink.name}}</p>
                <div class="touch-ripple"></div>
            </a>
        </div>
        <div class="nav-main" id="nav_main">
            <router-link v-for="(link, index) in links" @mouseover.native.stop="hoverIndex = index" :key="link.name" :to="link.route" :exact="link.isExact" @mouseout.native.stop="hoverIndex = -1" @mousedown.native="handleMouseDown">
                <i :class="[link.iconClass, 'fa']" aria-hidden="true"></i>{{link.name}}
                <div class="touch-ripple"></div>
            </router-link>
        </div>
        <span class="tab-indicator" :style="{width: indicatorWidth, right: indicatorPos}"></span>
    </div>
</template>

<script>
import { Mainlinks, Sublinks } from '../assets/js/nav.json'
const touchripple = require('../assets/js/touchripple')
export default {
    name: 'Navbar',
    data() {
        return {
            isOnTop: true,
            hoverIndex: -1,
            links: Mainlinks,
            sublinks: Sublinks
        }
    },
    computed: {
        indicatorPos() {
            const MainTabWidth = 125;
            const SubTabWidth = 70;
            const diff = 45 / 2;
            const subWidth = SubTabWidth * this.sublinks.length;
            const Tab = this.links.length + this.sublinks.length - 1;
            let index = this.hoverIndex === -1 ? this.$route.meta.index : this.hoverIndex;
            let tar;
            if (this.hoverIndex >= this.links.length) {
                tar = (Tab - index) * SubTabWidth + diff + 'px';
            } else {
                tar = (this.links.length - 1 - index) * MainTabWidth + diff + subWidth + 'px';
            }
            return tar;
        },
        indicatorWidth() {
            let tar = this.hoverIndex > this.links.length - 1 ? 25 : 80;
            tar = this.$route.meta.index === -1 && this.hoverIndex === -1 ? 0 : tar;
            return tar + 'px';
        },
        styleSeletor() {
            return {
                'ontop': this.isOnTop,
                'light-style': this.$route.meta.style === 'light',
                'dark-style': this.$route.meta.style === 'dark'
            }
        }
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop || document.body.scrollTop;
            this.isOnTop = top <= 25;
        },
        handleMouseDown(e) {
            touchripple.handleMouseDown(e);
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/style.css';
//p的字体大小
$font-size-p:16px; //过渡动画样式
@mixin link-transition($time) {
    -webkit-transition: all $time ease-out;
    -moz-transition: all $time ease-out;
    transition: all $time ease-out;
}

#navbar {
    width: 100%;
    position: fixed;
    background-color: #fff;
    z-index: 1000;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(57, 70, 78, 0.2);
    @include link-transition(0.3s);
    .tab-indicator {
        height: 2px;
        width: 80px;
        position: absolute;
        bottom: 0;
        right: 412.5px;
        background-color: #2196f3;
        transition: all .3s cubic-bezier(.35, 0, .25, 1);
    }
    &.ontop {
        box-shadow: initial;
        padding-top: 8px;
        background-color: transparent;
    }
    &.ontop.dark-style {
        .nav-main a,
        .nav-sub a {
            color: #fff;
            &:hover,
            &.router-link-active,
            &:hover p {
                color: lightcoral;
            }
        }
        #logo a {
            color: #fff;
        }
        .tab-indicator {
            background-color: rgba(255, 255, 255, 0.8);
        }
    }
    &.ontop.light-style {
        .nav-main a,
        .nav-sub a {
            color: #666;
            &:hover,
            &.router-link-active,
            &:hover p {
                color: rgba(94, 53, 177, 0.5);
            }
        }
        #logo a {
            color: #8e24aa;
        }
        .tab-indicator {
            background-color: #2196f3;
        }
    }
    .nav-main,
    .nav-sub {
        list-style: none;
        float: right;
        a {
            position: relative;
            text-decoration: none;
            display: inline-block;
            padding: 12px 0 12px;
            line-height: 30px;
            text-align: center;
            @include link-transition(0.15s);
            &:hover,
            &.router-link-active {
                color: rgba(94, 53, 177, 0.5);
            }
            outline: none;
        }
    }
    .nav-main a {
        color: #666;
        width: 125px;
        i {
            margin-right: .5em;
        }
    }
    .nav-sub {
        @include link-transition(0.3s);
        a {
            width: 70px;
            p {
                display: none;
            }
            &:hover {
                p {
                    display: inline;
                }
                i {
                    display: none;
                }
            }
        }
    }
    #logo {
        float: left;
        padding: 12px 0 12px;
        font-size: 21px;
        font-weight: 500;
        letter-spacing: 1px;
        margin-left: 25px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        a {
            color: #8e24aa;
        }
    }
    #logo a,
    ul li a {
        line-height: 30px;
        text-decoration: none;
        display: inline-block;
        padding: 0 20px;
    }
}
</style>
