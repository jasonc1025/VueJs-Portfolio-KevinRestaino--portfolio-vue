<template>
  <div class="work">
    <div class="details">
      <div class="row">
        <div class="col">
          <div>
            <h2 v-html="this.title"></h2>
          </div>
        </div>
        <div class="col buttons">
          <a class="button" target="_blank" :href="this.github" v-if="github">GitHub Repo</a>
          <a class="button" target="_blank" :href="this.url">Live Site</a>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.</p>
        </div>
      </div>
    </div>
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
      github: null,
      imageListLength: null,
      title: null,
      url: null
    }
  },
  methods: {
    getPorject: function () {
      var result = this.$myStore.state.projects.filter(function (obj) {
        return obj.slug === this.$route.params.project
      }.bind(this))

      this.github = result[0].github
      this.imageListLength = result[0].imageListLength
      this.title = result[0].title
      this.url = result[0].url
    }
  },
  beforeMount () {
    this.getPorject()
  }
}
</script>

<style scoped lang="scss">
.details {
  align-items: center;
  display: flex;
  flex-direction: column;

  .row {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    width: 100%;

    & + .row {
      margin-top: 18px;
    }

    .col {
      display: flex;
      flex-direction: column;

      &.buttons {
        flex-direction: row;
      }
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
  }

  .button {
    & + .button {
      margin-left: 16px;
    }
  }
}

.image {
  box-shadow: 0px 0px 36px 0px rgba(0,0,0,0.25);
  margin: 24px auto 0;
  max-width: 1000px;

  .lazy {
    min-height: 450px;
  }
}
</style>
