<template>
    <div id="navbar" :class="styleSeletor">
        <div class="main-bar">
            <div id="logo">
                <router-link to="/">Velas</router-link>
            </div>
            <button class="nav-btn" @click="isExpand = !isExpand" @mousedown="btnHandleMouseDown">
                <i class="fa fa-lg" :class="{'fa-bars': !isExpand, 'fa-times': isExpand}" aria-hidden="true"></i>
                <div class="touch-ripple"></div>
            </button>
        </div>
        <ul class="nav-list">
            <router-link tag="li" class="nav-main" v-for="link in links" :key="link.name" :to="link.route" :exact="link.isExact" @mousedown.native="handleMouseDown">
                <i :class="[link.iconClass, 'fa', 'iconfont']" aria-hidden="true"></i>{{link.name}}
                <div class="touch-ripple"></div>
            </router-link>
            <a v-for="slink in sublinks" class="nav-sub" :key="slink.name" :href="slink.href" target="_blank" @mousedown="handleMouseDown">
                <i :class="['fa', 'iconfont', slink.iconClass]" aria-hidden="true"></i>{{slink.name}}
                <div class="touch-ripple"></div>
            </a>
        </ul>
    </div>
</template>

<script>
import { Mainlinks, Sublinks } from '../assets/js/nav.json'
const touchripple = require('../assets/js/touchripple')
export default {
    name: 'NavbarCompact',
    data() {
        return {
            isOnTop: true,
            isExpand: false,
            links: Mainlinks,
            sublinks: Sublinks
        }
    },
    computed: {
        styleSeletor() {
            return {
                'expanded': this.isExpand,
                'ontop': this.isOnTop,
                'light-style': this.$route.meta.style === 'light',
                'dark-style': this.$route.meta.style === 'dark'
            }
        }
    },
    methods: {
        handleScroll() {
            this.isExpand === false ? '' : this.isExpand = false;
            const top = document.documentElement.scrollTop || document.body.scrollTop;
            this.isOnTop = top <= 25;
        },
        handleMouseDown(e) {
            touchripple.handleMouseDown(e);
            let that = this;
            setTimeout(function() {
                that.isExpand === false ? '' : that.isExpand = false;
            }, 300);
        },
        btnHandleMouseDown(e) {
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
    &.ontop {
        box-shadow: initial;
        padding-top: 8px;
        background-color: transparent;
    }
    &.ontop.dark-style {
        .nav-list {
            li.nav-main,
            a.nav-sub {
                color: #fff;
                &:hover,
                &.router-link-active,
                &:hover p {
                    color: lightcoral;
                }
            }
        }
        .main-bar {
            #logo a,
            .nav-btn {
                color: #fff;
            }
        }
    }
    &.ontop.light-style {
        .nav-list {
            li.nav-main,
            a.nav-sub {
                color: #666;
                &:hover,
                &.router-link-active,
                &:hover p {
                    color: rgba(94, 53, 177, 0.5);
                }
            }
        }
        .main-bar {
            #logo a {
                color: #5d1272;
            }
            .nav-btn {
                color: #666;
            }
        }
    }
    &.expanded,
    &.ontop.dark-style.expanded {
        @include link-transition(0.3s);
        background-color: rgba(255, 255, 255, 0.99);
        .nav-list {
            height: 270px;
            opacity: 1;
            li.nav-main,
            a.nav-sub {
                color: #666;
                &:hover,
                &.router-link-active,
                &:hover p {
                    color: rgba(94, 53, 177, 0.5);
                }
            }
        }
        .main-bar {
            #logo a {
                color: #5d1272;
            }
            .nav-btn {
                color: #666;
            }
        }
    }
    .main-bar {
        display: flex;
        justify-content: space-between;
        padding: 0 45px;
        #logo {
            padding: 14px 0 12px;
            font-size: 21px;
            font-weight: 500;
            letter-spacing: 1px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            a {
                text-transform: uppercase;
                color: #5d1272;
                text-decoration: none;
            }
        }
        .nav-btn {
            position: relative;
            display: block;
            background: transparent;
            color: #666;
            border: none;
            outline: none;
            cursor: pointer;
            width: 50px;
        }
    }

    .nav-list {
        @include link-transition(0.3s);
        padding: 0;
        overflow-y: hidden;
        height: 0;
        opacity: 0;
        li.nav-main,
        a.nav-sub {
            user-select: none;
            position: relative;
            padding: 12px 0 12px;
            line-height: 30px;
            text-align: center;
            @include link-transition(0.15s);
            &:hover,
            &.router-link-active {
                color: rgba(94, 53, 177, 0.5);
            }
            i {
                margin-right: .5em;
            }
            outline: none;
        }
        li.nav-main {
            color: #666;
            list-style: none;
            cursor: pointer;
        }
        a.nav-sub {
            text-decoration: none;
            display: block;
        }
    }
}
</style>
