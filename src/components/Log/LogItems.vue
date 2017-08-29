<template>
    <div id="log-item" v-cloak>
        <date-seletor v-if="isCompact"></date-seletor>
        <catalog-list v-if="!isCompact"></catalog-list>
        <update-list></update-list>
        <day-list v-if="!isCompact"></day-list>
    </div>
</template>

<script>
import DateSeletor from './LogDateSelector'
import CatalogList from './LogCatalogList'
import DayList from './LogDayList'
import UpdateList from './LogUpdateList'
export default {
    name: 'LogItem',
    components: {
        DateSeletor,
        CatalogList,
        DayList,
        UpdateList
    },
    data() {
        return {
            isCompact: false
        }
    },
    methods: {
        displayCheck() {
            const MaxWidth = 900; // 移动设备最大宽度
            let winWidth = 0;
            if (document.documentElement && document.documentElement.clientWidth) {
                winWidth = document.documentElement.clientWidth;
            }
            this.isCompact = winWidth <= MaxWidth;
        }
    },
    created() {
        this.displayCheck();
        window.addEventListener('resize', this.displayCheck);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.displayCheck);
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/log.scss';
</style>
