<template>
  <div class="work">
    <ul class="image">
      <li class="lazy" v-for="n in imageListLength">
        <img :data-src="'/static/work/'+$route.params.category+'/'+$route.params.project+'/'+$route.params.project+'-'+n+'.png'" :data-srcset="'/static/work/'+$route.params.category+'/'+$route.params.project+'/'+$route.params.project+'-'+n+'@2x.png 2x'">
        <div class="spinner"></div>
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
      var result = this.$myStore.state.projects.filter(function (obj) {
        return obj.slug === this.$route.params.project
      }.bind(this))

      this.imageListLength = result[0].imageListLength
    }
  },
  beforeMount () {
    this.populateImageList()
  }
}
</script>

<style scoped lang="scss">
.image {
  box-shadow: 0px 0px 36px 0px rgba(0,0,0,0.25);
  margin: 30px auto 0 auto;
  max-width: 1000px;

  .lazy {
    min-height: 450px;
  }
}
</style>
