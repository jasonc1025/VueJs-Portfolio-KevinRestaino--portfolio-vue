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
      <li v-for="(job_, index_job) in jobs">

        <ul>
          <li>
            <p class="jobGroup">{{ job_.job_group }}</p>
          </li>
          <li class="jobHead">
            <span class="jobTitle">{{ job_.job_title }}</span>
            <span class="jobTimePeriod">{{ job_.job_timePeriod.from }} – {{ job_.job_timePeriod.to }}</span>
          </li>
          <li class="jobBody">
            <span class="jobCompany">{{ job_.job_company }},</span>
            <span class="jobLocation">{{ job_.job_location }}</span>
          </li>
        </ul>

        <div class="skillSub" v-for="(job_sub, index_job_sub) in job_.job_subs">
          <!-- Y <p><span class="fade-in" v-html="'&bull; '+ skill_sub.text"></span></p> -->
          <!-- Y <p><span v-html="skill_sub.text"></span></p> -->
          <p><span v-html="job_sub.text"></span></p>
        </div>


        <div class="skillsGroup" v-for="(skills_group, index_skills_group) in job_.skills_groups">

          <div class="skillsGroupGroup_Class">
            <p class="skillsGroupGroup">{{ skills_group.skills_group_group }}</p>
            <p class="skillsGroupGroupText">{{ skills_group.skills_group_group_text }}</p>
          </div>
          <p class="skillsGroupHead">{{ skills_group.skills_group_name }}</p>
          <!-- Y <p class="skillsGroupBody">&bull; {{ skills_group.skills_group_text }}</p> -->
          <p class="skillsGroupBody" v-html="skills_group.skills_group_text"></p>

          <div class="skill" v-for="(skill_, index_skill) in skills_group.skills">

            <div v-if="skill_.skill_head != null && skill_.skill_link != null">

              <div class="buttonGroup">
                <router-link class="button skillHead" tag="a" :to="`${ skill_.skill_link }`" @click.native="store.commit('tabModeSet','00')">{{ skill_.skill_head }}:</router-link>
                <span class="skillBody">{{ skill_.skill_body }}</span>
              </div>

              <div class="skillSub" v-for="(skill_sub, index_skill_sub) in skill_.skill_subs">
                <!-- Y <p><span class="fade-in" v-html="'&bull; '+ skill_sub.text"></span></p> -->
                <!-- Y <p><span v-html="skill_sub.text"></span></p> -->
                <p><span v-html="skill_sub.text"></span></p>
              </div>

            </div>

            <div v-else-if="skill_.skill_head != null && skill_.skill_link == null">

              <div>
                <b class="skillHead">{{ skill_.skill_head }}: </b>
                <span class="skillBody">{{ skill_.skill_body }}</span>
              </div>

              <div class="skillSub" v-for="(skill_sub, index_Sub) in skill_.skill_subs">
                <!-- Y <p><span class="fade-in" v-html="'&bull; '+ skill_sub.text"></span></p> -->
                <p><span v-html="skill_sub.text"></span></p>
              </div>
            
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
    // margin-top: 1em;  // 30px orig

    .button{      
      padding: 0.5em 2em 0.5em 2em;
      background-color: #ccc;  // was #ddd (too light on large screen)
      // margin-right: 0em;  // was 0.5em
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

  .jobTitle {
    font-weight: 400;
    font-size: larger;
  }
  .jobCompany{
    font-weight: 300;
  }
  .jobGroup {
    font-weight: 400;
  }
  // Left-Indent flush with above text
  .jobTimePeriod {
    font-size: smaller;
    color: #aaa;  // [jwc] better ligher shading vs. 'font-weight'
    // Y margin-left: 3.5em;
    // margin-bottom: -0.5em;
    // text-align: right;
  }
  .jobLocation {
    font-size: smaller;
    color: #aaa;
    // Y margin-left: 3.5em;
    // margin-top: -0.5em;
    // margin-bottom: -0.5em;
    // text-align: right;
  }

  .jobHead{
    display: flex;
    justify-content: space-between;
  }
  .jobBody{
    display: inline-block;
  }
  .jobGroup{
    font-weight: 400;
    font-size: larger;
    display: flex;
    justify-content: center;
    background-color: #ccc;  // light-grey
    padding: 2em;
  }

  .skillsGroup{
    font-weight: 300;
    font-size: medium;
    margin: 1em 1em 1em 1.5em;  // [jwc] change margin-left: 2em;
  }
  // Enough to provide margin-left for 'skillBody-non-button' row to left-indent up to 'skillBody-button' row
  .skillsGroupHead{
    font-weight: 400;
    // margin-left: 1em;
    margin-right: 0.5em;
    font-size: larger;
  }
  .skillsGroupBody{
    font-weight: 300;
    font-size: medium;
    margin: 0.25em 1em 0.25em 1.5em;  // [jwc] change margin-left: 2em;
  }
  .skillsGroupGroup{
    font-weight: 400;
    font-size: larger;
    display: flex;
    justify-content: center;
  }
  .skillsGroupGroupText{
    font-weight: 300;
    font-size: medium;
    display: flex;
    justify-content: center;
  }
  .skillsGroupGroup_Class{
    padding: 0.5em;
    background-color: #d9d9d9;  // light-grey
}

  .skill{
    font-weight: 300;
    font-size: medium;
    margin: 0.5em 1em 0.5em 1.5em;  // [jwc] change margin-left: 2em;
  }
  // Enough to provide margin-left for 'skillBody-non-button' row to left-indent up to 'skillBody-button' row
  .skillHead{
    font-weight: 400;
    // margin-left: 1em;
    // margin-right: 0em;   // was 0.5em
  }
  // Allow 'skillBody-button' row to have their label left-indent with 'skillBody-non-button' row
  .button.skillHead{
    // margin-left: 0em;  // was -1em
    margin-right: 0.5em;
  }
  // Overall for each 'skillBody' row
  .skillBody{
    font-weight: 300;
    font-size: medium;
    // margin: 1em 1em 1em 0.5em;  // [jwc] change margin-left: 2em;
    font-size: smaller;  // keep in mind word-wrap if side-margins shrink due to window-shrink
  }

  .skillSub{
    font-weight: 300;
    font-size: medium;
    // margin: 0.5em 1em 0.5em 1.5em;  // [jwc] change margin-left: 2em;
    margin-left: 1.5em;
  }

  .buttonGroup {
    margin-bottom: 1em;
  }

}
</style>
