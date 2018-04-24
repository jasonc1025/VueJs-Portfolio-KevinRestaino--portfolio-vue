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

  <AccordionMenu :items_Stage01="items_Stage00"></AccordionMenu>

    <!-- NOTE: ':mouseDrag=false' NOT appear to work -->
    <!-- NOTE:  "paginationPadding" "paginationSize" "speed": 'Expected Number, got String.' Warning Yet Code is Correct and Working. Therefore ignore warning. -->
    <!-- <carousel :per-page="1" :autoplay="true" :navigationEnabled="true" :navigate-to="someLocalProperty" :mouse-drag="true"> -->
    <!-- Y <carousel :perPage="1" :autoplay="true" :loop="true" :navigationEnabled="true" :mouseDrag="false" paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize="5" easing="ease" speed="1000"> -->
    <!-- Y <carousel :perPage="1" :autoplay="true" :loop="true" :navigationEnabled="true" :mouseDrag="false" paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize="5" easing="linear" speed="1000"> -->
    <!-- YY <carousel :perPage=1 :autoplay=true :autoplayTimeout=5000 :loop=false :navigationEnabled=true :mouseDrag=false paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize=20 paginationPadding=20 easing="ease" speed=1000> -->
    <carousel :perPage=1 :autoplay=true :autoplayTimeout=5000 :loop=true :navigationEnabled=true :mouseDrag=false paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize=20 paginationPadding=10 easing="ease" speed=1000>
      <slide>
        <h2>Based on Stack Overflow's Worldwide 2018 Poll of 100,000 Developers,<br>JavaScript, CSS, HTML (All Web-Based Tools) are Top 3 in Popularity</h2>
        <!-- <img :src="/static/work/${project.category}/${project.slug}/${project.slug}_thumb.png"> -->
        <!-- <img :src="/static/work/javascript-python-dir/11h-ArduBlockly-EandE/11h-ArduBlockly-EandE_thumb.png"> -->
        <!-- <img :src="http\://image.iqing.in/recommend/613890e9-3e5d-4acd-afae-003201e1d86d.jpg-cover"> -->
        <!-- Y src="\static\work\javascript-python-dir\11h-ArduBlockly-EandE\11h-ArduBlockly-EandE_thumb.png"> -->
        <!-- NOTE: ':src' not work, possibly in a non-vue '<img>' -->
        <!-- Y <img src="/static/work/javascript-python-dir/11h-ArduBlockly-EandE/11h-ArduBlockly-EandE_thumb.png"> -->
        <img src="/static/work/mystory-dir/Stackoverflow-MostPopularTech-JavaScript.png">
      </slide>
      <slide>
        <h2>Based on GitHub's 3-Year Star-Ratings of Top 3 JS Frameworks,<br>Vue.js #1 in Greatest Momentum (React #2)</h2>
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
        <div class="location">{{ job.location }}</div>

        <!-- <router-link class="button" tag="a" :to="`${ job.routerLink }`">{{ job.skill_01_head }}Jesus</router-link> -->
        
        <div class="skills" v-for="(skills_group, index) in job.skills_groups">

          <b class="skills">{{ skills_group.skills_group_name }}: </b>

          <div class="skills" v-for="(skill, index) in skills_group.skills">

            <div class="skills" v-if="skill.skill_head != null && skill.skill_link != null">

              <router-link class="button skillsHead" tag="a" :to="`${ skill.skill_link }`" @click.native="store.commit('tabModeSet','00')">{{ skill.skill_head }}:</router-link>{{ skill.skill_body }}

              <div class="skills" v-for="(skill_sub, index_Sub) in skill.skill_subs">
                <p><span class="fade-in" v-html="'&bull; '+ skill_sub.text"></span></p>
              </div>

            </div>

            <div class="skills" v-else-if="skill.skill_head != null && skill.skill_link == null">  
              <b class="skillsHead">{{ skill.skill_head }}: </b>{{ skill.skill_body }}
            </div>

          </div>

        </div>
        
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
      items_Stage00: [
        {
          title: 'How are you?',
          // msg: 'Test for fun! asjdf kasjfd;l \n\n\n a;skdfja;sljdfksadj ;fljas lk;fj sak;lfj las;kj f;klasdj f;kasjdkfl;ajs dfjsa akdsf<br>Line2abc<br />Line3'
          msg: 'Test for fun! asjdf kasjfd;l a;skdfja;sljdfksadj ;fljas lk;fj sak;lfj las;kj f;klasdj f;kasjdkfl;ajs dfjsa akdsf<br>Line2abc<br>Line3',
          itemsSub: [
            {text: 'test1<br>test1.1<br>test1.2'},
            {text: 'test2<br>test2.1<br>test2.2'},
            {text: 'test3<br>test3.1<br>test3.2'}
          ]
        },
        {
          title: 'Who let the dog out?',
          msg: 'I do not know, dude.',
          itemsSub: [
            {text: 'test1a<br>test1.1<br>test1.2'},
            {text: 'test2a<br>test2.1<br>test2.2'},
            {text: 'test3a<br>test3.1<br>test3.2'}
          ]
        },
        {
          title: '肚子好餓?',
          msg: '吃芭樂啦！',
          itemsSub: [
            {text: 'test1b<br>test1.1<br>test1.2'},
            {text: 'test2b<br>test2.1<br>test2.2'},
            {text: 'test3b<br>test3.1<br>test3.2'}
          ]
        },
        {
          title: 'Find hotels?',
          msg: 'Trivago！',
          itemsSub: [
            {text: 'test1c<br>test1.1<br>test1.2'},
            {text: 'test2c<br>test2.1<br>test2.2'},
            {text: 'test3c<br>test3.1<br>test3.2'}
          ]
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

    .fade-in {
      opacity: 1;
      animation-name: fadeInOpacity;
      animation-iteration-count: 1;
      animation-timing-function: ease-out;
      animation-duration: 1s;
    }

    @keyframes fadeInOpacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
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
    font-size: small;
    margin: 1em 1em 1em 1em;  // [jwc] change margin-left: 2em;
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
