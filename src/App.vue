<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Nav'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
 $total-font: "Microsoft YaHei",
 微软雅黑,
 Arial,
 sans-serif;
 $font-size-p:16px;


.switch-page-enter-active {
    transition: all .5s ease;
}

.switch-page-enter,
.switch-page-leave {
    transform: translateY(-8px);
    opacity: 0.5;
}

.switch-page-leave-active {
    transition: all 0s;
}

 body {
     font-family: $total-font;
 }
 
 @font-face {
     font-family: 'NotoSansHans-Regular';
     src: url(/static/fonts/NotoSansHans-Regular.ttf);
     src: url(/static/fonts/NotoSansHans-Regular.eot);
 }

 @font-face {
    font-family: "Qwigley Regular";
    src: url(/static/fonts/Qwigley-Regular.ttf);
 }
 
 .clearfix:after {
     content: ' ';
     display: block;
     clear: both;
 }
 
 ul {
     margin: 0;
 }
 
 h3 {
     font-size: 20px;
 }
 
 p {
     font-size: $font-size-p;
     letter-spacing: 1px;
 }

 [v-cloak] {
  display: none;
}
</style>
