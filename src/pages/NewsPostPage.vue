<template>
    <transition name="switch-page" mode="out-in">
        <div class="container">
            <v-title>{{post.title}} - Velas News</v-title>
            <news-sub-nav></news-sub-nav>
            <news-header-compact :newsTitle="post.title" :newsDate="post.created_at"></news-header-compact>
            <article>
                <div v-if="isClosed" class="notice closed">
                    <p>
                        <strong>该文章不可见</strong>
                    </p>
                    <p>由于文章已被删除或是由未知作者所发布，所以文章内容及留言不可见</p>
                </div>
                <loading-icon :isShow="isArticleLoading" :isError="isArticleError"></loading-icon>
                <div class="article-labels">
                    <span class="label" :style="{'background-color': '#' + l.color }" v-for="l in post.labels" :key="l.id">{{l.name}}</span>
                </div>
                <p v-html="post.body" class="content markdown-body">
                </p>
                <div class="coms">
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
            <footer-block></footer-block>
        </div>
    </transition>
</template>


<script>
import * as github from '../assets/js/io'
import moment from 'moment'
import '../assets/css/github-markdown.css'
import md from 'marked'
import highlightjs from 'highlight.js'
import 'highlight.js/styles/solarized-light.css'
import VTitle from '../components/VTitle'
import NewsHeaderCompact from '../components/News/NewsHeaderCompact'
import NewsSubNav from '../components/SubNav/NewsSubNav'
import FooterBlock from '../components/Footer'
import LoadingIcon from '../components/LoadingIcon'

export default {
    name: 'NewsPost',
    components: {
        VTitle,
        NewsSubNav,
        NewsHeaderCompact,
        FooterBlock,
        LoadingIcon
    },
    data: function() {
        return {
            post: {
                title: 'News Title'
            },
            coms: [],
            isClosed: false,
            isArticleLoading: true,
            isCommentLoading: true,
            isArticleError: false,
            isCommentError: false
        }
    },
    methods: {
        tLC: function(text) {
            return text.toLowerCase();
        },
        fullTimeFormatter: function(time) {
            moment.locale('zh-cn');
            return moment(time).fromNow();
        }
    },
    mounted: function() {
        const vm = this;
        const id = vm.$route.params.id;
        md.setOptions({
            highlight: (code) => highlightjs.highlightAuto(code).value
        })
        github.getIssueById(id)
            .then(function(res) {
                if (res === 404 || res.length === 0) {
                    throw new Error('网络异常');
                }
                if (res.state === 'closed' || res.user.login !== 'Reedo0910') {
                    throw new Error('文章已关闭');
                }
                vm.post = res;
                vm.post.body = md(vm.post.body);
                vm.post.created_at = moment(vm.post.created_at).format('YYYY-MM-DD');
                vm.isArticleLoading = false;
                // 获取评论
                github.getComs(id)
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

article {
    padding: 10px 50px 50px;
    background: #FFF;
    width: 90%;
    margin: 0 auto 100px;
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
            ;
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
}
</style>