<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <router-view></router-view>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'SubIndex'
}
</script>

<style lang="scss" scoped>
</style>
