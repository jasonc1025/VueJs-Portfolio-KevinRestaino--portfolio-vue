<template>
  <div class="resumeStyle">
    <ul>
      <li v-for="job in jobs">

        <div class="title">{{ job.title }}</div>
        <div class="company">{{ job.company }}</div>
        <div class="timePeriod">{{ job.timePeriod.from }} – {{ job.timePeriod.to }}</div>

        <!-- <router-link class="button" tag="a" :to="`${ job.routerLink }`">{{ job.skills_01_head }}Jesus</router-link> -->
        
        <div class="skills" v-if="job.skills_00_head != null && job.skills_00_link != null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_00_link }`" @click.native="store.commit('tabModeSet','00')">{{ job.skills_00_head }}:</router-link>{{ job.skills_00_body }}
        </div>
        <div class="skills" v-else-if="job.skills_00_head != null && job.skills_00_link == null">  
          <b class="skillsHead">{{ job.skills_00_head }}: </b>{{ job.skills_00_body }}
        </div>

        <div class="skills" v-if="job.skills_01_head != null && job.skills_01_link != null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_01_link }`" @click.native="store.commit('tabModeSet','01')">{{ job.skills_01_head }}:</router-link>{{ job.skills_01_body }}
        </div>
        <div class="skills" v-else-if="job.skills_01_head != null && job.skills_01_link == null">  
          <b class="skillsHead">{{ job.skills_01_head }}: </b>{{ job.skills_01_body }}
        </div>

        <div class="skills" v-if="job.skills_02_head != null && job.skills_02_link != null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_02_link }`" @click.native="store.commit('tabModeSet','02')">{{ job.skills_02_head }}:</router-link>{{ job.skills_02_body }}
        </div>
        <div class="skills" v-else-if="job.skills_02_head != null && job.skills_02_link == null">  
          <b class="skillsHead">{{ job.skills_02_head }}: </b>{{ job.skills_02_body }}
        </div>

        <div class="skills" v-if="job.skills_03_head != null && job.skills_03_link != null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_03_link }`" @click.native="store.commit('tabModeSet','03')">{{ job.skills_03_head }}:</router-link>{{ job.skills_03_body }}
        </div>
        <div class="skills" v-else-if="job.skills_03_head != null && job.skills_03_link == null">  
          <b class="skillsHead">{{ job.skills_03_head }}: </b>{{ job.skills_03_body }}
        </div>

        <div class="skills" v-if="job.skills_04_head != null && job.skills_04_link != null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_04_link }`" @click.native="store.commit('tabModeSet','04')">{{ job.skills_04_head }}:</router-link>{{ job.skills_04_body }}
        </div>
        <div class="skills" v-else-if="job.skills_04_head != null && job.skills_04_link == null">  
          <b class="skillsHead">{{ job.skills_04_head }}: </b>{{ job.skills_04_body }}
        </div>

        <div class="skills" v-if="job.skills_05_head != null && job.skills_05_link != null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_05_link }`" @click.native="store.commit('tabModeSet','05')">{{ job.skills_05_head }}:</router-link>{{ job.skills_05_body }}
        </div>
        <div class="skills" v-else-if="job.skills_05_head != null && job.skills_05_link == null">  
          <b class="skillsHead">{{ job.skills_05_head }}: </b>{{ job.skills_05_body }}
        </div>

        <div class="skills" v-if="job.skills_06_head != null && job.skills_06_link != null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_06_link }`" @click.native="store.commit('tabModeSet','06')">{{ job.skills_06_head }}:6</router-link>{{ job.skills_06_body }}
        </div>
        <div class="skills" v-else-if="job.skills_06_head != null && job.skills_06_link == null">  
          <b class="skillsHead">{{ job.skills_06_head }}:66 </b>{{ job.skills_06_body }}
        </div>
        
        <div class="location">{{ job.location }}</div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeComponent',
  data () {
    return {
      jobs: this.$myStore.state.jobs,
      tabMode: this.$myStore.state.tabMode,
      store: this.$myStore
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  text-align: left;  // was 'center'
  
  li {
    margin-top: 1em;  // 30px orig

    .button{      
      padding: 0.5em 2em 0.5em 2em;
      background-color: #ccc;  // was #ddd (too light on large screen)
      margin-right: 0.5em;
      // width: 30em;   // [jwc] not seem to work
    }
    .button:hover {
    background-color: #bbb;  // was #bbb (too light on large screen)
    color: #666;
    }

  }

  .title {
    font-weight: 400;
  }
  .company{
    font-weight: 400;
  }

  // Overall for each 'skills' row
  .skills{
    font-weight: 300;
    font-size: smaller;
    margin: 1em 1em 1em 2em;
  }
  // Enough to provide margin-left for 'skills-non-button' row to left-indent up to 'skills-button' row
  .skillsHead{
    font-weight: 400;
    margin-left: 1em;
    margin-right: 0.5em;
  }
  // Allow 'skills-button' row to have their label left-indent with 'skills-non-button' row
  .button.skillsHead{
    margin-left:-1em;
  }
  
  // Left-Indent flush with above text
  .timePeriod {
    font-size: smaller;
    color: #aaa;
    margin-left: 3em;
    margin-bottom: -0.5em;
  }
  .location {
    font-size: smaller;
    color: #aaa;
    margin-left: 3em;
    margin-top: -0.5em;
  }

}
</style>
