<template>
  <div class="project" v-if="project">
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
    <nav>
      <div class="container">
        <router-link class="button" tag="a" :to="`/work/${previousProject.category}/${previousProject.slug}`" v-if="previousProject.slug">Previous Project</router-link>
        <span v-html="project.title"></span>
        <router-link class="button" tag="a" :to="`/work/${nextProject.category}/${nextProject.slug}`" v-if="nextProject.slug">Next Project</router-link>
      </div>
    </nav>
    <!-- [jwc] post all images dynamically -->
    <ul class="image">
      <li class="lazy" v-for="n in project.imageListLength">
        <img v-lazy="`/static/work/${project.category}/${project.slug}/${project.slug}-${n}.png`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}-${n}@2x.png 2x`">
        <div class="spinner"></div>
      </li>
    </ul>
  </div>
  <Error v-else></Error>
</template>

<script>
import Error from './Error'
import inView from 'in-view'

export default {
  name: 'project',
  components: {
    Error
  },
  data () {
    return {
      project: {},
      previousProject: {},
      nextProject: {}
    }
  },
  methods: {
    clearLoaded () {
      var list = document.querySelectorAll('.lazy.loaded')
      for (var item of list) {
        item.classList.remove('loaded')
      }
    },
    getProjects () {
      let result = this.$myStore.state.projects.filter((obj) => {
        return obj.slug === this.$route.params.slug
      })

      if (result.length) {
        if (result[0].category === this.$route.params.category) {
          this.project = result[0]
          this.getPreviousProject()
          this.getNextProject()
        }
      }
    },
    getPreviousProject () {
      let result = this.$myStore.state.projects.filter((obj) => {
        return obj.id === this.project.id - 1
      })

      if (result.length) {
        this.previousProject = result[0]
      } else {
        this.previousProject = {}
      }
    },
    getNextProject () {
      let result = this.$myStore.state.projects.filter((obj) => {
        return obj.id === this.project.id + 1
      })

      if (result.length) {
        this.nextProject = result[0]
      } else {
        this.nextProject = {}
      }
    },
    projectNav () {
      let nav = document.querySelector('.project nav')

      inView('.project .details')
        .on('enter', el => {
          nav.classList.remove('visible')
        })
        .on('exit', el => {
          nav.classList.add('visible')
        })
      inView.offset(-50)
    }
  },
  beforeMount () {
    this.getProjects()
  },
  beforeUpdate () {
    this.clearLoaded()
  },
  mounted () {
    this.projectNav()
  },
  watch: {
    '$route.params.slug' () {
      this.getProjects()
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  margin-top: 16px;
  padding: 8px 0;
  position: absolute;
  width: 100%;
  z-index: 10;

  &.visible {
    background-color: #f1f1f1;
    box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.35);
    left: 0;
    margin-top: 0;
    position: fixed;
    top: -100px;
    transform: translateY(100px);
    transition: transform 1s;

    span {
      display: block;
    }
  }
  
  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 800px;
    width: inherit;
  }

  span {
    display: none;
    font-size: 14px;
    font-weight: bold;
  }
}

.project {
  position: relative;
}

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
  margin: 80px auto 0;
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
