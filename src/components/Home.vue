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

$fontSize_Bullet: small;
$fontSize_Header: large;
$fontSize_Url: small;
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

    .jobTitle {
      font-weight: 400;
      // font-size: large;
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
  }
  .jobHead{
    display: flex;
    justify-content: space-between;
  }
  .jobBody{
    display: inline-block;
    display: flex;
    justify-content: space-between;
  }
  .jobChild {
    font-weight: 300;
    // font-size: medium;
    font-size: $fontSize_Bullet;
    // margin: 0.5em 1em 0.5em 1.5em;  // [jwc] change margin-left: 2em;
    margin-left: 1.5em;
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
    font-size: $fontSize_Bullet;
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
