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
          to: 'Present'
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
        title: 'Intern, Front-end Developer',
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
        imageListLength: 16,
        slug: 'axient-digital',
        title: 'Axient® Digital – Shure',
        url: 'http://www.shure.com/americas/axient-digital'
      },
      {
        category: 'personal',
        github: 'https://github.com/krestaino/weather-vue/',
        imageListLength: 1,
        slug: 'weather',
        title: 'Weather Vue – Personal Project',
        url: 'https://weather.kmr.io'
      },
      {
        category: 'shure',
        imageListLength: 15,
        slug: 'motiv',
        title: 'MOTIV™ Recording Microphones – Shure',
        url: 'http://www.shure.com/americas/motiv/recording-musician'
      },
      {
        category: 'personal',
        github: 'https://github.com/krestaino/color-con/',
        imageListLength: 1,
        slug: 'color-con',
        title: 'Color Con – Personal Project',
        url: 'https://color-con.kmr.io'
      },
      {
        category: 'shure',
        imageListLength: 10,
        slug: 'microflex-advance',
        title: 'Microflex® Advance™ Conference Room Audio – Shure',
        url: 'http://www.shure.com/americas/microflex-advance'
      },
      {
        category: 'shure',
        imageListLength: 10,
        slug: 'ksm8',
        title: 'KSM8 Dualdyne™ Vocal Microphone – Shure',
        url: 'http://www.shure.com/americas/ksm8'
      },
      {
        category: 'shure',
        imageListLength: 8,
        slug: 'kse1500',
        title: 'KSE1500 Electrostatic Earphone System – Shure',
        url: 'http://www.shure.com/americas/kse1500'
      },
      {
        category: 'shure',
        imageListLength: 10,
        slug: 'blog',
        title: 'Blog – Shure',
        url: 'http://blog.shure.com'
      }
    ]
  }
})
