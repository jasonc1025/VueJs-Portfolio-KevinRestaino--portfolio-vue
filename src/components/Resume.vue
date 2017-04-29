<template>
  <div class="resume">
    <ul>
      <li v-for="job in jobs">
        <div class="title">{{ job.title }}</div>
        <div class="company">{{ job.company }}</div>
        <div class="location">{{ job.location }}</div>
        <div class="timePeriod">{{ job.timePeriod.from }} – {{ job.timePeriod.to }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      jobs: this.$myStore.state.jobs
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  text-align: center;
  
  li {
    margin-top: 30px;
  }
}
</style>
