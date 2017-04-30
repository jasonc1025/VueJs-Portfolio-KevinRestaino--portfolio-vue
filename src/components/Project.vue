<template>
  <div class="work" v-if="project">
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
        <div class="col ie11Hack">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.</p>
        </div>
      </div>
    </div>
    <ul class="image">
      <li class="lazy" v-for="n in imageListLength">
        <img :data-src="`/static/work/${category}/${$route.params.project}/${$route.params.project}-${n}.png`" :data-srcset="`/static/work/${category}/${$route.params.project}/${$route.params.project}-${n}@2x.png 2x`">
        <div class="spinner"></div>
      </li>
    </ul>
  </div>
  <Error v-else></Error>
</template>

<script>
import Error from './Error'

export default {
  name: 'project',
  components: {
    Error
  },
  data () {
    return {
      category: null,
      github: null,
      imageListLength: null,
      title: null,
      url: null,
      project: null
    }
  },
  methods: {
    getProjectJSON () {
      let result = this.$myStore.state.projects.filter((obj) => {
        return obj.slug === this.$route.params.project
      })

      if (result.length) {
        if (result[0].category === this.$route.params.category) {
          this.project = result
          this.category = result[0].category
          this.github = result[0].github
          this.imageListLength = result[0].imageListLength
          this.title = result[0].title
          this.url = result[0].url
        }
      }
    }
  },
  beforeMount () {
    this.getProjectJSON()
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
  background-image: url(/static/images/transp_bg.png);
  box-shadow: 0px 0px 36px 0px rgba(0,0,0,0.25);
  margin: 24px auto 0;
  max-width: 1000px;

  .lazy {
    .spinner:after {
      background-color: #fff;
    }
  }
}
</style>
