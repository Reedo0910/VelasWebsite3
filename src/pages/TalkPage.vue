<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <div class="top-space-holeder"></div>
            <header>
                <div class="content-mask"></div>
                <h1>每日碎碎念</h1>
                <p>春は夜桜 夏には星 秋に満月 冬には雪。</p>
            </header>
            <main>
                <talk-main></talk-main>
                <div class="notice">
                    <p>
                        <strong>这……这是……Velas Talk?</strong>
                    </p>
                    <p>没错，现在你可以在Velas查看我所有的博客文章啦！当然，你也可以<a href="https://reedo0910.github.io/" target="_blank">回到Velas Talk <i class="fa fa-angle-right" aria-hidden="true"></i></a>来获得完整的博客浏览体验
                    </p>
                </div>
            </main>
        </div>
    </transition>
</template>

<script>
    import TalkMain from '../components/Talk/TalkMain'
    export default {
        name: 'Talk',
        components: {
            TalkMain
        }
    }
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

    header {
      height: 440px;
      background: #777
        url(http://o7a3i0m1t.bkt.clouddn.com/image/website/nikhil-kumar-231465.jpg)
        no-repeat;
      background-size: cover;
      background-position: center center;
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
        background-color: rgba(59, 59, 59, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
    }

    main {
      position: relative;
      width: 100%;
      margin: 0 auto;
      .blank {
        height: 120px;
      }
      .notice {
        margin: 0px auto;
        padding: 5px 80px;
        width: 100%;
        box-sizing: border-box;
        opacity: 0.8;
        background-color: #fafafa;
        text-align: center;
        & + & {
          margin-top: 30px;
        }
        p {
          display: inline-block;
        }
        a {
          text-decoration: none;
          color: #444;
          margin: 0 5px;
          &:hover {
            border-bottom: 1px solid #444;
          }
        }
        i {
          color: #444;
        }
        &.thanks p {
          font-size: 0.8em;
          color: #673ab7;
        }
      }
    }

    @media screen and (max-width: 900px) {
      main {
        .notice {
          p {
            display: block;
          }
        }
      }
    }

    @media screen and (max-width: 500px) {
      header {
        width: 100%;
      }
      main {
        .notice {
          padding: 5px 40px;
        }
      }
    }
</style>
