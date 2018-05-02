<template>
  <!-- Y <div class="mainNav" @click="store.commit('increment')"> -->
  <div class="mainNav">

    <router-link v-if="store.getters.tabModeGet==0" tag="a" to="/home" @click.native="store.commit('tabModeSet','0')"><b>Home</b></router-link>
    <router-link v-else tag="a" to="/home" @click.native="store.commit('tabModeSet','0')">Home</router-link>

    <router-link v-if="store.getters.tabModeGet==6" tag="a" to="/resume" @click.native="store.commit('tabModeSet','6')"><b>Personal Resum&eacute;</b></router-link>
    <router-link v-else tag="a" to="/resume" @click.native="store.commit('tabModeSet','6')">Personal Resum&eacute;</router-link>

    <router-link v-if="store.getters.tabModeGet==7" tag="a" to="/vision" @click.native="store.commit('tabModeSet','7')"><b>Vision:<br>Web & Robotics</b></router-link>
    <router-link v-else tag="a" to="/vision" @click.native="store.commit('tabModeSet','7')">Vision:<br>Web & Robotics</router-link>

    <router-link v-if="store.getters.tabModeGet==1" tag="a" to="/projects-react" @click.native="store.commit('tabModeSet','1')" ><b>Web FrontEnd:<br>JavaScript React</b></router-link>
    <!-- YN causes desktop to be 32px but mobile 16px (not 32px): <router-link v-else tag="a" to="/projects-react" @click.native="store.commit('tabModeSet','1')" style="font-size:32px;">2React</router-link> -->
    <router-link v-else tag="a" to="/projects-react" @click.native="store.commit('tabModeSet','1')">Web FrontEnd:<br>JavaScript React</router-link>
    
    <router-link v-if="store.getters.tabModeGet==2" tag="a" to="/projects-vue-js" @click.native="store.commit('tabModeSet','2')"><b>Web FrontEnd:<br>JavaScript Vue.js</b></router-link>
    <router-link v-else tag="a" to="/projects-vue-js" @click.native="store.commit('tabModeSet','2')">Web FrontEnd:<br>JavaScript Vue.js</router-link>

    <router-link v-if="store.getters.tabModeGet==3" tag="a" to="/projects-node-js" @click.native="store.commit('tabModeSet','3')"><b>Web BackEnd:<br>JavaScript Node.js</b></router-link>
    <router-link v-else tag="a" to="/projects-node-js" @click.native="store.commit('tabModeSet','3')">Web BackEnd:<br>JavaScript Node.js</router-link>

    <router-link v-if="store.getters.tabModeGet==4" tag="a" to="/projects-robotics" @click.native="store.commit('tabModeSet','4')"><b>JavaScript/<br>Python:<br>Robotics</b></router-link>
    <!-- <router-link v-else tag="a" to="/projects-robotics" @click.native="store.commit('tabModeSet','4')" style="text-align:center;"><scan style="text-align:center;">JavaScript/Python:<br>Robotics</scan></router-link> -->
    <router-link v-else tag="a" to="/projects-robotics" @click.native="store.commit('tabModeSet','4')">JavaScript/<br>Python:<br>Robotics</router-link>

    <router-link v-if="store.getters.tabModeGet==5" tag="a" to="/projects-industry-siemens" @click.native="store.commit('tabModeSet','5')"><b>JavaScript/<br>Python:<br>Industry</b></router-link>
    <router-link v-else tag="a" to="/projects-industry-siemens" @click.native="store.commit('tabModeSet','5')">JavaScript/<br>Python:<br>Industry</router-link>

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
    text-align:center;

    &:hover {
      border-bottom: 1px solid;
    }

    + a {
      // margin-left: 16px;
      margin-left: 1.5em;
    }
  }
  b {
    font-weight: bold;
    color:blue;
  }
}
</style>
