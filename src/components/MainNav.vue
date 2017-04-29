<template>
  <div class="mainNav">
    <router-link tag="a" to="/">Work</router-link>
    <router-link tag="a" to="/experience">Experience</router-link>
    <a href="https://github.com/krestaino" target="_blank">GitHub</a>
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
  margin: 36px auto;

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
