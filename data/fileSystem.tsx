import { File } from '../types/fileSystem';
import GitHubStatsFile from '../components/editor/GitHubStatsFile';

export const initialFiles: File[] = [
  {
    id: 'portfolio',
    name: 'portfolio',
    type: 'folder',
    isOpen: true,
    children: [
      {
        id: 'src',
        name: 'src',
        type: 'folder',
        isOpen: true,
        children: [
          {
            id: 'README.md',
            name: 'README.md',
            type: 'file',
            language: 'markdown',
            icon: '📄',
            content: `# 👋 Hello, I'm Onkar Dehane

## Senior Full-Stack Developer

I'm a passionate **Full-Stack Developer** with **5+ years of experience** building 
enterprise-grade applications. Currently based in **Germany 🇩🇪**, specializing in 
creating scalable, performant web applications.

### 🚀 Quick Facts

- 🔭 Currently working at **Meetingmasters.de**
- 🌱 Expert in **Angular**, **Spring Boot**, and **Cloud Technologies**
- 💼 Previously worked at **IMC AG** and **SAP**
- 📫 Reach me at: **onkar.dehane24@gmail.com**
- ⚡ Fun fact: I've written over **1 million lines of code**!

### 💻 Core Expertise

\`\`\`javascript
const onkar = {
  languages: ["Java", "TypeScript", "Python", "JavaScript"],
  frameworks: {
    frontend: ["Angular", "React", "Vue.js"],
    backend: ["Spring Boot", "Node.js", "Express"],
    database: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  cloud: ["AWS", "Azure", "Docker", "Kubernetes"],
  currentFocus: "Building scalable microservices architecture"
};
\`\`\`

### 📈 GitHub Stats

⭐ **25+ Projects Delivered**  
🏆 **5+ Years Experience**  
🎯 **99.9% Uptime Record**  
👥 **10,000+ Users Served**

### 🌟 Featured Projects

- **Event Management Platform** - Enterprise solution serving 10K+ users
- **Learning Management System** - E-learning platform with video streaming
- **Real-time Chat Application** - WebSocket-based with E2E encryption
- **Analytics Dashboard** - Real-time data visualization

### 🎯 Current Focus

- Building scalable microservices architectures
- Implementing cloud-native solutions
- Optimizing application performance
- Mentoring junior developers`
          },
          {
            id: 'github-stats.tsx',
            name: 'github-stats.tsx',
            type: 'file',
            icon: '📊',
            content: <GitHubStatsFile />
          },
          {
            id: 'about.tsx',
            name: 'about.tsx',
            type: 'file',
            language: 'typescript',
            icon: '⚛️',
            content: `import React from 'react';

export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <p>I am a Senior Full-Stack Developer with a passion for building scalable web applications.</p>
    </div>
  );
}`
          },
          {
            id: 'skills.json',
            name: 'skills.json',
            type: 'file',
            language: 'json',
            icon: '📋',
            content: `{
  "name": "onkar-portfolio",
  "version": "2.0.0",
  "description": "Senior Full-Stack Developer Portfolio",
  "author": "Onkar Dehane",
  
  "dependencies": {
    "// Frontend Frameworks": "====================",
    "@angular/core": "^14.0.0",
    "@angular/material": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^4.9.0",
    "rxjs": "^7.5.0",
    
    "// Backend Technologies": "====================",
    "spring-boot": "^2.7.0",
    "express": "^4.18.0",
    "node": "^18.0.0",
    "hibernate": "^5.6.0",
    
    "// Database": "====================",
    "postgresql": "^14.0.0",
    "mongodb": "^5.0.0",
    "mysql": "^8.0.0",
    "redis": "^7.0.0",
    
    "// Cloud & DevOps": "====================",
    "aws-sdk": "^2.1200.0",
    "docker": "^20.10.0",
    "kubernetes": "^1.25.0",
    "jenkins": "^2.300.0",
    
    "// Testing & Tools": "====================",
    "jest": "^29.0.0",
    "cypress": "^12.0.0",
    "git": "^2.38.0",
    "postman": "^10.0.0"
  },
  
  "expertise": {
    "frontend": 95,
    "backend": 92,
    "database": 88,
    "cloud": 85,
    "testing": 90
  }
}`
          },
          {
            id: 'projects.tsx',
            name: 'projects.tsx',
            type: 'file',
            language: 'typescript',
            icon: '⚛️',
            content: `import React from 'react';

// 🚀 Featured Projects Repository
const projects = [
  {
    id: 1,
    name: "Event Management Platform",
    description: "Enterprise event management solution",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Stripe"],
    
    // 📊 Project Metrics
    metrics: {
      users: 10000,
      performance: "+40%",
      uptime: "99.9%",
      revenue: "$500K+"
    },
    
    highlights: [
      "✨ Migrated legacy system to modern Angular architecture",
      "🚀 Improved performance by 40% through optimization",
      "💳 Integrated Stripe for secure payment processing",
      "🔒 Implemented GDPR compliance features"
    ],
    
    github: "https://github.com/onkardehane/event-platform",
    demo: "https://events.demo.com"
  },
  
  {
    id: 2,
    name: "Learning Management System",
    description: "Enterprise LMS serving 10,000+ users",
    technologies: ["Java", "Spring Boot", "Angular", "AWS"],
    
    metrics: {
      users: 15000,
      courses: 500,
      completion: "85%",
      satisfaction: "4.8/5"
    }
  },
  
  {
    id: 3,
    name: "Real-time Chat Application",
    description: "WebSocket-based communication platform",
    technologies: ["Node.js", "Socket.io", "React", "MongoDB"],
    
    metrics: {
      concurrent: 1000,
      latency: "<100ms",
      messages: "1M+ daily"
    }
  }
];

export default projects;`
          },
          {
            id: 'contact.env',
            name: 'contact.env',
            type: 'file',
            language: 'properties',
            icon: '🔐',
            content: `# 📧 Contact Configuration
# Feel free to reach out for opportunities!

# Personal Information
NAME="Onkar Dehane"
TITLE="Senior Full-Stack Developer"
LOCATION="Germany"
AVAILABILITY="Open for opportunities"

# Contact Methods
EMAIL="onkar.dehane24@gmail.com"
PHONE="+49 152 2545 7768"
LINKEDIN="https://linkedin.com/in/onkar-dehane-5a9631136"
GITHUB="https://github.com/onkardehane"

# Preferred Contact
PREFERRED_METHOD="email"
RESPONSE_TIME="24 hours"

# Work Preferences
WORK_TYPE="Full-time, Contract, Freelance"
REMOTE="Yes"
RELOCATION="Open for discussion"

# Message
WELCOME_MESSAGE="Let's build something amazing together! 🚀"`
          }
        ]
      },
      {
        id: 'experience',
        name: 'experience',
        type: 'folder',
        children: [
          {
            id: 'CHANGELOG.md',
            name: 'CHANGELOG.md',
            type: 'file',
            language: 'markdown',
            icon: '📝',
            content: `# 📋 Professional Experience Changelog

## [Current] Senior Fullstack Developer @ Meetingmasters.de
### 📅 Dec 2023 - Present | Cologne, Germany

#### Added ✨
- Complex TypeScript/Angular applications with advanced architecture
- RxJS state management for reactive programming
- SQL query optimization achieving 40% performance improvement
- Mentorship program for junior developers

#### Improved 🚀
- User interaction performance by 30%
- Component reusability across projects
- Team productivity through best practices

---

## [2.0.0] Software Developer @ IMC AG
### 📅 Jan 2022 - Jul 2023 | Germany

#### Added ✨
- Enterprise LMS serving 10,000+ users
- GDPR compliance features
- Microservices architecture
- Mobile-responsive design

#### Fixed 🐛
- Legacy system performance issues
- Database query bottlenecks
- Memory leaks in Angular components

---

## [1.0.0] Developer @ SAP
### 📅 Nov 2020 - Oct 2021 | Walldorf, Germany

#### Added ✨
- Internal training platform with Mendix
- Cloud deployment strategies
- Automated workflow systems

#### Improved 🚀
- User onboarding by 60%
- Platform loading times
- Training completion rates`
          }
        ]
      },
      {
        id: 'projects',
        name: 'projects',
        type: 'folder',
        children: [
          {
            id: 'event-platform.git',
            name: 'event-platform.git',
            type: 'file',
            icon: '📁',
            content: 'Git repository link'
          }
        ]
      },
      {
        id: 'package.json',
        name: 'package.json',
        type: 'file',
        icon: '📦',
        language: 'json',
        content: `{
  "name": "vscode-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`
      },
      {
        id: '.gitignore',
        name: '.gitignore',
        type: 'file',
        icon: '🙈',
        content: 'node_modules\n.next\n.env'
      },
      {
        id: 'tsconfig.json',
        name: 'tsconfig.json',
        type: 'file',
        icon: '🔧',
        language: 'json',
        content: '{}'
      }
    ]
  }
];
