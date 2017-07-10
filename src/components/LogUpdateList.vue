<template>
    <div class="updatelog-list" id="updatelog-list" v-cloak>
        <transition name="fade" mode="out-in">
            <div v-for="yItem in logs" v-if="thisYear===yItem.year" :key="yItem">
                <transition name="fade" mode="out-in">
                    <div v-for="mItem in yItem.monthLists" v-if="thisMonth===mItem.month" :key="mItem">
                        <div :id="'anchor-'+index" class="notecard" v-for="(dItem,index) in mItem.dayLists" :key="(dItem,index)">
                            <h2>{{mItem.month}}月{{dItem.day}}日</h2>
                            <ol>
                                <li v-for="item in dItem.logList" :class="{'singleList':dItem.logList.length==1}" :key="item">{{item}}</li>
                            </ol>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
        <div class="postscript">
            <div class="hr"></div>
            <p>Zeee将把自己的奇思妙想和新学到的前端知识投入到Velas中。
                <br> 每一天，在你看到或者看不到的地方，Velas都变得比昨天更成熟一些，更精致一些。
                <br> 感谢你的到来，与Zeee一同将Velas变得更美好。
                <br>
                <br> *想获得本站的最佳体验，请在
                <span>Firefox</span>、
                <span>Chrome</span>、
                <span>Microsoft Edge</span>上浏览，或将你的浏览器升级至最新版本。
            </p>
            <div class="blank"></div>
        </div>
    </div>
</template>

<script>
import logJson from '../assets/js/log.json'
import bus from '../assets/js/eventBus'

export default {
    name: 'UpdateList',
    data() {
        return {
            logs: logJson,
            thisYear: 0,
            thisMonth: 0
        }
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
