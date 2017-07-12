<template>
    <div class="day-list" id="day-list" v-cloak>
        <ul class="sub-nav">
            <transition name="fade">
                <div v-for="yItem in TotalFilter" v-if="thisYear===yItem.Year" :key="yItem.Year">
                    <transition name="fade">
                        <div v-for="mItem in yItem.Months" v-if="thisMonth===mItem.Month" :key="mItem.Month">
                            <li :class="{'active':activeIndex===index}" v-for="(dItem,index) in mItem.Days" :key="dItem.Day">
                                <a @click="goAnchor('#anchor-'+index),setDItemActive(index)">{{mItem.Month}}月{{dItem.Day}}日</a>
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
import {autoFixed, scrollAnimate, autoNavigation, TotalFilter} from '../assets/js/log'

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
    computed: {
        TotalFilter: TotalFilter
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
