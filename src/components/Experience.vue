<template>
  <div class="resumeStyle">
    <ul>
      <li v-for="job in jobs">

        <div class="title">{{ job.title }}</div>
        <div class="company">{{ job.company }}</div>

        <!-- <router-link class="button" tag="a" :to="`${ job.routerLink }`">{{ job.skills_01_head }}Jesus</router-link> -->
        
        <div class="skills" v-if="job.skills_01_head !=null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_01_link }`" @click.native="store.commit('tabModeSet','0')">{{ job.skills_01_head }}:</router-link>{{ job.skills_01_body }}
        </div>
        <div class="skills" v-if="job.skills_02_head !=null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_02_link }`" @click.native="store.commit('tabModeSet','1')">{{ job.skills_02_head }}:</router-link>{{ job.skills_02_body }}
        </div>
        <div class="skills" v-if="job.skills_03_head !=null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_03_link }`" @click.native="store.commit('tabModeSet','2')">{{ job.skills_03_head }}:</router-link>{{ job.skills_03_body }}
        </div>
        <div class="skills" v-if="job.skills_04_head !=null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_04_link }`" @click.native="store.commit('tabModeSet','3')">{{ job.skills_04_head }}:</router-link>{{ job.skills_04_body }}
        </div>

        <div class="skills" v-if="job.skills_05_head !=null">
          <b class="skillsHead">{{ job.skills_05_head }}: </b>{{ job.skills_05_body }}
        </div>
        <div class="skills" v-if="job.skills_06_head !=null">
          <b class="skillsHead">{{ job.skills_06_head }}: </b>{{ job.skills_06_body }}
        </div>
        
        <div class="skills" v-if="job.skills_08_head !=null">
          <router-link class="button skillsHead" tag="a" :to="`${ job.skills_08_link }`">{{ job.skills_08_head }}:</router-link>{{ job.skills_08_body }}
        </div>

        
        <div class="timePeriod">{{ job.timePeriod.from }} – {{ job.timePeriod.to }}</div>
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
  text-align: center;
  
  li {
    margin-top: 30px;

    .button{      
      padding: 4px 16px;
    }

  }

  .title {
    font-weight: 400;
  }

  .company{
    font-weight: 400;
  }
  .skills{
    font-weight: 300;
  }
  .skillsHead{
    font-weight: 400;
  }

  .timePeriod,
  .location {
    font-size: 14px;
    color: #aaa;
  }

}
</style>
