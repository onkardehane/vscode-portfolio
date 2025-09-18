# 🖥️ VS Code Portfolio

A unique developer portfolio that looks and feels exactly like Visual Studio Code!

## ✨ Features

- 🎨 VS Code interface with dark/light themes
- 📁 Interactive file explorer
- 📝 Syntax-highlighted code editor
- 🖥️ Working terminal
- 🎯 Multiple tabs support
- 📊 Git integration UI
- 🔍 Search functionality
- 💾 Download resume feature

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deployment

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'out' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
npm run export
# Push the 'out' folder to gh-pages branch
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icons
- **Framer Motion** - Animations

## 📁 Project Structure

```
vscode-portfolio/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── layout/      # Layout components
│   ├── editor/      # Code editor
│   ├── sidebar/     # File explorer
│   └── terminal/    # Terminal component
├── data/            # Portfolio content
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries
├── public/          # Static assets
├── styles/          # Global styles
└── types/           # TypeScript types
```

## 🎨 Customization

1. Update your information in `data/portfolio-content.ts`
2. Modify the file tree in `data/file-tree.ts`
3. Customize themes in `lib/themes.ts`
4. Add new file types and icons

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 👨‍💻 Author

**Onkar Dehane**
- GitHub: [@onkardehane](https://github.com/onkardehane)
- LinkedIn: [onkar-dehane](https://linkedin.com/in/onkar-dehane-5a9631136)
- Email: onkar.dehane24@gmail.com

---

Made with ❤️ and lots of ☕
