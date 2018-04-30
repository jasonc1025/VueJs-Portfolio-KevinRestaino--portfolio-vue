<template>
  <div class="resumeStyle">

    <ul>
      <!-- <li v-for="(job_, index_job) in jobs" :key='index_job'> -->
      <!-- YN seems to fixed duplicate key, yet still elint warn:  <li v-for="(job_, index_job) in jobs" :key='job_.id'> -->
      <li v-for="(job_) in jobs" :key='job_.id'>

        <div v-if="job_.job_group_name!=null" class="jobGroup">
          <p class="jobGroupName">{{ job_.job_group_name }}</p>
          <p class="jobGroupText">{{ job_.job_group_text }}</p>
        </div>

        <div v-if="job_.job_title!=null" class="job">
          <ul>
            <li class="jobHead">
              <!-- Y <span class="jobTitle" v-html="job_.job_title">{{ job_.job_title }}</span> -->
              <!-- <span class="jobTitle" style="font-size:30px" v-html="job_.job_title"></span> -->
              <!-- <span class="jobTitle" v-html="job_.job_title"></span> -->
              <span class="jobTitle" v-html="job_.job_title">{{ job_.job_title }}</span>
              <span class="jobTimePeriod">{{ job_.job_timePeriod.from }} – {{ job_.job_timePeriod.to }}</span>
            </li>
            <li class="jobBody">
              <span>
                <span class="jobCompany">{{ job_.job_company }},</span>
                <span class="jobLocation">{{ job_.job_location }}</span>
                <span v-if="job_.job_url!=null"><a class="jobUrl" v-bind:href="job_.job_url"><u>{{job_.job_url}}</u></a></span>
              </span>
              <span>
                <span v-if="job_.job_ageRange!=null" class="jobAgeRange">{{job_.job_ageRange}}</span>
              </span>

            </li>
          </ul>
        </div>

        <!-- Y <div class="jobChild" v-for="(job_child, index_job_child) in job_.job_childs" :key='index_job_child'> -->
        <!-- <div v-for="(job_child, index_job_child) in job_.job_childs" :key='index_job_child'> -->
        <!-- YN seems to fixed duplicate key, yet still elint warn: <div v-for="(job_child, index_job_child) in job_.job_childs" :key='job_child.id'> -->
        <div v-for="(job_child) in job_.job_childs" :key='job_child.id'>

          <!-- Y <p><span class="fade-in" v-html="'&bull; '+ skill_child.text"></span></p> -->
          <!-- Y <p><span v-html="skill_child.text"></span></p> -->
          <!-- YY <p><span class="jobChild" v-html="job_child.text"></span></p> -->
          <!-- YY <p><span class="jobChild" v-html="job_child.text"></span></p> -->
          <!-- YY <p><span class="jobChild" style="font-size:16px" v-html="job_child.text"></span></p> -->
          <!-- N <p><span class="jobChild" style="font-size:$fontSize_Standard" v-html="job_child.text"></span></p> -->
          <!-- YY desktop and mobile AHG: <p><span class="jobChild" style="font-size:medium" v-html="job_child.text"></span></p> -->
          <!-- Y <p><span class="jobChild" v-html="job_child.text"></span></p> -->
          <!-- <p><span class="jobChild" {{job_child.text}}></span></p> -->
          <!-- YY desktop and mobile AHG: <p><span class="jobChild" style="font-size:medium" v-html="job_child.text"></span></p> -->
          <!-- Y <p><span class="jobChild" style="font-size:medium" v-html="job_child.text"></span></p> -->
          <!-- <p><span class="jobChild" style="font-size:16px" v-html="job_child.text"></span></p> -->
          <p><span class="jobChild" v-html="job_child.text"></span></p>
        </div>

        <!-- YN seems to fixed duplicate key, yet still elint warn: <div class="skillsGroup" v-for="(skills_group, index_skills_group) in job_.skills_groups" :key='index_skills_group'> -->
        <div class="skillsGroup" v-for="(skills_group) in job_.skills_groups" :key='skills_group.id'>

          <div v-if="skills_group.skills_group_group_name!=null || skills_group.skills_group_group_text!=null" class="skillsGroupGroup">
            <p v-if="skills_group.skills_group_group_name!=null" class="skillsGroupGroupName">{{ skills_group.skills_group_group_name }}</p>
            <!-- Y <p class="skillsGroupGroupText">{{ skills_group.skills_group_group_text }}</p> -->
            <p v-if="skills_group.skills_group_group_text!=null" class="skillsGroupGroupText" v-html="skills_group.skills_group_group_text"></p>
          </div>

          <div v-if="skills_group.skills_group_name!=null" class="skillsGroupName">
            <!-- Y <span class="skillsGroupHead">{{ skills_group.skills_group_name }}</span> -->
            <span v-if="skills_group.skills_group_name!=null" class="skillsGroupHead" v-html="skills_group.skills_group_name"></span>
            <span>
              <!-- <span v-if="skills_group.skills_group_timePeriod.from!=null" class="skillsGroupTimePeriod">{{ skills_group.skills_group_timePeriod.from }}</span><span v-if="skills_group.skills_group_timePeriod.to!=null"> – {{ skills_group.skills_group_timePeriod.to }}</span> -->
              <span v-if="skills_group.skills_group_timePeriod.from!=null" class="skillsGroupTimePeriod">{{ skills_group.skills_group_timePeriod.from }}</span>
              <span v-if="skills_group.skills_group_timePeriod.to!=null" class="skillsGroupTimePeriod"> – {{ skills_group.skills_group_timePeriod.to }}</span>
            </span>
          </div>
          <div class="skillsGroupText">
            <!-- Y <p class="skillsGroupBody">&bull; {{ skills_group.skills_group_text }}</p> -->
            <span v-if="skills_group.skills_group_text!=null" class="skillsGroupBody" v-html="skills_group.skills_group_text"></span>
            <span v-if="skills_group.skills_group_ageRange!=null" class="skillsGroupAgeRange">{{skills_group.skills_group_ageRange}}</span>
          </div>

          <!-- YN seems to fixed duplicate key, yet still elint warn: <div class="skill" v-for="(skill_, index_skill) in skills_group.skills" :key='index_skill'> -->
          <div class="skill" v-for="(skill_) in skills_group.skills" :key='skill_.id'>

            <div v-if="skill_.skill_head != null && skill_.skill_link != null">

              <div class="buttonGroup">
                <!-- Y <router-link class="button skillHead" tag="a" :to="`${ skill_.skill_link }`" @click.native="store.commit('tabModeSet','00')">{{ skill_.skill_head }}:</router-link> -->
                <!-- ? <router-link class="button skillHead" tag="a" :to="`${ skill_.skill_link }`" @click.native="store.commit('tabModeSet','`${ skill_.skill_link_tab_num }`')">{{ skill_.skill_head }}:</router-link> -->
                <router-link v-if="skill_.skill_link_tab_index==='0'"  class="button skillHead" tag="a" :to="`${ skill_.skill_link }`" @click.native="store.commit('tabModeSet','00')">{{ skill_.skill_head }}</router-link>
                <router-link v-if="skill_.skill_link_tab_index==='1'"  class="button skillHead" tag="a" :to="`${ skill_.skill_link }`" @click.native="store.commit('tabModeSet','01')">{{ skill_.skill_head }}</router-link>
                <router-link v-if="skill_.skill_link_tab_index==='2'"  class="button skillHead" tag="a" :to="`${ skill_.skill_link }`" @click.native="store.commit('tabModeSet','02')">{{ skill_.skill_head }}</router-link>
                <router-link v-if="skill_.skill_link_tab_index==='3'"  class="button skillHead" tag="a" :to="`${ skill_.skill_link }`" @click.native="store.commit('tabModeSet','03')">{{ skill_.skill_head }}</router-link>
                <router-link v-if="skill_.skill_link_tab_index==='4'"  class="button skillHead" tag="a" :to="`${ skill_.skill_link }`" @click.native="store.commit('tabModeSet','04')">{{ skill_.skill_head }}</router-link>
                <!-- Y <a v-if="skill_.skill_link_tab_index==='5'"  class="button skillHead" href="http://www.eande.world">{{ skill_.skill_head }}:</a> -->
                <!-- <a N v-if="skill_.skill_link_tab_index==='5'"  class="button skillHead" :href="`$(skill_.skill_link)`">{{ skill_.skill_link }}:</a> -->
                <a v-if="skill_.skill_link_tab_index==='5'"  class="button skillHead" href="http://www.eande.world" target="_blank">{{ skill_.skill_head }}:</a>
                <span class="skillBody">{{ skill_.skill_body }}</span>
              </div>

              <!-- YN seems to fixed duplicate key, yet still elint warn: <div class="skillChild" v-for="(skill_child, index_skill_child) in skill_.skill_childs" :key='index_skill_child'> -->
              <div class="skillChild" v-for="(skill_child) in skill_.skill_childs" :key='skill_child.id'>

                <!-- Y <p><span class="fade-in" v-html="'&bull; '+ skill_child.text"></span></p> -->
                <!-- Y <p><span v-html="skill_child.text"></span></p> -->
                <!-- Y/N this 'class="skillUrl"' does work but not w/i v-html: <p><span class="skillUrl" v-html="skill_child.text"></span></p> -->
                <p><span v-html="skill_child.text"></span></p>
              </div>

            </div>

            <div v-else-if="skill_.skill_head != null && skill_.skill_link == null">

              <div>
                <b class="skillHead">{{ skill_.skill_head }}</b>
                <span class="skillBody">{{ skill_.skill_body }}</span>
              </div>

              <!-- YN seems to fixed duplicate key, yet still elint warn: <div class="skillChild" v-for="(skill_child, index_child) in skill_.skill_childs" :key='index_child'> -->
              <div class="skillChild" v-for="(skill_child) in skill_.skill_childs" :key='skill_child.id'>
                <!-- Y <p><span class="fade-in" v-html="'&bull; '+ skill_child.text"></span></p> -->
                <p><span v-html="skill_child.text"></span></p>
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

// [test]
// $fontSize_Bullet: small;
// $fontSize_Header: large;
// $fontSize_Url: small;
$fontSize_Bullet: smaller; // 80%; // 40%; // 80%;  // smaller;  // 20px;
$fontSize_Standard: medium; 
$fontSize_Header: larger;  // 40px;
$fontSize_Url: smaller;  // 20px;



$backgroundColor_LightGrey: #d9d9d9;  // rgb(217, 217, 217);
$backgroundColor_DarkGrey: #bbb;  // rgb(187, 187, 187);
$backgroundColor_Black: #000000 ;  // rgba(0, 0, 0, 1)


ul {
  text-align: left;  // was 'center'
  
  li {
    // margin-top: 1em;  // 30px orig
    // Y list-style-type: disc; 

    .button{      
      padding: 0.5em 1em 0.5em 1em;
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
}
  .job{
    // [jwc] to major of a group for such a light color; use darkest background since most major group: background-color: #ccc;  // light-grey
    // background-color: #ccc;  // light-grey
    background-color: $backgroundColor_DarkGrey;  // dark-grey
    // color:lightgray;
    padding: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    // font-size:16px; // [test]
    // font-size: 100%;// $fontSize_Standard; // [test2]
  }
  .jobHead{
    display: flex;
    justify-content: space-between;
    // font-size: 16px;// $fontSize_Standard; // [test2]
  }
  .jobBody{
    display: inline-block;
    display: flex;
    justify-content: space-between;
  }
  .jobChild {
    font-weight: 300;
    // font-size: medium;
    // font-size: $fontSize_Standard;  // AHG YN for Desktop and Mobile
    // [test]
    // font-size: 13px;
    // font-size: medium;

    // margin: 0.5em 1em 0.5em 1.5em;  // [jwc] change margin-left: 2em;
    margin-left: 1.5em;
  }

  .jobTitle {
    font-weight: 400;
    // font-size: large;
    // font-size: // YN 32px; on mobile fakes a 16px in looks/screen //24px  // $fontSize_Standard; /// Y 32px;// $fontSize_Standard; // [test2]
  }
  .jobCompany{
    font-weight: 400;
  }
  // Left-Indent flush with above text
  .jobTimePeriod {
    font-size: $fontSize_Bullet;
    // color: #aaa;  // [jwc] better ligher shading vs. 'font-weight'
    // Y margin-left: 3.5em;
    // margin-bottom: -0.5em;
    // text-align: right;
  }
  .jobLocation {
    font-size: $fontSize_Bullet;
    // color: #aaa;
    // Y margin-left: 3.5em;
    // margin-top: -0.5em;
    // margin-bottom: -0.5em;
    // text-align: right;
  }
  .jobUrl {
    font-size: $fontSize_Url;
    color: blue;
    // Y margin-left: 3.5em;
    // margin-top: -0.5em;
    // margin-bottom: -0.5em;
    // text-align: right;
    margin-left: 0.5em;
    text-decoration-line: underline;
  }
  .jobAgeRange{
    font-size: $fontSize_Bullet;
    // color: #aaa;  // [jwc] better ligher shading vs. 'font-weight'
  }

  .jobGroup{
    // [jwc] too major of a group for such a light color; use darkest background since most major group: background-color: #ccc;  // light-grey
    background-color: $backgroundColor_Black;
    color:lightgray;
    padding: 1.5em;  // was 2.0em
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .jobGroupName{
    font-weight: 400;
    font-size: $fontSize_Header;
    display: flex;
    justify-content: center;
  }
  .jobGroupText{
    font-weight: 300;
    font-size: $fontSize_Bullet;
    display: flex;
    justify-content: center;
  }

  .skillsGroupGroup{
    // padding: 0.5em;
    margin-bottom: 1em;
    // [jwc]reserve shading for major sections, this minor section use grey-line: background-color: #d9d9d9;  // light-grey 
    // background-color: #ccc;  // light-grey 
    background-color: $backgroundColor_LightGrey;  // lighter-grey 
    padding: 0.5em;
    // margin-left: 1em;
    // margin-right: 1em;
}
  .skillsGroupGroupName{
    font-weight: 400;
    // font-size: large;
    font-size: $fontSize_Standard;  //[test]
    display: flex;
    justify-content: center;
    // background-color: #d9d9d9;  // light-grey 
    // background-color: #ccc;  // light-grey 
  }
  .skillsGroupGroupName:before {
    display: inline-block;
    margin: 0.5em 0.5em 0em 0em;
    height: 3px;
    content: "";
    text-shadow: none;
    // [jwc] disable for now: background-color: #999;
    width: 5em;  // like 5-stars width
  }
  .skillsGroupGroupName:after{
    display: inline-block;
    margin: 0.5em 0em 0em 0.5em;
    height: 3px;
    content: "";
    text-shadow: none;
    // [jwc] disable for now: background-color: #999;
    width: 5em;  // like 5-stars width
  }
  .skillsGroupGroupText{
    font-weight: 300;
    // font-size: medium;
    // [test]
    font-size: $fontSize_Bullet;
    // font-size: 13px;
    // font-size: large;

    display: flex;
    justify-content: center;
  }

  .skillsGroup{
    font-weight: 300;
    // font-size: medium;
    margin: 1em 1em 1em 1.5em;  // [jwc] change margin-left: 2em;
  }
  // Enough to provide margin-left for 'skillBody-non-button' row to left-indent up to 'skillBody-button' row
  .skillsGroupHead{
    font-weight: 400;
    // margin-left: 1em;
    margin-right: 0.5em;
    // font-size: large;
    // background-color: yellow;  // to help highlight important positions
    background-color: $backgroundColor_LightGrey;  // to help highlight important positions,  #d9d9d9
    padding: 0.50em 1em 0.50em 0.50em;
  }
  .skillsGroupBody{
    font-weight: 300;
    font-size: $fontSize_Bullet;
    margin: 0.25em 1em 0.25em 1.5em;  // [jwc] change margin-left: 2em;
  }

  .skillsGroupName, .skillsGroupText{
    display: flex;
    justify-content: space-between;
  }
  .skillsGroupTimePeriod, .skillsGroupAgeRange{
    font-size: $fontSize_Bullet;
    color: #aaa;  // [jwc] better ligher shading vs. 'font-weight'
  }

  .skill{
    font-weight: 300;
    // font-size: medium;
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
    // margin-right: 0.5em;
    background-color: cyan;
  }
  // Overall for each 'skillBody' row
  .skillBody{
    font-weight: 300;
    // font-size: medium;
    // margin: 1em 1em 1em 0.5em;  // [jwc] change margin-left: 2em;
    font-size: $fontSize_Bullet;  // keep in mind word-wrap if side-margins shrink due to window-shrink
    margin-left: 0.25em
  }
  .skillChild {
    font-weight: 300;
    font-size: $fontSize_Bullet;
    // margin: 0.5em 1em 0.5em 1.5em;  // [jwc] change margin-left: 2em;
    margin-left: 1.5em;
  }
  .skillUrl {
    font-size: $fontSize_Url;
    color: blue;
    // Y margin-left: 3.5em;
    // margin-top: -0.5em;
    // margin-bottom: -0.5em;
    // text-align: right;
    margin-left: 0.5em;
    text-decoration-line: underline;
  }

  .buttonGroup {
    margin-bottom: 1em;
  }

  // Y ul li div div div div.buttonGroup:last-of-type {
  //     margin-bottom: 0.25em;
  // }
  // Y div div.buttonGroup:last-of-type {
  //     margin-bottom: 0.25em;
  // }
  // .button.skillHead:last-of-type {
  //     background-color: yellow;
  // }
    // .button:last-of-type {
    //     background-color: yellow;
    // }
  // .skill>div>.buttonGroup:only-of-type{
  //     background-color: yellow;
  // }
  // .skill div .buttonGroup a:only-of-type{
  //     background-color: blue;
  // }
  // .skill div .button:last-of-type{
  //     background-color: green;
  // }

  // Y .buttonGroup:last-child {
  //     margin-bottom: 0.25em;
  // }
  // * Prefer vs. '.buttonGroup:last-child' since latter not as accurately descriptive
  // .buttonGroup:last-of-type {
  //     margin-bottom: 0.25em;
  // }
  // .buttonGroup:only-of-type {
  //     margin-bottom: 0.25em;
  // }
  // div.buttonGroup:only-of-type {
  //     margin-bottom: 0.25em;
  // }
  // .buttonGroup:only-child {
  //     margin-bottom: 0.25em;
  // }
  // Y span:only-child{
  //     background-color: yellow;
  // }
  // Y .button:only-of-type {
  //     background-color: yellow;
  // }
  // .buttonGroup:only-of-type {
  //     background-color: yellow;
  // }
  // .button.skillHead:only-of-type {
  //     background-color: yellow;
  // }
  .urlLink {
    font-size: $fontSize_Url;
    color: blue;
    // Y margin-left: 3.5em;
    // margin-top: -0.5em;
    // margin-bottom: -0.5em;
    // text-align: right;
    // margin-left: 0.5em;
    text-decoration-line: underline;
  }

</style>
