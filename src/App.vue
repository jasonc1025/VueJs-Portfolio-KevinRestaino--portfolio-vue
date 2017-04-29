<template>
  <div id="app">
    <h1>Kevin Restaino</h1>
    <MainNav></MainNav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from './components/MainNav'
import inView from 'in-view'

export default {
  name: 'app',
  components: {
    MainNav
  },
  data () {
    return {
      projects: [
        {
          category: 'shure',
          title: 'Axient Digital',
          imageParts: 10
        }
      ]
    }
  },
  methods: {
    imageLoad () {
      inView('.lazy')
        .on('enter', el => {
          let imageUrl = el.firstChild.getAttribute('data-src')
          el.firstChild.setAttribute('src', imageUrl)

          el.firstChild.addEventListener('load', function () {
            setTimeout(function () {
              el.classList.add('loaded')
            }, 200)
          })
        })
      inView.offset(-300)
    }
  },
  mounted () {
    this.imageLoad()
  },
  updated () {
    this.imageLoad()
  }
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 18px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  padding: 50px;
  line-height: 1.5;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  max-width: 1000px;
}

a {
  color: #42b983;
  text-decoration: none;
}

h2 {
  margin-top: 30px;
}

.lazy {
  position: relative;
  transition: 1s;

  img {
    display: block;
    height: auto;
    opacity: 0;
    transition: 0.3s;
    width: 100%;
  }

  .loading {
    opacity: 1;
  }

  &.loaded {
    opacity: 1;

    .loading {
      opacity: 0;
      transition: none;
    }

    img {
      opacity: 1;
    }
  }
}

.loading {
  animation: loading 1.4s infinite linear;
  background: #d5d5d8;
  background: linear-gradient(to right, #d5d5d8 10%, rgba(255, 255, 255, 0) 42%);
  border-radius: 50%;
  height: 40px;
  left: 50%;
  margin: -20px;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateZ(0);
  transition: 0.3s;
  width: 40px;
}

.loading:before {
  background: #d5d5d8;
  border-radius: 100% 0 0 0;
  content: '';
  height: 50%;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
}

.loading:after {
  border-radius: 50%;
  bottom: 0;
  content: '';
  height: 75%;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 75%;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
