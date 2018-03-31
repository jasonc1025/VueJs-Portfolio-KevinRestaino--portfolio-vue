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
        category: 'vue',
        id: 8,
        imageListLength: 1,
        slug: '38c-ShoppityPlus',
        title: 'Vue : Vuex, Digital Ocean ~ Linux 16',
        url: 'http://138.68.57.214:8083/',
        description: 'Shoppity Plus'
      },
      {
        category: 'vue',
        id: 8,
        imageListLength: 1,
        slug: '73c-03f-CooperaPlus',
        title: 'Coopera',
        url: 'http://138.68.57.214:8082/',
        description: 'Coopera Plus'
      },
      {
        category: 'vue',
        id: 8,
        imageListLength: 1,
        slug: '38b-PizzaPlanetPlus',
        title: 'Pizza Planet',
        url: 'http://138.68.57.214:8081/',
        description: 'Pizza Planet Plus'
      },
      {
        category: 'vue',
        id: 8,
        imageListLength: 1,
        slug: '37q-03f-CastleDuelPlus',
        title: 'Castle Duel',
        url: 'https://jasonc1025.github.io/VueJs-CastleDuel-GuillaumeC/ ',
        description: 'Castle Duel Plus'
      },
      {
        category: 'vue',
        id: 8,
        imageListLength: 1,
        slug: '37j-Sec18-StockTraderPlus',
        title: 'Stock Trader',
        url: 'http://stocktrader-vuejs-maxs.s3-website-us-west-1.amazonaws.com/',
        description: 'Stock Trader Plus'
      },
      {
        category: 'react',
        id: 8,
        imageListLength: 1,
        slug: '53c-03d-03d-BurgerBuilderPlus',
        title: 'Burger Builder',
        url: 'https://myburger-react-maxs.firebaseapp.com',
        description: 'Burger Builder Plus'
      },
      {
        category: 'react',
        id: 8,
        imageListLength: 1,
        slug: '53ka-Blog',
        title: 'Blog',
        url: 'https://stoic-mestorf-1d9170.netlify.com',
        description: 'Description'
      },
      {
        category: 'node',
        id: 8,
        imageListLength: 1,
        slug: '17-10g-ObsidioPlus',
        title: 'Obsidio',
        url: 'https://obsidio-alvin-l.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'node',
        id: 8,
        imageListLength: 1,
        slug: '37l-DangThatsDelicious',
        title: 'Now That\'s Delicious',
        url: 'https://dang-thats-delicious-jwc.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'node',
        id: 8,
        imageListLength: 1,
        slug: '11h-ArduBlockly',
        title: 'ArduBlockly-EandE',
        url: 'http://138.68.57.214:8001/ardublockly/index.html',
        description: 'Description'
      }
      // [jwc]+x
      // {
      //   category: 'shure',
      //   id: 8,
      //   imageListLength: 20,
      //   // [jwc]+1 slug: 'axient-digital',
      //   slug: 'axient-digital',
      //   title: 'Axient® Digital – Shure',
      //   url: 'http://www.shure.com/americas/axient-digital',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.'
      // },
      // {
      //   category: 'personal',
      //   github: 'https://github.com/krestaino/weather-vue/',
      //   id: 7,
      //   imageListLength: 1,
      //   slug: 'weather',
      //   title: 'Weather Vue – Personal Project',
      //   url: 'https://weather.kmr.io',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.'
      // },
      // {
      //   category: 'shure',
      //   id: 6,
      //   imageListLength: 18,
      //   slug: 'motiv',
      //   title: 'MOTIV™ Recording Microphones – Shure',
      //   url: 'http://www.shure.com/americas/motiv/recording-musician',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.'
      // },
      // {
      //   category: 'personal',
      //   github: 'https://github.com/krestaino/color-con/',
      //   id: 5,
      //   imageListLength: 1,
      //   slug: 'color-con',
      //   title: 'Color Con – Personal Project',
      //   url: 'https://color-con.kmr.io',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.'
      // }
      // {
      //   category: 'shure',
      //   id: 4,
      //   imageListLength: 12,
      //   slug: 'microflex-advance',
      //   title: 'Microflex® Advance™ Conference Room Audio – Shure',
      //   url: 'http://www.shure.com/americas/microflex-advance',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.'
      // },
      // {
      //   category: 'shure',
      //   id: 3,
      //   imageListLength: 12,
      //   slug: 'ksm8',
      //   title: 'KSM8 Dualdyne™ Vocal Microphone – Shure',
      //   url: 'http://www.shure.com/americas/ksm8',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.'
      // },
      // {
      //   category: 'shure',
      //   id: 2,
      //   imageListLength: 9,
      //   slug: 'kse1500',
      //   title: 'KSE1500 Electrostatic Earphone System – Shure',
      //   url: 'http://www.shure.com/americas/kse1500',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.'
      // },
      // {
      //   category: 'shure',
      //   id: 1,
      //   imageListLength: 14,
      //   slug: 'blog',
      //   title: 'Blog – Shure',
      //   url: 'http://blog.shure.com',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum odio sit amet auctor. Vivamus at porttitor metus. Curabitur ac dictum orci. Suspendisse consectetur consequat sem nec luctus. In euismod vestibulum dui.'
      // }
    ]
  }
})
