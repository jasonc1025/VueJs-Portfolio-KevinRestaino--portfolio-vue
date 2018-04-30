//
// ----- -----
//
// * Important
//

// $bullet_point: &#9656;;

// * Both 'class="skillUrl"' not seem to work, weird.  There do inline-style.
// {text: '&#9656; More info on T.A.C.H.nology® Robotics at EandE\'s Main Site: <a href="http://www.eande.world" class="skillUrl" target="_blank"><span class="skillUrl" style="color:blue"><u> http://www.EandE.world </u></span></a>'}

// Variable Naming
//    'skills_group_timePeriod' : Vue variables between 'store.js' and 'Resume.vue': Have min of one '_' underscore with inverse caps between each '_'
//    '.skillsGroupTimePeriod' : Classes do inverse caps with no '_'

//
// ----- -----
//

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
        job_group_text: '(Ascending Order to Tell My Story)',
        job_title: 'B.S. Electrical and Computer Engineering',
        job_company: 'University of California',
        job_location: 'Davis, CA',
        job_timePeriod: {
          from: 'Fall 1983',
          to: 'Spring 1988'
        },
        job_childs:
        [
          {text: '&#9656; Dean\'s Honor List & Westinghouse Science Honors.'},
          {text: '&#9656; Upper-Division Research Project on Fibre-Optics Digital Networks as sponsored by Hewlett-Packard (E&C 199).'},
          {text: '&#9656; Upper-Division Final Project on Embedded-MicroController for Robotics (E&C 172).'}
        ],

        skills_groups:
        [
          {
            skills_group_group_name: 'Teaching Subject Matter',
            skills_group_group_text: '<span style="text-align:center;">The above two Upper-Divsion Projects -- Networks and MicoControllers -- nurtured my passsion for <br>Web Full-Stack and Robotics, respectively.</span>',
            skills_group_name: null,
            skills_group_text: null,
            skills_group_timePeriod: {
              from: null,
              to: null
            },

            skills:
            [
              {
                skill_head: null,
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: null}
                ]
              }
            ]
          }
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
          to: 'Summer 1995'
        },
        job_childs:
        [
          {text: '&#9656; California Mathematics Single-Subject Professional Clear Credentialed.'},
          {text: '&#9656; “Mid-Career Math & Science Teacher Preparation” Specialized Track.'},
          {text: '&#9656; Special Intership in Partnership with Stanford University\'s Resources & Research.'}
        ],
        skills_groups:
        [
          {
            skills_group_group_name: 'Teaching Pedagogy & Classroom Management:',
            skills_group_group_text: '<span style="text-align:center;">Mills College\'s relationship with Stanford University equiped me to teach over a decade in settings <br>from a San Leandro public school\'s 120+ students/day to East Palo Alto inner-city youth projects.</span>',
            skills_group_name: null,
            skills_group_text: null,
            skills_group_timePeriod: {
              from: null,
              to: null
            },

            skills:
            [
              {
                skill_head: null,
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: null}
                ]
              }
            ]
          }
        ]
      },

      {
        job_group_name: null,
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
        ],

        skills_groups:
        [
          {
            skills_group_group_name: 'Teaching Pedagogy II & Higher Purpose',
            skills_group_group_text: '<span style="text-align:center;">Western Seminary\'s program empowered me further regarding Teaching, Speaking & Communications.<br>Also their Missionary values helped me to Envision Teaching Technology as a Platform from which to Build Community, one Individual at a time.</span>',
            skills_group_name: null,
            skills_group_text: null,
            skills_group_timePeriod: {
              from: null,
              to: null
            },

            // skills: null  // will need to replace below if wish to truly trigger as 'true': 'v-if="skills_group.skills!=null"'
            skills:
            [
              {
                skill_head: null,
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: null}
                ]
              }
            ]
          }
        ]
      },

      {
        job_group_name: 'Teaching Experience #1 of 5',
        job_group_text: '(Descending Order with Most Current First)',
        job_title: 'Co-Founder, Instructor & Curriculum Developer: Web Full-Stack & Robotics',
        job_company: 'Encourage and Empower (EandE)',
        job_location: 'Milpitas, CA',
        job_url: 'http://www.EandE.world',
        job_timePeriod: {
          from: 'Sep 2006',
          to: 'Current'
        },
        job_childs:
        [
          { text: '&#9656; Traditionally, I\'ve enjoyed coding and teaching Java, C#, and C++ -- among many other Linux-based tools.' },
          { text: '&#9656; Yet due to the global pervasiveness of Web/Cloud-Services and Robotics/IOT-Devices, Stack Overflow\'s 2018 Global Survey of 100K Developers concludes that two Open-Source languages -- JavaScript and Python -- have taken the world by storm, at least for these past several years <a href="https://insights.stackoverflow.com/survey/2018" class="skillUrl" target="_blank" style="color:blue;text-decoration-line:underline;font-size:75%">[https://insights.stackoverflow.com/survey/2018]</a>.' },
          { text: '&#9656; Thus from EandE\'s Instructional R&D Lab (as based at my home/garage since 2004), I wish to present a portfolio of various commerical-grade, educational-based projects that feature JavaScript and/or Python, along with their respective core API libraries (as noted below).  Below, the blue buttons link to live demo sites.' }
        ],

        skills_groups:
        [
          {
            skills_group_group_name: 'EandE\'s Industry-Based Curricula',
            // skills_group_group_text: '<span style="text-align:center;">As Inspired from Strategic Corporate and College Experiences:<br>Web Full-Stack Developer at Siemens-eMeter -&- Adjunct Professor at Cogswell College</span>',
            skills_group_group_text: null,
            skills_group_name: '&#9656; Web Full-Stack: JavaScript (JS), Python and Their Ecosystem',
            skills_group_text: '&#9656; Following Showcasing Project-Based Core Technologies:',
            skills_group_timePeriod: {
              from: null,
              to: null
            },

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
            skills_group_name: '&#9656; Silicon Valley\'s 1st Lower-Cost D.I.Y.-Alternative to LEGO®, TETRIX® & VEX® Robotics',
            skills_group_text: '&#9656; As Showcased at Tech Museum, San Jose -&- Maker Faire\'s Premiere Showroom, Bay Area (twice)...<br>' +
                               '&#9656; <span style="font-weight:400"><u>T</u>.<u>A</u>.<u>C</u>.<u>H</u>.nology® Robotics w/ Arduino</span><br>' +
                               '&#9656; Combining "<span style="font-weight:400"><u>T</u>.</span>echnology, <span style="font-weight:400"><u>A</u>.</span>rts & <span style="font-weight:400"><u>C</u>.</span>rafts... <span style="font-weight:400"><u>H</u>.</span>olistically" for Middle School, High School & College',
            skills_group_timePeriod: {
              from: null,
              to: null
            },

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
                  {text: '&#9656; More info on T.A.C.H.nology® Robotics at EandE\'s Main Site: <a href="http://www.eande.world" class="skillUrl" target="_blank" style="color:blue;text-decoration-line:underline;font-size:75%">http://www.EandE.world</a>'}
                ]
              }
            ]
          },
          {
            skills_group_group_name: null,
            skills_group_group_text: null,
            skills_group_name: '&#9656; Other Robotics Taught:',
            skills_group_text: null,
            skills_group_timePeriod: {
              from: null,
              to: null
            },

            skills:
            [
              {
                skill_head: 'Lego EV3/NXT2:',
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: '&#9656; 1st Place & Top 5 Overall: Single-Sonar Line-Tracking at RoboGame\'s Jr-League, Lead Coach (EandE Team, 2012 & 2013)'}
                ]
              },
              {
                skill_head: 'FTC Tetrix:',
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: '&#9656; 1st Place: First Tech Challenge (FTC) Regionals, Lead Software Coach (King\'s Academy Robotics Team, Sunnyvale, 2016)'}
                ]
              }
            ]
          },
          {
            skills_group_group_name: 'EandE\'s Industry-Based Teaching',
            skills_group_group_text: null,
            skills_group_name: '&#9656; "Paid Teaching-Sabbatical" as Interim Web Full-Stack Developer',
            skills_group_text: 'Siemens-eMeter, Foster City, CA',
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
            skills_group_name: '&#9656; Adjunct Professor, Computer Science and Engineering',
            skills_group_text: 'Cogswell Polytechnical College, San Jose, CA',
            skills_group_timePeriod: {
              from: 'Jan 2017',
              to: 'Apr 2017'
            },
            skills_group_ageRange: 'College',

            skills:
            [
              {
                skill_head: 'CS 110: C Programming:',
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  { text: '&#9656; A Fundamental Prerequisite Course.' },
                  { text: '&#9656; Though for only one semester, this teaching opportunity serves as a "baby first-step" for EandE establishing Collegiate Alliances for Open-Source R&D Collaboration among Staff & Students.' }
                ]
              }
            ]
          },
          {
            skills_group_group_name: null,
            skills_group_group_text: null,
            skills_group_name: '&#9656; Computer Science & Robotics Instructor',
            skills_group_text: 'Heart Academy Home-School Co-op, San Jose, CA',
            skills_group_timePeriod: {
              from: 'Aug 2011',
              to: 'May 2017'
            },
            skills_group_ageRange: 'Middle & High School',

            skills:
            [
              {
                skill_head: 'T.A.C.H.nology® Robotics w/ Arduino:',
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  { text: '&#9656; Students showcased at Maker Faire\'s Premiere Showroom (2015-2016) and Robotics Showroom (2017), drawing over 10k spectators during the 2-day event.' },
                  { text: '&#9656; Further details of curriculum as explained above.' }
                ]
              },
              {
                skill_head: 'Computer Science: “Game-ON Programming-2-Publishing”:',
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  { text: '&#9656; Python for 3D Minecraft , Roblox Lua Coding  & Construct 2.' },
                  { text: '&#9656; Flagship Class-Project “Itty Bitty Jr in Mutant Madness" Published on 2 Major App Stores:' },
                  { text: '&nbsp; &nbsp; &#9656; <a href="https://itunes.apple.com/ee/app/itty-bitty-jr-in-mutant-madness/id946673546?mt=8" class="urlLink" target="_blank" style="color:blue;text-decoration-line: underline;">Apple App Store (iOS)</a>' },
                  { text: '&nbsp; &nbsp; &#9656; <a href="https://play.google.com/store/apps/details?id=org.EncourageAndEmpower.IttyBittyJrInMutantMadness" class="urlLink" target="_blank" style="color:blue;text-decoration-line: underline;">Google Play (Android)</a>' },
                  { text: '&#9656; Above Project also Showcased at Maker Faire\'s Young Makers Regionals at S.J.\'s The Tech Museum and S.F.\'s Exploratoriuim.' }
                ]
              }
            ]
          },
          {
            skills_group_group_name: null,
            skills_group_group_text: null,
            skills_group_name: '&#9656; Summer Tech Coordinator & Lead Instructor',
            skills_group_text: 'Bayshore Christian Ministries, East Palo Alto, CA',
            skills_group_timePeriod: {
              from: 'Summer 2014 & 2016',
              to: null
            },
            skills_group_ageRange: 'Middle School',

            skills:
            [
              {
                skill_head: 'Programming & Robotics:',
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  { text: '&#9656; After Volunteer-Teaching for 6 Summers in their Youth Programs, Served as Technology Director for 4-Week Summer Camps serving Inner-City Kids regarding:' },
                  { text: '&#9656;&#9656; Programming: Visual-Coding in Scratch 2.0 by M.I.T. -&- Code Studio by Code.org.' },
                  { text: '&#9656;&#9656; Robotics: Lego NXT2 Robotics.' },
                  { text: '&#9656; Trained and Supervised a Team of Instructors and Assistants.' }
                ]
              }
            ]
          },
          {
            skills_group_group_name: null,
            skills_group_group_text: null,
            skills_group_name: '&#9656; Private Tutor',
            skills_group_text: 'EandE, Milpitas, CA',
            skills_group_timePeriod: {
              from: 'Fall 2006',
              to: 'Jul 2011'
            },
            skills_group_ageRange: 'Middle & High School',

            skills:
            [
              {
                skill_head: 'SAT Math, AP Calculus AB, Algebra 1 & 2, Geometry, Trigonometry & Middle School Math',
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  { text: null }
                ]
              }
            ]
          }

        ]
      },
      {
        job_group_name: 'Teaching Experiences #2 to #5',
        job_group_text: null,
        job_title: 'Associate Pastor of Youth/Family Ministries',
        job_company: 'South Bay Chinese Gospel Church',
        job_location: 'Fremont, CA',
        job_url: null,
        job_timePeriod: {
          from: 'Aug 2004',
          to: 'Sep 2014'
        },
        job_ageRange: 'Middle & High School',

        job_childs:
        [
          { text: '&#9656; Teach Sunday School and Sunday Messages for Youth.' },
          { text: '&#9656; Conducted Workshops to help Immigrant Asian-Parents Bridge the Generation & Cultural Gap with their Americanized Children.' }
        ]
      },
      {
        job_group_name: null,
        job_group_text: null,
        job_title: 'Multiple-Subject Instructor',
        job_company: 'Sylvan Learning Center',
        job_location: 'Fremont, CA',
        job_url: null,
        job_timePeriod: {
          from: 'Apr 2003 ',
          to: 'May 2008'
        },
        job_ageRange: 'Middle & High School',
        job_childs:
        [
          { text: '&#9656; Instructor for Reading, Writing & Math, achieving the highest recognition of “Preferred Status” with Students & Parents.' },
          { text: '&#9656; SAT Prep in Mathematics for High School Students. ' }
        ]
      },
      {
        job_group_name: null,
        job_group_text: null,
        job_title: 'Intern Pastoral Ministries ',
        job_company: 'Grace Community Covenant Church (Asian-American Focus)',
        job_location: 'Los Altos, CA',
        job_url: null,
        job_timePeriod: {
          from: 'Mar 2003 ',
          to: 'Apr 2004'
        },
        job_ageRange: 'Children & Families',
        job_childs:
        [
          { text: '&#9656; Communicated vision, recruited and trained staff, and researched curriculum tools for the implementation of an Inter-Generational Sunday Worship Service.' }
        ]
      },
      {
        job_group_name: null,
        job_group_text: null,
        job_title: 'California-Credentialed Math Teacher',
        job_company: 'John Muir Middle School',
        job_location: 'San Leandro, CA',
        job_url: null,
        job_timePeriod: {
          from: 'Sep 1995',
          to: 'Jun 1996'
        },
        job_ageRange: 'Middle School',
        job_childs:
        [
          { text: '&#9656; Five classes totaling over 125 students/day: three mainstream 7th grades, one sheltered 7th grade, and one mainstream 6th grade using Prentice Hall Middle Grade Courses 1 & 2.' }
        ],
        skills_groups:
        [
          {
            skills_group_group_name: null,
            skills_group_group_text: '<span style="text-align:center;">Though approved for renewal to continue teaching at John Muir Middle, personally felt the need for higher training to be better equipped to serve our local community.  Thus enrolled into Western Seminary Masters program (see \'Education\' above).</span>',
            skills_group_name: null,
            skills_group_text: null,
            skills_group_timePeriod: {
              from: null,
              to: null
            },

            skills:
            [
              {
                skill_head: null,
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: null}
                ]
              }
            ]
          }
        ]
      },
      {
        job_group_name: 'Industry Experience #1 to #2',
        job_group_text: null,
        job_title: 'Firmware Engineer for Embedded x86 Linux',
        job_company: 'San Valley Systems',
        job_location: 'San Jose, CA',
        job_url: null,
        job_timePeriod: {
          from: 'Jan 2001 ',
          to: 'Sep 2002'
        },
        job_childs:
        [
          { text: '&#9656; Network TCP/IP Traffic & Route Diagnostics for Fibre Channel FCIP; Firmware & ASIC Co-Simulation Verification; Brocade and Ancor FC-Switch Systems Analysis.' }
        ],
        skills_groups:
        [
          {
            skills_group_group_name: null,
            skills_group_group_text: '<span style="text-align:center;">This served as an interim position, while seekeing a teaching position -- that later being an Intern position at Grace Community Covenant Church. (see \'Teaching Experience\' above).</span>',
            skills_group_name: null,
            skills_group_text: null,
            skills_group_timePeriod: {
              from: null,
              to: null
            },

            skills:
            [
              {
                skill_head: null,
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: null}
                ]
              }
            ]
          }
        ]
      },
      {
        job_group_name: null,
        job_group_text: null,
        job_title: 'Software Engineer',
        job_company: 'Loral Space & Range Systems',
        job_location: 'Sunnyvale, CA',
        job_url: null,
        job_timePeriod: {
          from: 'Aug 1988',
          to: 'Jun 1994'
        },
        job_childs:
        [
          { text: '&#9656; Implemented FoxPro Relational Database for Satellite Tracking Operations; Integrated C and C++ modules for Database Manipulation.' }
        ],
        skills_groups:
        [
          {
            skills_group_group_name: null,
            skills_group_group_text: '<span style="text-align:center;">Though work has been an extremely positive experience, personally felt inspired to work more directly with people -- especially after volunteering over 6 years teaching and mentoring youths in my local community.  Thus, enrolled into Mills College for the Teacher Credentialing program. (see \'Education\' above).</span>',
            skills_group_name: null,
            skills_group_text: null,
            skills_group_timePeriod: {
              from: null,
              to: null
            },

            skills:
            [
              {
                skill_head: null,
                skill_body: null,
                skill_link: null,
                skill_link_tab_index: null,

                skill_childs:
                [
                  {text: null}
                ]
              }
            ]
          }
        ]
      },
      {
        job_group_name: 'References Available Upon Request',
        job_group_text: null,
        job_title: null,
        job_company: null,
        job_location: null,
        job_url: null,
        job_timePeriod: {
          from: null,
          to: null
        },
        job_childs:
        [
          { text: null }
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
        headLine00: '* x2 AWARD-WINNING \'2016 Code for the Kingdom\' Robotics IDE * Arduino-Robotics Visual/Textual Coder',
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
