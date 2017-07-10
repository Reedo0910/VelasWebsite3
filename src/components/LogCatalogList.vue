<template>
    <div class="catalog-list" id="catalog-list" v-cloak>
        <ul class="main-nav">
            <li class="panel" :class="{'expanded':expandIndex===index,'closed':expandIndex!==index }" v-for="(yItem,index) in logs" :key="(yItem,index)">
                <a class="area" @click="expandPanel(index)">{{yItem.year}}年</a>
                <ul>
                    <li v-for="mItem in yItem.monthLists" :key="mItem">
                        <a class="catalog-list-item" @click="setMAndY(yItem.year,mItem.month)">{{yItem.year}}年{{mItem.month}}月</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import logJson from '../assets/js/log.json'
import bus from '../assets/js/eventBus'
import {autoFixed, listAction} from '../assets/js/log'

export default {
    name: 'CatalogList',
    data() {
        return {
            logs: logJson,
            expandIndex: -1
        }
    },
    methods: {
        expandPanel: function (index) {
            this.$nextTick(function () {
                let panelGroup = document.querySelectorAll('.panel');

                if (this.expandIndex === index) {
                    this.expandIndex = -1
                    for (let i = 0; i < panelGroup.length; i++) {
                        listAction(panelGroup[i].querySelector('ul'), 0);
                    }
                } else {
                    this.expandIndex = index;
                    for (let i = 0; i < panelGroup.length; i++) {
                        listAction(panelGroup[i].querySelector('ul'), 0);
                    }
                    listAction(panelGroup[index].querySelector(
                        'ul'), 'auto');
                }
            });
        },
        setMAndY: function (y, m) {
            bus.$emit('logchange', y, m);
        },
        handleScroll: function () {
            autoFixed('catalog-list', 30);
        }
    },
    mounted: function () {
        document.querySelector('.area').click();
        document.querySelector('.catalog-list-item').click();
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
