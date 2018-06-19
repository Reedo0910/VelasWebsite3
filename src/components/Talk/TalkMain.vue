<template>
    <div class="container">
        <div class="post-grid">
            <loading-icon :isShow="isLoading" :isError="isError"></loading-icon>
            <article v-for="p in posts" class="post-card" :key="p.id">
                <header class="post-header">
                    <router-link class="title-link" :to="{ path: '/talk/post/'+ p.date + '-' + p.slug }">
                        <div class="post-image-container"><img class="post-image" :src="p.image" width="600" height="330"></div>
                        <h2 class="post-title">{{ p.title }}</h2>
                    </router-link>
                    <div class="post-meta">
                        <div class="date">{{ p.date }}</div>
                        <div class="categories">
                            <a v-if="p.categories[0]">{{ p.categories[0].name }}</a>
                        </div>
                    </div>
                </header>
                <div class="post-summary">
                    <p>{{p.body}}</p>
                    <div class="post-entry">
                        <router-link class="entry-link" :to="{ path: '/talk/post/'+ p.date + '-' + p.slug }">阅读文章
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    import * as hexo from '../../assets/js/io';
    import moment from 'moment';
    import LoadingIcon from '../LoadingIcon.vue';
    import { isBlackList } from '../../assets/js/blacklist'

    export default {
        name: 'TalkMain',
        components: {
            LoadingIcon
        },
        data: function () {
            return {
                posts: [],
                isLoading: true,
                isError: false
            }
        },
        mounted: function () {
            const vm = this;
            hexo.getBlogList()
                .then(this.filter)
                .catch(this.errorHandler)
        },
        methods: {
            linkGenerator: function (seed) {
                const url = 'http://o7a3i0m1t.bkt.clouddn.com/image/website/news/post-header/';
                const TOTAL = 19;
                let s = new Date(seed);
                let result = this.shuffle(s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), TOTAL);
                return url + result + '.jpg';
            },
            shuffle: function (a, b, c, t) {
                return (a * b * c) % t + 1;
            },
            blackListFilter: function (url) {
                if (!url) {
                    return 'http://o7a3i0m1t.bkt.clouddn.com/image/website/news/post-header/11.jpg'
                }
                if (isBlackList(url)) {
                    return 'http://o7a3i0m1t.bkt.clouddn.com/image/website/news/post-header/11.jpg'
                } else {
                    return url;
                }
            },
            summary: function (body) {
                if (!body) {
                    return '';
                }
                body = body.trim().replace('[Figure]', '').replace(/<[^>]+>/g, '');
                return body;
            },
            filter: function (posts) {
                if (posts === 404) {
                    throw new Error('网络异常');
                }
                const vm = this;
                var res = [];
                moment.locale('zh-cn');
                posts.map(function (p) {
                    vm.posts.push({
                        title: p.title,
                        slug: p.slug,
                        date: moment(p.date).format('YYYY-MM-DD'),
                        categories: p.categories,
                        body: vm.summary(p.excerpt),
                        image: vm.blackListFilter(p.cover)
                    });
                });
                vm.isLoading = false;
            },
            errorHandler: function (error) {
                console.log('talk list: ' + error);
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
        margin-bottom: 40px;
        .title-link {
          text-decoration: none;
          color: #000000;
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
          margin: 0 0 0.25em;
        }
        .post-meta {
          padding: 0 20px;
          font-size: 0.9em;
          margin-bottom: 20px;
          .date,
          .categories {
            display: inline-block;
          }
          .date {
            border-right: 1px solid #ccc;
            margin-right: 15px;
            padding-right: 15px;
          }
          .categories a {
            color: #494949;
          }
        }
        .post-summary {
          padding: 0 20px;
        }
        .post-entry {
          margin-top: 10px;
          .entry-link {
            color: #673ab7;
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