<template>
    <transition name="switch-page" mode="out-in">
        <div class="container">
            <div class="top-space-holeder"></div>
            <talk-header-compact :title="post.title" :date="post.date" :tags="post.tags" :categories="post.categories"></talk-header-compact>
            <article>
                <loading-icon :isShow="isArticleLoading" :isError="isArticleError"></loading-icon>
                <p v-html="post.body" class="content markdown-body"></p>
            </article>
            <nav class="adjacent-posts">
                <p class="page-nav next">
                    <router-link class="page-navigation" :to="{ path: '/talk/post/'+ nextPage.date + '-' + nextPage.slug }" v-if="nextPage.slug">
                        <span class="nav-label">后一篇文章</span>
                        <strong class="nav-name">{{ nextPage.name }}</strong>
                        <span class="nav-time">{{ formatTime(nextPage.date) }}</span>
                        <i class="arrow-icon fa fa-angle-left fa-3x" aria-hidden="true"></i>
                    </router-link>
                </p>
                <p class="page-nav previous">
                    <router-link class="page-navigation" :to="{ path: '/talk/post/'+ previousPage.date + '-' +  previousPage.slug }" v-if="previousPage.slug">
                        <span class="nav-label">前一篇文章</span>
                        <strong class="nav-name">{{ previousPage.name }}</strong>
                        <span class="nav-time">{{ formatTime(previousPage.date) }}</span>
                        <i class="arrow-icon fa fa-angle-right fa-3x" aria-hidden="true"></i>
                    </router-link>
                </p>
            </nav>
            <article>
                <div class="leave">
                    <a :href="getOriginalLink" target="_blank">
                        <i class="iconfont icon-bird"></i>
                        到Velas Talk浏览原文</a>
                </div>
            </article>
            <div class="post-blank"></div>
        </div>
    </transition>
</template>


<script>
    import * as hexo from '../assets/js/io'
    import moment from 'moment'
    import TalkHeaderCompact from '../components/Talk/TalkHeaderCompact'
    import LoadingIcon from '../components/LoadingIcon'

    export default {
        name: 'TalkPost',
        components: {
            TalkHeaderCompact,
            LoadingIcon
        },
        data: function () {
            return {
                post: {
                    title: 'Title'
                },
                previousPage: {
                    slug: '',
                    name: '',
                    date: ''
                },
                nextPage: {
                    slug: '',
                    name: '',
                    date: ''
                },
                isArticleLoading: true,
                isArticleError: false
            }
        },
        watch: {
            '$route'(to, from) {
                this.initData();
                this.init();
            }
        },
        methods: {
            updateTitle: function () {
                document.title = `${this.post.title} - Velas博客`;
            },
            // scrollToCom: function() {
            //     return document.getElementById('comments').scrollIntoView();
            // },
            tLC: function (text) {
                return text.toLowerCase();
            },
            // fullTimeFormatter: function (time) {
            //     return moment(time).fromNow();
            // },
            formatTime(time) {
                return moment(time).format('YYYY年MM月DD日');
            },
            getPostOrder: function (slug) {
                hexo.getBlogList()
                    .then(res => {
                        const that = this;
                        let t = -1;
                        for (let i = 0; i < res.length; i++) {
                            if (res[i].slug === slug) {
                                t = i;
                                break;
                            }
                        }
                        if (t === -1) { return; }
                        if (t !== 0) {
                            that.nextPage.slug = res[t - 1].slug;
                            that.nextPage.name = res[t - 1].title;
                            that.nextPage.date = moment(res[t - 1].date).format('YYYY-MM-DD');
                        }
                        if (t !== res.length - 1) {
                            that.previousPage.slug = res[t + 1].slug;
                            that.previousPage.name = res[t + 1].title;
                            that.previousPage.date = moment(res[t + 1].date).format('YYYY-MM-DD');
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            init: function () {
                const vm = this;
                let slug = '';
                const splitArr = vm.$route.params.full_title.split('-');
                for (let i = 3; i < splitArr.length; i++) {
                    slug += splitArr[i];
                    if (i !== splitArr.length - 1) {
                        slug += '-';
                    }
                }
                moment.locale('zh-cn');
                hexo.getBlogPostBySlug(slug)
                    .then(function (res) {
                        if (res === 404 || res.length === 0) {
                            throw new Error('网络异常');
                        }
                        vm.post = res;
                        vm.post.body = vm.post.content;
                        vm.post.date = moment(vm.post.date).format('ll');
                        vm.isArticleLoading = false;
                        vm.updateTitle();
                        vm.getPostOrder(slug);
                    })
                    .catch(function (err) {
                        console.log('article: ' + err);
                        vm.isArticleLoading = false;
                        vm.isCommentLoading = false
                        vm.isArticleError = true;
                    });
            },
            initData: function () {
                let that = this;
                that.post = {}
                that.previousPage = {}
                that.nextPage = {}
                that.post.title = 'Title'
                that.previousPage = {
                    slug: '',
                    name: '',
                    date: ''
                }
                that.nextPage = {
                    slug: '',
                    name: '',
                    date: ''
                }
                that.isArticleLoading = true
                that.isCommentLoading = true
                that.isArticleError = false
                that.isCommentError = false
            }
        },
        mounted: function () {
            this.init();
        },
        computed: {
            getOriginalLink: function () {
                return `https://reedo0910.github.io/${this.$route.params.full_title}.html`;
            }
        }
    };
</script>
<style lang="scss" scoped>
    .container {
      background-color: #fbfbfb;
    }

    .top-space-holeder {
      margin: 0 auto;
      padding: 60px 0 10px;
      height: 1px;
      width: 80%;
    }

    .hr {
      width: 50px;
      height: 1px;
      background-color: #888;
      margin: 0 auto;
    }

    .post-blank {
      height: 100px;
      width: 100%;
    }

    article {
      padding: 10px 100px 50px;
      background: #fff;
      width: 80%;
      margin: 0 auto;
      box-sizing: border-box;
      .article-labels {
        .label {
          display: inline-block;
          margin-right: 5px;
        }
        .comment-anchor {
          color: #000000;
          border: 2px solid #000;
          text-decoration: none;
          box-sizing: border-box;
          padding: 3px 10px;
          cursor: pointer;
        }
      }

      .leave {
        text-align: center;
        padding: 80px 0 20px 0;
        a {
          user-select: none;
          padding: 12px 15px;
          border-radius: 50px;
          color: #737373;
          font-size: 0.8em;
          border: 1px solid #656565;
          text-decoration: none;
          letter-spacing: 1px;
        }
      }

      .com_area {
        margin-top: 20px;
        p.note {
          text-align: center;
          color: #4c4c4c;
          font-size: 0.9em;
          margin: 14px 0 40px;
        }
        .com {
          padding: 18px 0;
          margin: 25px 0;
          display: flex;
          align-items: center;
          position: relative;
          .user_name {
            position: absolute;
            top: -10px;
            left: 60px;
            a {
              font-size: 0.8em;
              color: #888;
              text-decoration: none;
            }
            span {
              text-transform: capitalize;
              padding: 2px 5px;
              font-size: 12px;
              border: 1px solid rgba(27, 31, 35, 0.1);
              border-radius: 40px;
              font-weight: 600;
              color: darkred;
            }
          }
          .date {
            position: absolute;
            top: -4px;
            right: 38px;
            font-size: 0.9em;
            color: #888888;
          }
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
          }
          p {
            padding: 20px 20px;
            background: #f7f9fb;
            width: 100%;
            margin: 0 10px;
          }
        }
      }
    }

    .adjacent-posts {
      overflow: hidden;
      display: flex;
      width: 80%;
      margin: 0 auto;
      background-color: #ffffff;
      color: #000000;
      text-align: center;
      padding: 20px 0;
      position: relative;
      .page-nav {
        margin: 0;
        box-sizing: border-box;
        display: inline-block;
        width: 50%;
        &.next {
          border-right: 1px solid #ccc;
          margin-right: -1px;
        }
        .page-navigation {
          display: block;
          width: 100%;
          height: 100%;
          color: #444444;
          text-decoration: none;
          .nav-label,
          .nav-name,
          .nav-time {
            display: block;
            line-height: 1.5;
          }
          .nav-label {
            font-size: 0.75em;
          }
          .nav-time {
            font-size: 0.85em;
          }
          .nav-name {
            font-size: 1em;
            margin-top: 10px;
          }
          &:hover .nav-name {
            text-decoration: underline;
          }
        }
        .arrow-icon {
          display: block;
          position: absolute;
          width: 18px;
          height: 48px;
          top: 50%;
          margin-top: -24px;
          transition: left 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5),
            right 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5);
          &.fa-angle-left {
            left: 10px;
          }
          &.fa-angle-right {
            right: 10px;
          }
        }
        &:hover .arrow-icon {
          transition: left 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5),
            right 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5);
          &.fa-angle-left {
            left: 0;
          }
          &.fa-angle-right {
            right: 0;
          }
        }
      }
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
      &.closed {
        background-color: rgba(244, 67, 54, 0.5);
      }
    }

    @media screen and (max-width: 900px) {
      article {
        width: 80%;
        padding: 10px 20px 40px;
      }
      .notice {
        p {
          display: block;
        }
      }
    }

    @media screen and (max-width: 700px) {
      article {
        width: 100%;
        padding: 10px 20px 40px;
      }
      .adjacent-posts {
        width: 100%;
        flex-wrap: wrap;
        .page-nav {
          width: 100%;
          &.next {
            border-right: none;
            margin-right: 0;
          }
        }
      }
    }
</style>