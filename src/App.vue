<template>
  <div id="app">
    <header class="header">
      <h1>Jason W Chan</h1>
      <h2>Web Full-Stack & Robotics Sr. Instructor & Curriculum Developer</h2>
      <h3>Middle School, High School, College & Beyond</h3>
      <mainNavComponent></mainNavComponent>
    </header>
    <section class="route">
      <router-view></router-view>
    </section>
    <footer class="footer">
      <!-- <span> Portfolio developed using Vue.js & Netlify <br> © {{ currentYear }} Encourage and Empower. All rights reserved.</span> -->
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /> &nbsp </a><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Portfolio developed by Jason W Chan using Vue.js, Node.js & Netlify <br> Creative Commons Attribution-NonCommercial-ShareAlike <br> 4.0 International License</a>
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
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
html {
  background-color: #f1f1f1;
  box-sizing: border-box;
  overflow-y: scroll;
  // font-size: 40px;  //[test]

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
  font-size: 80px; // xx-small; 9px // x-small; 10px // small; 13px // medium; 16px // large; 18px // x-large; 24px //  xx-large; 32px // 80px;  //[test]

  font-weight: 300;
  // [jwc]+1 padding: 36px;
  padding: 32px;  // assuming default font size 16px
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  margin: auto;
  max-width: 932px;  // orig 800px, max it given 'padding: 32px'
}

a {
  color: #888;
  text-decoration: none;
}

h1 {
  font-size: 28px;
  font-weight: 500;
  text-align: center;
}

h2 {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}

h3 {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}

.button {
  background-color: #ddd;
  border-radius: 3px;
  padding: 8px 16px;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: #ccc;
    color: #666;
  }
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
  margin-bottom: 24px;
}

.footer {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 36px;

  span {
    color: #bbb;
    font-size: 14px;
    text-align: center;
  }
  a {
    color: #bbb;
    font-size: 14px;
    text-align: center;
  }
}

@import 'scss/_ie11.scss'
</style>
