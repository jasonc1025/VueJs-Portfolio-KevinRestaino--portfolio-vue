// * Legend
// $bullet_point: &#9656;;

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
        job_group_name: 'Education',
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
          {text: '&#9656; Highest Honor for PTS 514: Expository Sermons.'},
          {text: '&#9656; Middle & High School Youth and Family Ministry Practicum.'}
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
          {text: '&#9656; California Mathematics Single-Subject Professional Clear Credentialed.'},
          {text: '&#9656; “Mid-Career Math & Science (Biology, Chem., Physics) Teacher Preparation” Specialty w/ Stanford University.'}
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
          {text: '&#9656; Dean\'s Honor List & Westinghouse Science Honors.'}
        ]
      },

      {
        job_group_name: 'Teaching Experience',
        job_group_text: null,
        job_title: 'Web Full-Stack & Robotics ~ Sr. Instructor & Curriculum Developer',
        job_company: 'Encourage and Empower (EandE)',
        job_location: 'Milpitas, CA',
        job_url: 'http://www.EandE.world',
        job_timePeriod: {
          from: 'Sept. 2006',
          to: 'Current'
        },
        job_childs:
        [
          { text: '&#9656; By specializing in Open-Source Technologies, I\'ve co-founded EandE as a \'home-garage\' R&D with a mission to democratize Education-Tech across age & socio-economic barriers.' },
          { text: '&#9656; Over these past 10 years, I\'ve enjoyed coding and teaching Java, C#, C++ and C.' },
          { text: '&#9656; And with the Web & Robotics revolution upon us, I\'ve developed curricula that focus on industry-leading JavaScript and Python -- the top two languages for these past several years as recognized by Stack Overflow\'s 2018 Global Survey of 100K Developers [https://insights.stackoverflow.com/survey/2018].' },
          { text: '&#9656; Buttons below link to live demo sites.' }
        ],

        skills_groups:
        [
          {
            skills_group_group_name: 'EandE\'s Industry-Based Curricula',
            skills_group_group_text: '<span style="text-align:center;">As Inpsired from Strategic Corporate and College Experiences:<br>Web Full-Stack Developer at Siemens-eMeter -&- Adjunct Professor at Cogswell College</span>',
            skills_group_name: 'Web Full-Stack: JavaScript (JS) and Python Ecosystem',
            skills_group_text: '&#9656; Following Showcasing Project-Based Core Technologies:',

            skills:
            [
              {
                skill_head: 'React:',
                skill_body: 'JS Frontend: Apollo, Axios, Enzyme, Express, Gatsby, GraphQL, Jest, MongoDB, Particles.js, Redux',
                skill_link: 'projects-react/',
                skill_link_tab_index: '1',

                skill_childs:
                [
                  {text: null}
                ]
              },
              {
                // -- Archive: Vuetify
                skill_head: 'Vue.js:',
                skill_body: 'JS Frontend: Apollo, Axios, Express, GraphQL, MongoDB, Nuxt, Stripe, SVG Grapics, TweenJs, Vuex',
                skill_link: 'projects-vue-js/',
                skill_link_tab_index: '2',

                skill_childs:
                [
                  {text: null}
                ]
              },
              {
                skill_head: 'Node.js:',
                skill_body: 'JS Backend: Axios, Express, MongoDB, Mongoose, Passport, Socket.io, WebSocket',
                skill_link: 'projects-node-js/',
                skill_link_tab_index: '3'
              },
              {
                skill_head: 'Cloud/Servers:',
                skill_body: 'Backend: Amazon AWS/EB, Digital Ocean NginX/Apache, Google-Firebase, Heroku, Netlify, Zeit-Now',
                skill_link: null
              },
              {
                skill_head: 'Others:',
                skill_body: 'Python: Bottle, Flask -- JavaScript: Bootstrap, CSS, Highcharts, HTML, JQuery, SQL, Webpack',
                skill_link: null
              }
            ]
          },
          {
            skills_group_group_name: null,
            skills_group_group_text: null,
            skills_group_name: 'Silicon Valley\'s 1st D.I.Y.-Alternative to LEGO®, TETRIX® & VEX® Robotics',
            skills_group_text: '&#9656; As Showcased at Tech Museum, San Jose -&- Maker Faire\'s Premiere Showroom, Bay Area (twice)...<br>' +
                               '&#9656; <span style="font-weight:400">T.A.C.H.nology® Robotics w/ Arduino</span><br>' +
                               '&#9656; Combining "<span style="font-weight:400">T.</span>echnology, <span style="font-weight:400">A.</span>rts & <span style="font-weight:400">C.</span>rafts... <span style="font-weight:400">H.</span>olistically" for Middle School, High School & College',

            skills:
            [
              {
                skill_head: 'Award-Winning IDE:',
                skill_body: 'Integrated Development Environemnt (IDE) "Drag-n-Drop" Real-time Translation to C/C++',
                skill_link: 'projects-javascript-python/',
                skill_link_tab_index: '4',

                skill_childs:
                [
                  // * Both 'class="skillUrl"' not seem to work, weird.  There do inline-style.
                  {text: '&#9656; S.T.E.A.M. (Science, Tech, Engineering, Arts & Math) Curriculum'},
                  {text: '&#9656; Designed for low-cost M.assively E.ngaged C.o-op C.ompetition (M.E.C.C.®) Events'},
                  {text: '&#9656; Open-Source Robotics Kit at less than "Half the Cost" of other systems'},
                  {text: '&#9656; Web Full-Stack Remote-Control System using Rasberry Pi (JS, Python)'},
                  {text: '&#9656; More info on T.A.C.H.nology® Robotics at EandE\'s Main Site: <a href="http://www.eande.world" class="skillUrl" target="_blank"><span class="skillUrl" style="color:blue"><u> http://www.EandE.world </u></span></a>'}
                ]
              }
            ]
          },
          {
            skills_group_group_name: null,
            skills_group_group_text: null,
            skills_group_name: 'Other Robotics Taught:',
            skills_group_text: null,

            skills:
            [
              {
                skill_head: 'Lego EV3/NXT2:',
                skill_body: 'Integrated Development Environemnt (IDE) "Drag-n-Drop" Real-time Translation to C/C++',
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: '&#9656; Test'}
                ]
              },
              {
                skill_head: 'FTC Tetrix:',
                skill_body: 'Integrated Development Environemnt (IDE) "Drag-n-Drop" Real-time Translation to C/C++',
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: '&#9656; Test'}
                ]
              }
            ]
          },
          {
            skills_group_group_name: 'EandE Instructor',
            skills_group_group_text: null,
            skills_group_name: '"Paid Teaching-Sabbatical" as Interim Web Full-Stack Developer',
            skills_group_text: 'Siemens-eMeter, Foster City CA',
            skills_group_timePeriod: {
              from: 'Jan 2017',
              to: 'Dec 2017'
            },
            skills_group_ageRange: 'Industry',

            skills:
            [
              {
                skill_head: 'Full-Stack Web Demo:',
                skill_body: 'JavaScript & Python Server/Client Programming for their Energy Smart-Grid Prototype',
                skill_link: 'projects-javascript-python/',
                skill_link_tab_index: '4',

                skill_childs:
                [
                  { text: '&#9656; 1-Year Contract to provide EandE\'s Web Full-Stack T.A.C.H.nology® for their Cloud-based System' }
                ]
              }
            ]
          },
          {
            skills_group_group_name: null,
            skills_group_group_text: null,
            skills_group_name: 'Adjunct Professor, Computer Science and Engineering',
            skills_group_text: 'Cogswell Polytechnical College, San Jose CA',
            skills_group_timePeriod: {
              from: 'Jan 2017',
              to: 'Apr 2017'
            },
            skills_group_ageRange: 'College',

            skills:
            [
              {
                skill_head: 'CS 110: C Programming:',
                skill_body: 'A Fundamental Prerequisite Course',
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  { text: '&#9656; Teaching Opporunity represents a "baby first-step" for EandE establishing Collegiate Alliances for Open-Source R&D Collaboration.' }
                ]
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
