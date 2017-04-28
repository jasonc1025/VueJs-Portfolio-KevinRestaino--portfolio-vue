<template>
  <div id="app">
    <h1>Kevin Restaino</h1>
    <MainNav></MainNav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from './components/MainNav'

export default {
  name: 'app',
  components: {
    MainNav
  }
}
</script>

<style>
body {
  padding: 50px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #42b983;
}

h2 {
  margin-top: 30px;
}
</style>
