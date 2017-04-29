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
  },
  data () {
    return {
      projects: [
        {
          category: 'shure',
          title: 'Axient Digital',
          imageParts: 10
        }
      ]
    }
  }
}
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 18px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  padding: 50px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  max-width: 1000px;
}

a {
  color: #42b983;
  text-decoration: none;
}

h2 {
  margin-top: 30px;
}
</style>
