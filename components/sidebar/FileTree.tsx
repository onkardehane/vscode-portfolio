import { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FolderOpen } from 'lucide-react';
import { File } from '@/types/fileSystem';
import { useTheme } from '@/context/ThemeContext';

interface FileTreeProps {
  item: File;
  level?: number;
  onFileClick: (file: File) => void;
  onFolderClick: (id: string) => void;
  activeFile?: string | null;
}

export default function FileTree({
  item,
  level = 0,
  onFileClick,
  onFolderClick,
  activeFile
}: FileTreeProps) {
  const { colors } = useTheme();

  if (item.type === 'folder') {
    return (
      <div>
        <div
          className="flex items-center gap-1 py-1 px-2 cursor-pointer transition-colors"
          style={{
            paddingLeft: `${level * 20 + 8}px`,
            color: colors.text
          }}
          onClick={() => onFolderClick(item.id)}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.hover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {item.isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          {item.isOpen ? <FolderOpen size={16} className="mr-1" /> : <Folder size={16} className="mr-1" />}
          <span className="text-sm">{item.name}</span>
        </div>
        {item.isOpen && item.children?.map((child) => (
          <FileTree
            key={child.id}
            item={child}
            level={level + 1}
            onFileClick={onFileClick}
            onFolderClick={onFolderClick}
            activeFile={activeFile}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-2 py-1 px-2 cursor-pointer text-sm transition-colors"
      style={{
        paddingLeft: `${level * 20 + 24}px`,
        backgroundColor: activeFile === item.id ? colors.selection : 'transparent',
        color: colors.text
      }}
      onClick={() => onFileClick(item)}
      onMouseEnter={(e) => {
        if (activeFile !== item.id) {
          e.currentTarget.style.backgroundColor = colors.hover;
        }
      }}
      onMouseLeave={(e) => {
        if (activeFile !== item.id) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <span>{item.icon || '📄'}</span>
      <span>{item.name}</span>
    </div>
  );
}