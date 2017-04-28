<template>
  <div class="mainNav">
    <router-link tag="a" to="/">Portfolio</router-link>
    <router-link tag="a" to="/resume">Resume</router-link>
    <span>|</span>
    <a href="https://github.com/krestaino">GitHub</a>
    <a href="https://www.linkedin.com/in/kevinrestaino/">LinkedIn</a>
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

  a, span {
    margin-left: 16px;

    &:first-child {
      margin-left: 0;
    }

    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
