<template>
    <div class="footer-block" v-show="blackList" :class="styleSeletor">
        <ul class="share-group">
            <a v-for="b in btns" :key="b.title" :href="b.href" target="_blank">
                <li class="fa fa-lg" :class="b.icon">
                    <p>{{b.title}}</p>
                </li>
            </a>
        </ul>
        <gototop></gototop>
        <div class="footer-copy">
            <p>©2016-2018 by Eric R. Lee. All rights reserved.</p>
        </div>
    </div>
</template>

<script>
    import Gototop from './Gototop'
    export default {
        name: 'FooterBlock',
        components: {
            Gototop
        },
        data() {
            return {
                btns: [
                    {
                        href: 'mailto:ericrlee@outlook.com',
                        icon: 'fa-envelope',
                        title: 'Email',
                        color: '#17b2ec'
                    },
                    {
                        href: 'https://weibo.com/reedo',
                        icon: 'fa-weibo',
                        title: 'Weibo',
                        color: '#ff0000'
                    },
                    {
                        href: 'https://github.com/Reedo0910',
                        icon: 'fa-github',
                        title: 'Github',
                        color: '#545454'
                    }
                ]
            }
        },
        computed: {
            blackList() {
                return this.$route.meta.index !== -1 && document.body.clientHeight >= 300;
            },
            styleSeletor() {
                return {
                    'light-style': this.$route.meta.style === 'light',
                    'dark-style': this.$route.meta.style === 'dark'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin link-transition($time, $type: all) {
      -webkit-transition: $type $time ease-out;
      -moz-transition: $type $time ease-out;
      transition: $type $time ease-out;
    }

    .footer-block {
      background-color: #eee;
      color: #1d1d1d;
      width: 100%;
      min-height: 190px;
      text-align: center;
      p {
        font-weight: 300;
        letter-spacing: 1px;
      }
      .share-group {
        padding: 50px 40px 20px;
        display: block;
        margin: 0 auto;
        a {
          color: #1d1d1d;
          text-decoration: none;
          @include link-transition(0.2s);
          li {
            display: inline-block;
            padding: 10px;
            p {
              color: #1d1d1d;
              text-transform: uppercase;
              font-size: 12px;
              opacity: 0;
              @include link-transition(0.2s);
            }
          }
          &:hover li {
            transform: translateY(-5px);
            @include link-transition(0.2s);
            p {
              opacity: 0.9;
              transform: translateY(5px);
              @include link-transition(0.2s);
            }
          }
          &:nth-child(1):hover li {
            color: #17b2ec;
          }
          &:nth-child(2):hover li {
            color: #ff0000;
          }
          &:nth-child(3):hover li {
            color: #545454;
          }
        }
      }
      .footer-copy p {
        color: #8e8e8e;
        background-color: #f5f5f5;
        text-transform: uppercase;
        font-size: 12px;
        padding: 15px 0 20px;
        margin: 0;
      }

      &.dark-style {
        color: #eee;
        background-color: #1b1b1b;
        .share-group {
          a {
            color: #f0f0f0;
            li p {
              color: #f0f0f0;
            }
          }
        }
        .footer-copy p {
          background-color: #222;
          color: #f5f5f5;
        }
      }
    }
</style>
