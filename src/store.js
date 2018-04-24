import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    tabModeGet: state => {
      return state.tabMode
    }
  },
  mutations: {
    increment (state) {
      // mutate state
      state.tabMode++
    },
    tabModeSet (state, value) {
      // mutate state
      state.tabMode = value
    }
  },
  state: {
    tabMode: 0, // Default
    jobs: [
      {
        job_title: 'Senior Instructor and Curriculum Developer',
        job_company: 'Encourage and Empower',
        job_location: 'Milpitas, CA',
        job_timePeriod: {
          from: 'September 2006',
          to: 'Present'
        },
        job_group: 'Work Experience',

        skills_groups:
        [
          {
            skills_group_name: 'Front End',
            skills_group_text: '&bull; Web Full-Stack: Client-Side kaJSDLAj dljakdjaKDJAkj dlkAJDLKAjdlkjaKDJ alkdjaLK JDKLajdlkaJDLKAJSLKD JASLKDJ ASJKLJD Akj dl;kaJ DL;AJ SDL',
            skills_group_group: 'Curriculum Developed',
            skills_group_group_text: 'Curriculum Development Text',

            skills:
            [
              {
                skill_head: 'React',
                skill_body: 'Apollo, Axios, Enzyme, Express, Gatsby, GraphQL, Jest, MongoDB, Particles.js, Redux',
                skill_link: 'projects-react/',

                skill_subs:
                [
                  {text: '&bull; skills00_1<br>skills00_1.1<br>skills00_1.2'},
                  {text: '&bull; skills00_1 <span style="color:red"> aksfj as;jf lasj </span> fasj f;lasj <span style="font-weight:bold"> flsajf;lj </span> sdgf d  sgdfdg d <span style="font-weight:bold;color:red"> aksfj as;jf lasj </span> sal;fj salfj asl;f jkjsadlf asjf;lasj flskajflkasjdl;fasjdlfjsadlk;f jasjf saljflasjflsdaj lf;sdajfjd sl;<br>&bull; skills00_1.1 kasjd fl;asj fl;s j;lf jsa; alsfj alskjf ajsjl;faj sflkjsal;kfj salkf asjf;l asdlf as;fj sajfsajfsaldj fals jlsfj <br>skills00_1.2'},
                  {text: '&bull; skills00_2<br>skills00_2.1<br>skills00_2.2'},
                  {text: '&bull; skills00_3<br>skills00_3.1<br>skills00_3.2'}
                ]
              },
              {
                // -- Archive: Vuetify
                skill_head: 'Vue.js',
                skill_body: 'Apollo, Axios, Express, GraphQL, MongoDB, Nuxt, Stripe, SVG Grapics, TweenJs, Vuex',
                skill_link: 'projects-vue-js/',

                skill_subs:
                [
                  {text: 'skills01_1<br>skills01_1.1<br>skills01_1.2'},
                  {text: 'skills01_2<br>skills01_2.1<br>skills01_2.2'},
                  {text: 'skills01_3<br>skills01_3.1<br>skills01_3.2'}
                ]
              },
              {
                  // --
                skill_body: 'Axios, Express, MongoDB, Mongoose, Passport, Socket.io, WebSocket',
                skill_head: 'Node.js',
                skill_link: 'projects-node-js/'
              },
              {
                // --
                skill_head: 'Robotics',
                skill_body: 'Arduino, Lego EV3/Next2, Rasberry Pi, BeagleBone',
                skill_link: 'projects-javascript-python/'
              },
              {
                // --
                skill_head: 'Backend',
                skill_body: 'Amazon AWS/EB, Digital Ocean NginX/Apache, Google-Firebase, Heroku, Netlify, Zeit-Now',
                skill_link: null
              },
              {
                // --
                skill_head: 'Others',
                skill_body: 'Python: Bottle, Flask -- JavaScript: Bootstrap, CSS, Highcharts, HTML, JQuery, SQL, Webpack',
                skill_link: null
              }
            ]
          },
          {
            skills_group_name: 'Back End',
            skills_group_text: 'Web Full-Stack: Server-Side',
            // skills_group_group: null,
            skills_group_group: 'Test',
            skills_group_group_text: 'Test Test',

            skills:
            [
              {
                skill_head: 'React',
                skill_body: 'Apollo, Axios, Enzyme, Express, Gatsby, GraphQL, Jest, MongoDB, Particles.js, Redux',
                skill_link: null,

                skill_subs:
                [
                  {text: 'skills00_1<br>skills00_1.1<br>skills00_1.2'},
                  {text: 'skills00_2<br>skills00_2.1<br>skills00_2.2'},
                  {text: 'skills00_3<br>skills00_3.1<br>skills00_3.2'}
                ]
              },
              {
                // -- Archive: Vuetify
                skill_head: 'Vue.js',
                skill_body: 'Apollo, Axios, Express, GraphQL, MongoDB, Nuxt, Stripe, SVG Grapics, TweenJs, Vuex',
                skill_link: null,

                skill_subs:
                [
                  {text: 'skills01_1<br>skills01_1.1<br>skills01_1.2'},
                  {text: 'skills01_2<br>skills01_2.1<br>skills01_2.2'},
                  {text: 'skills01_3<br>skills01_3.1<br>skills01_3.2'}
                ]
              },
              {
                  // --
                skill_body: 'Axios, Express, MongoDB, Mongoose, Passport, Socket.io, WebSocket',
                skill_head: 'Node.js',
                skill_link: 'projects-node-js/'
              },
              {
                // --
                skill_head: 'Robotics',
                skill_body: 'Arduino, Lego EV3/Next2, Rasberry Pi, BeagleBone',
                skill_link: 'projects-javascript-python/'
              },
              {
                // --
                skill_head: 'Backend',
                skill_body: 'Amazon AWS/EB, Digital Ocean NginX/Apache, Google-Firebase, Heroku, Netlify, Zeit-Now',
                skill_link: null
              },
              {
                // --
                skill_head: 'Others',
                skill_body: 'Python: Bottle, Flask -- JavaScript: Bootstrap, CSS, Highcharts, HTML, JQuery, SQL, Webpack',
                skill_link: null
              }
            ]
          }
        ]

      }

    ],
    projects: [
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53c-03d-03d-BurgerBuilderPlus',
        title: 'Burger Builder Plus',
        headLine00: 'Fast-Food Order App: Burger Builder Plus',
        headLine01: 'React, Axios, Redux, Enzyme, Jest',
        headLine02: 'Google-Firebase',
        url: 'https://myburger-react-maxs.firebaseapp.com',
        description: 'Description'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53ka-BlogPlus',
        title: 'Blog Plus',
        headLine00: 'Blog App: Full-Stack Web Dev',
        headLine01: 'React, Gatsby, GraphQL, Particles.js (Animation), Jest',
        headLine02: 'Netlify',
        url: 'https://react-gatsby-blog-dustinc.netlify.com',
        description: 'Description'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53p-CatchOfTheDayPlus',
        title: 'Catch of the Day Plus',
        headLine00: 'Seafood Order & Inventory App: Catch of the Day Plus',
        headLine01: 'React, CRUD (Firebase-Google), Authentication (GitHub, Twitter, FaceBook)',
        headLine02: 'Netlify',
        url: 'http://react-catchoftheday-wesbos.netlify.com/',
        description: 'Description'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '37e-BookshopPlus',
        title: 'BookShop Plus',
        headLine00: 'Bookstore Order & Admin App: BookShop Plus',
        headLine01: 'Mondo, Express, React & Node (MERN)',
        headLine02: 'Amazon ~ Elastic Beanstalk (EB)',
        url: 'http://react-bookshop-marco-tomasello.nyu2gnsj37.us-west-1.elasticbeanstalk.com/',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '38c-ShoppityPlus',
        title: 'Shoppity Plus',
        headLine00: 'Clothing Store w/ Credit Card Purchasing: Shoppity Plus',
        headLine01: 'Vue, Nuxt, Vuex, Stripe (Credit Card Purchasing)',
        headLine02: 'Netlify',
        url: 'https://vuejs-shoppityplus-sarahdrasner.netlify.com/',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '38b-PizzaPlanetPlus',
        title: 'Pizza Planet Plus',
        headLine00: 'Pizza Order & Admin App: Pizza Planet Plus',
        headLine01: 'Vue, Vuex, Google-Firebase (Database), Authentication (Email/Password)',
        headLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8081/',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '73c-03f-CooperaPlus',
        title: 'Coopera Plus',
        headLine00: 'Multi-Player Web-based Game: Coopera Plus',
        headLine01: 'Vue, Socket.io, WebSocket',
        headLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8082/',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37q-03f-CastleDuelPlus',
        title: 'Castle Duel Plus',
        headLine00: 'Animation-Based Game: Castle Duel Plus',
        headLine01: 'Vue : SVG Grapics, TweenJs (Animation)',
        headLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'https://jasonc1025.github.io/VueJs-CastleDuel-GuillaumeC/ ',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37j-Sec18-StockTraderPlus',
        title: 'Stock Trader Plus',
        headLine00: 'Stock-Trading Simulation Game: Stock Trader Plus',
        headLine01: 'Vue, Vuex, Bootstrap',
        headLine02: 'Amazon S3; Digital Ocean ~ NginX',
        url: 'http://stocktrader-vuejs-maxs.s3-website-us-west-1.amazonaws.com/',
        description: 'Description'
      },
      {
        category: 'nodejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37l-DangThatsDeliciousPlus',
        title: 'Now That\'s Delicious Plus',
        headLine00: 'Favorite Store Map & Review App: Now That\'s Delicious',
        headLine01: 'Node, Axios, Express, MongoDB, Mongoose, Passport',
        headLine02: 'Heroku; Now-Zeit',
        url: 'https://dang-thats-delicious-jwc.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'nodejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '17-10g-ObsidioPlus',
        title: 'Obsidio Plus',
        headLine00: 'Multi-Player Web-based Game: Obsidio Plus',
        headLine01: 'Node, Express, Socket.io',
        headLine02: 'Heroku',
        url: 'https://obsidio-alvin-l.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: '11h-ArduBlockly-EandE',
        title: 'ArduBlockly-EandE',
        headLine00: '* AWARD-WINNING ROBOTICS IDE * Arduino-Robotics Visual/Textual Coder: ArduBlockly-EandE',
        headLine01: 'Node, Google-Blockly, Electron',
        headLine02: 'Python Bottle & Digital Ocean ~ Ubuntu',
        url: 'http://138.68.57.214:8001/ardublockly/index.html',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: 'Siemens-PTI-PSSE',
        title: 'SMART-GRID SIMULATION',
        headLine00: '* SMART-GRID SIMULATION * Siemens User-Experience (UX) Prototype: Power System Simulator',
        headLine01: 'JavaScript, jQuery, jQWidgets, HTML, CSS',
        headLine02: 'Python-SocketServer.TCPServer, Python-SimpleHTTPServer',
        // For Viewing Only, No Live Demo to Interact With
        url: '',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: 'Siemens-CIPortal-ThreeAmigoes',
        title: 'SMART-GRID UI/UX',
        headLine00: '* SMART-GRID UI/UX * Siemens User-Experience (UX) Prototype: Energy IP ~ C&I Portal',
        headLine01: 'JavaScript, Highcharts, HTML, CSS',
        headLine02: 'Netlify',
        // url: 'https://siemens-cipportal-trunk.netlify.com',
        // For Viewing Only, No Live Demo to Interact With
        url: '',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: 'Siemens-EnergyIP-SDPAnalyzer-DemsPortal',
        title: 'BIG DATA - ANALYTICS',
        headLine00: '* BIG DATA - ANALYTICS * Siemens User-Experience (UX) Prototype: Energy IP ~ DEMS Portal',
        headLine01: 'JavaScript, Highcharts, HTML, CSS',
        headLine02: 'Netlify',
        // For Viewing Only, No Live Demo to Interact With
        url: '',
        description: 'Description'
      }
    ]
  }
})
