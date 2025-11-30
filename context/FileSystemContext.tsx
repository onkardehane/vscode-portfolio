import React, { createContext, useContext, useState, ReactNode } from 'react';
import { File } from '../types/fileSystem';
import { initialFiles } from '../data/fileSystem';

interface FileSystemContextType {
    files: File[];
    openFiles: File[];
    activeFile: string | null;
    toggleFolder: (id: string) => void;
    openFile: (file: File) => void;
    closeFile: (id: string) => void;
    setActiveFile: (id: string) => void;
}

const FileSystemContext = createContext<FileSystemContextType | undefined>(undefined);

export const FileSystemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [files, setFiles] = useState<File[]>(initialFiles);
    const [openFiles, setOpenFiles] = useState<File[]>([]);
    const [activeFile, setActiveFile] = useState<string | null>(null);

    // Initialize with README.md open
    React.useEffect(() => {
        const findFile = (items: File[], id: string): File | undefined => {
            for (const item of items) {
                if (item.id === id) return item;
                if (item.children) {
                    const found = findFile(item.children, id);
                    if (found) return found;
                }
            }
            return undefined;
        };

        const readme = findFile(files, 'README.md');
        if (readme) {
            setOpenFiles([readme]);
            setActiveFile('README.md');
        }
    }, []);

    const toggleFolder = (id: string) => {
        const toggleRecursive = (items: File[]): File[] => {
            return items.map(item => {
                if (item.id === id) {
                    return { ...item, isOpen: !item.isOpen };
                }
                if (item.children) {
                    return { ...item, children: toggleRecursive(item.children) };
                }
                return item;
            });
        };
        setFiles(toggleRecursive(files));
    };

    const openFile = (file: File) => {
        if (!openFiles.find(f => f.id === file.id)) {
            setOpenFiles([...openFiles, file]);
        }
        setActiveFile(file.id);
    };

    const closeFile = (id: string) => {
        const newOpenFiles = openFiles.filter(f => f.id !== id);
        setOpenFiles(newOpenFiles);
        if (activeFile === id) {
            setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[newOpenFiles.length - 1].id : null);
        }
    };

    return (
        <FileSystemContext.Provider value={{
            files,
            openFiles,
            activeFile,
            toggleFolder,
            openFile,
            closeFile,
            setActiveFile
        }}>
            {children}
        </FileSystemContext.Provider>
    );
};

export const useFileSystem = () => {
    const context = useContext(FileSystemContext);
    if (context === undefined) {
        throw new Error('useFileSystem must be used within a FileSystemProvider');
    }
    return context;
};
