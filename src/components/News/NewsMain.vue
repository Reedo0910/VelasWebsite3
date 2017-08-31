<template>
    <div class="container">
        <div class="post-grid">
            <loading-icon :isShow="isLoading" :isError="isError"></loading-icon>
            <article v-for="p in posts" class="post-card" :key="p.id">
                <header class="post-header">
                    <router-link class="title-link" :to="{ path: '/post/'+p.number }">
                        <div class="post-image-container"><img class="post-image" :src="p.image" width="600" height="330"></div>
                        <h2 class="post-title">{{ p.title }}</h2>
                    </router-link>
                    <div class="post-meta">
                        <div class="labels">
                            <a>{{ p.labels[0].name }}</a>
                        </div>
                        <div class="date">{{ p.date }}</div>
                        <div class="entry-comments">
                            <i class="fa" :class="{'fa-comment-o':p.comments === 0,'fa-comment':p.comments !== 0, }" aria-hidden="true"></i>
                            <span>{{p.comments}}</span>
                        </div>
                    </div>
                </header>
                <div class="post-summary">
                    <p>{{p.body}}</p>
                    <div class="post-entry">
                        <router-link class="entry-link" :to="{ path: '/post/'+p.number }">阅读文章
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import * as github from '../../assets/js/io';
import moment from 'moment';
import LoadingIcon from '../LoadingIcon.vue';

export default {
    name: 'NewsMain',
    components: {
        LoadingIcon
    },
    data: function() {
        return {
            posts: [],
            isLoading: true,
            isError: false
        }
    },
    mounted: function() {
        const vm = this;
        github.getIssue()
            .then(this.filter)
            .catch(this.errorHandler)
    },
    methods: {
        linkGenerator: function(seed) {
            const url = 'http://o7a3i0m1t.bkt.clouddn.com/image/website/news/post-header/';
            const TOTAL = 19;
            let s = new Date(seed);
            let result = this.shuffle(s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), TOTAL);
            return url + result + '.jpg';
        },
        shuffle: function(a, b, c, d, t) {
            return ((a + b) * c * d) % t + 1;
        },
        summary: function(body) {
            return body.replace(/\s+/g, '').substr(0, 110) + ' …';
        },
        filter: function(posts) {
            if (posts === 404) {
                throw new Error('网络异常');
            }
            const vm = this;
            var res = [];
            const author = { 'Reedo0910': true };
            posts.map(function(p) {
                if (author[p.user.login]) {
                    vm.posts.push({
                        title: p.title,
                        number: p.number,
                        date: moment(p.created_at).format('LL'),
                        labels: p.labels,
                        body: vm.summary(p.body),
                        comments: p.comments,
                        image: vm.linkGenerator(p.created_at)
                    });
                }
            });
            vm.isLoading = false;
        },
        errorHandler: function(error) {
            console.log('article list: ' + error);
            this.isLoading = false;
            this.isError = true;
        }
    }
};
</script>
<style lang="scss" scoped>
.container {
    line-height: 1.5;
}

.post-grid {
    position: relative;
    zoom: 1;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 50px 30px 100px;
    min-width: 300px;
    box-sizing: border-box;
    background: #fff;
    .post-card {
        padding: 0 10px;
        box-sizing: border-box;
        .title-link {
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        .post-image-container {
            margin-bottom: 20px;
            max-height: 330px;
            overflow: hidden;
            padding-bottom: 56.25%;
            position: relative;
            text-align: center;
            width: 100%;
            .post-image {
                transform: translateY(-50%);
                bottom: 0;
                display: block;
                left: 0;
                margin: 0 auto;
                position: absolute;
                right: 0;
                top: 50%;
                max-width: 100%;
                height: auto;
            }
        }
        .post-title {
            padding: 0 20px;
            line-height: 1.1;
            margin: 0 0 .25em;
        }
        .post-meta {
            padding: 0 20px;
            font-size: .9em;
            margin-bottom: 20px;
            .date,
            .labels,
            .entry-comments {
                display: inline-block;
            }
            .date,
            .labels {
                border-right: 1px solid #ccc;
                margin-right: 15px;
                padding-right: 15px;
            }
            .labels a {
                color: #494949;
            }
            .entry-comments {
                i {
                    margin-right: .1em;
                    vertical-align: middle;
                }
                span {
                    color: #673AB7;
                }
            }
        }
        .post-summary {
            padding: 0 20px;
        }
        .post-entry {
            margin-top: 10px;
            .entry-link {
                color: #673AB7;
                display: block;
                font-weight: bold;
                text-decoration: none; // border-bottom: 1.5px solid transparent;
                padding-bottom: 2px;
                position: relative;
                i {
                    position: relative;
                    right: -2px;
                    transition: right 150ms cubic-bezier(0.3, -0.5, 0.6, 1.5);
                }
                &:hover {
                    color: #000000; // border-bottom-color: #000;
                    text-decoration: underline;
                    i {
                        transition: right 150ms cubic-bezier(0.3, -0.5, 0.6, 1.5);
                        right: -5px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 500px) {
    .post-grid {
        padding: 50px 10px;
    }
}

@media screen and (max-width: 780px) {
    .post-grid {
        width: 100%;
        .post-card {
            width: 100%;
        }
    }
}

@media screen and (min-width: 780px) {
    .post-grid {
        width: 760px;
        .post-card {
            width: 49.998%;
        }
    }
}

@media screen and (min-width: 1200px) {
    .post-grid {
        width: 1000px;
        .post-card {
            width: 33.332%;
        }
    }
}

@media screen and (min-width: 1420px) {
    .post-grid {
        width: 1400px;
    }
}
</style>