<template>
    <div id="navbar">
        <div id="logo">
            <router-link to="/">Velas</router-link>
        </div>
        <ul id="navTitle">
            <router-link to="/" id="home_nav" tag="li" @click.native="setType('dark')" exact>
                <a>Home</a>
            </router-link>
            <li id="collection_nav" @click="itemEvent">
                <a>Collections
                    <i class="fa fa-angle-down fa-lg rotate" id="rotate" aria-hidden="true"></i>
                </a>
            </li>
            <router-link to="/log" tag="li" id="log_nav" @click.native="setType()">
                <a>Log</a>
            </router-link>
            <li class="nav-talk-button" id="talk_nav">
                <a href="http://blog.velas.xyz/">Talk</a>
            </li>
        </ul>
        <ul class="sub-navbar" id="subNavbar-Collection">
            <router-link to="/music" tag="li" @click.native="setType()">
                <a><i class="fa fa-music" aria-hidden="true"></i> Music</a>
            </router-link>
            <router-link to="/tasty" tag="li" @click.native="setType()">
                <a><i class="fa fa-cutlery" aria-hidden="true"></i> Tasty</a>
            </router-link>
            <router-link to="/movie" tag="li" @click.native="setType()">
                <a><i class="fa fa-film" aria-hidden="true"></i> Movie</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {navScrollOnTop, itemEvent, setType} from '../assets/js/nav'
export default {
    name: 'Navbar',
    methods: {
        itemEvent: itemEvent,
        setType: setType,
        handleScroll: function () {
            navScrollOnTop();
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    mounted () {
        setType('dark');
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
//p的字体大小
$font-size-p:16px; //过渡动画样式
@mixin link-transition($time) {
    -webkit-transition: all $time ease-out;
    -moz-transition: all $time ease-out;
    transition: all $time ease-out;
}

#navbar {
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    padding-top: 20px;
    position: fixed;
    z-index: 1000;
    overflow: hidden;
    @include link-transition(0.3s);
    ul {
        list-style: none;
        padding-right: 25px;
        float: right;
        li {
            display: inline-block;
            a {
                color: #ccc;
                @include link-transition(0.2s);
            }
            &.router-link-active a,
            a:hover {
                @include link-transition(0.2s);
                color: #fff;
            }
            &.nav-talk-button {
                border-radius: 30px;
                background-color: #0b00dc;
                box-shadow: #222 -1px 1px 7px 0px;
                @include link-transition(0.2s);
                a {
                    color: #fff;
                }
                &:hover {
                    background-color: #0900b3;
                    box-shadow: #222 -1px 1px 10px 0px;
                    @include link-transition(0.2s);
                }
            }
        }
        #collection_nav a {
            cursor: pointer;
        }
    }
    ul.sub-navbar {
        position: relative;
        top: 15px;
        clear: both;
        padding-right: 88px;
    }
    #logo {
        float: left;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1px;
        margin-left: 25px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        a {
            color: #fff;
        }
    }
    #logo a,
    ul li a {
        line-height: 30px;
        text-decoration: none;
        display: inline-block;
        padding: 0 20px;
        text-shadow: #222 -1px 1px 3px;
    }
}
</style>
