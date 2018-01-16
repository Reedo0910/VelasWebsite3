<template>
    <transition name="switch-page" mode="out-in">
        <div>
            <v-title>Velas - 收藏</v-title>
            <collection-sub-nav></collection-sub-nav>
            <header>
                <div class="content-mask"></div>
                <h1>Collection</h1>
                <p>珍藏每一样美好的东西</p>
            </header>
            <main>
                <section class="memorabilia co">
                    <h2>近期大事记</h2>
                    <div class="hr"></div>
                    <h3>Memorabilia</h3>
                    <div class="m-content">
                        <div class="m-cover" :style="{'background-image':'url('+ mCover +')'}"></div>
                        <ul class="mcard-list">
                            <li v-for="(m, index) in mCards" :key="m.title" :class="{top: index===0}" :style="getMColor(index)" v-if="index < 4">
                                <h5 class="date">{{m.date}}</h5>
                                <h4 class="title">{{m.title}}</h4>
                                <p>{{m.description}}</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="music-intro-section intro co">
                    <div class="content">
                        <h2>以乐为伴</h2>
                        <div class="hr"></div>
                        <h3>Music</h3>
                        <p>愿它们能在你欣喜时为你欢呼，在你悲伤时给你安慰；</p>
                        <p>在辗转的夜晚送你步入梦乡，当你孤立无援时常伴你左右。</p>
                        <router-link class="arrow-link" to="collection/music">
                            <span>查看详情</span>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </router-link>
                    </div>
                    <div class="background" style="background-image:url(http://o7a3i0m1t.bkt.clouddn.com/image/website/collection/Music.jpg);opacity:.75"></div>
                </section>
                <section class="music-collection collection co">
                    <div class="header" style="background-image:url(http://o7a3i0m1t.bkt.clouddn.com/image/website/collection/Music2.jpg)">
                        <div class="mask"></div>
                        <div class="content">
                            <h2>专辑推荐</h2>
                            <div class="hr light"></div>
                            <h3>Music</h3>
                            <p>不知道要听什么？相信这些不会让你失望。</p>
                        </div>
                    </div>
                    <ul class="shelf">
                        <li v-for="a in albums" :key="a.title" :style="{'color': a.color}">
                            <img :src="a.cover" :alt="a.title" width="300" height="300">
                            <div class="namespace">
                                <h4>{{a.title}}</h4>
                                <h5>{{a.artist}}</h5>
                            </div>
                            <p>—— {{a.des}}</p>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    </transition>
</template>

<script>
    import VTitle from '../components/VTitle';
    import CollectionSubNav from '../components/SubNav/CollectionSubNav';
    export default {
        name: 'Collection',
        components: {
            VTitle,
            CollectionSubNav
        },
        data() {
            return {
                mCover: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/collection/cover18-1-15.jpg',
                mColor: '#A8A3A7',
                mCards: [{
                    title: 'ALTER EGO - EGOIST',
                    date: '12月22日',
                    description: 'EGOIST出道五年以来的第一张精选辑'
                },
                {
                    title: 'behind - やなぎなぎ',
                    date: '11月22日',
                    description: '『Just Because!』片尾曲发售'
                },
                {
                    title: '精灵宝可梦：究极日月',
                    date: '11月17日',
                    description: '精灵宝可梦的集大成之作'
                },
                {
                    title: 'reputation - Taylor Swift',
                    date: '11月10日',
                    description: 'Taylor时隔三年的第六张录音室专辑'
                },
                {
                    title: '超级马里奥：奥德赛',
                    date: '10月27日',
                    description: '足以载入游戏史册的惊喜'
                }],
                albums: [{
                    cover: 'https://img1.doubanio.com/lpic/s6993419.jpg',
                    title: 'Singles Club',
                    artist: 'Paramore',
                    des: 'Paramore分崩离析之后的重新出发',
                    color: '#000'
                },
                {
                    cover: 'https://img3.doubanio.com/lpic/s22698150.jpg',
                    title: 'The Piano Guys',
                    artist: 'The Piano Guys',
                    des: '钢琴与大提琴的奇妙化学反应',
                    color: 'rgb(118, 68, 49)'
                },
                {
                    cover: 'https://img3.doubanio.com/lpic/s29041235.jpg',
                    title: 'Merry Christmas Mr. Lawrence',
                    artist: '坂本龙一',
                    des: '情不知所起，一往而深',
                    color: '#07374B'
                },
                {
                    cover: 'https://img3.doubanio.com/lpic/s4045630.jpg',
                    title: 'Once (Soundtrack)',
                    artist: 'Glen Hansard / Marketa Irglova',
                    des: 'Just a once, let it be.',
                    color: '#573C29'
                }]
            }
        },
        methods: {
            getMColor(index) {
                let vm = this;
                if (index === 0) {
                    return {
                        backgroundColor: vm.mColor
                    }
                } else {
                    return {
                        backgroundColor: '#fff'
                    }
                }
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
          margin: 10px 0 33px;
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
              margin: 10px auto;
            }
            .title {
              margin: 5px 0;
            }
            &.top {
              color: #ffffff;
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
        height: 500px;
        display: flex;
        .content {
          display: inline-block;
          text-align: center;
          width: 50%;
          height: 100%;
          background-color: #f2f2f2;
          padding: 80px 50px;
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
      .collection {
        position: relative;
        .header {
          height: 530px;
          width: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.55);
            z-index: 1;
          }
          .content {
            color: #ffffff;
            text-align: center;
            position: relative;
            z-index: 2;
            padding-top: 20px;
          }
        }
        .shelf {
          width: 85%;
          padding: 40px 20px;
          box-sizing: border-box;
          box-shadow: rgba(36, 36, 36, 0.38) 0 0 10px;
          margin: 0 auto;
          position: relative;
          top: -250px;
          z-index: 10;
          background-color: #f9f9f9;
          min-height: 500px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          li {
            list-style: none;
            width: 300px;
            margin: 30px 50px;
            * {
              margin: 0;
            }
            img {
              display: block;
            }
            .namespace {
              display: flex;
              justify-content: space-between;
              padding: 10px 0;
              align-items: flex-start;
              h4,
              h5 {
                width: 50%;
              }
              h4 {
                font-size: 1.3em;
                text-align: left;
                width: 200px;
              }
              h5 {
                font-size: .8em;
                text-align: right;
                width: 100px;
              }
            }
            p {
              font-size: 0.8em;
              letter-spacing: 0;
              opacity: .8;
            }
          }
        }
      }
    }
    @media screen and (min-width: 1040px) {
      main .co {
        width: 1020px;
      }
    }

    @media screen and (max-width: 1040px) {
      main .intro {
        height: 800px;
        flex-wrap: wrap;
        .background,
        .content {
          width: 100%;
          height: 50%;
        }
        .content {
          order: 2;
          padding-top: 30px;
        }
      }
    }

    @media screen and (min-width: 750px) {
      main .memorabilia {
        width: 660px;
      }
    }

    @media screen and (max-width: 500px) {
      header,
      main .co {
        width: 100%;
      }
      main .collection .shelf {
          width: 95%;
      }
    }
</style>
