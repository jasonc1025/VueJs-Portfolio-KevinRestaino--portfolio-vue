<template>
  <div class="divStyle">
    <ul class="ulStyle">
      <!--Y <li v-for="project in projects" v-if="project.category=='javascript-python'"> -->
      <li v-for="project in projects" v-if="project.category==projectCategory">

        <a class="button" target="_blank" :href="project.url">
        <!-- <router-link tag="a" :to="`/work/${project.category}/${project.slug}`"> -->
        
          <!-- [jwc] Need to embed both 'title' fields in the same '<h3>' with a '<b>' inbetween -->
          <h3 v-if="project.url !==''">60-sec Screencast Now Playing<br>- or -<br>Press to Enter Live Demo Site:<br>{{ project.title }}<br>{{ project.title02 }}</h3>
          <h3 v-else-if="project.url ===''">60-sec Screencast Now Playing:<br>{{ project.title }}<br>{{ project.title02 }}</h3>
          <!-- [jwc] not work, will overlay prior <h3>{{ project.title02 }}</h3> -->
          <!-- <h3> Hello2 {{ project.title }} </h3> -->
          <h1> {{ project.headLine00 }} </h1>
          <h2> &bull; Front-End: <b> {{ project.headLine01 }} </b> </h2>
          <h2> &bull; Back-End: <b> {{ project.headLine02 }} </b> </h2>
          <!-- <p> Hello2 {{ project.title }} </p> -->

          <!-- Y <a class="button" target="_blank" :href="project.url">Live Site</a> -->

          <div class="imageContainer lazy">
            <!-- [jwc]+x -->
            <!-- [jwc]orig: <img v-lazy="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.png`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb@2x.png 2x`"> -->
            <!-- Y <img v-lazy="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.png`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.png`"> -->
            <!-- Y <img v-lazy="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.gif`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb@2x.gif 2x`"> -->
            <img v-lazy="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb.gif`" :data-srcset="`/static/work/${project.category}/${project.slug}/${project.slug}_thumb@2x.gif 2x`">
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
  name: 'WorkIndustrySiemensComponent',
  data () {
    return {
      // projects: this.$myStore.state.projectsJavascriptPython
      projects: this.$myStore.state.projects,
      projectCategory: 'industry-siemens-dir'
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/_workStyleSheet.scss';

// h1 {
//   // [jwc]+2 color: red;
//   font-size: 16px;
//   font-weight: 400;
//   text-align: left;
//   text-decoration: underline;
//   color:blue;}
// h2 {
//   // [jwc]+2 color: red;
//   font-size: 16px;
//   font-weight: 200;
//   text-align: left;
// }
// b { 
//     font-weight: bold;
// }

// .ulStyle {
//   display: flex;
//   flex-wrap: wrap;

//   li {
//     width: 100%;

//     & + li {
//       margin-top: 36px;
//     }

//     a {
//       display: block;
//       position: relative;
//     }

//     h3 {
//       color: #fff;
//       font-size: 28px;
//       font-weight: 100;
//       margin-top: -9px;
//       opacity: 0;
//       padding: 0 16px;
//       position: absolute;
//       text-align: center;
//       // [jwc]+1 transform: translateY(-18px);
//       transform: translateY(-100px);
//       // [jwc] transition: 0.3s;
//       transition:1s;
//       top: 45%;  // [jwc] was 50% (too low)
//       width: 100%;
//       z-index: 1;
//     }

//     .imageContainer {
//       border-radius: 3px;
//       overflow: hidden;
//       position: relative;

//       &.loaded {
//         box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.35);
//       }

//       &::after {
//         background-color: rgba(0,0,0,0);
//         border-radius: inherit;
//         content: '';
//         height: 100%;
//         left: 0;
//         position: absolute;
//         top: 0;
//         transition: 0.3s;
//         width: 100%;
//       }
//     }

//     .lazy {
//       min-height: 450px;
//     }

//     img {
//       display: block;
//       height: auto;
//       max-width: 100%;
//     }

//     a:hover {
//       h3 {
//         opacity: 1;
//         transform: translateY(0);
//       }

//       .imageContainer::after {
//         background-color: rgba(0,0,0,0.85);
//       }
//     }
//     .button:hover {
//     opacity: 0.5;
//     }
//   }
// }
</style>
