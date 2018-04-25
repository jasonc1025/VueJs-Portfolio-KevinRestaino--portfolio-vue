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
        job_group_name: 'Academic Degrees',
        job_group_text: null,
        job_title: 'Master of Arts, General Ministry',
        job_company: 'Western Seminary',
        job_location: 'San Jose, CA',
        job_timePeriod: {
          from: 'Fall 1996',
          to: 'Spring 2000'
        },
        job_childs:
        [
          {text: '&bull; Highest Honor for PTS 514: Expository Sermons.'},
          {text: '&bull; Middle & High School Youth and Family Ministry Practicum.'}
        ]
      },
      {
        job_group_name: null,
        job_group_text: null,
        job_title: 'Math Single Subject Teacher Credential',
        job_company: 'Mills College',
        job_location: 'Oakland, CA',
        job_timePeriod: {
          from: 'Fall 1994',
          to: 'Sumer 1995'
        },
        job_childs:
        [
          {text: '&bull; California Mathematics Single-Subject Professional Clear Credentialed.'},
          {text: '&bull; “Mid-Career Math & Science (Biology, Chem., Physics) Teacher Preparation” Specialty w/ Stanford University.'}
        ]
      },
      {
        job_group_name: null,
        job_group_text: null,
        job_title: 'B.S. Electrical and Computer Engineering',
        job_company: 'University of California',
        job_location: 'Davis, CA',
        job_timePeriod: {
          from: 'Fall 1983',
          to: 'Spring 1988'
        },
        job_childs:
        [
          {text: '&bull; Dean\'s Honor List & Westinghouse Science Honors.'}
        ]
      },

      {
        job_group_name: 'Teaching & Engineering Experience',
        job_group_text: null,
        job_title: 'Web Full-Stack and Open-Source Robotics Instructor & Developer',
        job_company: 'Encourage and Empower',
        job_location: 'Milpitas, CA',
        job_url: 'http://www.EandE.world',
        job_timePeriod: {
          from: 'Sept. 2006',
          to: 'Current'
        },
        job_childs:
        [
          { text: '&bull; Though I\'ve enjoyed coding and teaching Java, C#, C++ and C for over the past 10 years, I\'m very excited with the future of JavaScript & Python, current de-facto standards for Web Development & Robotics, respectively. [Stack Overflow 2018 Global Survey of 100K Developers]' },
          { text: '&bull; After recently completeing a 1) One-Year Paid-Sabbatical to support Siemens:eMeter Energy Smart-Grid systems with my web full-stack JavaScript & Python experience, and 2) One-Semester as Adjunct Professor for CS110 C-Programming at Cogswell College, I\'ve developed a best-of-breed curriculum portfolio showcasing leading technologies for Web Development & Robotics for College-Preparatory & Career-Advancement.' }
        ],

        skills_groups:
        [
          {
            skills_group_group_name: 'Tech Curriculum for College-Preparatory & Career-Advancement',
            skills_group_group_text: null,
            skills_group_name: 'Web Full-Stack',
            skills_group_text: '&bull; Buttons below link to live demo sites.',

            skills:
            [
              {
                skill_head: 'Front-End UI: React',
                skill_body: 'Apollo, Axios, Enzyme, Express, Gatsby, GraphQL, Jest, MongoDB, Particles.js, Redux',
                skill_link: 'projects-react/',
                skill_link_tab_index: '1',

                skill_childs:
                [
                  {text: null}
                ]
              },
              {
                // -- Archive: Vuetify
                skill_head: 'Front-End UI: Vue.js',
                skill_body: 'Apollo, Axios, Express, GraphQL, MongoDB, Nuxt, Stripe, SVG Grapics, TweenJs, Vuex',
                skill_link: 'projects-vue-js/',
                skill_link_tab_index: '2',

                skill_childs:
                [
                  {text: null}
                ]
              },
              {
                skill_head: 'Back-End Server: Node.js',
                skill_body: 'Axios, Express, MongoDB, Mongoose, Passport, Socket.io, WebSocket',
                skill_link: 'projects-node-js/',
                skill_link_tab_index: '3'
              },
              {
                skill_head: 'Backend',
                skill_body: 'Amazon AWS/EB, Digital Ocean NginX/Apache, Google-Firebase, Heroku, Netlify, Zeit-Now',
                skill_link: null
              },
              {
                skill_head: 'Others',
                skill_body: 'Python: Bottle, Flask -- JavaScript: Bootstrap, CSS, Highcharts, HTML, JQuery, SQL, Webpack',
                skill_link: null
              }
            ]
          },
          {
            skills_group_group_name: null,
            skills_group_group_text: null,
            skills_group_name: 'IOT and Embedded Engineering',
            skills_group_text: '&bull; Buttons below link to live demo sites.',

            skills:
            [
              {
                skill_head: 'Robotics Software',
                skill_body: 'Arduino, Lego EV3, Rasberry Pi, BeagleBone',
                skill_link: 'projects-javascript-python/',
                skill_link_tab_index: '4',

                skill_childs:
                [
                  {text: null}
                ]
              },
              {
                skill_head: 'Robotics Educational/Competition Kit',
                skill_body: 'Arduino, Lego EV3/Next2, Rasberry Pi, BeagleBone',
                skill_link: 'http://www.Eande.world',
                skill_link_tab_index: '5',

                skill_childs:
                [
                  {text: 'Text'}
                ]
              }
            ]
          },
          {
            skills_group_group_name: 'Insructor',
            skills_group_group_text: 'Curriculum Development Text',
            skills_group_name: 'Instructor',
            skills_group_text: '&bull; Web Full-Stack: Client-Side kaJSDLAj dljakdjaKDJAkj dlkAJDLKAjdlkjaKDJ alkdjaLK JDKLajdlkaJDLKAJSLKD JASLKDJ ASJKLJD Akj dl;kaJ DL;AJ SDL',

            skills:
            [
              {
                skill_head: 'React',
                skill_body: 'Apollo, Axios, Enzyme, Express, Gatsby, GraphQL, Jest, MongoDB, Particles.js, Redux',
                skill_link: 'projects-react/',

                skill_childs:
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

                skill_childs:
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
