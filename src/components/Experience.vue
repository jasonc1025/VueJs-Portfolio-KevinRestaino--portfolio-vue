<template>
  <div class="resumeStyle">
    <!-- <alert v-model="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
      <span class="icon-ok-circled alert-icon-float-left"></span>
      <strong>Well Done!</strong>
      <p>You successfully read this important alert message.</p>
    </alert> -->

  <!-- <vue-accordion 
      :items="items" 
      :accordionClass="acClass" 
      :styles="styles"
      >
  </vue-accordion> -->

  <!-- <accordion :items="items" :id="mandatory-id" :collapseAll="false"></accordion> -->

  <AccordionMenu :contents="contents"></AccordionMenu>

    <!-- NOTE: ':mouseDrag=false' NOT appear to work -->
    <!-- NOTE:  "paginationPadding" "paginationSize" "speed": 'Expected Number, got String.' Warning Yet Code is Correct and Working. Therefore ignore warning. -->
    <!-- <carousel :per-page="1" :autoplay="true" :navigationEnabled="true" :navigate-to="someLocalProperty" :mouse-drag="true"> -->
    <!-- Y <carousel :perPage="1" :autoplay="true" :loop="true" :navigationEnabled="true" :mouseDrag="false" paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize="5" easing="ease" speed="1000"> -->
    <!-- Y <carousel :perPage="1" :autoplay="true" :loop="true" :navigationEnabled="true" :mouseDrag="false" paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize="5" easing="linear" speed="1000"> -->
    <!-- YY <carousel :perPage=1 :autoplay=true :autoplayTimeout=5000 :loop=false :navigationEnabled=true :mouseDrag=false paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize=20 paginationPadding=20 easing="ease" speed=1000> -->
    <carousel :perPage=1 :autoplay=true :autoplayTimeout=5000 :loop=true :navigationEnabled=true :mouseDrag=false paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize=20 paginationPadding=10 easing="ease" speed=1000>
      <slide>
        <h2>Based on GitHub's 3-Year Star-Ratings of Top 3 JS Frameworks,<br>Vue.js #1 in Greatest Momentum (React #2)</h2>
        <!-- <img :src="/static/work/${project.category}/${project.slug}/${project.slug}_thumb.png"> -->
        <!-- <img :src="/static/work/javascript-python-dir/11h-ArduBlockly-EandE/11h-ArduBlockly-EandE_thumb.png"> -->
        <!-- <img :src="http\://image.iqing.in/recommend/613890e9-3e5d-4acd-afae-003201e1d86d.jpg-cover"> -->
        <!-- Y src="\static\work\javascript-python-dir\11h-ArduBlockly-EandE\11h-ArduBlockly-EandE_thumb.png"> -->
        <!-- NOTE: ':src' not work, possibly in a non-vue '<img>' -->
        <!-- Y <img src="/static/work/javascript-python-dir/11h-ArduBlockly-EandE/11h-ArduBlockly-EandE_thumb.png"> -->
        <img src="/static/work/mystory-dir/BestOfJsDotOrg-UiFramework-GithubStars.png">
      </slide>
      <slide>
        <h2>Based on Worldwide 2017 Poll of 28,000 JS Developers,<br>Vue.js #1 in Potential Market for Training (React #2)</h2>
        <img src="/static/work/mystory-dir/VueVsReact-StateOfJsDotCom.png">
      </slide>
      <slide>
        <h2>Based on GitHub's 2017 Star-Ratings of All JS Projects,<br>Vue.js #1 in Popularity (React #2)</h2>
        <img src="/static/work/mystory-dir/VueVsReact-RisingStarsDotJsDotOrg.png">
      </slide>
    </carousel>



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
      store: this.$myStore,
      // * '\n' does not work.  Yet '<br>' works.
      contents: [
        {
          title: 'How are you?',
          // msg: 'Test for fun! asjdf kasjfd;l \n\n\n a;skdfja;sljdfksadj ;fljas lk;fj sak;lfj las;kj f;klasdj f;kasjdkfl;ajs dfjsa akdsf<br>Line2abc<br />Line3'
          msg: 'Test for fun! asjdf kasjfd;l a;skdfja;sljdfksadj ;fljas lk;fj sak;lfj las;kj f;klasdj f;kasjdkfl;ajs dfjsa akdsf<br>Line2abc<br>Line3',
          sub: [
            {test: 'test1<br>test1.1<br>test1.2'},
            {test: 'test2<br>test2.1<br>test2.2'},
            {test: 'test3<br>test3.1<br>test3.2'}
          ]
        },
        {
          title: 'Who let the dog out?',
          msg: 'I do not know, dude.'
        },
        {
          title: '肚子好餓?',
          msg: '吃芭樂啦！'
        },
        {
          title: 'Find hotels?',
          msg: 'Trivago！'
        }
      ]
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
