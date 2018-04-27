<template>
  <!-- Y <div class="mainNav" @click="store.commit('increment')"> -->
  <div class="mainNav">

    <router-link v-if="store.getters.tabModeGet==0" tag="a" to="/home" @click.native="store.commit('tabModeSet','0')"><b>Home</b></router-link>
    <router-link v-else tag="a" to="/home" @click.native="store.commit('tabModeSet','0')">Home</router-link>

    <router-link v-if="store.getters.tabModeGet==1" tag="a" to="/projects-react" @click.native="store.commit('tabModeSet','1')"><b>React</b></router-link>
    <router-link v-else tag="a" to="/projects-react" @click.native="store.commit('tabModeSet','1')">React</router-link>
    
    <router-link v-if="store.getters.tabModeGet==2" tag="a" to="/projects-vue-js" @click.native="store.commit('tabModeSet','2')"><b>Vue.js</b></router-link>
    <router-link v-else tag="a" to="/projects-vue-js" @click.native="store.commit('tabModeSet','2')">Vue.js</router-link>

    <!--Y <router-link tag="a" to="/projects-node-js" @click.native="store.commit('increment')">Node.js</router-link> -->
    <!--Y <router-link tag="a" to="/projects-javascript-python" @click.native="store.commit('tabModeSet', 100)">Industry-Leading</router-link> -->

    <router-link v-if="store.getters.tabModeGet==3" tag="a" to="/projects-node-js" @click.native="store.commit('tabModeSet','3')"><b>Node.js</b></router-link>
    <router-link v-else tag="a" to="/projects-node-js" @click.native="store.commit('tabModeSet','3')">Node.js</router-link>

    <router-link v-if="store.getters.tabModeGet==4" tag="a" to="/projects-javascript-python" @click.native="store.commit('tabModeSet','4')"><b>Robotics</b></router-link>
    <router-link v-else tag="a" to="/projects-javascript-python" @click.native="store.commit('tabModeSet','4')">Robotics</router-link>

    <router-link v-if="store.getters.tabModeGet==5" tag="a" to="/projects-industry" @click.native="store.commit('tabModeSet','5')"><b>Industry:Siemens</b></router-link>
    <router-link v-else tag="a" to="/projects-industry" @click.native="store.commit('tabModeSet','5')">Industry:Siemens</router-link>

    <router-link v-if="store.getters.tabModeGet==6" tag="a" to="/resume" @click.native="store.commit('tabModeSet','6')"><b>Resum&eacute;</b></router-link>
    <router-link v-else tag="a" to="/resume" @click.native="store.commit('tabModeSet','6')">Resum&eacute;</router-link>

    <!-- [jwc] <a href="https://github.com/krestaino" target="_blank">GitHub</a> -->
    <!-- <a href="https://www.linkedin.com/in/jasonwchan1025/" target="_blank">LinkedIn</a> -->

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
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      // alert('Hello ' + this.name + '!')
      // Y this.tabMode += 10
      // Y this.$myStore.state.tabMode += 100
      console.log('this.tabMode: ' + this.tabMode)
      console.log('this.$myStore.state.tabMode: ' + this.$myStore.state.tabMode)
      console.log('')
      // Y  // `event` is the native DOM event
      // if (event) {
      //   alert(event.target.tagName)
      // }
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
  b {
    font-weight: bold;
    color:blue;
  }
}
</style>
