<template>
    <transition name="switch-page" mode="out-in">
        <div class="container">
            <news-sub-nav></news-sub-nav>
            <news-header-compact :newsTitle="post.title" :newsDate="post.created_at"></news-header-compact>
            <article>
                <div v-if="isClosed" class="notice closed">
                    <p>
                        <strong>该文章不可见</strong>
                    </p>
                    <p>由于文章已被删除，所以文章内容及留言不可见</p>
                </div>
                <loading-icon :isShow="isArticleLoading" :isError="isArticleError"></loading-icon>
                <div class="article-labels">
                    <a class="label comment-anchor" @click="scrollToCom">{{post.comments}}条评论</a>
                    <span class="label" :style="{'background-color': '#' + l.color }" v-for="l in post.labels" :key="l.id">{{l.name}}</span>
                </div>
                <p v-html="post.body" class="content markdown-body"></p>
            </article>
            <nav class="adjacent-posts">
                <p class="page-nav next">
                    <router-link class="page-navigation" :to="{ path: '/news/post/'+ nextPage.id }" v-if="nextPage.id !== -1">
                        <span class="nav-label">后一篇文章</span>
                        <strong class="nav-name">{{ nextPage.name }}</strong>
                        <span class="nav-time">{{ nextPage.time }}</span>
                        <i class="arrow-icon fa fa-angle-left fa-3x" aria-hidden="true"></i>
                    </router-link>
                </p>
                <p class="page-nav previous">
                    <router-link class="page-navigation" :to="{ path: '/news/post/'+ previousPage.id }" v-if="previousPage.id !== -1">
                        <span class="nav-label">前一篇文章</span>
                        <strong class="nav-name">{{ previousPage.name }}</strong>
                        <span class="nav-time">{{ previousPage.time }}</span>
                        <i class="arrow-icon fa fa-angle-right fa-3x" aria-hidden="true"></i>
                    </router-link>
                </p>
            </nav>
            <article>
                <div class="coms" id="comments">
                    <div class="leave">
                        <a :href="post.html_url" target="_blank">
                            <i class="fa fa-github-alt" aria-hidden="true"></i>
                            到GitHub留言</a>
                    </div>
                    <div class="com_area">
                        <div class="hr"></div>
                        <p class="note">GitHub的留言信息将显示在下方</p>
                        <loading-icon :isShow="isCommentLoading" :isError="isCommentError"></loading-icon>
                        <div v-for="c in coms" class="com" :key="c.user.id">
                            <a :href="c.user.html_url" target="_blank"><img :src="c.user.avatar_url"></a>
                            <div class="user_name">
                                <a :href="c.user.html_url" target="_blank">{{c.user.login}}</a>
                                <span v-if="c.author_association">{{tLC(c.author_association)}}</span>
                            </div>
                            <div class="date">{{fullTimeFormatter(c.created_at)}}</div>
                            <p>{{c.body}}</p>
                        </div>
                    </div>
                </div>
            </article>
            <div class="post-blank"></div>
        </div>
    </transition>
</template>


<script>
import * as github from '../assets/js/io'
import moment from 'moment'
import md from 'marked'
import highlightjs from 'highlight.js'
import NewsHeaderCompact from '../components/News/NewsHeaderCompact'
import NewsSubNav from '../components/SubNav/NewsSubNav'
import LoadingIcon from '../components/LoadingIcon'

export default {
    name: 'NewsPost',
    components: {
        NewsSubNav,
        NewsHeaderCompact,
        LoadingIcon
    },
    data: function() {
        return {
            post: {
                title: 'News Title'
            },
            coms: [],
            previousPage: {
                id: -1,
                name: '',
                time: ''
            },
            nextPage: {
                id: -1,
                name: '',
                time: ''
            },
            isClosed: false,
            isArticleLoading: true,
            isCommentLoading: true,
            isArticleError: false,
            isCommentError: false
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
            document.title = `${this.post.title} - Velas 新闻`;
        },
        scrollToCom: function() {
            return document.getElementById('comments').scrollIntoView();
        },
        tLC: function(text) {
            return text.toLowerCase();
        },
        fullTimeFormatter: function(time) {
            return moment(time).fromNow();
        },
        getPostOrder: function(source, id) {
            let that = this;
            let t = -1;
            for (let i = 0; i < source.length; i++) {
                if (source[i].number === id) {
                    t = i;
                    break;
                }
            }
            if (t === -1) { return; }
            if (t !== 0) {
                that.nextPage.id = source[t - 1].number;
                that.nextPage.name = source[t - 1].title;
                that.nextPage.time = moment(source[t - 1].created_at).format('ll');
            }
            if (t !== source.length - 1) {
                that.previousPage.id = source[t + 1].number;
                that.previousPage.name = source[t + 1].title;
                that.previousPage.time = moment(source[t + 1].created_at).format('ll');
            }
        },
        init: function() {
            const vm = this;
            const id = vm.$route.params.id;
            moment.locale('zh-cn');
            let renderer = new md.Renderer();
            renderer.listitem = function(text) {
                if (/^\s*\[[x ]\]\s*/.test(text)) {
                    text = text
                        .replace(/^\s*\[ \]\s*/, '<i class="fa fa-square-o" aria-hidden="true"></i> ')
                        .replace(/^\s*\[x\]\s*/, '<i class="fa fa-check-square" aria-hidden="true"></i> ');
                    return '<li style="list-style: none">' + text + '</li>';
                } else {
                    return '<li>' + text + '</li>';
                }
            };

            md.setOptions({
                highlight: (code) => highlightjs.highlightAuto(code).value
            })
            github.getIssue()
                .then(function(res) {
                    if (res === 404 || res.length === 0) {
                        throw new Error('网络异常');
                    }
                    if (res.state === 'closed') {
                        throw new Error('文章已关闭');
                    }
                    vm.post = res.filter((p) => {
                        return p.number === Number(id)
                    })[0]
                    vm.post.body = md(vm.post.body, { renderer: renderer });
                    vm.post.created_at = moment(vm.post.created_at).format('ll');
                    vm.isArticleLoading = false;
                    vm.updateTitle();
                    vm.getPostOrder(res, Number(id));
                    // 获取评论
                    github.getComs('VelasWebsite3', id)
                        .then(function(res) {
                            if (res === 404) {
                                throw new Error('网络异常');
                            }
                            vm.coms = res
                            vm.isCommentLoading = false
                        })
                        .catch(function(err) {
                            console.log('comment: ' + err)
                            vm.isCommentLoading = false
                            vm.isCommentError = true
                        })
                })
                .catch(function(err) {
                    console.log('article: ' + err);
                    vm.isArticleLoading = false;
                    vm.isCommentLoading = false
                    switch (err.message) {
                        case '网络异常':
                            vm.isArticleError = true;
                            break;
                        case '文章已关闭':
                            vm.isClosed = true;
                            break;
                        default:
                            vm.isArticleError = true;
                            break;
                    }
                });
        },
        initData: function() {
            let that = this;
            that.post = {}
            that.previousPage = {}
            that.nextPage = {}
            that.post.title = 'News Title'
            that.coms.length = 0
            that.previousPage = {
                id: -1,
                name: '',
                time: ''
            }
            that.nextPage = {
                id: -1,
                name: '',
                time: ''
            }
            that.isClosed = false
            that.isArticleLoading = true
            that.isCommentLoading = true
            that.isArticleError = false
            that.isCommentError = false
        }
    },
    mounted: function() {
        this.init();
    }
};
</script>
<style lang="scss" scoped>
.container {
    background-color: #fbfbfb;
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
    padding: 10px 50px 50px;
    background: #FFF;
    width: 90%;
    margin: 0 auto;
    box-sizing: border-box;
    .article-labels {
        text-align: right;
        margin: 10px auto;
        .label {
            display: inline-block;
            margin: 0 10px;
            color: #fff;
            padding: 5px 10px;
            text-transform: uppercase;
            opacity: .5;
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
            font-size: .8em;
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
            font-size: .9em;
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
                    font-size: .8em;
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
                font-size: .9em;
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
    width: 90%;
    margin: 0 auto;
    background-color: #eeeeee;
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
            text-decoration: none;
            .nav-label,
            .nav-name,
            .nav-time {
                display: block;
                line-height: 1.5;
            }
            .nav-label {
                font-size: .75em;
            }
            .nav-time {
                font-size: .85em;
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
            transition: left 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5), right 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5);
            &.fa-angle-left {
                left: 10px;
            }
            &.fa-angle-right {
                right: 10px;
            }
        }
        &:hover .arrow-icon {
            transition: left 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5), right 250ms cubic-bezier(0.3, -0.5, 0.6, 1.5);
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
    opacity: .8;
    background-color: #fafafa;
    text-align: center;
    &+& {
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
    .notice {
        p {
            display: block;
        }
    }
}

@media screen and (max-width: 475px) {
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