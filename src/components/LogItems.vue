<template>
    <div id="log-item" v-cloak>
        <date-seletor></date-seletor>
        <catalog-list></catalog-list>
        <update-list></update-list>
        <day-list></day-list>
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
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/log.scss';
</style>
