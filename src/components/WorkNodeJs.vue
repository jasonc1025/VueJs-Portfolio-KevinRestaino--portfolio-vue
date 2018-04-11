<template>
  <div class="divStyle">
    <ul class="ulStyle">
      <li v-for="project in projects">

        <a class="button" target="_blank" :href="project.url">
        <!-- <router-link tag="a" :to="`/work/${project.category}/${project.slug}`"> -->
        
          <!-- [jwc] Need to embed both 'title' fields in the same '<h3>' with a '<b>' inbetween -->
          <h3>Press to Enter Demo Site: <br> {{ project.title }}... <br> {{ project.title02 }}</h3>
          <!-- [jwc] not work, will overlay prior <h3>{{ project.title02 }}</h3> -->
          <!-- <h3> Hello2 {{ project.title }} </h3> -->
          <h2> {{ project.headerLine01 }} </h2>
          <h2> {{ project.headerLine02 }} </h2>
          <!-- <p> Hello2 {{ project.title }} </p> -->

          <!-- Y <a class="button" target="_blank" :href="project.url">Live Site</a> -->

          <div class="imageContainer lazy">
            <!-- [jwc]+x -->
            <!-- [jwc]orig: <img v-lazy="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.png`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb@2x.png 2x`"> -->
            <img v-lazy="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.png`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.png`">
            <!-- Y <img v-lazy="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.gif`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb@2x.gif 2x`"> -->
            <div class="spinner"></div>
          </div>

        <!-- </router-link> -->
        </a>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WorkNodeJsComponent',
  data () {
    return {
      projects: this.$myStore.state.projectsNodeJs
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  // [jwc]+2 color: red;
  font-size: 18px;
  font-weight: 400;

}

.ulStyle {
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
      border-radius: 3px;
      overflow: hidden;
      position: relative;

      &.loaded {
        box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.35);
      }

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
