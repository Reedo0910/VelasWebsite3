<template>
    <div class="updatelog-list" id="updatelog-list" v-cloak>
        <transition name="fade">
            <div v-for="yItem in TotalFilter" v-if="thisYear===yItem.Year" :key="yItem.Year">
                <transition name="fade">
                    <div v-for="mItem in yItem.Months" v-if="thisMonth===mItem.Month" :key="mItem.Month">
                        <div :id="'anchor-'+index" class="notecard" v-for="(dItem,index) in mItem.Days" :key="dItem.Day">
                            <h2>{{mItem.Month}}月{{dItem.Day}}日</h2>
                            <ol>
                                <li v-for="item in dItem.Content" :class="{'singleList':dItem.Content.length==1}" :key="item">{{item}}</li>
                            </ol>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
import logJson from '../assets/js/log.json'
import bus from '../assets/js/eventBus'
import {TotalFilter} from '../assets/js/log'

export default {
    name: 'UpdateList',
    data() {
        return {
            logs: logJson,
            thisYear: 0,
            thisMonth: 0
        }
    },
    computed: {
        TotalFilter: TotalFilter
    },
    created: function () {
        var that = this;
        bus.$on('logchange', function (y, m) {
            that.thisYear = y;
            that.thisMonth = m;
        });
    },
    updated: function () {
        this.$nextTick(function () {
            let header = document.querySelector('header');
            let view = document.documentElement.scrollTop || document.body.scrollTop;
            if (view > header.offsetHeight - 50) {
                window.scrollTo(0, header.offsetHeight - 50);
            }
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/log.scss';
</style>
