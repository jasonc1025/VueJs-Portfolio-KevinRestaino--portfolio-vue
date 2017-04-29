import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    ],
    projects: [
      {
        category: 'shure',
        slug: 'axient-digital',
        title: 'Axient® Digital – Shure',
        imageListLength: 16
      },
      {
        category: 'personal',
        slug: 'weather',
        title: 'Weather Vue – Personal Project',
        imageListLength: 1
      },
      {
        category: 'shure',
        slug: 'motiv',
        title: 'MOTIV™ Recording Microphones – Shure',
        imageListLength: 15
      },
      {
        category: 'personal',
        slug: 'color-con',
        title: 'Color Con – Personal Project',
        imageListLength: 1
      },
      {
        category: 'shure',
        slug: 'microflex-advance',
        title: 'Microflex® Advance™ Conference Room Audio – Shure',
        imageListLength: 10
      },
      {
        category: 'shure',
        slug: 'ksm8',
        title: 'KSM8 Dualdyne™ Vocal Microphone – Shure',
        imageListLength: 10
      },
      {
        category: 'shure',
        slug: 'kse1500',
        title: 'KSE1500 Electrostatic Earphone System – Shure',
        imageListLength: 8
      },
      {
        category: 'shure',
        slug: 'blog',
        title: 'Blog – Shure',
        imageListLength: 10
      }
    ]
  }
})
