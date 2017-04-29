<template>
  <div class="work">
    <ul class="image">
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/01.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/02.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/03.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/04.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/05.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/06.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/07.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/08.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/09.png">
        <div class="loading"></div>
      </div>
      <div class="lazy">
        <img data-src="/static/portfolio/shure-axient-digital/10.png">
        <div class="loading"></div>
      </div>
    </ul>
  </div>
</template>

<script>
import inView from 'in-view'

export default {
  name: 'shureAxientDigital',
  components: {
    inView
  },
  methods: {
    imageLoad: function () {
      inView('.image .lazy')
        .on('enter', el => {
          let imageUrl = el.firstChild.getAttribute('data-src')
          el.firstChild.setAttribute('src', imageUrl)

          el.firstChild.addEventListener('load', function () {
            el.classList.add('loaded')
          })
        })
      inView.offset(-300)
    }
  },
  mounted () {
    this.imageLoad()
  }
}
</script>

<style scoped lang="scss">
.image {
  background-color: black;
  margin: 30px auto 0 auto;
  max-width: 600px;

  .lazy {
    min-height: 600px;
    position: relative;
    transition: 1s;

    img {
      display: block;
      height: auto;
      opacity: 0;
      transition: 0.3s;
      width: 100%;
    }

    &.loaded {
      opacity: 1;

      .loading {
        display: none;
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
    position: absolute;
    top: 50%;
    transform: translateZ(0);
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
    background: #000;
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
}
</style>
