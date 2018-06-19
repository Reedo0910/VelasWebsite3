<template>
    <header class="header">
        <p>{{ date }}
            <span v-if="categories"> | </span>
            <span v-for="(c, index) in categories" :key="c.name">{{ c.name }}
                <span v-if="index !== categories.length-1">, </span>
            </span>
        </p>
        <h1>{{ title }}</h1>
        <p>标签：
            <span v-if="tags" v-for="(t, index) in tags" :key="t.name">{{ t.name }}
                <span v-if="index !== tags.length-1">, </span>
            </span>
            <span v-else>无</span>
        </p>
    </header>
</template>

<script>
    import moment from 'moment';
    export default {
        name: 'TalkHeaderCompact',
        props: ['title', 'date', 'tags', 'categories']
    }
</script>

<style lang="scss" scoped>
    header {
      width: 80%;
      margin: 0 auto 10px;
      box-sizing: border-box;
      p {
        margin: 0 0 2px;
      }
      h1 {
        margin: 5px 0;
        font-size: 2em;
        letter-spacing: 1px;
      }
      h4 {
        margin: 0 auto;
        width: 100%;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media screen and (max-width: 900px) {
      header {
        width: 80%;
      }
    }

    @media screen and (max-width: 780px) {
      header {
        h1 {
          font-size: 2em;
        }
      }
    }

    @media screen and (max-width: 700px) {
      header {
        width: 100%;
        padding-left: 10px;
        h1 {
          font-size: 1.5em;
        }
      }
    }
</style>
