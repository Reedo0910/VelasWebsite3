<template>
    <transition name="fade">
        <div class="mask" v-if="isShow || isError">
            <div class="loading" v-show="isShow">
                <div class="loading-icon">
                    <div class="icon-inner"></div>
                </div>
            </div>
            <div class="error-msg" v-show="isError">
                <div class="icon"><img src="http://o7a3i0m1t.bkt.clouddn.com/image/website/github_error.png" alt="Network Error" width="48" height="48"></div>
                <h3>Och! 出错啦</h3>
                <p>Velas 无法获取到数据</p>
                <p>请稍后再试</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'LoadingIcon',
    props: ['isShow', 'isError']
}
</script>

<style lang="scss" scoped>
@import url('../assets/css/loading-icon.css');

.fade-enter-active {
    transition: opacity .5s ease;
}

.fade-leave-active {
    transition: opacity 0s ease;
}

.fade-enter,
.fade-leave {
    opacity: 0;
}

.mask {
    width: 100%;
    height: 200px;
    position: relative;
    z-index: 100;
}

.loading,
.error-msg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.loading {
    transform: scale(0.5);
}

.error-msg {
    width: 200px;
    height: 125px;
    text-align: center;
    .icon {
        opacity: .8;
    }
    h3,
    p {
        text-shadow: #eee 1px 0 1px;
    }
    h3 {
        margin: 0;
        color: darkred;
    }
    p {
        color: #888888;
        font-size: .8em;
        margin: 5px 0 0;
    }
}
</style>


