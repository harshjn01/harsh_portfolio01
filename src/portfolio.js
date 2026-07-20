// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Harsh Jain",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 building modern Web Applications with React.js and AI-powered features using Claude AI & OpenAI — turning real-world ideas into practical software solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WxgpZ46r0GwQTWINAGko7qIfMFTRwpx7/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshjn01",
  linkedin: "https://www.linkedin.com/in/harshjain101/",
  gmail: "harshjain6032@gmail.com",
  instagram: "https://www.instagram.com/harsh_j.n/",
  gitlab: "https://gitlab.com/hjain6032",
  facebook: "https://www.facebook.com/profile.php?id=100022886269680",
  twitter: "https://x.com/Hjphoenix6032",
  medium: "https://medium.com/@harshjain6032",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER WHO BUILDS AI-POWERED WEB APPLICATIONS",
  skills: [
    emoji("⚡ Build responsive, high-performance UIs with React.js, Bootstrap and modern CSS"),
    emoji("⚡ Develop and maintain full-stack web applications and ERP modules"),
    emoji("⚡ Integrate AI features and do AI-assisted development with Claude AI & OpenAI"),
    emoji("⚡ Work with databases (SQL, MySQL) and build data dashboards using Power BI")
  ],

  softwareSkills: [
    { skillName: "html", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "bootstrap", fontAwesomeClassname: "fab fa-bootstrap" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "sql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "mysql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Claude AI", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "OpenAI", fontAwesomeClassname: "fas fa-brain" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Jaipur Engineering College and Research Centre (JECRC)",
      logo: require("./assets/images/JECRC LOGO2.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2022 - August 2026",
      descBullets: ["Current Aggregate CGPA: 8.0"]
    },
    {
      schoolName: "Swami Vivekananda Govt Model School, Parbatsar",
      logo: require("./assets/images/svgms.png"),
      subHeader: "Senior School Certificate Examination (CBSE)",
      duration: "March 2022",
      descBullets: ["Percentage: 76%"]
    }
  ]
};

// Tech Stack Proficiency

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / UI (React, Bootstrap)",
      progressPercentage: "85%"
    },
    {
      Stack: "Full Stack Web Development",
      progressPercentage: "70%"
    },
    {
      Stack: "AI Integration",
      progressPercentage: "70%"
    },
    {
      Stack: "Data & Analytics (SQL, Power BI)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer / QA Intern",
      company: "Trivion Technologies",
      companylogo: require("./assets/images/trivionLogo.jpg"),
      date: "May 2026 - Present",
      desc: "Work on development and quality assurance of enterprise software products across multiple domains.",
      descBullets: [
        "Contribute to development and functional & regression testing for ERP, POS, CA Firm, and Employee Management software.",
        "Collaborate with developers to validate bug fixes and improve overall product quality."
      ],
      skills: ["React", "QA / Regression Testing", "ERP", "POS Systems"]
    },
    {
      role: "Research Engineer Intern",
      company: "Zeetron Networks",
      companylogo: require("./assets/images/zeetronLogo.jpg"),
      date: "February 2026 - April 2026",
      desc: "Built data-driven solutions and business intelligence dashboards.",
      descBullets: [
        "Assisted in developing data-driven solutions using SQL, Python, and Power BI.",
        "Managed data analysis, reporting, and dashboard creation for business insights."
      ],
      skills: ["SQL", "Python", "Power BI", "Data Analysis"]
    },
    {
      role: "Event Coordinator",
      company: "IIFA",
      companylogo: require("./assets/images/iifa.jpg"),
      date: "March 2025",
      desc: "Organized and coordinated events for India's largest Gen-Next Fest.",
      descBullets: [
        "Coordinated event activities, enhancing the experience for thousands of attendees.",
        "Assisted in on-ground operations and crowd management for large audiences."
      ],
      skills: ["Event Operations", "Crowd Management", "Coordination"]
    }
  ]
};

// Open Source

const openSource = {
  showGithubProfile: true,
  display: false
};

// Big Projects

const bigProjects = {
  title: "Projects",
  subtitle: "PRODUCTS AND APPLICATIONS I HAVE BUILT OR CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/chartedeLogo.webp"),
      projectName: "Chartede — Practice Management System",
      projectDesc:
        "Developed and maintained Chartede, a Practice Management System for CA firms, through feature enhancements, bug fixes, and AI-assisted development. Collaborated on application development, testing, and optimization across core ERP modules.",
      problem:
        "CA firms needed a single system to manage client records, filings, and day-to-day practice operations instead of juggling spreadsheets and manual tracking.",
      approach:
        "Worked across core ERP modules — building features, fixing bugs, and optimizing existing flows — using AI-assisted development to move faster on both frontend and backend work.",
      impact:
        "Chartede is live in production, actively used by CA firms to manage their practice end-to-end.",
      tech: ["React", "Node.js", "ERP Modules", "AI-Assisted Dev"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.chartede.com/"
        }
      ]
    },
    {
      image: require("./assets/images/phoenixLogo.svg").default,
      projectName: "Phoenix Chatbot",
      projectDesc:
        "An AI-powered chatbot that provides real-time, automated responses to user queries. Designed an interactive and user-friendly chat interface to enhance user engagement.",
      problem:
        "Users needed instant, always-available answers instead of waiting on manual replies to common queries.",
      approach:
        "Built an AI-powered chat interface that understands user queries and responds in real time, designed for a smooth, engaging conversational experience.",
      impact:
        "Delivers automated, real-time responses that free up manual effort while keeping users engaged.",
      tech: ["React", "AI / LLM Integration", "Chat UI Design"],
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/harshjn01"
        }
      ]
    },
    {
      image: require("./assets/images/irrigation.png"),
      projectName: "Mithari Agro Agency",
      projectDesc:
        "A business website for an agro agency to showcase products, manage inventory, and improve digital presence — enabling better customer engagement and streamlined product management.",
      problem:
        "The agency had no digital presence — no way for customers to browse products online or for the business to manage inventory beyond manual records.",
      approach:
        "Designed and built a business website covering product showcase and inventory management, giving the agency an online presence and a simpler way to manage stock.",
      impact:
        "Gave the agency a live digital storefront, improving customer engagement and streamlining product management.",
      tech: ["React", "Web Design", "Inventory Management"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://keeper-app-rust-six.vercel.app/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications, award letters and cool stuff I have earned!",

  achievementsCards: [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      subtitle:
        "Comprehensive training covering HTML, CSS, JavaScript, React, Node.js, Express, and databases — with hands-on projects and real-world application development.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/18uN9IXojWP339bvxqC7f7eN3uXEGaDaB/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Microsoft Power BI",
      subtitle:
        "Hands-on training in data modeling, DAX, and building interactive dashboards and reports to turn raw data into actionable business insights.",
      image: "",
      imageAlt: "Microsoft Power BI",
      footerLink: []
    },
    {
      title: "Tata Group — Data Visualisation Job Simulation",
      subtitle:
        "Empowering Business with Effective Insights (Forage). Analyzed data and presented business insights using charts, dashboards, and visual storytelling for better decision-making.",
      image: require("./assets/images/forage.png"),
      imageAlt: "Tata / Forage Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1qLTkzjq8yd0FDy5FJba6D1Zy33jpYHBZ/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With love for developing, I write about things I learn.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://medium.com/@harshjain6032",
      title: "The Rise of AI in Everyday Technology",
      description:
        "From smartphones to smart recommendations, AI is everywhere. Breaking down how AI is shaping our everyday technology."
    }
  ],
  display: false
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [{ title: "", subtitle: "", slides_url: "", event_url: "" }]
};

// Podcast Section

const podcastSection = {
  title: emoji("Introduction 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://open.spotify.com/embed/episode/6ICgYp7GDutZUUB395s1Ey?si=ESR8FHwrR3qK8HRmOtu_qw"
  ],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Reach Out to Me! ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91-7425837786",
  email_address: "harshjain6032@gmail.com",
  location: "Jaipur, Rajasthan, India",
  profileImagePath: require("./assets/images/pic2.png"),
  aboutImagePath: require("./assets/images/mepic.jpg"),
  contactImagePath: require("./assets/images/harsh-contact.png")
};

// Twitter Section

const twitterDetails = {
  userName: "Hjphoenix6032",
  display: true
};

const isHireable = true;

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
