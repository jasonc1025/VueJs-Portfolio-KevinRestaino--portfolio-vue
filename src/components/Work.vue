<template>
  <div>
    <ul class="projects">
      <li v-for="project in projects">
        <a :href="'/work/'+project.category+'/'+project.slug">
          <h3>{{ project.title }}</h3>
          <div class="imageContainer lazy">
            <img :data-src="'/static/work/'+project.category+'/'+project.slug+'/'+project.slug+'_thumb.png'" :data-srcset="'/static/work/'+project.category+'/'+project.slug+'/'+project.slug+'_thumb@2x.png 2x'">
            <div class="spinner"></div>
          </div>
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
      projects: this.$myStore.state.projects
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  color: red;
}

.projects {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;

  li {
    width: 100%;

    & + li {
      margin-top: 36px;
    }

    a {
      display: block;
      position: relative;
    }

    h3 {
      color: #fff;
      font-size: 28px;
      font-weight: 100;
      margin-top: -9px;
      opacity: 0;
      padding: 0 16px;
      position: absolute;
      text-align: center;
      transform: translateY(-18px);
      transition: 0.3s;
      top: 50%;
      width: 100%;
      z-index: 1;
    }

    .imageContainer {
      box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35);
      border-radius: 3px;
      overflow: hidden;
      position: relative;

      &::after {
        background-color: rgba(0,0,0,0);
        border-radius: inherit;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: 0.3s;
        width: 100%;
      }
    }

    .lazy {
      min-height: 450px;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
      transition: 0.3s;
    }

    a:hover {
      h3 {
        opacity: 1;
        transform: translateY(0);
      }

      .imageContainer::after {
        background-color: rgba(0,0,0,0.85);
      }
    }
  }
}
</style>
