<template>
  <div class="homeStyle">

    <h1>Career Objective</h1>

    <!-- <ul style="list-style:disc;">
      <li>Whether as an Software Engineer</li>
        <ul style="list-style:disc; margin-left:2em;">
          <li>With Dual-Empahsis in both Software and Hardware Engineering as an Electrical and Computer Engineering Major at U.C. Davis</li>
          <li>and Combined 15+ years in Engineering,</li>
          <li>I specialize in both Web Full-Stack (Software) and Robotics (Software & Hardware) Development.</li>
        </ul>
      <li>Or as a Teacher for Software & Hardware Engineering,</li>
        <ul style="list-style:disc; margin-left:2em;">
          <li>With Professional Experience as a Teacher, Speaker and Communicator through Training from both Mills College (CA State Teacher Credential) and Western Seminary's Master of Arts Program (Homiletics' Top Honors)</li>
          <li>and Cummulative 10+ years in Public & Private School Teaching,</li>
          <li>I enjoy Encouraging and Empowering People through Teaching.</li>
        </ul>
      <li>I seek to Serve in either One of the above Two Occupations.</li>
    </ul> -->

    <!-- <br> -->

    <!-- * Archive: not need for now -->
    <!-- Y AHG: <AccordionMenu :items_Stage01="items_Stage00"></AccordionMenu> -->
    <AccordionMenu :items_Stage01="items_Stage00"></AccordionMenu>
    
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data () {
    return {
      jobs: this.$myStore.state.jobs,
      tabMode: this.$myStore.state.tabMode,
      store: this.$myStore,
      // * '\n' does not work.  Yet '<br>' works.

      // msg: 'Test for fun! asjdf kasjfd;l \n\n\n a;skdfja;sljdfksadj ;fljas lk;fj sak;lfj las;kj f;klasdj f;kasjdkfl;ajs dfjsa akdsf<br>Line2abc<br />Line3'
      // Y msg: 'Test for fun! asjdf kasjfd;l a;skdfja;sljdfksadj ;fljas lk;fj sak;lfj las;kj f;klasdj f;kasjdkfl;ajs dfjsa akdsf<br>Line2abc<br>Line3',
      // Y msg: 'Test for fun! asjdf kasjfd;l <scan style="color:red;">a;skdfja;sljdfksadj </scan>;fljas lk;fj sak;lfj las;kj f;klasdj f;kasjdkfl;ajs dfjsa akdsf<br>Line2abc<br>Line3',
      // Y N:<scanSlideRef> ; msg: 'Test for fun! asjdf kasjfd;l <scan style="color:red;">a;skdfja;sljdfksadj </scan>;fljas <scanSlideRef>lk;fj</scanSlideRef> <img src="/static/work/home-dir/VueVsReact-RisingStarsDotJsDotOrg.png"> sak;lfj las;kj f;klasdj f;kasjdkfl;ajs dfjsa akdsf<br>Line2abc<br>Line3',

      items_Stage00: [
        {
          title: 'Whether as an Software Engineer...',
          msg: '',
          itemsSub: [
            {text: 'With <scan style="font-weight:500;">Dual-Empahsis</scan> in <scan style="font-weight:500;">both Software and Hardware Engineering</scan> as an Electrical and Computer Engineering Major at <scan style="font-weight:500;">U.C. Davis</scan>'},
            {text: 'and Combined <scan style="font-weight:500;">15+ years</scan> in Engineering,'},
            {text: 'I specialize in <scan style="font-weight:500;">both Web Full-Stack (Software) and Robotics (Software & Hardware) Development</scan>.'}
          ]
        },
        {
          title: '...Or as a Teacher for Software / Hardware Engineering,...',
          msg: '',
          itemsSub: [
            {text: 'With <scan style="font-weight:500;">Professional Training</scan> as a <scan style="font-weight:500;">Teacher, Speaker and Communicator</scan> from <scan style="font-weight:500;">both Mills College\'s Math & Science Teaching </scan> (CA State Teacher Credential) and <scan style="font-weight:500;">Western Seminary\'s Master of Arts</scan> (Homiletics\' Top Honors) <scan style="font-weight:500;">Programs</scan>'},
            {text: 'and Cummulative <scan style="font-weight:500;">10+ years</scan> in Public & Private School Teaching,'},
            {text: 'I enjoy <scan style="font-weight:500;">encouraging and empowering People through Teaching</scan>.'}
          ]
        },
        {
          title: '...I seek to Serve in either One of the above Two Occupations.',
          msg: '',
          itemsSub: [
            {text: 'Kindly Preview the above Tabs for Resum&eacute;, Vision and Showcase Projects.'}
          ]
        }

      ]
    }
  }
}
</script>

<style scoped lang="scss">

  $fontSize_Bullet: small;
  $fontSize_Header: large;
  $fontSize_Url: small;
  $backgroundColor_LightGrey: #d9d9d9;  // rgb(217, 217, 217);
  $backgroundColor_DarkGrey: #bbb;  // rgb(187, 187, 187);
  $backgroundColor_Black: #000000 ;  // rgba(0, 0, 0, 1)

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
  .urlLink-CarrouselHeader {
    font-size: $fontSize_Url;
    color: blue;
    // Y margin-left: 3.5em;
    // margin-top: -0.5em;
    // margin-bottom: -0.5em;
    text-align: center;  // NOT APPEAR TO WORK, THUS NEED '.carouselHeader' maybe because <a> not work in this situation
    // margin-left: 0.5em;
    text-decoration-line: underline;
  }
  
  .carouselHeader{
    text-align: center;    
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

</style>
