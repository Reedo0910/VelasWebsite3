<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <v-title>Velas - 收藏</v-title>
            <collection-sub-nav></collection-sub-nav>
            <header>
                <div class="content-mask"></div>
                <h1>Collection</h1>
                <p>绝对的真心推荐</p>
            </header>
            <main>
                <section class="memorabilia co">
                    <h2>近期大事记</h2>
                    <div class="hr"></div>
                    <h3>Memorabilia</h3>
                    <div class="m-content">
                        <div class="m-cover" :style="{'background-image':'url('+ mCover +')'}"></div>
                        <ul class="mcard-list">
                            <li v-for="(m, index) in mCards" :key="m.title" :class="{top: index===0}">
                                <h5 class="date">{{m.date}}</h5>
                                <h4 class="title">{{m.title}}</h4>
                                <p>{{m.description}}</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="music-intro-section intro co">
                    <div class="content">
                        <h2>音乐</h2>
                        <div class="hr"></div>
                        <h3>Music</h3>
                        <p>愿它们能在你欣喜时为你欢呼，在你悲伤时给你安慰；</p>
                        <p>在辗转的夜晚送你步入梦乡，当你孤立无援时常伴你左右。</p>
                        <router-link class="arrow-link" to="collection/music">
                            <span>查看详情</span>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </router-link>
                    </div>
                    <div class="background" style="background-image:url(http://o7a3i0m1t.bkt.clouddn.com/image/website/collection/Music.jpg)"></div>
                </section>
                <section class="music-collection collection">

                </section>
                <div class="blank"></div>
            </main>
            <footer-block></footer-block>
        </div>
    </transition>
</template>

<script>
    import VTitle from '../components/VTitle';
    import FooterBlock from '../components/Footer';
    import CollectionSubNav from '../components/SubNav/CollectionSubNav';
    export default {
        name: 'Collection',
        components: {
            VTitle,
            FooterBlock,
            CollectionSubNav
        },
        data() {
            return {
                mCover: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/collection/COVER.jpg',
                mCards: [{
                    title: 'behind - やなぎなぎ',
                    date: '11月22日',
                    description: '『Just Because!』片尾曲发售',
                    color: '#a8477c'
                },
                {
                    title: '精灵宝可梦：究极日月',
                    date: '11月17日',
                    description: '精灵宝可梦的集大成之作',
                    color: '#49296c'
                },
                {
                    title: '超级马里奥：奥德赛',
                    date: '10月27日',
                    description: '足以载入游戏史册的惊喜',
                    color: '#ee1528'
                }]
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

    .arrow-link {
      color: #222;
      display: inline-block;
      margin: 5px auto 0;
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

    header {
      height: 440px;
      background: #777
        url(http://o7a3i0m1t.bkt.clouddn.com/image/website/abstraction.jpg)
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
        background-color: rgba(36, 36, 36, 0.38);
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
      .hr {
        display: inline-block;
        width: 20px;
        height: 3px;
        background-color: #000000;
      }
      .co {
        width: 90%;
        margin: 0 auto;
        h2,
        h3 {
          margin: 0;
        }
        h2 {
          font-size: 2em;
          margin: 40px 0 10px;
        }
        h3 {
          margin: 10px 0 40px;
        }
        p {
          font-size: 0.9em;
        }
      }
      .memorabilia {
        text-align: center;
        .m-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 auto 100px;
        }
        .m-cover {
          flex-grow: 1;
          width: 330px;
          height: 330px;
          flex-basis: 330px;
          background-position: top center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .mcard-list {
          flex-grow: 1;
          padding: 0;
          margin: 0;
          width: 330px;
          flex-basis: 330px;
          box-sizing: border-box;
          li {
            * {
              margin: 0;
            }
            padding: 12px 10px 12px 40px;
            list-style: none;
            text-align: left;
            box-sizing: border-box;
            p {
              font-size: 0.9em;
            }
            .title {
              margin: 5px 0;
            }
            &.top {
              color: #ffffff;
              background-color: #a8477c;
              margin-bottom: 15px;
              .title {
                font-size: 1.5em;
              }
              .date {
                font-size: 1.2em;
              }
            }
          }
        }
      }
      .intro {
        height: 600px;
        display: flex;
        .content {
          display: inline-block;
          text-align: center;
          width: 50%;
          height: 100%;
          background-color: #eee;
          padding: 120px 50px;
          box-sizing: border-box;
        }
        .background {
          width: 50%;
          height: 100%;
          display: inline-block;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }

    @media screen and (min-width: 800px) {
      main .memorabilia {
        width: 660px;
      }
    }

    @media screen and (max-width: 500px) {
      header,
      main .co {
        width: 100%;
      }
    }
</style>
