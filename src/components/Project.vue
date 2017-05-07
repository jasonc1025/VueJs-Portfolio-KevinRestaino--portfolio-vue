<template>
  <div class="work" v-if="project">
    <div class="details">
      <div class="row">
        <div class="col">
          <div>
            <h2 v-html="project.title"></h2>
          </div>
        </div>
        <div class="col buttons">
          <a class="button" target="_blank" :href="project.github" v-if="project.github">GitHub Repo</a>
          <a class="button" target="_blank" :href="project.url">Live Site</a>
        </div>
      </div>
      <div class="row">
        <div class="col ie11Hack">
          <p v-html="project.description"></p>
        </div>
      </div>
    </div>
    <ul class="image">
      <li class="lazy" v-for="n in project.imageListLength">
        <img :data-src="`/static/work/${project.category}/${project.slug}/${project.slug}-${n}.png`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}-${n}@2x.png 2x`">
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
      project: {}
    }
  },
  methods: {
    getProject () {
      let result = this.$myStore.state.projects.filter((obj) => {
        return obj.slug === this.$route.params.slug
      })

      if (result.length) {
        if (result[0].category === this.$route.params.category) {
          this.project = result[0]
        }
      }
    }
  },
  beforeMount () {
    this.getProject()
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
    min-height: 450px;

    &:last-child {
      min-height: 0;
    }

    &:first-child {
      min-height: 450px;
    }
  }
}
</style>
