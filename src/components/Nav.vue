<template>
    <div id="navbar" :class="{ontop: isOnTop}">
        <div id="logo">
            <router-link to="/">Velas</router-link>
        </div>
        <div class="nav-sub">
            <a v-for="(slink, index) in sublinks" :key="slink.name" :href="slink.href" target="_blank" @mouseover="hoverSubIndex = index">
                <i :class="['fa', slink.iconClass]" aria-hidden="true"></i><p>{{slink.name}}</p>
            </a>
        </div>
        <div class="nav-main">
            <router-link v-for="(link, index) in links" :key="link.name" :to="link.route" :exact="link.isExact"><i :class="[link.iconClass, 'fa']" aria-hidden="true"></i>{{link.name}}</router-link>
        </div>
        <span class="tab-indicator"></span>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
            isOnTop: true,
            hoverSubIndex: -1,
            links: [
                {
                    route: '/',
                    isExact: true,
                    iconClass: 'fa-bandcamp',
                    name: 'Home'
                },
                {
                    route: '/music',
                    isExact: false,
                    iconClass: 'fa-eercast',
                    name: 'Collection'
                },
                {
                    route: '/log',
                    isExact: false,
                    iconClass: 'fa-tasks',
                    name: 'Log'
                }
            ],
            sublinks: [
                 {
                    href: 'http://www.velascamp.cn/',
                    iconClass: 'fa-free-code-camp',
                    name: 'Camp'
                },
                {
                    href: 'http://blog.velas.xyz/',
                    iconClass: 'fa-twitch',
                    name: 'Talk'
                }
            ]
        }
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop || document.body.scrollTop;
            this.isOnTop = top <= 50;
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
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
    width: 100%;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.99);
    z-index: 1000;
    overflow: hidden;
    @include link-transition(0.3s);
    .tab-indicator {
        height: 2px;
        width: 100px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #2196f3;
    }    
    &.ontop {
        padding-top: 8px;
        background-color: transparent;
        .nav-main a,
        .nav-sub a {
            color: #fff;
            &:hover,
            &.router-link-active,
            &:hover p {
                color: lightcoral;
            }
        }
        .nav-sub {
            background-color: transparent;
        }
        #logo a {
            color: #fff;
        }
        .tab-indicator {
            background-color: #fff;
        }
    }
    .nav-main,
    .nav-sub {
        list-style: none;
        float: right;
        a {
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
        background-color: rgba(159, 168, 218, 0.9);
        a {
            color: #fff;
            width: 70px;
            p {
                display: none;
                color: #fff;
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
        font-size: 20px;
        font-weight: 700;
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
