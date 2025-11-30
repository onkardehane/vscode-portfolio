import React from 'react';
import { useFileSystem } from '../../context/FileSystemContext';
import { useTheme } from '../../context/ThemeContext';
import FileTree from './FileTree';

export default function Explorer() {
    const { files, activeFile, openFile, toggleFolder } = useFileSystem();
    const { colors } = useTheme();

    return (
        <div className="flex flex-col h-full" style={{ background: colors.sidebar, color: colors.text }}>
            <div
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider border-b"
                style={{ borderColor: colors.border, color: colors.textDim }}
            >
                Explorer
            </div>
            <div className="flex-1 overflow-auto py-2">
                {files.map((file) => (
                    <FileTree
                        key={file.id}
                        item={file}
                        onFileClick={openFile}
                        onFolderClick={toggleFolder}
                        activeFile={activeFile}
                    />
                ))}
            </div>
        </div>
    );
}
