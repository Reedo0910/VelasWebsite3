<template>
    <transition name="switch-page" mode="out-in">
        <div class="template-content">
            <div class="top-space-holeder"></div>
            <header>
                <h1>留言</h1>
                <p>有什么东西要告诉我呢？</p>
            </header>
            <main>
                <div class="view-area">
                    <ul class="comment-list">
                        <li class="comment-item bg-white area-block" v-for="(c, index) in comments" :key="index">
                            <p class="index">#{{ index + 1 }}</p>
                            <ul class="item-info-list">
                                <li class="author item-info">昵称：{{ c.author }}</li>
                                <li class="date item-info">时间：{{ fullTimeFormatter( c.date ) }}</li>
                            </ul>
                            <p class="content">{{ c.content }}</p>
                            <div class="hr2" v-if="c.reply"></div>
                            <p class="reply" v-if="c.reply">据说是站长的回复：{{ c.reply }}</p>
                        </li>
                    </ul>
                </div>
                <div class="hr"></div>
                <h2>写留言</h2>
                <div class="comment-area bg-white area-block">
                    <form class="comment-form">
                        <div class="form-group">
                            <div class="info">
                                <div class="input-group">
                                    <label class="label" for="author">昵称</label>
                                    <input id="author" name="author" type="text" class="input" required placeholder="你的大名">
                                </div>
                                <div class="input-group">
                                    <label class="label" for="email">邮箱地址
                                        <sup>*注1</sup>
                                    </label>
                                    <input id="email" name="email" type="email" class="input" required placeholder="你的个人邮箱">
                                </div>
                                <div class="input-group">
                                    <input type="checkbox" name="save" id="saveinfo" checked>
                                    <label for="saveinfo">保存我的个人信息
                                        <sup>*注2</sup>
                                    </label>
                                </div>
                            </div>
                            <div class="text">
                                <div class="input-group">
                                    <label class="label" for="comment">留言
                                        <sup>*注3</sup>
                                    </label>
                                    <textarea id="comment" name="content" type="text" class="input textarea" placeholder="告诉我你的想法" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="submit-area">
                            <button type="submit" id="submit" class="submit-btn no-btn">
                                <i class="iconfont icon-ooedit2"></i>留下我的脚印..</button>
                        </div>
                    </form>
                    <div class="hr"></div>
                    <p class="info-text">*注1：网站需要您提供邮箱地址来保护您的留言身份不被他人冒充，且保证不会将您的邮箱地址透露给任何人。</p>
                    <p class="info-text">*注2：勾选后，网站将把你的留言身份保存到浏览器本地，方便下次留言</p>
                    <p class="info-text">*注3：留言将经审核通过后显示，请文明友善言论</p>
                </div>
                <div class="hr"></div>
            </main>
        </div>
    </transition>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'Guestbook',
        data() {
            return {
                comments: [
                    {
                        author: 'Zeee',
                        date: '2018-07-12T08:11:45.740Z',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        reply: '你好'
                    },
                    {
                        author: 'Zeee',
                        date: '2018-07-12T08:11:45.740Z',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    },
                    {
                        author: 'Zeee',
                        date: '2018-07-12T08:11:45.740Z',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    }
                ]
            }
        },
        methods: {
            fullTimeFormatter: function (time) {
                return moment(time).format('lll');
            }
        },
        created() {
            moment.locale('zh-cn');
        }
    }
</script>

<style lang="scss" scoped>
    @mixin link-transition($time) {
      -webkit-transition: all $time ease-out;
      -moz-transition: all $time ease-out;
      transition: all $time ease-out;
    }

    ul {
      padding: 0;
    }

    li {
      list-style: none;
    }

    h2 {
      margin-top: 0;
      text-align: center;
    }

    .hr {
      width: 100%;
      height: 30px;
    }

    .hr2 {
      width: 100%;
      height: 1px;
      background-color: #eee;
      margin: 0.5em auto;
    }

    .template-content {
      background-color: #f5f5f5;
    }

    .bg-white {
      background-color: #fff;
    }

    .d-flex {
      display: flex;
    }

    .top-space-holeder {
      margin: 0 auto;
      padding: 80px 0 10px;
      height: 1px;
      width: 80%;
    }

    .no-btn {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    header {
      width: 80%;
      text-align: center;
      margin: 0 auto;
    }

    .input-area {
      text-align: center;
    }

    .info-text {
      color: #888888;
      font-size: 0.8em;
      margin: 0;
      margin-bottom: 0.5em;
    }

    main {
      width: 80%;
      margin: 0 auto;
    }

    .area-block {
      padding: 20px 40px;
      margin: 0 auto;
      position: relative;
      width: 100%;
      box-sizing: border-box;
    }

    .comment-area {
      padding: 40px;
    }

    .comment-item {
      margin: 10px auto;
      p {
        margin: 0;
        font-size: 0.9em;
      }
      .index {
        margin-bottom: 0.5em;
      }
      .reply {
        color: #888;
      }
      .item-info-list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0.5em;
        .item-info {
          font-size: 0.9em;
          color: #888;
          margin-right: 2.5em;
        }
      }
    }

    .form-group {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .info,
      .text {
        box-sizing: border-box;
      }

      .info {
        width: 200px;
      }

      .text {
        width: 600px;
      }

      .input {
        position: relative;
        width: 100%;
        padding: 5px 3px;
        outline: none;
        margin: 10px 0;
        border: 1px solid #ddd;
        vertical-align: middle;
        border-radius: 3px;
        @include link-transition(0.2s);
        &:focus {
          border-color: #444;
          @include link-transition(0.2s);
        }
      }

      .textarea {
        min-width: 100%;
        max-width: 100%;
        min-height: 168px;
      }
    }

    .submit-area {
      padding-top: 10px;
      text-align: center;
      .submit-btn {
        color: #fff;
        background-color: rgb(36, 86, 196);
        border-radius: 3px;
        padding: 8px 15px;
        font-size: 0.9em;
        @include link-transition(0.2s);
        i {
          padding-right: 0.25em;
        }
        &:hover {
          background-color: rgb(60, 111, 223);
          @include link-transition(0.2s);
        }
      }
    }
</style>
