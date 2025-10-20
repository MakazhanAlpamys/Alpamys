# Alpamys Makazhan - Portfolio Website

Modern, responsive portfolio website built with Astro, React, and TailwindCSS.

## 🚀 Features

- ✅ Modern, responsive design
- ✅ Smooth animations and transitions
- ✅ React components for interactivity
- ✅ TailwindCSS for styling
- ✅ Fully typed with TypeScript
- ✅ SEO-friendly
- ✅ Contact form integration with Formbold

## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/          # Images and static files
│   │   ├── photo.jpg    # Profile photo
│   │   ├── CV.pdf       # Resume/CV
│   │   ├── 1.png        # Timeline image (2020)
│   │   ├── 2.png        # Timeline image (2021)
│   │   ├── 3.png        # Timeline image (2022)
│   │   ├── 4.png        # Timeline image (2023)
│   │   └── 5.png        # Timeline image (2024-2025)
│   ├── components/      # React/Astro components
│   │   └── SocialLinks.tsx
│   ├── data/            # JSON data files
│   │   └── projects.json
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Routes
│   │   ├── index.astro      # Home
│   │   ├── projects.astro   # Projects
│   │   ├── about.astro      # About
│   │   └── contact.astro    # Contact
│   └── styles/
│       └── global.css   # Global styles
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add timeline images:**
   Place 5 images (1.png through 5.png) in `src/assets/` folder:
   - `1.png` - Started C++ (2020)
   - `2.png` - Learned Python (2021)
   - `3.png` - Joined AITU College (2022)
   - `4.png` - Competitions & Startups (2023)
   - `5.png` - Projects & Growth (2024-2025)

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Site will be available at `http://localhost:4321`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Projects
Edit `src/data/projects.json` to add/modify projects:
```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2"],
  "github": "https://github.com/username/repo"
}
```

### Update Contact Form
The contact form uses Formbold. To use your own form:
1. Sign up at [Formbold](https://formbold.com)
2. Create a new form
3. Replace the form action URL in `src/pages/contact.astro`

### Modify Social Links
Update social links in `src/components/SocialLinks.tsx`

## 🎨 Pages

- **Home (`/`)** - Hero section with profile photo, intro text, CV download, and social links
- **Projects (`/projects`)** - Grid of project cards loaded from JSON
- **About (`/about`)** - Biography and timeline of journey
- **Contact (`/contact`)** - Contact information and form

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## 🔧 Technologies

- **Astro** - Static site framework
- **React** - UI components
- **TailwindCSS** - Styling
- **TypeScript** - Type safety
- **Formbold** - Contact form backend

## 📄 License

MIT
