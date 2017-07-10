<template>
  <div id="footer-block">
        <p class="footer-contact">如何联系Zeee?</p>
        <ul class="share-group">
            <a href="mailto:sea.sand@live.cn"><li class="fa fa-envelope fa-lg"><p>Email</p></li></a>
            <a href="http://weibo.com/reedo"><li class="fa fa-weibo fa-lg"><p>Weibo</p></li></a>
            <a href="https://github.com/Reedo0910"><li class="fa fa-github fa-lg"><p>Github</p></li></a>
        </ul>
        <div id="copy">
            <a href="javaScript:void(0)" class="fa fa-angle-up fa-2x gototop" id="gototop" @click="gototop"></a>
            <p>Zeee@Velas 2017</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterBlock',
  methods: {
      gototop: function () {
          let dd = document.documentElement;
          let db = document.body;
          let top = dd.scrollTop || db.scrollTop;
          let step = Math.floor(top / 15);
        (function fn () {
            top -= step;
            if (top > -step) {
                dd.scrollTop === 0 ? db.scrollTop = top : dd.scrollTop = top;
                setTimeout(fn, 10);
            }
        })();
      },
      handleScroll: function () {
          let top = document.documentElement.scrollTop || document.body.scrollTop;
          let gttBtn = document.getElementById('gototop');
          if (top <= 200) {
              gttBtn.style.opacity = 0;
              gttBtn.style.visibility = 'hidden';
          } else {
              gttBtn.style.opacity = 1;
              gttBtn.style.visibility = 'visible';
          }
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
    background-color: #232323;
    color: #fff;
    width: 100%;
    min-height: 200px;
    text-align: center;
    p {
        font-weight: 300;
        letter-spacing: 1px;
    }
    .footer-contact {
        width: 200px;
        line-height: 50px;
        margin: 0 auto;
        position: relative;
        background-color: green;
        top: -25px;
        box-shadow: #000 0 0 30px;
        box-sizing: border-box;
    }
    .hr {
        background-color: #fff;
        margin: 30px auto 10px;
        height: 1px;
    }
    .share-group {
        padding: 20px 40px 40px;
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
    #copy {
        p {
            padding: 20px 0 15px;
            font-size: 14px;
            margin: 0 auto;
        }
    }
    .gototop {
        position: fixed;
        z-index: 800;
        padding: 5px;
        bottom: 60px;
        right: 6%;
        width: 32px;
        border-radius: 32px;
        background-color: #2e7d32;
        box-shadow: #000 0 0 10px;
        display: block;
        text-decoration: none;
        color: #fff;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: opacity 0.5s ease, visibility 0.5s ease, background-color 0.15s ease, box-shadow 0.15s ease;
        -moz-transition: opacity 0.5s ease, visibility 0.5s ease, background-color 0.15s ease, box-shadow 0.15s ease;
        transition: opacity 0.5s ease, visibility 0.5s ease, background-color 0.15s ease, box-shadow 0.15s ease;
        &:hover {
            background-color: #1B5E20;
            box-shadow: #222 0 0 8px;
            -webkit-transition: background-color 0.15s ease, box-shadow 0.15s ease;
            -moz-transition: background-color 0.15s ease, box-shadow 0.15s ease;
            transition: background-color 0.15s ease, box-shadow 0.15s ease;
        }
    }
}
</style>
