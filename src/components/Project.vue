<template>
  <div class="work">
    <ul class="image">
      <li class="lazy" v-for="n in imageListLength">
        <img :data-src="'/static/work/'+$route.params.category+'/'+$route.params.project+'/'+$route.params.project+'-'+n+'.png'">
        <div class="loading"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import inView from 'in-view'

export default {
  name: 'project',
  components: {
    inView
  },
  data: function () {
    return {
      imageListLength: 0
    }
  },
  methods: {
    imageLoad () {
      inView('.image .lazy')
        .on('enter', el => {
          let imageUrl = el.firstChild.getAttribute('data-src')
          el.firstChild.setAttribute('src', imageUrl)

          el.firstChild.addEventListener('load', function () {
            el.classList.add('loaded')
          })
        })
      inView.offset(-600)
    },
    populateImgageList: function () {
      switch (this.$route.params.project) {
        case 'axient-digital':
          this.imageListLength = 16
          break
        case 'motiv':
          this.imageListLength = 15
          break
        case 'microflex-advance':
          this.imageListLength = 10
          break
        case 'ksm8':
          this.imageListLength = 10
          break
        case 'kse1500':
          this.imageListLength = 8
          break
        case 'blog':
          this.imageListLength = 10
          break
        case 'weather':
          this.imageListLength = 1
          break
        case 'color-con':
          this.imageListLength = 1
          break
      }
    }
  },
  mounted () {
    this.populateImgageList()
  },
  updated () {
    this.imageLoad()
  }
}
</script>

<style scoped lang="scss">
.image {
  background-color: black;
  margin: 30px auto 0 auto;
  max-width: 1000px;

  .lazy {
    min-height: 500px;
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
