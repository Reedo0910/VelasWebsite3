<template>
    <a class="fa fa-angle-up fa-2x gototop-btn" @click="gototop" :class="{ 'no-top': !isOnTop }"></a>
</template>

<script>
    export default {
        name: 'Gototop',
        data() {
            return {
                isOnTop: true
            }
        },
        methods: {
            gototop() {
                const dd = document.documentElement;
                const db = document.body;
                let top = dd.scrollTop || db.scrollTop;
                const step = Math.floor(top / 15);
                (function fn() {
                    top -= step;
                    if (top > -step) {
                        dd.scrollTop === 0 ? db.scrollTop = top : dd.scrollTop = top;
                        setTimeout(fn, 10);
                    }
                })();
            },
            handleScroll() {
                let top = document.documentElement.scrollTop || document.body.scrollTop;
                this.isOnTop = top <= 200;
            }
        },
        created() {
            this.handleScroll();
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss" scoped>
    .gototop-btn {
      display: block;
      position: fixed;
      z-index: 800;
      padding: 5px;
      bottom: 65px;
      right: 30px;
      width: 32px;
      border: 1px solid #8e8e8e;
      border-radius: 3px;
      background-color: transparent;
      text-decoration: none;
      color: #8e8e8e;
      opacity: 0;
      transition: all 0.2s ease;
      outline: none;
      cursor: pointer;
      &.no-top {
        opacity: 1;
        transition: all 0.2s ease;
        &:hover {
          background-color: #8e8e8e;
          color: #fff;
          transition: all 0.2s ease;
        }
      }
    }

    @media screen and (max-width: 600px) {
      .gototop-btn {
        width: 28px;
        line-height: 28px;
      }
    }
</style>

