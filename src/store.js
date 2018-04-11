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
    ],
    projectsReact: [
      {
        category: 'react',
        id: 8,
        imageListLength: 1,
        slug: '53c-03d-03d-BurgerBuilderPlus',
        title: 'Burger Builder',
        headerLine00: 'Food Ordering System: Burger Builder',
        headerLine01: 'React, Axios, Redux, Enzyme, Jest',
        headerLine02: 'Google-Firebase',
        url: 'https://myburger-react-maxs.firebaseapp.com',
        description: 'Burger Builder'
      },
      {
        category: 'react',
        id: 8,
        imageListLength: 1,
        slug: '53ka-BlogPlus',
        title: 'Blog',
        headerLine01: '* Front-end: React, Gatsby, GraphQl, Particles.js (Animation), Jest',
        headerLine02: '* Back-end: Netlify-GitHub',
        url: 'https://stoic-mestorf-1d9170.netlify.com',
        description: 'Blog'
      },
      {
        category: 'react',
        id: 8,
        imageListLength: 1,
        slug: '53p-CatchOfTheDayPlus',
        title: 'Catch of the Day',
        headerLine01: '* Front-end: React, Authentication (GitHub, Twitter, FaceBook)',
        headerLine02: '* Back-end: Netlify',
        url: 'http://react-catchoftheday-wesbos.netlify.com/',
        description: 'Catch of the Day'
      },
      {
        category: 'react',
        id: 8,
        imageListLength: 1,
        slug: '37e-BookshopPlus',
        title: 'Bookshop',
        headerLine01: '* Front-end: Mondo, Express, React & Node (MERN)',
        headerLine02: '* Back-end: Amazon ~ Elastic Beanstalk (EB)',
        url: 'http://react-bookshop-marco-tomasello.nyu2gnsj37.us-west-1.elasticbeanstalk.com/',
        description: 'Bookshop'
      }
    ],
    projectsVueJs: [
      {
        category: 'vuejs',
        id: 8,
        imageListLength: 1,
        slug: '38c-ShoppityPlus',
        title: 'Shoppity',
        headerLine01: '* Front-end: Vue, Vuex, Stripe (Credit Card Purchasing)',
        headerLine02: '* Back-end: Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8083/',
        description: 'Shoppity'
      },
      {
        category: 'vuejs',
        id: 8,
        imageListLength: 1,
        slug: '73c-03f-CooperaPlus',
        title: 'Coopera',
        headerLine01: '* Front-end: Vue, Socket.io, WebSocket',
        headerLine02: '* Back-end: Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8082/',
        description: 'Coopera'
      },
      {
        category: 'vuejs',
        id: 8,
        imageListLength: 1,
        slug: '38b-PizzaPlanetPlus',
        title: 'Pizza Planet',
        headerLine01: '* Front-end: Vue, Vuex, Google-Firebase (Database)',
        headerLine02: '* Back-end: Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8081/',
        description: 'Pizza Planet'
      },
      {
        category: 'vuejs',
        id: 8,
        imageListLength: 1,
        slug: '37q-03f-CastleDuelPlus',
        title: 'Castle Duel',
        headerLine01: '* Front-end: Vue : SVG Grapics, TweenJs (Animation)',
        headerLine02: '* Back-end: Digital Ocean ~ Linux Ubuntu',
        url: 'https://jasonc1025.github.io/VueJs-CastleDuel-GuillaumeC/ ',
        description: 'Castle Duel'
      },
      {
        category: 'vuejs',
        id: 8,
        imageListLength: 1,
        slug: '37j-Sec18-StockTraderPlus',
        title: 'Stock Trader',
        headerLine01: '* Front-end: Vue, Vuex, Bootstrap',
        headerLine02: '* Back-end: Amazon S3, Digital Ocean ~ NginX',
        url: 'http://stocktrader-vuejs-maxs.s3-website-us-west-1.amazonaws.com/',
        description: 'Stock Trader'
      }
    ],
    projectsNodeJs: [
      {
        category: 'nodejs',
        id: 8,
        imageListLength: 1,
        slug: '17-10g-ObsidioPlus',
        title: 'Obsidio',
        headerLine01: '* Front-end: Node, Express, Socket.io',
        headerLine02: '* Back-end: Heroku',
        url: 'https://obsidio-alvin-l.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'nodejs',
        id: 8,
        imageListLength: 1,
        slug: '37l-DangThatsDelicious',
        title: 'Now That\'s Delicious',
        headerLine01: '* Front-end: Node, Axios, Express, MongoDB, Mongoose, Passport',
        headerLine02: '* Back-end: Heroku, Now-Zeit',
        url: 'https://dang-thats-delicious-jwc.herokuapp.com/',
        description: 'Description'
      }
    ],
    projectsJavascriptPython: [
      {
        category: 'javascript-python',
        id: 8,
        imageListLength: 1,
        slug: '11h-ArduBlockly',
        title: 'ArduBlockly-EandE',
        headerLine01: '* Front-end: Node, Google-Blockly, Electron',
        headerLine02: '* Back-end: Digital Ocean ~ Ubuntu, Python Bottle',
        url: 'http://138.68.57.214:8001/ardublockly/index.html',
        description: 'Description'
      }
    ]
  }
})
