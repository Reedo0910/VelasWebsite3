<template>
    <div id="newsSubNav">
        <router-link v-for="(link, index) in links" :key="link.name" :to="link.route" :exact="link.isExact">
            {{link.name}}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NewsSubNav',
    data() {
        return {
            links: [
                {
                    route: '/news',
                    isExact: true,
                    name: '新鲜事'
                },
                {
                    route: '/news/time-capsule',
                    isExact: false,
                    name: '时间胶囊'
                },
                {
                    route: '/news/log',
                    isExact: false,
                    name: '更新日志'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#newsSubNav {
    text-align: right;
    padding: 90px 0 10px;
    width: 90%;
    margin: 0 auto;
    box-sizing: border-box;
    a {
        text-decoration: none;
        display: inline-block;
        padding: 0 20px;
        color: #666;
        transition: all .2s ease;
        &.router-link-active,
        &:hover {
            color: rgba(94, 53, 177, 0.5);
        }
    }
    a+a {
        border-left: 1.5px #666 solid;
    }
}

@media screen and (max-width: 500px) {
    #newsSubNav {
        text-align: center;
    }
}
</style>
