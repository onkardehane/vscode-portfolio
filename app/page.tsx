// app/page.tsx - Main VS Code Portfolio Application
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, ChevronRight, X, Plus, Search, GitBranch,
  Terminal, Settings, FileText, Code, Folder, FolderOpen,
  Minimize, Maximize2, RefreshCw, Play, Bug, Puzzle,
  Clock, Download, Menu, MoreVertical, Copy, GitCommit
} from 'lucide-react';

// Types
interface FileItem {
  name: string;
  type: 'file' | 'folder';
  icon?: string;
  children?: FileItem[];
}

interface Theme {
  name: string;
  colors: {
    bg: string;
    sidebar: string;
    activity: string;
    tabs: string;
    editor: string;
    terminal: string;
    text: string;
    textDim: string;
    accent: string;
    hover: string;
    border: string;
    selection: string;
    keyword: string;
    string: string;
    comment: string;
    function: string;
    variable: string;
    number: string;
    statusBar: string;
    statusBarText: string;
  };
}

// Main Component
export default function VSCodePortfolio() {
  // State
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeFile, setActiveFile] = useState('README.md');
  const [openTabs, setOpenTabs] = useState(['README.md', 'skills.json', 'projects.tsx']);
  const [expandedFolders, setExpandedFolders] = useState(['portfolio', 'src', 'experience']);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [sidebarView, setSidebarView] = useState('explorer');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [currentLine, setCurrentLine] = useState(1);
  const [currentColumn, setCurrentColumn] = useState(1);

  // Themes Configuration
  const themes: Record<string, Theme> = {
    dark: {
      name: 'Dark+ (Visual Studio)',
      colors: {
        bg: '#1e1e1e',
        sidebar: '#252526',
        activity: '#333333',
        tabs: '#2d2d30',
        editor: '#1e1e1e',
        terminal: '#1e1e1e',
        text: '#cccccc',
        textDim: '#858585',
        accent: '#007ACC',
        hover: '#2a2d2e',
        border: '#464647',
        selection: '#264f78',
        keyword: '#569cd6',
        string: '#ce9178',
        comment: '#6a9955',
        function: '#dcdcaa',
        variable: '#9cdcfe',
        number: '#b5cea8',
        statusBar: '#007ACC',
        statusBarText: '#ffffff'
      }
    },
    light: {
      name: 'Light+ (Visual Studio)',
      colors: {
        bg: '#ffffff',
        sidebar: '#f3f3f3',
        activity: '#2c2c2c',
        tabs: '#f3f3f3',
        editor: '#ffffff',
        terminal: '#f1f1f1',
        text: '#000000',
        textDim: '#6e6e6e',
        accent: '#007ACC',
        hover: '#e8e8e8',
        border: '#e5e5e5',
        selection: '#add6ff',
        keyword: '#0000ff',
        string: '#a31515',
        comment: '#008000',
        function: '#795e26',
        variable: '#001080',
        number: '#098658',
        statusBar: '#007ACC',
        statusBarText: '#ffffff'
      }
    }
  };

  const colors = themes[theme].colors;

  // File Tree Structure
  const fileTree: FileItem = {
    name: 'portfolio',
    type: 'folder',
    children: [
      {
        name: 'src',
        type: 'folder',
        children: [
          { name: 'README.md', type: 'file', icon: '📄' },
          { name: 'about.tsx', type: 'file', icon: '⚛️' },
          { name: 'skills.json', type: 'file', icon: '📋' },
          { name: 'projects.tsx', type: 'file', icon: '⚛️' },
          { name: 'contact.env', type: 'file', icon: '🔐' }
        ]
      },
      {
        name: 'experience',
        type: 'folder',
        children: [
          { name: 'CHANGELOG.md', type: 'file', icon: '📝' },
          { name: 'meetingmasters.log', type: 'file', icon: '📊' },
          { name: 'imc-ag.log', type: 'file', icon: '📊' },
          { name: 'sap.log', type: 'file', icon: '📊' }
        ]
      },
      {
        name: 'projects',
        type: 'folder',
        children: [
          { name: 'event-platform.git', type: 'file', icon: '📁' },
          { name: 'lms-system.git', type: 'file', icon: '📁' },
          { name: 'chat-app.git', type: 'file', icon: '📁' },
          { name: 'analytics.git', type: 'file', icon: '📁' }
        ]
      },
      { name: 'package.json', type: 'file', icon: '📦' },
      { name: '.gitignore', type: 'file', icon: '🙈' },
      { name: 'tsconfig.json', type: 'file', icon: '🔧' },
      {
        name: 'node_modules',
        type: 'folder',
        children: [
          { name: '... 1,247 packages', type: 'file', icon: '📦' }
        ]
      }
    ]
  };

  // File Contents
  const fileContents: Record<string, any> = {
    'README.md': {
      language: 'markdown',
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
    'skills.json': {
      language: 'json',
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
    'projects.tsx': {
      language: 'typescript',
      content: `import React from 'react';
import { Project, Technology } from '@/types';

// 🚀 Featured Projects Repository
const projects: Project[] = [
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

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}`
    },
    'CHANGELOG.md': {
      language: 'markdown',
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
    },
    'contact.env': {
      language: 'properties',
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
  };

  // Terminal Lines
  const terminalLines = [
    '$ npm run dev',
    '',
    '> portfolio@2.0.0 dev',
    '> next dev',
    '',
    '✨ Ready in 2.3s',
    '○ Compiling / ...',
    '✓ Compiled successfully',
    '🚀 Server running on http://localhost:3000',
    '',
    '$ git status',
    'On branch main',
    'Your branch is up to date with origin/main.',
    '',
    'nothing to commit, working tree clean',
    '$ |'
  ];

  // File Tree Component
  const FileTreeItem: React.FC<{
    item: FileItem;
    path?: string;
  }> = ({ item, path = '' }) => {
    const fullPath = path ? `${path}/${item.name}` : item.name;
    const isExpanded = expandedFolders.includes(fullPath);

    if (item.type === 'folder') {
      return (
        <div>
          <div
            onClick={() => toggleFolder(fullPath)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '2px 8px',
              cursor: 'pointer',
              color: colors.text,
              backgroundColor: 'transparent',
              transition: 'background-color 0.1s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.hover}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            {isExpanded ? <FolderOpen size={16} style={{ marginLeft: 4, marginRight: 4 }} /> : 
                         <Folder size={16} style={{ marginLeft: 4, marginRight: 4 }} />}
            <span style={{ fontSize: '13px' }}>{item.name}</span>
          </div>
          {isExpanded && item.children && (
            <div style={{ marginLeft: '22px' }}>
              {item.children.map((child, index) => (
                <FileTreeItem key={index} item={child} path={fullPath} />
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        onClick={() => handleFileClick(item.name)}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2px 8px',
          cursor: 'pointer',
          color: colors.text,
          backgroundColor: activeFile === item.name ? colors.selection : 'transparent',
          transition: 'background-color 0.1s'
        }}
        onMouseEnter={(e) => {
          if (activeFile !== item.name) {
            e.currentTarget.style.backgroundColor = colors.hover;
          }
        }}
        onMouseLeave={(e) => {
          if (activeFile !== item.name) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        <span style={{ marginRight: 6 }}>{item.icon || '📄'}</span>
        <span style={{ fontSize: '13px' }}>{item.name}</span>
      </div>
    );
  };

  // Handlers
  const handleFileClick = (fileName: string) => {
    setActiveFile(fileName);
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
  };

  const handleTabClose = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);
    if (activeFile === fileName && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1]);
    }
  };

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev =>
      prev.includes(folderName)
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    );
  };

  const handleDownloadResume = () => {
    const resumeContent = `ONKAR DEHANE
Senior Full-Stack Developer
Germany | onkar.dehane24@gmail.com | +49 152 2545 7768

EXPERIENCE
• Senior Fullstack Developer - Meetingmasters.de (Dec 2023 - Present)
• Software Developer - IMC AG (Jan 2022 - Jul 2023)
• Developer - SAP (Nov 2020 - Oct 2021)

SKILLS
Frontend: Angular, React, TypeScript, HTML5/CSS3
Backend: Java, Spring Boot, Node.js, Python
Database: PostgreSQL, MySQL, MongoDB
Cloud: AWS, Azure, Docker, Kubernetes`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Onkar_Dehane_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Syntax Highlighter (simplified)
  const highlightSyntax = (code: string, language: string) => {
    let highlighted = code;
    
    if (language === 'typescript' || language === 'javascript') {
      highlighted = highlighted
        .replace(/\/\/(.*)/g, `<span style="color: ${colors.comment}">$&</span>`)
        .replace(/(import|export|const|let|var|function|return)/g, 
                 `<span style="color: ${colors.keyword}">$1</span>`)
        .replace(/(['"`])((?:(?=(\\?))\3.)*?)\1/g, 
                 `<span style="color: ${colors.string}">$&</span>`);
    } else if (language === 'json') {
      highlighted = highlighted
        .replace(/"([^"]+)":/g, `<span style="color: ${colors.variable}">"$1"</span>:`)
        .replace(/: "([^"]*)"/g, `: <span style="color: ${colors.string}">"$1"</span>`)
        .replace(/: (\d+)/g, `: <span style="color: ${colors.number}">$1</span>`);
    } else if (language === 'markdown') {
      highlighted = highlighted
        .replace(/^#+ (.*)/gm, `<span style="color: ${colors.keyword}">$&</span>`)
        .replace(/\*\*(.*?)\*\*/g, `<strong style="color: ${colors.function}">$1</strong>`)
        .replace(/`([^`]+)`/g, 
                 `<span style="color: ${colors.string}; background: ${colors.hover}; 
                  padding: 2px 4px; border-radius: 3px;">$1</span>`);
    }
    
    return highlighted;
  };

  // Effects
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [commandPaletteOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => (prev >= 50 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Render
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Cascadia Code", "Fira Code", Consolas, monospace',
      background: colors.bg,
      color: colors.text,
      overflow: 'hidden'
    }}>
      {/* Title Bar */}
      <div style={{
        height: '30px',
        background: colors.tabs,
        borderBottom: `1px solid ${colors.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Code size={16} style={{ color: colors.accent }} />
          <span style={{ fontSize: '12px', color: colors.text }}>
            Onkar Dehane - Portfolio - Visual Studio Code
          </span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Minimize size={14} style={{ cursor: 'pointer', color: colors.textDim }} />
          <Maximize2 size={14} style={{ cursor: 'pointer', color: colors.textDim }} />
          <X size={14} style={{ cursor: 'pointer', color: colors.textDim }} />
        </div>
      </div>

      {/* Menu Bar */}
      <div style={{
        height: '30px',
        background: colors.tabs,
        borderBottom: `1px solid ${colors.border}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        gap: '20px',
        fontSize: '13px',
        userSelect: 'none'
      }}>
        {['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'].map(menu => (
          <span key={menu} style={{ cursor: 'pointer', padding: '0 5px' }}>
            {menu}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Activity Bar */}
        <div style={{
          width: '48px',
          background: colors.activity,
          borderRight: `1px solid ${colors.border}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px 0',
          gap: '20px'
        }}>
          {[
            { icon: <FileText size={20} />, view: 'explorer' },
            { icon: <Search size={20} />, view: 'search' },
            { icon: <GitBranch size={20} />, view: 'git' },
            { icon: <Bug size={20} />, view: 'debug' },
            { icon: <Puzzle size={20} />, view: 'extensions' }
          ].map(item => (
            <div
              key={item.view}
              onClick={() => setSidebarView(item.view)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                color: sidebarView === item.view ? colors.accent : colors.textDim,
                borderLeft: sidebarView === item.view ? `2px solid ${colors.accent}` : 
                           '2px solid transparent',
                marginLeft: '-2px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div style={{
          width: '240px',
          background: colors.sidebar,
          borderRight: `1px solid ${colors.border}`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '10px',
            fontSize: '11px',
            fontWeight: '600',
            textTransform: 'uppercase',
            color: colors.textDim,
            borderBottom: `1px solid ${colors.border}`
          }}>
            EXPLORER
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: '5px 0' }}>
            <FileTreeItem item={fileTree} />
          </div>
        </div>

        {/* Editor Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Tabs */}
          <div style={{
            height: '35px',
            background: colors.tabs,
            borderBottom: `1px solid ${colors.border}`,
            display: 'flex',
            alignItems: 'center',
            overflow: 'auto'
          }}>
            {openTabs.map(tab => (
              <div
                key={tab}
                onClick={() => setActiveFile(tab)}
                style={{
                  height: '100%',
                  padding: '0 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: activeFile === tab ? colors.editor : 'transparent',
                  borderRight: `1px solid ${colors.border}`,
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: activeFile === tab ? colors.text : colors.textDim
                }}
              >
                <span>{tab.endsWith('.tsx') ? '⚛️' : 
                       tab.endsWith('.json') ? '📋' : 
                       tab.endsWith('.md') ? '📝' : '📄'}</span>
                <span>{tab}</span>
                <X 
                  size={14} 
                  onClick={(e) => handleTabClose(tab, e)}
                  style={{ cursor: 'pointer', opacity: 0.6 }}
                />
              </div>
            ))}
          </div>

          {/* Code Editor */}
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            overflow: 'auto',
            background: colors.editor
          }}>
            <div style={{
              flex: 1,
              padding: '10px 20px',
              fontSize: '13px',
              lineHeight: '19px',
              fontFamily: '"Cascadia Code", "Fira Code", Consolas, monospace'
            }}>
              {fileContents[activeFile] && (
                <pre style={{ margin: 0 }}>
                  <code 
                    dangerouslySetInnerHTML={{ 
                      __html: highlightSyntax(
                        fileContents[activeFile].content, 
                        fileContents[activeFile].language
                      ) 
                    }}
                  />
                </pre>
              )}
            </div>
          </div>

          {/* Terminal */}
          {terminalOpen && (
            <>
              <div style={{
                height: '30px',
                background: colors.tabs,
                borderTop: `1px solid ${colors.border}`,
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                fontSize: '12px'
              }}>
                <div style={{ display: 'flex', gap: '15px', flex: 1 }}>
                  <span style={{ color: colors.text }}>TERMINAL</span>
                  <span style={{ color: colors.textDim }}>OUTPUT</span>
                  <span style={{ color: colors.textDim }}>PROBLEMS</span>
                </div>
                <X size={14} onClick={() => setTerminalOpen(false)} 
                   style={{ cursor: 'pointer', color: colors.textDim }} />
              </div>
              <div style={{
                height: '200px',
                background: colors.terminal,
                padding: '10px',
                fontSize: '13px',
                fontFamily: '"Cascadia Code", Consolas, monospace',
                overflow: 'auto'
              }}>
                {terminalLines.map((line, index) => (
                  <div key={index} style={{ 
                    color: line.startsWith('$') ? colors.accent : 
                           line.includes('✨') || line.includes('🚀') ? '#4ec9b0' : 
                           colors.text
                  }}>
                    {line}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div style={{
        height: '22px',
        background: colors.statusBar,
        color: colors.statusBarText,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        fontSize: '12px'
      }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <GitBranch size={14} /> main
          </span>
          <span>✓ 0 Problems</span>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <span>Ln {currentLine}, Col 42</span>
          <span>UTF-8</span>
          <span>TypeScript React</span>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{ background: 'none', border: 'none', color: colors.statusBarText, 
                     cursor: 'pointer' }}
          >
            {theme === 'dark' ? '🌙 Dark+' : '☀️ Light+'}
          </button>
          <button 
            onClick={handleDownloadResume}
            style={{ background: 'none', border: 'none', color: colors.statusBarText,
                     cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <Download size={12} /> Resume
          </button>
        </div>
      </div>
    </div>
  );
}