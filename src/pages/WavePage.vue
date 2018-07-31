<template>
    <transition name="switch-page" mode="out-in">
        <div class="template-content">
            <div class="top-space-holeder"></div>
            <header>
                <div class="content-mask"></div>
                <h1>电波站</h1>
                <p style="text-transform: uppercase">Hear my voice</p>
            </header>
            <main>
                <p class="notice">
                    <i class="iconfont icon-construction"></i>
                    <b>bi bi bi~ 施工中ヽ(*ﾟдﾟ)ノ</b>
                </p>
            </main>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Wave',
        data() {
            return {
            }
        }
    };
</script>

<style lang="scss" scoped>
    //过渡动画样式
    @mixin link-transition($time) {
      -webkit-transition: all $time ease-out;
      -moz-transition: all $time ease-out;
      transition: all $time ease-out;
    }

    //--Vue
    .fade-enter-active {
      transition: opacity 0.8s;
    }

    .fade-enter,
    .fade-leave {
      opacity: 0;
    }

    .light {
      background-color: #ffffff !important;
    }

    .dark {
      background-color: #000;
      color: #000;
    }

    .arrow-link {
      color: #222;
      display: inline-block;
      margin: 15px auto 0;
      text-decoration: none;
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
      span {
        font-size: 1em;
      }
      &:hover {
        border-color: #222;
      }
      i {
        padding-left: 0.25em;
      }
    }

    .template-content {
      background-color: #454545;
    }

    header {
      height: 440px;
      background: #777
        url(http://o7a3i0m1t.bkt.clouddn.com/image/website/wave/fancycrave-503527.jpg)
        no-repeat;
      background-size: cover;
      background-position: center bottom;
      width: 90%;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      h1,
      p {
        text-align: center;
        position: relative;
        z-index: 3;
      }
      p {
        color: #fff;
        letter-spacing: 2px;
        line-height: 25px;
      }
      h1 {
        margin: 0;
        padding: 150px 0 0;
        color: #fff;
        font-size: 3em;
        letter-spacing: 1px;
      }
      .content-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(46, 46, 46, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
    }

    main {
      min-height: 400px;
      p.notice {
        color: #fff;
        font-size: 1.5em;
        line-height: 400px;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;
        margin: 0;
        i {
          padding-right: 10px;
          font-size: 2em;
        }
      }
    }

    @media screen and (max-width: 600px) {
      main p.notice {
        font-size: 1em;
      }
    }

    @media screen and (max-width: 500px) {
      header {
        width: 100%;
      }
    }
</style>
