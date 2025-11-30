import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import TitleBar from './TitleBar';
import StatusBar from './StatusBar';
import ActivityBar from '../sidebar/ActivityBar';
import Explorer from '../sidebar/Explorer';
import Editor from '../editor/Editor';
import Terminal from '../terminal/Terminal';

export default function MainLayout() {
    const { colors } = useTheme();
    const [activeView, setActiveView] = useState('explorer');
    const [terminalOpen, setTerminalOpen] = useState(true);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div
            className="flex flex-col h-screen w-screen overflow-hidden font-mono"
            style={{ background: colors.bg, color: colors.text }}
        >
            <TitleBar onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />

            <div className="flex flex-1 overflow-hidden relative">
                <ActivityBar activeView={activeView} onViewChange={setActiveView} />

                {sidebarVisible && activeView === 'explorer' && (
                    <div
                        className={`w-60 flex flex-col border-r ${mobileMenuOpen ? 'absolute z-20 h-full left-12' : 'hidden md:flex'}`}
                        style={{ background: colors.sidebar, borderColor: colors.border }}
                    >
                        <Explorer />
                    </div>
                )}

                {/* Overlay for mobile when menu is open */}
                {mobileMenuOpen && (
                    <div
                        className="absolute inset-0 z-10 bg-black/50 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}

                <div className="flex flex-col flex-1 overflow-hidden min-w-0">
                    <Editor />

                    {terminalOpen && (
                        <Terminal onClose={() => setTerminalOpen(false)} />
                    )}
                </div>
            </div>

            <StatusBar />
        </div>
    );
}
