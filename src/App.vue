<template>
  <!-- <div id="app"> -->
  <div id="app" v-bind:style="{ fontSize: fontSize + 'px' }">
    <header class="header">
      <div class=headerUpper>
        <h1>Jason W Chan</h1>
        <h2>Web Full-Stack & Robotics Instructor / Developer</h2>
        <h2>Primary, Secondary & Collegiate Ed</h2>
        <h4>jasonc@eande.world, mobile/text 408-828-5131, <a href="https://www.linkedin.com/in/jasonwchan1025/" class="urlLink" target="_blank">www.linkedin.com/in/jasonwchan1025/</a></h4>
      </div>
      
      <h2>Portfolio of JavaScript & Python Industy-Inspired, Curriculum-Based Projects</h2>
      <mainNavComponent></mainNavComponent>

    </header>
    <section class="route">
      <router-view></router-view>
    </section>

    <footer class="footer">
      <!-- <span> Portfolio developed using Vue.js & Netlify <br> © {{ currentYear }} Encourage and Empower. All rights reserved.</span> -->
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /> &nbsp; </a><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Portfolio developed by Jason W Chan using Vue.js, Node.js & Netlify <br> Creative Commons Attribution-NonCommercial-ShareAlike <br> 4.0 International License</a>

    <div class="fontSizeChange_Section">
      <button class="button fontSizeChange_Button" v-on:click="fontSize--">
        Font Size: -
      </button>
      <button class="button fontSizeChange_Button" v-on:click="fontSize++">
        Font Size: +
      </button>
      <p class="fontSizeChange_TextStatus" v-bind:style="[fontSizeChange_00_Style, fontSizeChange_01_Style, { fontSize: fontSize + 'px' }]">
        Font Size: {{ fontSize }}
      </p> 
    </div>     
        
    </footer>
  </div>
</template>

<script>
import mainNavComponent from './components/MainNav'

export default {
  name: 'appComponent',
  components: {
    mainNavComponent
  },
  data () {
    return {
      currentYear: new Date().getFullYear(),

      fontSize: 16,  // default

      fontSizeChange_00_Style: {
        fontWeight: '300',
        color: 'red'
      },
      fontSizeChange_01_Style: {
        color: '#ccc' // 'grey'  // 'black'
      }

    }
  }
}
</script>

<style lang="scss">

  @import 'scss/_ie11.scss';
  @import 'scss/_globalStyleSheet';

  html {
    background-color: rgb(255, 255, 255); // orig, need more white for clearest printing background: #f1f1f1;
    box-sizing: border-box;
    overflow-y: scroll;
    // [jwc] NOT NEEDED, AS SETTING AT <BODY> IS SUFFICIENT:  font-size: 40px;  //[test]

  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  // * The Default Settings for <body> :)+ 
  body {
    // prefer darkest black: color: #666;
    color: rgb(0, 0, 0);
    // +1 font-family: 'Roboto', sans-serif;
    // font-family: Arial, Helvetica, sans-serif;  //[test]
    font-family: 'Roboto', sans-serif;

    
    // [jwc]+1 font-size: 18px;
    // font-size: medium;
    // font-size: 16pt; //  N Too small on android: medium; // Y now working: 16pt;  // medium;  // 80px; // xx-small; 9px // x-small; 10px // small; 13px // medium; 16px // large; 18px // x-large; 24px //  xx-large; 32px // 80px;  //[test]

    font-weight: 300;
    // [jwc]+1 padding: 36px;
    // [jwc] remove for fullest printing: padding: 32px;  // assuming default font size 16px
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // [jwc] remove for fullest printing: margin:2em;  // margin needed for mobile, and still good for desktop
  }

  // /* If screen size is more than 600px wide, set the font-size of <div> to 80px */
  // @media screen and (min-width: 1100px) {
  //   body {
  //     font-size: medium;// medium;  // should be 16pt
  //   }
  // }

  // /* If screen size is 600px wide, or less, set the font-size of <div> to 30px */
  // @media screen and (min-width: 600px) and (max-width: 1099px)  {
  //   body {
  //     font-size: 20px // 16px;
  //   }
  // }



  // /* Extra small devices (phones, 600px and down) */
  // @media only screen and (max-width: 600px) {
    

  // } 

  //
  // * Cascading Rule for Screen Size
  // ** Latest is Greatest/Wins
  //

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    body {
      font-size: 20px; // 16px;
    }
  } 

  /* Medium devices (landscape tablets, 768px and up) */
  // Android portrait Jason (18px: any less screen font toos small,  any more screen width shrinks)

  @media only screen and (min-width: 768px) {
    body {
      font-size: 18px; // Y 24px; // 16px;
    }
  } 

  /* Large devices (laptops/desktops, 992px and up) */
  //  Android Landscape Jason

  // @media only screen and (min-width: 992px) {
  // Y @media only screen and (min-width: 900px) {
  // @media only screen and (min-width: 990px) {
  // Y @media only screen and (min-width: 980px) {
  // @media only screen and (min-width: 990px) {
  @media only screen and (min-width: 985px) {
    body {
      font-size: 24px; // 16px;
    }
  } 

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    body {
      // font-size: medium;// medium;  // should be 16px
      font-size: 16px;// medium;  // should be default 16px
    }
  }

  #app {
    margin: auto;
    max-width: 932px;  // orig 800px, max it given 'padding: 32px'
  }

  a {
    color: black;  // orig, need black for best printout: #888;
    text-decoration: none;
  }

  h1:not(:only-of-type) {
    font-size: 150%; // xx-large; // 28px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.25em;
    margin-top: 1em;
  }
  h1:only-of-type {  // For 'headerUpper'
    font-size: 150%; // xx-large; // 28px;
    font-weight: 500;
    text-align: center;
    // margin-bottom: 0.25em;
  }
  h2 {
    font-size: 125%; // large; // 18px;
    font-weight: 500;
    text-align: center;
    // margin-bottom: 0.25em;
  }
  h3 {
    font-size: 125%; // large; // 18px;
    // font-weight: 500;
    text-align: center;
    margin-bottom: 0.5em;
    margin-top: 0.5em
  }
  h4 {
    font-size: 100%; // small; // small=13px (medium=16px) >> close enough to: 14px;
    // font-weight: 500;
    text-align: center;
    margin-bottom: 0.5em // 1em;
    // margin-top: 0.5em
  }


  .button {
    background-color: #ddd;
    border-radius: 3px;
    padding: 8px 16px;
    font-size: 100%; // switch from absolute to relative: 16px;
    transition: 0.3s;

    &:hover {
      background-color: #ccc;
      color: #666;
    }
  }

  .fontSizeChange_Section{
    font-size: $fontSize_Footer; // 80%;
    display: flex;
    justify-content: flex-end;
  }
  .fontSizeChange_Button{
    margin-left: 1em;
    border-width: 0px;
    color: #ccc;
  }

  .fontSizeChange_TextStatus{
    padding: 0.5em 0.5em;
    margin-left: 1em;
  }

  .lazy {
    position: relative;
    transition: 1s;

    img {
      display: block;
      height: auto;
      opacity: 0;
      width: 100%;
    }

    &.loading {
      .spinner {
        opacity: 1;
      }
    }

    &.loaded {
      opacity: 1;

      .spinner {
        opacity: 0;
        transition: none;
      }

      img {
        opacity: 1;
      }
    }
  }

  .spinner,
  .spinner:after {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left: 4px solid #aaa;
    animation: spin 1.1s infinite linear;
    left: 50%;
    margin: -20px;
    position: absolute;
    top: 50%;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .header {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1em; // 24px;
  }
  .headerUpper {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1em; // 24px;
    margin-left: 2em;
    margin-right: 2em;
  }

  .footer {
    align-items: center;
    display: flex;
    justify-content: center;
    // save space: margin-top: 36px;

    span {
      color: black; // #bbb;
      font-size: $fontSize_Footer; // 14px;
      text-align: center;
    }
    a {
      color: black; // #bbb;
      font-size: $fontSize_Footer; // 14px;
      text-align: center;
    }
  }
  .urlLink {
    // font-size: $fontSize_Url;
    color: blue;
    // Y margin-left: 3.5em;
    // margin-top: -0.5em;
    // margin-bottom: -0.5em;
    // text-align: right;
    // margin-left: 0.5em;
    text-decoration-line: underline;
  }

</style>
