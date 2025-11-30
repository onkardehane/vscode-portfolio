import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'dark' | 'light' | 'monokai';

export interface ThemeColors {
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
}

export interface Theme {
    name: string;
    colors: ThemeColors;
}

const themes: Record<ThemeType, Theme> = {
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
    },
    monokai: {
        name: 'Monokai',
        colors: {
            bg: '#272822',
            sidebar: '#1e1f1c',
            activity: '#272822',
            tabs: '#1e1f1c',
            editor: '#272822',
            terminal: '#272822',
            text: '#f8f8f2',
            textDim: '#75715e',
            accent: '#a6e22e',
            hover: '#3e3d32',
            border: '#49483e',
            selection: '#49483e',
            keyword: '#f92672',
            string: '#e6db74',
            comment: '#75715e',
            function: '#a6e22e',
            variable: '#fd971f',
            number: '#ae81ff',
            statusBar: '#75715e',
            statusBarText: '#f8f8f2'
        }
    }
};

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    currentTheme: Theme;
    colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('dark');

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            currentTheme: themes[theme],
            colors: themes[theme].colors
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
