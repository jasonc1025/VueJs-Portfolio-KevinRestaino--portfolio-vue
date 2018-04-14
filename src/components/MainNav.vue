<template>
  <!-- Y <div class="mainNav" @click="tabMode += 1"> -->
  <!-- <div class="mainNav" @click="setTabMode(100)"> -->
  <div class="mainNav" @click="store.commit('increment')">
    <router-link v-if="tabMode==1" tag="a" to="/projects-react" v-on:click="setTabMode(2)">React</router-link>
    <router-link v-else tag="a" to="/projects-react">React2</router-link>
    <button v-on:click="greet">Greet4

      <router-link tag="a" to="/projects-react" v-on:click="tabMode += 2">React4</router-link>

    </button>
    <button v-on:click="setTabMode(2)">Greet2</button>
    <button v-on:click="tabMode += 1">Greet3</button>

    <router-link tag="a" to="/projects-vue-js" @click.native="tabMode += 1">Vue.js</router-link>
    <!-- <router-link tag="a" to="/projects-node-js" v-on:click="greet">Node.js</router-link> -->
    <!-- <router-link tag="a" to="/projects-node-js" @click.native="setTabMode(100)">Node.js</router-link> -->
    <router-link tag="a" to="/projects-node-js" @click.native="greet">Node.js</router-link>
    <router-link tag="a" to="/projects-javascript-python">Industry-Leading</router-link>
    <!-- <router-link tag="a" to="/work">Work</router-link> -->
    <router-link tag="a" to="/resume">Resume</router-link>
    <!-- [jwc] <a href="https://github.com/krestaino" target="_blank">GitHub</a> -->
    <a href="https://www.linkedin.com/in/kevinrestaino/" target="_blank">LinkedIn</a>
  </div>
</template>

<script>
export default {
  name: 'mainNav',
  data () {
    return {
      tabMode: this.$myStore.state.tabMode,
      store: this.$myStore
    }
  },
  methods: {
    setTabMode (value) {
      this.$myStore.state.tabMode = value
    },
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      // alert('Hello ' + this.name + '!')
      alert(this.tabMode)
      alert(this.$myStore.state.tabMode)

      // tabMode += 1
      this.$myStore.state.tabMode += 1
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }

  }
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
