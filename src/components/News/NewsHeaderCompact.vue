<template>
    <header class="header">
        <div class="content-mask"></div>
        <router-link tag="h2" to="/news">Velas' News</router-link>
        <h1>{{newsTitle}}</h1>
        <p>{{newsDate}}</p>
    </header>
</template>

<script>
export default {
    name: 'NewsHeaderCompact',
    props: ['newsTitle', 'newsDate']
}
</script>

<style lang="scss" scoped>
header {
    height: 300px;
    background: #777 url(http://o7a3i0m1t.bkt.clouddn.com/image/website/raspberry.jpg) no-repeat;
    background-size: cover;
    background-position: center center;
    width: 90%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding-top: 95px;
    box-sizing: border-box;
    h1,
    h2,
    p {
        text-align: center;
        position: relative;
        z-index: 3;
        color: #fff;
    }
    p {
        letter-spacing: 2px;
        line-height: 25px;
        margin: 5px 0;
    }
    h1 {
        margin: 0;
        font-size: 3em;
        letter-spacing: 1px;
    }
    h2 {
        margin: 0 auto;
        width: 100%;
        font-weight: 500;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    .content-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(86, 86, 86, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
}
</style>
