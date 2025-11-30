// components/VSCodePortfolio.tsx
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, ChevronRight, X, Search, GitBranch,
  Terminal, FileText, Code, Folder, FolderOpen,
  Minimize, Maximize2, Bug, Download
} from 'lucide-react';

// Type Definitions
interface FileItem {
  name: string;
  type: 'file' | 'folder';
  children?: FileItem[];
}

interface ThemeColors {
  bg: string;
  sidebar: string;
  activity: string;
  tabs: string;
  text: string;
  textDim: string;
  accent: string;
  border: string;
}

type ThemeType = 'dark' | 'light';

interface FileContents {
  [key: string]: string;
}

const VSCodePortfolio = () => {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [activeFile, setActiveFile] = useState('README.md');
  const [openTabs, setOpenTabs] = useState<string[]>(['README.md']);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['portfolio', 'src']);
  const [terminalOpen, setTerminalOpen] = useState(true);
  
  // Theme colors with proper typing
  const colors: Record<ThemeType, ThemeColors> = {
    dark: {
      bg: '#1e1e1e',
      sidebar: '#252526',
      activity: '#333333',
      tabs: '#2d2d30',
      text: '#cccccc',
      textDim: '#858585',
      accent: '#007ACC',
      border: '#464647'
    },
    light: {
      bg: '#ffffff',
      sidebar: '#f3f3f3',
      activity: '#e5e5e5',
      tabs: '#f8f8f8',
      text: '#333333',
      textDim: '#6e6e6e',
      accent: '#007ACC',
      border: '#e5e5e5'
    }
  };

  const currentColors = colors[theme];

  // File contents with proper typing
  const fileContents: FileContents = {
    'README.md': `# 👋 Hello, I'm Onkar Dehane

## Senior Full-Stack Developer

I'm a passionate **Full-Stack Developer** with **5+ years of experience** building 
enterprise-grade applications. Currently based in **Germany 🇩🇪**.

### 🚀 Quick Facts

- 🔭 Currently working at **Meetingmasters.de**
- 🌱 Expert in **Angular**, **Spring Boot**, and **Cloud Technologies**
- 💼 Previously worked at **IMC AG** and **SAP**
- 📫 Reach me at: **onkar.dehane24@gmail.com**
- ⚡ Fun fact: I've written over **1 million lines of code**!

### 💻 Core Expertise

- Frontend: Angular, React, TypeScript
- Backend: Java, Spring Boot, Node.js
- Database: PostgreSQL, MongoDB, MySQL
- Cloud: AWS, Azure, Docker, Kubernetes

### 📈 Stats

⭐ **25+ Projects Delivered**  
🏆 **5+ Years Experience**  
🎯 **99.9% Uptime Record**  
👥 **10,000+ Users Served**`,
    'skills.json': `{
  "name": "onkar-portfolio",
  "version": "2.0.0",
  "author": "Onkar Dehane",
  "dependencies": {
    "@angular/core": "^14.0.0",
    "react": "^18.0.0",
    "typescript": "^4.9.0",
    "spring-boot": "^2.7.0",
    "express": "^4.18.0",
    "postgresql": "^14.0.0",
    "mongodb": "^5.0.0",
    "aws-sdk": "^2.1200.0",
    "docker": "^20.10.0",
    "kubernetes": "^1.25.0"
  },
  "expertise": {
    "frontend": 95,
    "backend": 92,
    "database": 88,
    "cloud": 85
  }
}`,
    'projects.tsx': `import React from 'react';

// 🚀 Featured Projects
const projects = [
  {
    id: 1,
    name: "Event Management Platform",
    description: "Enterprise event management solution",
    technologies: ["Angular", "Spring Boot", "PostgreSQL"],
    users: "10,000+",
    performance: "+40%"
  },
  {
    id: 2,
    name: "Learning Management System",
    description: "E-learning platform with video streaming",
    technologies: ["Java", "Angular", "AWS"],
    users: "15,000+"
  },
  {
    id: 3,
    name: "Real-time Chat Application",
    description: "WebSocket-based communication platform",
    technologies: ["Node.js", "Socket.io", "React"],
    concurrent: "1000+ users"
  }
];

export default projects;`,
    'experience.md': `# 📋 Professional Experience

## Senior Fullstack Developer @ Meetingmasters.de
**Dec 2023 - Present | Cologne, Germany**

- Built complex TypeScript/Angular applications
- Achieved 30% improvement in user interaction performance
- Delivered 40% performance improvement in SQL queries
- Mentored junior developers on best practices

## Software Developer @ IMC AG
**Jan 2022 - Jul 2023 | Germany**

- Led development of enterprise LMS serving 10,000+ users
- Enhanced application performance by 40%
- Implemented GDPR compliance features

## Developer @ SAP
**Nov 2020 - Oct 2021 | Walldorf, Germany**

- Built internal training platform with cloud deployment
- Improved user onboarding process by 60%`,
    'contact.env': `# Contact Information
EMAIL=onkar.dehane24@gmail.com
PHONE=+49 152 2545 7768
LINKEDIN=linkedin.com/in/onkar-dehane-5a9631136
GITHUB=github.com/onkardehane
LOCATION=Germany
AVAILABILITY=Open for opportunities

# Work Preferences
WORK_TYPE=Full-time, Contract, Freelance
REMOTE=Yes
RESPONSE_TIME=24 hours`
  };

  const fileTree: FileItem[] = [
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'README.md', type: 'file' },
        { name: 'skills.json', type: 'file' },
        { name: 'projects.tsx', type: 'file' },
        { name: 'experience.md', type: 'file' },
        { name: 'contact.env', type: 'file' }
      ]
    },
    {
      name: 'portfolio',
      type: 'folder',
      children: [
        { name: 'package.json', type: 'file' },
        { name: '.gitignore', type: 'file' },
        { name: 'tsconfig.json', type: 'file' }
      ]
    }
  ];

  // File Tree Component with proper typing
  interface FileTreeItemProps {
    item: FileItem;
    level?: number;
  }

  const FileTreeItem: React.FC<FileTreeItemProps> = ({ item, level = 0 }) => {
    const [expanded, setExpanded] = useState(true);
    
    if (item.type === 'folder') {
      return (
        <div>
          <div
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '2px 8px',
              paddingLeft: `${level * 20 + 8}px`,
              cursor: 'pointer',
              color: currentColors.text
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#2a2d2e'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            {expanded ? <FolderOpen size={16} style={{ marginLeft: 4, marginRight: 4 }} /> : 
                       <Folder size={16} style={{ marginLeft: 4, marginRight: 4 }} />}
            <span style={{ fontSize: '13px' }}>{item.name}</span>
          </div>
          {expanded && item.children?.map((child: FileItem, i: number) => (
            <FileTreeItem key={i} item={child} level={level + 1} />
          ))}
        </div>
      );
    }

    return (
      <div
        onClick={() => {
          setActiveFile(item.name);
          if (!openTabs.includes(item.name)) {
            setOpenTabs([...openTabs, item.name]);
          }
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2px 8px',
          paddingLeft: `${level * 20 + 30}px`,
          cursor: 'pointer',
          color: currentColors.text,
          background: activeFile === item.name ? '#264f78' : 'transparent'
        }}
        onMouseEnter={(e) => {
          if (activeFile !== item.name) {
            e.currentTarget.style.background = '#2a2d2e';
          }
        }}
        onMouseLeave={(e) => {
          if (activeFile !== item.name) {
            e.currentTarget.style.background = 'transparent';
          }
        }}
      >
        <span style={{ marginRight: '6px' }}>
          {item.name.endsWith('.tsx') ? '⚛️' : 
           item.name.endsWith('.json') ? '📋' : 
           item.name.endsWith('.md') ? '📝' :
           item.name.endsWith('.env') ? '🔐' : '📄'}
        </span>
        <span style={{ fontSize: '13px' }}>{item.name}</span>
      </div>
    );
  };

  const handleDownloadResume = () => {
    const resumeText = `ONKAR DEHANE - Senior Full-Stack Developer
==========================================
Location: Germany
Email: onkar.dehane24@gmail.com  
Phone: +49 152 2545 7768
LinkedIn: linkedin.com/in/onkar-dehane-5a9631136
GitHub: github.com/onkardehane

EXPERIENCE
----------
Senior Fullstack Developer @ Meetingmasters.de
Dec 2023 - Present | Cologne, Germany
• Built complex TypeScript/Angular applications
• Achieved 30% improvement in user interaction performance
• Delivered 40% performance improvement in SQL queries

Software Developer @ IMC AG
Jan 2022 - Jul 2023 | Germany
• Led development of enterprise LMS serving 10,000+ users
• Enhanced application performance by 40%
• Implemented GDPR compliance features

Developer @ SAP
Nov 2020 - Oct 2021 | Walldorf, Germany
• Built internal training platform with cloud deployment
• Improved user onboarding process by 60%

TECHNICAL SKILLS
----------------
Frontend: Angular, React, TypeScript, HTML5/CSS3
Backend: Java, Spring Boot, Node.js, Python
Database: PostgreSQL, MongoDB, MySQL, Redis
Cloud: AWS, Azure, Docker, Kubernetes
Tools: Git, Jenkins, JIRA, IntelliJ IDEA, VS Code

EDUCATION
---------
Master's in Computer Science
University of Applied Sciences, Germany`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Onkar_Dehane_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const terminalLines = [
    '$ npm run dev',
    '',
    '> vscode-portfolio@1.0.0 dev',
    '> next dev',
    '',
    '  ▲ Next.js 14.0.4',
    '  - Local:        http://localhost:3000',
    '',
    '✨ Ready in 2.3s',
    '○ Compiling / ...',
    '✓ Compiled successfully',
    '',
    '$ git status',
    'On branch main',
    'Your branch is up to date with origin/main.',
    '',
    'nothing to commit, working tree clean'
  ];

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Cascadia Code", "Fira Code", Consolas, Monaco, monospace',
      background: currentColors.bg,
      color: currentColors.text,
      overflow: 'hidden'
    }}>
      {/* Title Bar */}
      <div style={{
        height: '30px',
        background: currentColors.tabs,
        borderBottom: `1px solid ${currentColors.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Code size={14} style={{ color: currentColors.accent }} />
          <span style={{ fontSize: '12px', color: currentColors.text }}>
            Onkar Dehane - Portfolio - Visual Studio Code
          </span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Minimize size={14} style={{ cursor: 'pointer', color: currentColors.textDim }} />
          <Maximize2 size={14} style={{ cursor: 'pointer', color: currentColors.textDim }} />
          <X size={14} style={{ cursor: 'pointer', color: currentColors.textDim }} />
        </div>
      </div>

      {/* Menu Bar */}
      <div style={{
        height: '30px',
        background: currentColors.tabs,
        borderBottom: `1px solid ${currentColors.border}`,
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
          background: currentColors.activity,
          borderRight: `1px solid ${currentColors.border}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '10px',
          gap: '20px'
        }}>
          <FileText size={20} style={{ cursor: 'pointer', color: currentColors.accent }} />
          <Search size={20} style={{ cursor: 'pointer', color: currentColors.textDim }} />
          <GitBranch size={20} style={{ cursor: 'pointer', color: currentColors.textDim }} />
          <Bug size={20} style={{ cursor: 'pointer', color: currentColors.textDim }} />
        </div>

        {/* Sidebar */}
        <div style={{
          width: '240px',
          background: currentColors.sidebar,
          borderRight: `1px solid ${currentColors.border}`,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            padding: '10px',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: currentColors.textDim,
            borderBottom: `1px solid ${currentColors.border}`
          }}>
            EXPLORER
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: '5px 0' }}>
            {fileTree.map((item: FileItem, i: number) => (
              <FileTreeItem key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Tabs */}
          <div style={{
            height: '35px',
            background: currentColors.tabs,
            borderBottom: `1px solid ${currentColors.border}`,
            display: 'flex',
            alignItems: 'center'
          }}>
            {openTabs.map(tab => (
              <div
                key={tab}
                onClick={() => setActiveFile(tab)}
                style={{
                  padding: '0 12px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: activeFile === tab ? currentColors.bg : 'transparent',
                  borderRight: `1px solid ${currentColors.border}`,
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: activeFile === tab ? currentColors.text : currentColors.textDim
                }}
              >
                <span>
                  {tab.endsWith('.tsx') ? '⚛️' : 
                   tab.endsWith('.json') ? '📋' : 
                   tab.endsWith('.md') ? '📝' :
                   tab.endsWith('.env') ? '🔐' : '📄'}
                </span>
                <span>{tab}</span>
                <X 
                  size={14} 
                  onClick={(e) => {
                    e.stopPropagation();
                    const newTabs = openTabs.filter(t => t !== tab);
                    setOpenTabs(newTabs);
                    if (activeFile === tab && newTabs.length > 0) {
                      setActiveFile(newTabs[0]);
                    }
                  }}
                  style={{ opacity: 0.6, cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>

          {/* Breadcrumb */}
          <div style={{
            height: '22px',
            padding: '0 15px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
            color: currentColors.textDim,
            borderBottom: `1px solid ${currentColors.border}`,
            background: currentColors.bg
          }}>
            portfolio › src › {activeFile}
          </div>

          {/* Code Content */}
          <div style={{ 
            flex: 1, 
            padding: '20px',
            overflow: 'auto',
            background: currentColors.bg,
            fontFamily: '"Cascadia Code", "Fira Code", Consolas, Monaco, monospace'
          }}>
            <pre style={{ 
              margin: 0,
              fontSize: '13px',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
              {fileContents[activeFile] || '// Select a file to view'}
            </pre>
          </div>

          {/* Terminal */}
          {terminalOpen && (
            <>
              <div style={{
                height: '30px',
                background: currentColors.tabs,
                borderTop: `1px solid ${currentColors.border}`,
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                fontSize: '12px'
              }}>
                <div style={{ display: 'flex', gap: '15px', flex: 1 }}>
                  <span style={{ color: currentColors.text }}>TERMINAL</span>
                  <span style={{ color: currentColors.textDim }}>OUTPUT</span>
                  <span style={{ color: currentColors.textDim }}>PROBLEMS</span>
                  <span style={{ color: currentColors.textDim }}>DEBUG CONSOLE</span>
                </div>
                <X 
                  size={14} 
                  style={{ cursor: 'pointer', color: currentColors.textDim }}
                  onClick={() => setTerminalOpen(false)}
                />
              </div>
              <div style={{
                height: '180px',
                background: currentColors.bg,
                padding: '10px',
                fontSize: '12px',
                fontFamily: '"Cascadia Code", "Fira Code", Consolas, Monaco, monospace',
                overflow: 'auto'
              }}>
                {terminalLines.map((line, i) => (
                  <div key={i} style={{ 
                    color: line.startsWith('$') ? currentColors.accent : 
                           line.includes('✨') || line.includes('✓') ? '#4ec9b0' : 
                           line.includes('▲') ? currentColors.text : currentColors.textDim,
                    marginBottom: '2px'
                  }}>
                    {line}
                    {i === terminalLines.length - 1 && (
                      <span className="animate-blink" style={{ color: currentColors.accent }}>_</span>
                    )}
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
        background: currentColors.accent,
        color: '#ffffff',
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
          <span>○ 0 Warnings</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button
            onClick={handleDownloadResume}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '0 8px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
          >
            <Download size={12} /> Download Resume
          </button>
          <span>|</span>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '12px',
              padding: '0 8px'
            }}
          >
            {theme === 'dark' ? '🌙 Dark+' : '☀️ Light+'}
          </button>
          <span>UTF-8</span>
          <span>TypeScript React</span>
          <span>Prettier ✓</span>
        </div>
      </div>

      <style jsx>{`
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default VSCodePortfolio;