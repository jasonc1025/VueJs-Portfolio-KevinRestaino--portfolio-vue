<template>
  <div class="work">
    <ul class="image">
      <li class="lazy" v-for="n in imageListLength">
        <img :data-src="'/static/work/'+$route.params.category+'/'+$route.params.project+'/'+$route.params.project+'-'+n+'.png'">
        <div class="loading"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'project',
  data: function () {
    return {
      imageListLength: 0
    }
  },
  methods: {
    populateImageList: function () {
      switch (this.$route.params.project) {
        case 'axient-digital':
          this.imageListLength = 16
          break
        case 'motiv':
          this.imageListLength = 15
          break
        case 'microflex-advance':
          this.imageListLength = 10
          break
        case 'ksm8':
          this.imageListLength = 10
          break
        case 'kse1500':
          this.imageListLength = 8
          break
        case 'blog':
          this.imageListLength = 10
          break
        case 'weather':
          this.imageListLength = 1
          break
        case 'color-con':
          this.imageListLength = 1
          break
      }
    }
  },
  beforeMount () {
    this.populateImageList()
  }
}
</script>

<style scoped lang="scss">
.image {
  margin: 30px auto 0 auto;
  max-width: 1000px;

  .lazy {
    min-height: 500px;

    .loading:after {
      background: #fff;
    }
  }
}
</style>
