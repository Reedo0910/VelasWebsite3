<template>
    <transition name="switch-page" mode="out-in">
        <div class="template-content">
            <div class="top-space-holeder"></div>
            <header>
                <h1>作品</h1>
                <div class="flex-content">
                    <div class="search-box">
                        <input class="input-box" type="text" v-model.trim="key" :placeholder="placeholder">
                        <button class="clear-btn" @click="key=''" v-show="isClearShow"></button>
                    </div>
                    <ul class="filter-list">
                        <li class="filter-list-item" v-for="category in categories" :key="category.id" :class="{active: active === category.id}" @click="active = category.id">{{ category.name }}</li>
                    </ul>
                    <!-- <div style="height:1px; width:160px;"></div> -->
                </div>
            </header>
            <main>
                <div class="card-group" id="card_group">
                    <a target="_blank" :href="w.url" class="works-card" v-for="w in filterCards" v-if="active === 'All' || active === w.category" :key="w.name" :style="{'height': w.height + 'px', 'background-color': w.color}" :title="w.name">
                        <img class="card-screenshot" :src="w.image">
                        <!-- <p class="card-description">{{ w.category }}</p>
                            <h2 class="card-title">
                            <div class="title-text">{{ w.name }}</div>
                            <i :class="w.mobile ? isAdapt : ''" aria-hidden="true"></i>
                        </h2> -->
                    </a>
                </div>
            </main>
        </div>
    </transition>
</template>

<script>
    import Macy from 'macy';
    export default {
        name: 'Camp',
        data() {
            return {
                active: 'All',
                key: '',
                placeholder: 'Search',
                isClearShow: false,
                isAdapt: 'fa fa-mobile',
                categories: [{
                    id: 'All',
                    name: 'All'
                }, {
                    id: 'Website',
                    name: 'Website'
                }, {
                    id: 'Demo',
                    name: 'Demo'
                }, {
                    id: 'Playground',
                    name: 'Playground'
                }],
                worksCards: [{
                    name: 'Chat Room',
                    description: '一个基于React和Meteor的聊天室。',
                    image: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/camp/chat.png',
                    url: 'http://chat.velascamp.cn',
                    category: 'Demo',
                    mobile: true,
                    height: 400,
                    color: '#999f95'
                }, {
                    name: 'Velas',
                    description: '个人网站。',
                    image: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/camp/velas.png',
                    url: 'http://www.velas.xyz',
                    category: 'Website',
                    mobile: true,
                    height: 310,
                    color: '#ebebf0'
                }, {
                    name: 'Velas Talk',
                    description: '我的个人博客。',
                    image: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/camp/velas_talk.png',
                    url: 'https://reedo0910.github.io/',
                    category: 'Website',
                    mobile: true,
                    height: 300,
                    color: '#fff'
                }, {
                    name: 'Velas Camp',
                    description: '个人Web作品集合。',
                    image: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/camp/velas_camp.png',
                    url: 'https://www.velascamp.cn/',
                    category: 'Website',
                    mobile: true,
                    height: 340,
                    color: '#f1f1f1'
                }, {
                    name: 'Aurora',
                    description: '一个基于HTML5的频谱音乐播放器。',
                    image: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/camp/aurora.png',
                    url: 'http://aurora.velascamp.cn',
                    category: 'Demo',
                    mobile: false,
                    height: 420,
                    color: '#ab858b'
                }, {
                    name: 'Vue Login',
                    description: '使用Vue实现的用户个人信息输入卡片。',
                    image: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/camp/vue_login.png',
                    url: 'http://www.velascamp.cn/playground/vuelogin/index.html',
                    category: 'Playground',
                    mobile: true,
                    height: 340,
                    color: '#f1f1f1'
                }, {
                    name: '进程调度',
                    description: '一个操作系统进程调度模型。',
                    image: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/camp/process_schedule.png',
                    url: 'http://www.velascamp.cn/demo/1/index.html',
                    category: 'Demo',
                    mobile: true,
                    height: 400,
                    color: '#fff'
                }, {
                    name: 'Save Whales',
                    description: '致力于鲸鱼保护和宣传的网站。',
                    image: 'http://o7a3i0m1t.bkt.clouddn.com/image/website/camp/save_whales.png',
                    url: 'http://savewhales.velascamp.cn/',
                    category: 'Website',
                    mobile: true,
                    height: 330,
                    color: '#7cb0cc'
                }]
            }
        },
        computed: {
            filterCards: function () {
                var key = this.key;
                var that = this;
                var worksCards = this.worksCards;
                return worksCards.filter(function (workscard) {
                    return workscard.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
                });
            }
        },
        watch: {
            key: function () {
                this.key !== '' ? this.isClearShow = true : this.isClearShow = false;
            }
        },
        methods: {
            categoryCount: function (c) {
                var cards = this.filterCards;
                var count = 0;
                for (let i = 0; i < cards.length; i++) {
                    cards[i].category === c ? count++ : '';
                }
                return count;
            },
            initMacy: function () {
                const masonry = new Macy({
                    container: '#card_group',
                    trueOrder: false,
                    waitForImages: false,
                    useOwnImageLoader: false,
                    margin: {
                        x: 30,
                        y: 30
                    },
                    columns: 4,
                    breakAt: {
                        1200: {
                            columns: 4,
                            margin: {
                                x: 40,
                                y: 40
                            }
                        },
                        1000: {
                            columns: 3,
                            margin: {
                                x: 30,
                                y: 30
                            }
                        },
                        840: {
                            columns: 2,
                            margin: {
                                y: 30
                            }
                        },
                        500: {
                            columns: 1
                        }
                    }
                });
            }
        },
        mounted() {
            this.initMacy();
        },
        updated() {
            this.initMacy();
        }
    }
</script>

<style lang="scss" scoped>
    @mixin link-transition($time) {
      -webkit-transition: all $time ease-out;
      -moz-transition: all $time ease-out;
      transition: all $time ease-out;
    }

    .template-content {
      background-color: #f5f5f5;
    }

    .top-space-holeder {
      margin: 0 auto;
      padding: 80px 0 10px;
      height: 1px;
      width: 80%;
    }

    header {
      width: 80%;
      text-align: center;
      margin: 0 auto;
      h1 {
        margin: 0;
      }

      .flex-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: baseline;
      }

      .search-box {
        width: 160px;
        height: 36px;
        margin: 6px 0 10px;
        position: relative;
        @include link-transition(0.2s);
        .clear-btn {
          position: absolute;
          width: 25px;
          height: 25px;
          right: -2px;
          top: 7px;
          background-color: transparent;
          border: none;
          background-image: url("/static/images/clear.png");
          background-size: 10px;
          background-repeat: no-repeat;
          background-position: center center;
          outline: none;
          cursor: pointer;
          border-radius: 25px;
          &:hover,
          &:focus {
            background-color: rgba(211, 211, 211, 0.5);
          }
        }
        .input-box {
          width: 100%;
          height: 100%;
          position: relative;
          box-sizing: border-box;
          padding: 5px 25px 5px 35px;
          overflow: auto;
          background-color: transparent;
          outline: none;
          border: none;
          background-image: url("/static/images/search.png");
          background-repeat: no-repeat;
          background-position: 10px center;
          background-size: 16px;
          font-weight: lighter;
          opacity: 0.7;
          @include link-transition(0.2s);
          &:focus {
            opacity: 1;
          }
          &::-ms-clear {
            display: none;
          }
        }
      }

      .filter-list {
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 15px 20px;
        font-weight: lighter;
        color: #666;
        margin-bottom: 10px;
        li.filter-list-item {
          cursor: pointer;
          border-radius: 3px;
          user-select: none;
          &.active {
            background-color: #fff;
            cursor: initial;
          }
        }
        .filter-list-item {
          padding: 5px 12px;
          margin: 0 10px;
        }
      }
    }

    main {
      padding: 0px 20px 120px;
      position: relative;
      min-height: 600px;
      box-sizing: border-box;
      .card-group {
        .works-card {
          border-radius: 3px;
          width: 300px;
          background-color: #eee;
          position: relative;
          display: block;
          text-decoration: none;
          outline: none;
          @include link-transition(0.2s);
          .card-title {
            margin: 0;
            margin-top: 5px;
            .title-text {
              max-width: 180px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              display: inline-block;
              vertical-align: middle;
            }
            i {
              margin-left: 0.5em;
              display: inline-block;
              vertical-align: middle;
            }
          }
          .card-description {
            margin: 0;
            margin-top: 15px;
          }
          img {
            display: block;
            width: 70%;
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px;
            @include link-transition(0.2s);
          }
          &:hover,
          &:active {
            @include link-transition(0.2s);
            .card-title,
            .card-description,
            img {
              @include link-transition(0.2s);
            }
            .card-title .title-text {
              overflow: visible;
            }
          }
        }
      }
    }

    @media screen and (max-width: 723px) {
      header .search-box {
        width: 250px;
      }
    }

    @media screen and (max-width: 425px) {
      header .search-box {
        width: 100%;
      }
    }
</style>
