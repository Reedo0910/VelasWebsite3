<template>
    <div id="newsSubNav">
        <router-link v-for="link in links" :key="link.name" :to="link.route" :exact="link.isExact">
            {{link.name}}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'TalkSubNav',
    data() {
        return {
            links: [
                {
                    route: '/talk',
                    isExact: true,
                    name: '全部文章'
                },
                {
                    route: '/talk/categories',
                    isExact: false,
                    name: '分类查看'
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
