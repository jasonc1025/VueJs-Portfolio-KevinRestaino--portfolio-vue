<template>
  <div id="app">
    <header class="header">
      <h1>Kevin Restaino</h1>
      <MainNav></MainNav>
    </header>
    <section class="route">
      <router-view></router-view>
    </section>
    <footer class="footer">
      <span>© {{ currentYear }} Kevin Restaino. All rights reserved.</span>
    </footer>
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
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    lazyLoad () {
      inView('.lazy')
        .on('enter', el => {
          el.classList.add('loading')

          let imageSrc = el.firstChild.getAttribute('data-src')
          let imageSrcset = el.firstChild.getAttribute('data-srcset')

          el.firstChild.setAttribute('src', imageSrc)
          el.firstChild.setAttribute('srcset', imageSrcset)

          el.firstChild.addEventListener('load', () => {
            el.classList.remove('loading')
            el.classList.add('loaded')
          })
        })
      inView.offset(-300)
    }
  },
  mounted () {
    this.lazyLoad()
  },
  updated () {
    this.lazyLoad()
  }
}
</script>

<style lang="scss">
html {
  background-color: #f1f1f1;
  box-sizing: border-box;
  overflow-y: scroll;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  color: #666;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
  padding: 36px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  margin: auto;
  max-width: 800px;
}

a {
  color: #aaa;
  text-decoration: none;
}

h1 {
  font-size: 28px;
  font-weight: 100;
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
    transition: 0.3s;
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

.spinner {
  animation: spinner 1.4s infinite linear;
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

.spinner:before {
  background: #d5d5d8;
  border-radius: 100% 0 0 0;
  content: '';
  height: 50%;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
}

.spinner:after {
  background-color: #f1f1f1;
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

@keyframes spinner {
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
  }
}

@import 'scss/_ie11.scss'
</style>
