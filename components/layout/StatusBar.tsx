import React from 'react';
import { GitBranch, Download } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function StatusBar() {
    const { theme, setTheme, colors } = useTheme();

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

    return (
        <div style={{
            height: '22px',
            background: colors.accent,
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
                <span className="hidden sm:inline">✓ 0 Problems</span>
                <span className="hidden sm:inline">○ 0 Warnings</span>
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
                    <Download size={12} /> <span className="hidden sm:inline">Download Resume</span>
                </button>
                <span>|</span>
                <button
                    onClick={() => {
                        if (theme === 'dark') setTheme('light');
                        else if (theme === 'light') setTheme('monokai');
                        else setTheme('dark');
                    }}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        padding: '0 8px'
                    }}
                    title="Switch Theme"
                >
                    {theme === 'dark' ? '🌙 Dark+' : theme === 'light' ? '☀️ Light+' : '🎨 Monokai'}
                </button>
                <span className="hidden sm:inline">UTF-8</span>
                <span className="hidden sm:inline">TypeScript React</span>
                <span className="hidden sm:inline">Prettier ✓</span>
            </div>
        </div>
    );
}
