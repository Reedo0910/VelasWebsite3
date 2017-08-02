<template>
  <div id="footer-block">
        <ul class="share-group">
            <a href="mailto:sea.sand@live.cn"><li class="fa fa-envelope fa-lg"><p>Email</p></li></a>
            <a href="http://weibo.com/reedo"><li class="fa fa-weibo fa-lg"><p>Weibo</p></li></a>
            <a href="https://github.com/Reedo0910"><li class="fa fa-github fa-lg"><p>Github</p></li></a>
        </ul>
        <a href="javaScript:void(0)" class="fa fa-angle-up fa-2x gototop" id="gototop" @click="gototop" :class="{ not_on_top: !isOnTop }"></a>
        <div class="footer-copy">
            <p>Zeee@Velas 2017</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterBlock',
  data () {
    return {
        isOnTop: true
    }
  },
  methods: {
      gototop () {
        const dd = document.documentElement;
        const db = document.body;
        let top = dd.scrollTop || db.scrollTop;
        const step = Math.floor(top / 15);
        (function fn () {
            top -= step;
            if (top > -step) {
                dd.scrollTop === 0 ? db.scrollTop = top : dd.scrollTop = top;
                setTimeout(fn, 10);
            }
        })();
      },
      handleScroll () {
          let top = document.documentElement.scrollTop || document.body.scrollTop;
          this.isOnTop = top <= 200;
      }
  },
  mounted () {
      window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
@mixin link-transition($time, $type:all) {
    -webkit-transition: $type $time ease-out;
    -moz-transition: $type $time ease-out;
    transition: $type $time ease-out;
}

#footer-block {
    background-color: rgb(0,87,55);
    color: #fff;
    width: 100%;
    min-height: 200px;
    text-align: center;
    p {
        font-weight: 300;
        letter-spacing: 1px;
    }
    .hr {
        background-color: #fff;
        margin: 30px auto 10px;
        height: 1px;
    }
    .share-group {
        padding: 50px 40px 20px;
        display: block;
        margin: 0 auto;
        a {
            color: #fff;
            text-decoration: none;
            @include link-transition(0.2s);
            li {
                display: inline-block;
                padding: 10px;
                p {
                    color: #fff;
                    opacity: 0;
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 12px;
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
        background-color: #333;
        padding: 15px 0 20px;
        font-size: 14px;
        margin: 0;
    }
    .gototop {
        display: block;
        position: fixed;
        z-index: 800;
        padding: 5px;
        bottom: 65px;
        right: 6%;
        width: 32px;
        border-radius: 100%;
        background-color: rgb(0,87,55);
        text-decoration: none;
        color: #fff;
        opacity: 0;
        transform: scale(0);
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        transition: all .2s ease;
        outline: none;
        &.not_on_top {
        opacity: .8;
        transform: scale(1);
        &:hover {
            background-color: #2e7d32;
            transform: scale(1.1);
            opacity: 1;
            -webkit-transition: all .2s ease;
            -moz-transition: all .2s ease;
            transition: all .2s ease;
        }
        }
    }
}

@media screen and (max-width: 600px) {
    #footer-block .gototop {
        width: 28px;
        line-height: 28px;
        border-radius: 28px;        
    }
}
</style>
