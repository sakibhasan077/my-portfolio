# Sakib Hasan — Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.4.3-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

A modern, responsive developer portfolio built to showcase my skills, projects, education, and journey as a Full-Stack Developer.

Live Demo: [View Portfolio](https://sakibhasan077.vercel.app/)

---

## 📌 About the Project

This portfolio is designed to present my technical skills, featured projects, and background in a clean and interactive interface.

The portfolio features a dark visual theme with vibrant gradients, modern typography, and responsive layouts to provide a consistent experience across different screen sizes.

## ✨ Features

- **Modern UI:** A dark Cyber Aurora theme with vibrant gradient accents.
- **Responsive Design:** Layouts designed for desktop, tablet, and mobile devices.
- **About Me:** An overview of my programming journey, interests, and working style.
- **Technical Skills:** A showcase of my web development technologies.
- **Education:** My academic background and educational journey.
- **Project Showcase:** Project cards with dedicated project detail pages.
- **Contact Section:** Ways to connect with me professionally.
- **Social Links:** Quick access to my GitHub and LinkedIn profiles.
- **Accessibility:** Keyboard navigation and reduced-motion considerations.
- **SEO:** Page metadata to help search engines understand the website.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React.js | Building reusable UI components |
| TypeScript | Type-safe JavaScript development |
| Tailwind CSS | Styling and responsive layouts |
| shadcn/ui | Reusable UI components |
| Motion | UI animations and transitions |
| Lucide React | Icons |

## 📂 Project Structure

The project follows a structured Next.js App Router organization.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   ├── portfolio.ts
│   └── projects.ts
└── lib/
    └── utils.ts

public/
├── images/
└── resume.pdf
```

*Note: The structure above is illustrative. Adjust it to match the actual files in your repository.*

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm, pnpm, yarn, or bun
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/sakibhasan077/my-portfolio.git
```

### 2. Navigate to the Project

```bash
cd YOUR_REPOSITORY_NAME
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Update your profile details, social links, and other personal information in the relevant data files, such as:

```text
src/data/portfolio.ts
```

### Projects

Add or update project information in:

```text
src/data/projects.ts
```

Include accurate project descriptions, technology lists, GitHub links, and live demo URLs.

### Profile Image

Place your profile image in the `public` directory and update the corresponding image path in the relevant component or data file.

### Resume

Place your PDF resume at:

```text
public/resume.pdf
```

Make sure the resume link or download button points to the correct file.

## 📬 Contact

**Sakib Hasan**
Aspiring Full-Stack Developer

- **GitHub:** [sakibhasan077](https://github.com/sakibhasan077)
- **LinkedIn:** [sakibhasan-web](https://linkedin.com/in/sakibhasan-web)
- **Portfolio:** [Visit My Website](https://sakibhasan077.vercel.app/)

Feel free to explore my projects and connect with me.

---

## 📄 License

This project is intended to showcase my personal portfolio and development work. Add a license file if you intend to distribute or reuse the source code under specific terms.

---

*Built with curiosity, continuous learning, and a passion for web development.*
