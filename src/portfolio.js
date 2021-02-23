/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "< Mark Amada />",
  title: "Hi coders!, I'm Mark",
  subTitle: emoji(
    "A soon to be Full Stack Software Engineer🚀 This 5 Day React.Js Challenge is so cool. Kudos to the people who made this. I am a fan of Clever Programmer, Qazi inspire me a lot. Cheers to you man! "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SLpsXQz9yXDVBwjGMnZgtHOEVgG_PJ4B/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KingCoderMark",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "mark.amada.2021@gmail.com",
 // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/KingCoderMark",
 // medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/15267688/kingcodermark",
  instagram: 'https://www.instagram.com/kingcodermark/',
  twitter: 'https://twitter.com/kingcodermark',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "I revamped my skills",
  subTitle: "I do self study at home to learn these technologies",
  title: "I revamped my skills",
  skills: [
    emoji(
      "⚡ My graphic skills will surely help me build cool web interfaces "
    ),
    emoji("⚡ I want to develop progressive Web Applications using MERN Stack"),
    emoji(
      "⚡ I also want to learn using API, building ecommerce sites and trading stocks."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UP Diliman",
      logo: require("./assets/images/UP.png"),
      subHeader: "UP Information Technology Development Center, Philippines",
      duration: "September 23, 2013 - December 18, 2013",
      desc: "Develop mobile applications using native",
      descBullets: [
        "Get a general weighted average of 1.60",
        "Develop mobile apps "
      ]
    },
    {
      schoolName: "AMA CC Lipa Campus, Philippines",
      logo: require("./assets/images/AMA.jpg"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "June 2008 - April 2012",
      desc:
        "Get 1.0 in On the Job Training...",
      descBullets: ["High grades on software subjects"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "PHP", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Javascript", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React.js", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Adobe Illustrator",
      progressPercentage: "90%"
    }
    
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graphic Artist",
      company: "Dream pay Printing Services",
      companylogo: require("./assets/images/dream.png"),
      date: "September 2019 – Present",
      desc:
        "Provide printing services",
      descBullets: [
        "Print and layout tarpaulin, invitations",
        "Logo Design",
        "Payment Services",
        "Photo print"
      ]
    },
    {
      role: "Business Owner ( T-Shirt printing )",
      company: "Tatak Batangueno",
      companylogo: require("./assets/images/tatak.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    },
    {
      role: "Full Stack Web Developer",
      company: "coming soon...",
      companylogo: require("./assets/images/soon.png"),
      date: "coming soon...",
      desc:
        "I will be in your company soon"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Kingcodermark", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Soon to build Projects",
  subtitle: "some of my future projects",
  projects: [
    {
      image: require("./assets/images/ecommerce.png"),
      projectName: "E-commerce site",
      projectDesc: "Being in -demand right now, it will be a good addition to my portfolio",
      footerLink: [
        {
          name: "coming soon",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/school2.svg"),
      projectName: "Online School Classroom",
      projectDesc: "a web app that allows students feel like they are in their physical classrooms",
      footerLink: [
        {
          name: "coming soon",
          url: "fa"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Soon to be Achievement 🏆 "),
  subtitle:
    "The prize will really help me ",

  achievementsCards: [
    {
      title: "React.JS 5 Day Challenge Winner",
      subtitle:
        "just hoping haha. Or 3rd Place will be fine too :)",
      image: require("./assets/images/5.png"),
      footerLink: [
        {
          name: "Win $15,000 / Javascript Course",
          url:
            ""
        }
      ]
    },



  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(639) 076  455666",
  email_address: "mark.amada.2021@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "kingcodermark", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
