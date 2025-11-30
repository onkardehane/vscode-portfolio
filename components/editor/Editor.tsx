import React from 'react';
import { X } from 'lucide-react';
import { useFileSystem } from '../../context/FileSystemContext';
import { useTheme } from '../../context/ThemeContext';

export default function Editor() {
    const { openFiles, activeFile, setActiveFile, closeFile, files } = useFileSystem();
    const { colors } = useTheme();

    const activeFileObj = openFiles.find(f => f.id === activeFile);

    const highlightSyntax = (code: string, language?: string) => {
        if (!code) return '';
        let highlighted = code;

        // Simple syntax highlighting logic (can be improved or replaced with a library)
        if (language === 'typescript' || language === 'javascript') {
            highlighted = highlighted
                .replace(/\/\/(.*)/g, `<span style="color: ${colors.comment}">$&</span>`)
                .replace(/(import|export|const|let|var|function|return|default|from)/g,
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

    return (
        <div className="flex flex-col flex-1 overflow-hidden" style={{ background: colors.editor }}>
            {/* Tabs */}
            <div className="flex items-center h-9 overflow-x-auto" style={{ background: colors.tabs, borderBottom: `1px solid ${colors.border}` }}>
                {openFiles.map(file => (
                    <div
                        key={file.id}
                        onClick={() => setActiveFile(file.id)}
                        className="flex items-center gap-2 px-3 h-full cursor-pointer min-w-fit border-r"
                        style={{
                            background: activeFile === file.id ? colors.editor : 'transparent',
                            borderColor: colors.border,
                            color: activeFile === file.id ? colors.text : colors.textDim
                        }}
                    >
                        <span>{file.icon || '📄'}</span>
                        <span className="text-sm">{file.name}</span>
                        <X
                            size={14}
                            className="opacity-0 hover:opacity-100 group-hover:opacity-100"
                            style={{ opacity: activeFile === file.id ? 1 : 0.5 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                closeFile(file.id);
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Breadcrumbs */}
            {activeFileObj && (
                <div className="flex items-center px-4 h-6 text-xs border-b" style={{ background: colors.bg, borderColor: colors.border, color: colors.textDim }}>
                    portfolio › src › {activeFileObj.name}
                </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-auto p-4 font-mono text-sm" style={{ color: colors.text }}>
                {activeFileObj ? (
                    <pre className="m-0">
                        <code
                            dangerouslySetInnerHTML={{
                                __html: highlightSyntax(
                                    typeof activeFileObj.content === 'string' ? activeFileObj.content : '',
                                    activeFileObj.language
                                )
                            }}
                        />
                    </pre>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Select a file to view
                    </div>
                )}
            </div>
        </div>
    );
}
