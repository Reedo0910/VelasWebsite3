<template>
    <div class="day-list" id="day-list" v-cloak>
        <ul class="sub-nav">
            <transition name="fade" mode="out-in">
                <div v-for="yItem in logs" v-if="thisYear===yItem.year" :key="yItem">
                    <transition name="fade" mode="out-in">
                        <div v-for="mItem in yItem.monthLists" v-if="thisMonth===mItem.month" :key="mItem">
                            <li :class="{'active':activeIndex===index}" v-for="(dItem,index) in mItem.dayLists" :key="(dItem,index)">
                                <a @click="goAnchor('#anchor-'+index),setDItemActive(index)">{{mItem.month}}月{{dItem.day}}日</a>
                            </li>
                        </div>
                    </transition>
                </div>
            </transition>
        </ul>
    </div>
</template>

<script>
import logJson from '../assets/js/log.json'
import bus from '../assets/js/eventBus'
import {autoFixed, scrollAnimate, autoNavigation} from '../assets/js/log'

export default {
    name: 'LogList',
    data() {
        return {
            logs: logJson,
            activeIndex: -1,
            thisYear: 0,
            thisMonth: 0
        }
    },
    methods: {
        goAnchor: function (selector) {
            let anchor = document.querySelector(selector);
            let header = document.querySelector('header');
            scrollAnimate(anchor, anchor.offsetTop + header.offsetHeight - 50);
        },
        setDItemActive: function (index) {
            this.$nextTick(function () {
                this.activeIndex = index;
            });
        },
        handleScroll: function () {
            autoFixed('day-list', 30);
            this.activeIndex = autoNavigation();
        }
    },
    created: function () {
        let that = this;
        bus.$on('logchange', function (y, m) {
            that.thisYear = y;
            that.thisMonth = m;
            that.activeIndex = -1;
        });
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/log.scss';
</style>
