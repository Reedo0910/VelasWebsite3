<template>
    <div class="text-scroll">
        <p>Born to be a</p>
        <div class="scrolling-words">
            <p>front end developer.</p>
            <p>curious creator.</p>
            <p>knowledge junkie.</p>
            <p>collaborator.</p>
        </div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'RollingLetter'
    }
</script>

<style scoped>
    .text-scroll p {
      height: 20px;
      /* float: left; */
      white-space: nowrap;
      position: relative;
      font-size: 43px;
      font-weight: bold;
      /* margin-top: 22%; */
      margin: 0;
    }

    .text-scroll {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      max-height: 50px;
      max-width: 800px;
      margin: 0 auto;
      padding-left: 15%;
      /* float: left; */
    }

    .scrolling-words {
      overflow: hidden;
      height: 54px;
      padding-left: 15px;
      /* margin-top: 21%; */
    }

    .scrolling-words p {
      margin: 0 0 30px;
      padding-top: 5px;
      white-space: nowrap;
      animation: move 8s 1s infinite;
      font-size: 43px;
      letter-spacing: 1px;
    }

    @keyframes move {
      0% {
        top: 0px;
      }
      20% {
        top: -56px;
      }
      40% {
        top: -110px;
      }
      60% {
        top: -167px;
      }
      80% {
        top: -0px;
      }
      100% {
        top: -0px;
      }
    }
</style>
