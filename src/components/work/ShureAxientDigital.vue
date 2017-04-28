<template>
  <div class="work">
    <div class="image">
      <img class="loaded" src="/static/portfolio/shure-axient-digital/01.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/02.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/03.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/04.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/05.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/06.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/07.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/08.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/09.png">
      <img class="lazy" data-src="/static/portfolio/shure-axient-digital/10.png">
    </div>
  </div>
</template>

<script>
import inView from 'in-view'

export default {
  name: 'shureAxientDigital',
  components: {
    inView
  },
  methods: {
    imageLoad: function () {
      inView('.image img.lazy')
        .on('enter', el => {
          let imageUrl = el.getAttribute('data-src')
          el.setAttribute('src', imageUrl)
          el.classList.add('loaded')
        })
      inView.offset(-300)
    }
  },
  mounted () {
    this.imageLoad()
  }
}
</script>

<style scoped lang="scss">
.image {
  background-color: black;
  margin: 30px auto 0 auto;
  max-width: 80%;

  img {
    display: block;
    max-width: 100%;
    min-height: 200px;

    &.loaded {
      opacity: 1;
    }
  }
}
</style>
