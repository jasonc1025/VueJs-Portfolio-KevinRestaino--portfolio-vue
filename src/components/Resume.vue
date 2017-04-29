<template>
  <div class="resume">
    <ul>
      <li v-for="job in jobs">
        <div class="title">{{ job.title }}</div>
        <div class="company">{{ job.company }}</div>
        <div class="location">{{ job.location }}</div>
        <div class="timePeriod">{{ job.timePeriod.from }} – {{ job.timePeriod.to }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      jobs: [
        {
          title: 'Developer II, Web Development',
          company: 'Shure Incorporated',
          location: 'Niles, IL',
          timePeriod: {
            from: 'August 2016',
            to: 'Current'
          }
        },
        {
          title: 'Specialist I, Web Marketing',
          company: 'Shure Incorporated',
          location: 'Niles, IL',
          timePeriod: {
            from: 'August 2014',
            to: 'August 2016'
          }
        },
        {
          title: 'Intern, Web Marketing',
          company: 'Shure Incorporated',
          location: 'Niles, IL',
          timePeriod: {
            from: 'May 2014',
            to: 'August 2014'
          }
        },
        {
          title: 'Front-end Developer',
          company: 'CINCS',
          location: 'New York, NY',
          timePeriod: {
            from: 'April 2014',
            to: 'May 2014'
          }
        },
        {
          title: 'Front-end Developer, Intern',
          company: 'Carbon Credit Capital',
          location: 'New York, NY',
          timePeriod: {
            from: 'January 2014',
            to: 'May 2014'
          }
        },
        {
          title: 'Teaching Assistant',
          company: 'State University of New York at Oswego',
          location: 'Oswego, NY',
          timePeriod: {
            from: 'January 2012',
            to: 'May 2012'
          }
        },
        {
          title: 'Sports Photographer',
          company: 'State University of New York at Oswego',
          location: 'Oswego, NY',
          timePeriod: {
            from: 'August 2011',
            to: 'December 2012'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  color: blue;
}

li {
  margin-top: 30px;
}
</style>
