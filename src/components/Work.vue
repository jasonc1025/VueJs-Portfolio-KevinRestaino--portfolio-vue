<template>
  <div>
    <ul class="projects">
      <li v-for="project in work">
        <a :href="'/work/'+project.category+'/'+project.slug">
          <h3>{{ project.title }}</h3>
          <div class="imageContainer lazy">
            <img :data-src="'/static/work/'+project.category+'/'+project.slug+'/'+project.slug+'_thumb@2x.png'">
            <div class="spinner"></div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      work: [
        {
          category: 'shure',
          slug: 'axient-digital',
          title: 'Axient® Digital – Shure'
        },
        {
          category: 'personal',
          slug: 'weather',
          title: 'Weather Vue – Personal Project'
        },
        {
          category: 'shure',
          slug: 'motiv',
          title: 'MOTIV™ Recording Microphones – Shure'
        },
        {
          category: 'personal',
          slug: 'color-con',
          title: 'Color Con – Personal Project'
        },
        {
          category: 'shure',
          slug: 'ksm8',
          title: 'KSM8 Dualdyne™ Vocal Microphone – Shure'
        },
        {
          category: 'shure',
          slug: 'kse1500',
          title: 'KSE1500 Electrostatic Earphone System – Shure'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  color: red;
}

.projects {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 8px;
    width: 50%;

    a {
      display: block;
      position: relative;
    }

    h3 {
      color: #fff;
      font-size: 20px;
      margin-top: -9px;
      opacity: 0;
      padding: 0 16px;
      position: absolute;
      text-align: center;
      transform: translateY(-18px);
      transition: 0.3s;
      top: 50%;
      width: 100%;
      z-index: 1;
    }

    .imageContainer {
      box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35);
      border-radius: 3px;
      overflow: hidden;
      position: relative;

      &::after {
        background-color: rgba(0,0,0,0);
        border-radius: inherit;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: 0.3s;
        width: 100%;
      }
    }

    .lazy {
      min-height: 272px;
    }

    img {
      display: block;
      height: auto;
      max-height: 272.25px;
      max-width: 100%;
      transition: 0.3s;
    }

    a:hover {
      h3 {
        opacity: 1;
        transform: translateY(0);
      }

      .imageContainer::after {
        background-color: rgba(0,0,0,0.85);
      }
    }
  }
}
</style>
