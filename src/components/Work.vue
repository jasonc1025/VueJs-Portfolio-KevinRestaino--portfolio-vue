<template>
  <div>
    <h2>Work</h2>
    <ul class="projects">
      <li v-for="project in work">
        <a :href="'/work/'+project.category+'/'+project.slug">
          <h3>{{ project.title }}</h3>
          <img :src="'/static/work/'+project.category+'/'+project.slug+'/'+project.slug+'_thumb@2x.png'">
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

    h3 {
      margin-bottom: 16px;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }
}
</style>
