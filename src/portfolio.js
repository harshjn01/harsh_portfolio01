// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";



// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};


// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsh Jain",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WxgpZ46r0GwQTWINAGko7qIfMFTRwpx7/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshjn01",
  linkedin: "https://www.linkedin.com/in/harshjain101/",
  gmail: "harshjain6032@gmail.com",
  instagram: "https://www.instagram.com/harsh_j.n/",
  gitlab: "https://gitlab.com/keshav5339",
  facebook: "https://www.facebook.com/keshav.agarwal.7542001",
  twitter: "https://x.com/Hjphoenix6032",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build interactive and responsive user interfaces for modern web applications using React.js"
    ),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Supabase ."
    ),
    emoji(
      "⚡ Implement real-time and AI-powered features to enhance user experiences"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "supabase",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "JECRC University",
      logo: require("./assets/images/JECRC LOGO2.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "September 2022 - August 2026",
      descBullets: ["CGPA: 8.0"]
    },
    {
      schoolName: "Swami Vivekanand Govt Model School, Parbatsar",
      logo: require("./assets/images/svgms.png"),
      subHeader: "Senior Secondary Education",
      duration: "March 2021 - March 2022",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Percentage: 76%"]
    },
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "55%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Coordinator",
      company: "IIFA",
      companylogo: require("./assets/images/iifa.jpg"),
      date: "March 2025",
      desc: "Part of the organizing team for India’s largest Gen-Next Fest, supporting event coordination and execution.",
      descBullets: [
        "Coordinated event activities to ensure smooth flow and crowd management.",
        "Assisted in on-ground operations, enhancing attendee experience for large audiences."
      ]
       },
       {
      role: "Technical Team Member",
      company: "Jecrc University",
      companylogo: require("./assets/images/JECRC LOGO2.png"),
      date: "February 2023",
      desc: "Served as the Event Coordinator for FIFA",
      descBullets: [
        "Assisted in setting up and managing FIFA gaming infrastructure at JU Rhythm.",
        "Provided technical support to ensure smooth tournament operations."
      ]
    },
    {
      role: "Team Management",
      company: "TribeVibe",
      companylogo: require("./assets/images/Tribe.png"),
      date: "",
      desc: "Part of the on-ground management team at Vibin Fest 2023, Jaipur",
      descBullets: [
        "Coordinated with multiple teams for scheduling and real-time issue handling.",
        "Managed crowd movement to ensure safety and seamless event flow."
      ]
       },
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/irrigation.png"),
      projectName: "Mithari Agro Agency",
      projectDesc: "Developed and managed a business website for an agro agency to showcase products, manage inventory, and improve digital presence, enabling better customer engagement and streamlined product management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "keeper-app-rust-six.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/NovaAi.png"),
      projectName: "Phoenix AI",
      projectDesc: " Phoenix AI is a smart, interactive web-based chatbot designed to provide real-time conversational responses through a clean and user-friendly interface. The project focuses on combining a modern frontend with a lightweight backend to deliver seamless AI-powered interactions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "keeper-app-rust-six.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      subtitle:
       "Comprehensive training covering front-end and back-end web development, including HTML, CSS, JavaScript, React, Node.js, Express, and databases, with hands-on projects and real-world application development.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/18uN9IXojWP339bvxqC7f7eN3uXEGaDaB/view?usp=drive_link"
        }
      ]
    },
    {
      title: "JavaScript From Scratch",
      subtitle:
        "Learned core JavaScript fundamentals, including variables, functions, loops, DOM manipulation, events, and basic problem-solving through hands-on practice.",
      image: require("./assets/images/JavaScript.png"),
      imageAlt: "JavaScript Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1m6nfjjbJyzdceRX7g0AsG8E-ee7FrpBD/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      subtitle: "Gained practical knowledge of data visualization techniques to analyze data and present business insights using charts, dashboards, and visual storytelling for better decision-making.",
      image: require("./assets/images/forage.png"),
      imageAlt: "forage Logo",
      footerLink: [
        {name: "Certification",
        url: "https://drive.google.com/file/d/1qLTkzjq8yd0FDy5FJba6D1Zy33jpYHBZ/view?usp=sharing"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      // title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@keshavagarwal5339/the-rise-of-ai-in-everyday-technology-e63bc8a7f772",
      title: "The Rise of AI in Everyday Technology",
      description:
        "From smartphones to smart recommendations, AI is everywhere. This article breaks down how artificial intelligence is shaping our everyday technology."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};



// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  // display: true // Set false to hide this section, defaults to true
};



// intro Section

const podcastSection = {
  title: emoji("Introduction 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/6ICgYp7GDutZUUB395s1Ey?si=ESR8FHwrR3qK8HRmOtu_qw"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me! ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7425837786",
  email_address: "harshjain6032@gmail.com",
  profileImagePath: require("./assets/images/pic2.png")
};

// Twitter Section

const twitterDetails = {
  userName: "KeshavAgar35135", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};