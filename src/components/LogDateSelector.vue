<template>
    <div id="date-selector" v-cloak>
        <select v-model="selected" @change="setMAndY()">
            <option v-for="item in DateFilter" :key="item.Date" :value="item.Date">{{item.Year}}年 {{item.Month}}月</option>
        </select>
    </div>
</template>

<script>
import logJson from '../assets/js/log.json'
import bus from '../assets/js/eventBus'
import {DateFilter} from '../assets/js/log'

export default {
    name: 'DateSelector',
    data() {
        return {
            logs: logJson,
            selected: ''
        }
    },
    computed: {
        DateFilter: DateFilter
    },
    mounted() {
        this.selected = this.DateFilter[0].Date;
        let that = this;
        bus.$on('logchange', function (y, m) {
            that.selected = y + '-' + m;
        });
    },
    methods: {
        setMAndY: function () {
            let y = parseInt(this.selected.split('-')[0]);
            let m = parseInt(this.selected.split('-')[1]);
            bus.$emit('logchange', y, m);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/log.scss';
</style>
