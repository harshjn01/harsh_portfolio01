# My Portfolio Website ⚡️

## A clean, beautiful and responsive portfolio template for Developers!


<p align="center">
  <kbd>
<img src="src\assets\Harsh Jain _ Software Developer Portfolio - Google Chrome 2026-02-04 19-17-23.mp4"></img>
  </kbd>
</p>


Just change `src/portfolio.js` to get your personal portfolio. Customize portfolio theme by using your own color scheme globally in the  `src/_globalColor.scss` file. Feel free to use it as-is or personalize it as much as you want.

Created something awesome for your fork of the portfolio and want to share it? Feel free to open a [pull request](https://github.com/harshjn01/My-Portfolio/pulls).

---

## 🚀 Portfolio Sections
- **Summary & About Me**: A professional overview of my background and goals.
- **Technical Skills**: A visual representation of my tech stack and tools.
- **Education & Experience**: A detailed timeline of my academic and professional career.
- **Open Source Projects**: Real-time display of my pinned GitHub repositories.
- **Projects & Achievements**: A showcase of major builds and certifications.
- **Medium Blogs**: Automatically fetched articles from my Medium profile.
- **Contact Me**: Integrated links to reach out via Gmail, LinkedIn, or GitHub.

---

## 🌟 Features

- 🧑‍💻 Responsive, modern UI built with **React**
- 📁 Projects section with descriptions & links
- ⚙️ Skills & technologies overview
- 📫 Contact form / links
- 📄 Professional experience and resume download
- 🔗 Easy navigation and smooth scrolling

---

## 🛠 Tech Stack

The portfolio is built using:

- **React** – UI library for building components
- **JavaScript** – Core scripting language
- **HTML & SCSS** – Markup and styling
- **React Router** (optional) – Page routing
- **Other tools** such as Webpack / Vite (based on your setup)

---

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/harshjn01/My-Portfolio.git](https://github.com/harshjn01/My-Portfolio.git)
   cd My-Portfolio
   ```
2. **Configure Environment Variables: Create a .env file in the root directory to store your API    keys safely:**
   ```bash
   # For Windows
   copy env.example .env
   # For Mac/Linux
   cp env.example .env
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```

---

## ⚙️ API Integration & Personalization

1. **Linking GitHub and Medium**
   Open your .env file and update it with your own credentials:
   ```
   REACT_APP_GITHUB_TOKEN = "YOUR_PERSONAL_ACCESS_TOKEN"
   GITHUB_USERNAME = "harshjn01"
   MEDIUM_USERNAME = "YOUR_MEDIUM_USERNAME"
   USE_GITHUB_DATA = "true"
   ```
2. **Customizing Site Content**
   - Main Data: Most text and links are located in src/portfolio.js. Edit this file to change your name, bio, and social media handles.

   - Resume: Upload your PDF to src/containers/greeting/resume and ensure it is named resume.pdf.

   - Animations: Replace the JSON files in src/assets/lottie to update site animations.
   
---

## 🐳 Docker Commands
If you prefer to run the project in a container:

1. Build Image:
   Docker build -t portfolio:latest .
2. Run Image:
   Docker run -t -p 3000:3000 portfolio:latest

---

## 🚀 Deployment

### GitHub Pages
   1. Update the homepage field in package.json to: https://Keshav5339.github.io/My-Portfolio/
   2. Deploy using: npm run deploy

### Netlify
    Alternatively, you can connect this repository to Netlify for easy continuous deployment.

---

## 🛠️ Built With

   - React.js: Frontend framework
   - GraphQL: For fetching GitHub data
   - Lottie: For high-quality web animations
   - Styled Components: For modern CSS styling

---

## 🙌 Acknowledgements

   Thanks to the open-source community and portfolio templates for inspiration:

   ✔️ Developer portfolio templates on GitHub.
   
   ✔️ Markdown/README best practices.

   ✔️ Developed with ❤️ by Harsh Jain.


---

