<template>
    <transition name="switch-page" mode="out-in">
        <div class="template-content">
            <div class="top-space-holeder" id="top_space"></div>
            <header>
                <h1>留言</h1>
                <p>有什么东西要告诉我呢？</p>
            </header>
            <main>
                <div class="view-area">
                    <ul class="comment-list">
                        <li class="comment-item bg-white area-block" v-for="(c, index) in comments" :key="index">
                            <ul class="item-info-list">
                                <li class="index item-info">#{{ c.index }}</li>
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
                    <form class="comment-form" @submit.prevent="leaveMessage">
                        <div class="form-group">
                            <div class="text">
                                <div class="input-group comment-field">
                                    <label class="label" for="comment">留言（不超过1000字）</label>
                                    <textarea id="comment" name="content" type="text" class="input textarea" placeholder="谢谢你的留言￣▽￣" required v-model="form.content"></textarea>
                                </div>
                            </div>
                            <div class="info">
                                <div class="input-group">
                                    <label class="label" for="author">昵称</label>
                                    <input id="author" name="author" type="text" class="input" v-model="form.name" required placeholder="你的大名">
                                </div>
                                <div class="input-group">
                                    <label class="label" for="email">邮箱地址
                                        <sup>*保密</sup>
                                    </label>
                                    <input id="email" name="email" type="email" class="input" v-model="form.email" required placeholder="你的个人邮箱">
                                </div>
                                <div class="input-group">
                                    <label class="label" for="captcha">验证码（不区分大小写）</label>
                                    <input id="captcha" name="captcha" type="text" class="input" v-model="form.captcha" required :placeholder="captcha === '' ? '点我获取验证码' : '输入下图的验证码'" @focus="initCaptcha">
                                    <div class="captcha" v-html="captcha" @click="getCaptcha" title="点击刷新验证码"></div>
                                    <div class="captcha err" v-if="isCaptchaErr" @click="getCaptcha">获取验证码失败，请点击重试</div>
                                </div>
                            </div>
                        </div>
                        <div class="submit-area">
                            <div class="input-group remember">
                                <input type="checkbox" name="save" id="saveinfo" v-model="form.tag">
                                <label for="saveinfo">七天内记住我
                                    <span>不要在公共设备上勾选</span>
                                </label>
                            </div>
                            <button type="submit" id="submit" class="submit-btn no-btn">
                                <i class="iconfont icon-ooedit2"></i>留下我的脚印..</button>
                        </div>
                    </form>
                </div>
                <div class="hr"></div>
                <p class="info-text" v-if="isRemembered">网站已根据你过去的留言记录自动填充了你的个人信息。你可以通过清空浏览器Cookie来清除他们，或者可以直接
                    <button class="no-btn" @click="clearMyInfo">点击这里清除</button>。</p>
                <div class="hr"></div>
            </main>
        </div>
    </transition>
</template>

<script>
    import moment from 'moment'
    import { leaveComment, getComments } from '@/api/comments'
    import { getCaptcha } from '@/api/captcha'
    import { setCookie, getCookie, checkCookie, deleteCookie } from '../utils/cookie'
    export default {
        name: 'Guestbook',
        data() {
            return {
                comments: [],
                form: {
                    name: '',
                    email: '',
                    captcha: '',
                    tag: false,
                    content: ''
                },
                captcha: '',
                isRemembered: false,
                isCaptchaErr: false
            }
        },
        methods: {
            fullTimeFormatter: function (time) {
                return moment(time).format('lll');
            },
            leaveMessage: function () {
                const name = this.form.name;
                const email = this.form.email;
                const saveTag = this.form.tag;
                const captchaTxt = this.form.captcha;
                const text = this.form.content;
                const that = this;
                if (captchaTxt.length !== 4) {
                    return that.$iziToast.warning({
                        title: '验证码格式错误',
                        message: '请输入四位验证码',
                        id: 'captcha-warning',
                        toastOnce: true
                    })
                }
                if (!this.isUsernameLegal(name)) {
                    return that.$iziToast.warning({
                        title: '用户名格式错误',
                        message: '用户名必须以汉字或字母开头，由汉字、字母、数字、下划线组成',
                        id: 'username-warning',
                        toastOnce: true
                    })
                }
                if (!this.isEmailLegal(email)) {
                    return that.$iziToast.warning({
                        title: '邮箱格式错误',
                        message: '请输入合法的邮箱地址',
                        id: 'email-warning',
                        toastOnce: true
                    })
                }
                if (text.length < 15) {
                    return that.$iziToast.warning({
                        title: '留言信息太短',
                        message: '多写几个字吧，我会很开心的哦',
                        id: 'txt-warning',
                        toastOnce: true
                    })
                }
                leaveComment(name, email, text, captchaTxt)
                    .then(res => {
                        const data = res.data;
                        if (data) {
                            if (data.success) {
                                that.$iziToast.success({
                                    title: '留言成功',
                                    message: '谢谢你的留言￣3￣',
                                    id: data.message,
                                    toastOnce: true,
                                    onClosing: function (instance, toast, closedBy) {
                                        if (!checkCookie('guestbook-verifysys-notice', 'false')) {
                                            that.$iziToast.show({
                                                title: '审核系统开发中',
                                                message: '目前留言会在未经审核的情况下被展示，请注意文明言论哦',
                                                id: 'verify',
                                                theme: 'dark',
                                                toastOnce: true,
                                                timeout: 10000,
                                                icon: 'fa fa-plug',
                                                close: false,
                                                buttons: [
                                                    ['<button>我知道了</button>', function (instance, toast) {
                                                        instance.hide({
                                                            onClosing: function (instance, toast, closedBy) {
                                                                setCookie('guestbook-verifysys-notice', 'false', 10)
                                                            }
                                                        }, toast, 'verify-sys-notice');
                                                    }]
                                                ]
                                            });
                                        }
                                    }
                                });
                                if (saveTag) {
                                    setCookie('guestbook-name', name, 7);
                                    setCookie('guestbook-email', email, 7);
                                    that.isRemembered = true;
                                } else {
                                    that.form.name = '';
                                    that.form.email = '';
                                }
                                that.form.content = '';
                                that.form.captcha = '';
                                that.captcha = '';
                                that.getMessages();
                                that.scrollToTop();
                            } else {
                                that.$iziToast.error({
                                    title: '出错了',
                                    message: data.message,
                                    timeout: 10000,
                                    id: data.message,
                                    toastOnce: true
                                });
                                if (data.reload) {
                                    that.getCaptcha();
                                }
                            }
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            getMessages: function () {
                const that = this;
                getComments()
                    .then(res => {
                        const data = res.data;
                        if (data && data.find) {
                            const comments = data.comments;
                            that.comments = [];
                            let arr = [];
                            for (let i = 0; i < comments.length; i++) {
                                const c = comments[i];
                                arr.push({
                                    index: i + 1,
                                    author: c.guest_id ? c.guest_id.showname : '',
                                    date: c.createdAt,
                                    content: c.content,
                                    reply: c.reply_id ? c.reply_id.content : ''
                                });
                            }
                            that.comments = arr.reverse();
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        that.$iziToast.error({
                            title: '获取留言失败',
                            message: '请检查你的网络连接',
                            timeout: 10000,
                            id: 'get-msg-err',
                            toastOnce: true
                        });
                    })
            },
            scrollToTop: function () {
                return document.getElementById('top_space').scrollIntoView();
            },
            getCaptcha: function () {
                const that = this;
                that.isCaptchaErr = false;
                getCaptcha()
                    .then(res => {
                        that.captcha = res.data;
                    })
                    .catch(() => {
                        that.isCaptchaErr = true;
                    })
            },
            initCaptcha: function () {
                if (this.captcha) { return; }
                this.getCaptcha();
            },
            isUsernameLegal(name) {
                const UsernameExp = new RegExp(/^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z0-9_]{1,15}$/);
                return UsernameExp.test(name);
            },
            isEmailLegal(email) {
                const EmailExp = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
                return EmailExp.test(email);
            },
            clearMyInfo() {
                deleteCookie('guestbook-name');
                deleteCookie('guestbook-email');
                this.form.name = '';
                this.form.email = '';
                this.isRemembered = false;
            }
        },
        mounted() {
            this.getMessages();
            this.form.name = getCookie('guestbook-name');
            this.form.email = getCookie('guestbook-email');
            if (getCookie('guestbook-name') || getCookie('guestbook-email')) {
                this.isRemembered = true;
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
        overflow: hidden;
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
          margin-right: 1.5em;
          &.index {
            color: #000000;
          }
        }
      }
    }

    .input-group {
      width: 220px;
      margin-bottom: 10px;
    }

    .input-group.comment-field,
    .input-group.remember {
      width: 100%;
    }

    .input-group.remember {
      margin-bottom: 15px;
      label {
        color: #717171;
        font-size: 0.9em;
      }
      span {
        color: #bbb;
        margin-left: 5px;
      }
    }

    .form-group {
      display: flex;
      justify-content: space-around;
      flex-wrap: nowrap;
      .info,
      .text {
        box-sizing: border-box;
      }
      .info {
        width: 200px;
      }
      .text {
        width: 600px;
        margin-left: 15px;
      }
      .captcha {
        cursor: pointer;
        display: inline-block;
        &.err {
          color: #777;
          font-size: 0.9em;
        }
      }
      .input {
        box-sizing: border-box;
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
        min-height: 238px;
        padding: 5px;
        resize: none;
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

    @media screen and (max-width: 1200px) {
      .form-group {
        flex-wrap: wrap;
        .info {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .text {
          margin-left: 0;
          margin-bottom: 15px;
          width: 100%;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      .input-group {
        width: 100%;
      }
    }

    @media screen and (max-width: 660px) {
      main {
        width: 90%;
      }
      //   .label {
      //     display: block;
      //     width: 100%;
      //     text-align: center;
      //   }
    }

    @media screen and (max-width: 550px) {
      main {
        width: 100%;
      }
      .area-block {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
</style>
