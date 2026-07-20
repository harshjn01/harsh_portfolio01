// "Ask Harsh" assistant brain.
//
// Works out of the box with a local, intent-matching knowledge base built from
// portfolio.js — no API key required. To upgrade to a real LLM, set a global
// endpoint (see `getAnswer`): the question + a compact profile context are POSTed
// to your serverless function, which calls Claude/OpenAI and returns { answer }.

import {
  greeting,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  socialMediaLinks
} from "../../portfolio";

const NAME = greeting.username || "Harsh";
const FIRST = NAME.split(" ")[0];

const skillNames = (skillsSection.softwareSkills || []).map((s) => s.skillName);

// ── Local intent responder ─────────────────────────────────────────
// Each intent scores a question: matching a `phrase` weighs heavily (3),
// a `keyword` lightly (1). Highest total wins.
const intents = [
  {
    id: "greeting",
    phrases: [],
    keywords: ["hi", "hello", "hey", "yo", "sup", "howdy", "namaste"],
    answer: () =>
      `Hey! 👋 I'm ${FIRST}'s AI assistant. You can ask me about his skills, experience, education, projects, AI work, certifications, availability, or how to reach him.`
  },
  {
    id: "about",
    phrases: ["who is", "about him", "about harsh", "tell me about", "introduce", "yourself", "who are you"],
    keywords: ["about", "who", "bio", "summary", "himself"],
    answer: () =>
      `${NAME} is a Full Stack Developer based in ${contactInfo.location.split(",")[0]}, currently pursuing a B.Tech in Computer Science. He's frontend-heavy (React, Bootstrap, modern CSS), works with Node.js on the backend, integrates AI with Claude AI & OpenAI, and handles data with SQL & Power BI. In short: he builds modern, AI-powered web apps and turns real-world ideas into practical software.`
  },
  {
    id: "skills",
    phrases: ["what can he do", "good at", "best at", "tech stack", "what technologies"],
    keywords: ["skill", "skills", "tech", "stack", "language", "languages", "tool", "tools", "framework", "frameworks", "react", "javascript", "python", "sql", "node", "css", "html", "bootstrap", "powerbi"],
    answer: () => {
      const bars = (techStack.experience || [])
        .map((e) => `• ${e.Stack} — ${e.progressPercentage}`)
        .join("\n");
      return `${FIRST} works across the full stack. Core tools: ${skillNames.join(
        ", "
      )}.\n\nProficiency:\n${bars}`;
    }
  },
  {
    id: "ai",
    phrases: ["with ai", "ai work", "ai experience", "ai project", "machine learning"],
    keywords: ["ai", "artificial", "claude", "openai", "gpt", "llm", "chatbot", "ml"],
    answer: () =>
      `${FIRST} builds AI-powered features and does AI-assisted development with Claude AI & OpenAI — including the Phoenix AI chatbot and AI-assisted work on the Chartede ERP. This very chat widget is an example of his work! 🤖`
  },
  {
    id: "experience",
    phrases: ["work experience", "his experience", "where has he worked", "job history", "worked before"],
    keywords: ["experience", "work", "job", "intern", "internship", "career", "employ", "company", "trivion", "zeetron", "qa", "testing"],
    answer: () => {
      const lines = (workExperiences.experience || [])
        .map(
          (e) =>
            `• ${e.role} @ ${e.company} (${e.date})\n  ${e.desc}`
        )
        .join("\n");
      return `${FIRST}'s experience:\n${lines}`;
    }
  },
  {
    id: "education",
    phrases: ["where did he study", "his education", "what is he studying", "college"],
    keywords: ["education", "study", "studies", "university", "degree", "school", "cgpa", "gpa", "jecrc", "graduate", "btech", "b.tech"],
    answer: () => {
      const s = educationInfo.schools[0];
      return `${FIRST} is pursuing a ${s.subHeader} at ${s.schoolName} (${s.duration}). ${
        s.descBullets ? s.descBullets.join(" ") : ""
      }`;
    }
  },
  {
    id: "projects",
    phrases: ["what has he built", "his projects", "what did he make", "show me projects"],
    keywords: ["project", "built", "build", "portfolio", "app", "product", "made", "chartede", "phoenix", "mithari", "website"],
    answer: () => {
      const lines = (bigProjects.projects || [])
        .map((p) => `• ${p.projectName}\n  ${p.projectDesc}`)
        .join("\n\n");
      return `Some things ${FIRST} has built:\n\n${lines}\n\nCheck the Projects section for live links!`;
    }
  },
  {
    id: "certifications",
    phrases: ["his certifications", "what certificates", "any courses", "achievements"],
    keywords: ["certification", "certificate", "cert", "award", "course", "udemy", "forage", "tata", "achievement", "bootcamp"],
    answer: () => {
      const cards = (achievementSection.achievementsCards || [])
        .map((c) => `• ${c.title}`)
        .join("\n");
      return `${FIRST}'s certifications & achievements:\n${cards}\n\nSee the Achievements section for certificate links.`;
    }
  },
  {
    id: "hire",
    phrases: ["good fit", "why hire", "why should", "should i hire", "suit", "hire him", "right person", "why him", "what makes him", "strength"],
    keywords: ["hire", "recruit", "opportunity", "freelance", "candidate"],
    answer: () =>
      `Great question! ${FIRST} is a strong fit for teams shipping modern, AI-powered web apps. He's frontend-heavy (React, Bootstrap) with real full-stack and AI-integration experience (Claude AI & OpenAI), plus data & analytics skills (SQL, Power BI). He's shipped production work at Trivion (ERP/QA) and Zeetron (BI dashboards), learns fast, and is open to internships, freelance, and collaborations. Hit "Contact" to reach out! 🚀`
  },
  {
    id: "availability",
    phrases: ["is he available", "can he start", "open to work", "looking for", "available for"],
    keywords: ["available", "availability", "hiring", "join", "start", "relocate", "remote"],
    answer: () =>
      `Yes — ${FIRST} is open to internships, freelance work, and collaborations, and is based in ${contactInfo.location}. Reach out via the Contact section and he'll get back to you!`
  },
  {
    id: "location",
    phrases: ["where is he", "where does he live", "based in", "which city", "from where"],
    keywords: ["location", "located", "based", "city", "country", "jaipur", "india", "live"],
    answer: () => `${FIRST} is based in ${contactInfo.location}. 📍`
  },
  {
    id: "resume",
    phrases: ["his resume", "his cv", "download resume", "download cv"],
    keywords: ["resume", "cv"],
    answer: () =>
      greeting.resumeLink
        ? `You can view/download ${FIRST}'s résumé here:\n📄 ${greeting.resumeLink}\n(Also linked in the hero and contact sections.)`
        : `${FIRST}'s résumé is linked in the hero and contact sections.`
  },
  {
    id: "contact",
    phrases: ["how can i contact", "get in touch", "reach him", "contact him", "email him", "phone number"],
    keywords: ["contact", "email", "reach", "linkedin", "github", "connect", "message", "phone", "number", "mail", "call"],
    answer: () => {
      const parts = [];
      if (contactInfo.email_address) parts.push(`✉️ ${contactInfo.email_address}`);
      if (contactInfo.number) parts.push(`📞 ${contactInfo.number}`);
      if (socialMediaLinks.github) parts.push(`🐙 GitHub: ${socialMediaLinks.github}`);
      if (socialMediaLinks.linkedin) parts.push(`💼 LinkedIn: ${socialMediaLinks.linkedin}`);
      return `Reach ${FIRST} here:\n${parts.join("\n")}`;
    }
  },
  {
    id: "blog",
    phrases: ["does he write", "his blog", "any articles"],
    keywords: ["blog", "write", "writing", "article", "medium"],
    answer: () =>
      `${FIRST} writes about tech and AI — e.g. "The Rise of AI in Everyday Technology" on Medium. He enjoys sharing what he learns.`
  },
  {
    id: "thanks",
    phrases: ["thank you", "thanks a lot"],
    keywords: ["thanks", "thank", "thx", "cool", "awesome", "nice", "great"],
    answer: () =>
      `You're welcome! 😊 Anything else you'd like to know about ${FIRST}?`
  }
];

// Whole-word match so short keywords like "hi"/"yo" don't fire inside
// "his"/"you". Phrases are matched as substrings (they're multi-word).
function hasWord(text, word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b${escaped}\\b`, "i").test(text);
}

export function localAnswer(question) {
  const q = (question || "").toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const intent of intents) {
    let score = 0;
    (intent.phrases || []).forEach((p) => {
      if (q.includes(p)) score += 3;
    });
    (intent.keywords || []).forEach((kw) => {
      if (hasWord(q, kw)) score += 1;
    });
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  if (best && bestScore > 0) return best.answer();
  // Helpful fallback with a mini-bio so even off-topic questions get value.
  return `I'm not totally sure about that one, but here's the gist: ${NAME} is a Full Stack Developer who builds AI-powered web apps with React, Node.js, and Claude AI/OpenAI. Try asking about his skills, experience, projects, education, certifications, availability, or contact details — I've got answers for all of those!`;
}

// Compact context a real LLM endpoint can use as grounding.
export function profileContext() {
  return {
    name: NAME,
    summary:
      "Full Stack Developer (frontend-heavy: React, Bootstrap; backend: Node.js) who builds AI-powered web apps with Claude AI & OpenAI, plus SQL/Power BI data work.",
    skills: skillNames,
    experience: (workExperiences.experience || []).map((e) => ({
      role: e.role,
      company: e.company,
      date: e.date,
      desc: e.desc
    })),
    education: educationInfo.schools.map((s) => ({
      school: s.schoolName,
      degree: s.subHeader,
      duration: s.duration
    })),
    projects: (bigProjects.projects || []).map((p) => ({
      name: p.projectName,
      desc: p.projectDesc
    })),
    contact: {
      email: socialMediaLinks.gmail,
      github: socialMediaLinks.github,
      linkedin: socialMediaLinks.linkedin
    }
  };
}

// Returns an answer. Uses a real LLM endpoint if one is configured; otherwise
// falls back to the local responder. Configure by setting, before load:
//   window.__ASK_HARSH_ENDPOINT__ = "https://your-app.vercel.app/api/ask";
export async function getAnswer(question, history) {
  const endpoint =
    typeof window !== "undefined" && window.__ASK_HARSH_ENDPOINT__;
  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          question,
          history: history || [],
          context: profileContext()
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.answer) return data.answer;
      }
    } catch (e) {
      // Network/endpoint failure — fall through to the local brain.
    }
  }
  return localAnswer(question);
}

export const SUGGESTIONS = [
  "What are Harsh's top skills?",
  "Tell me about his experience",
  "What has he built with AI?",
  "How can I contact him?"
];
