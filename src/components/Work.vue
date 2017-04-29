<template>
  <div class="work">
    <h2>Work</h2>
    <ul class="workList">
      <li v-for="work in works">
        <a :href="work.url">
          <h3>{{ work.title }}</h3>
          <img :src="work.thumbnail">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      works: [
        {
          url: '/work/shure/axient-digital',
          title: 'Shure – Axient Digital',
          thumbnail: '/static/portfolio/shure-axient-digital/thumb_large.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  color: red;
}

.workList {
  margin-top: 30px;

  li {
    width: 50%;

    img {
      max-width: 100%;
    }
  }
}
</style>
