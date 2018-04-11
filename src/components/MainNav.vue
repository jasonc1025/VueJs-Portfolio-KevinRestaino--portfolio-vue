<template>
  <div class="mainNav">
    <router-link tag="a" to="/work-react">React</router-link>
    <router-link tag="a" to="/work-vue-js">Vue.js</router-link>
    <router-link tag="a" to="/work-node-js">Node.js</router-link>
    <router-link tag="a" to="/work-javascript-python">JavaScript/Python</router-link>
    <!-- <router-link tag="a" to="/work">Work</router-link> -->
    <router-link tag="a" to="/experience">Experience</router-link>
    <!-- [jwc] <a href="https://github.com/krestaino" target="_blank">GitHub</a> -->
    <a href="https://www.linkedin.com/in/kevinrestaino/" target="_blank">LinkedIn</a>
  </div>
</template>

<script>
export default {
  name: 'mainNav'
}
</script>

<style scoped lang="scss">
.mainNav {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 9px auto 26px;

  a {
    border-bottom: 1px solid transparent;
    transition: 0.3s;

    &:hover {
      border-bottom: 1px solid;
    }

    + a {
      margin-left: 16px;
    }
  }
}
</style>
