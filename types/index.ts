export interface FileItem {
  name: string;
  type: 'file' | 'folder';
  icon?: string;
  children?: FileItem[];
  content?: string;
  language?: string;
}

export interface Tab {
  id: string;
  name: string;
  icon?: string;
  isDirty?: boolean;
}

export interface Theme {
  name: string;
  type: 'dark' | 'light';
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
  };
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  metrics?: Record<string, string | number>;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}
