import { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FolderOpen } from 'lucide-react';
import { FileItem } from '@/types';

interface FileTreeProps {
  item: FileItem;
  level?: number;
  onFileClick: (fileName: string) => void;
  activeFile?: string;
}

export default function FileTree({ 
  item, 
  level = 0, 
  onFileClick,
  activeFile 
}: FileTreeProps) {
  const [expanded, setExpanded] = useState(true);

  if (item.type === 'folder') {
    return (
      <div>
        <div
          className="flex items-center gap-1 py-1 px-2 hover:bg-vscode-hover cursor-pointer"
          style={{ paddingLeft: `${level * 20 + 8}px` }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          {expanded ? <FolderOpen size={16} /> : <Folder size={16} />}
          <span className="text-sm">{item.name}</span>
        </div>
        {expanded && item.children?.map((child, index) => (
          <FileTree
            key={index}
            item={child}
            level={level + 1}
            onFileClick={onFileClick}
            activeFile={activeFile}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-2 py-1 px-2 cursor-pointer text-sm
        ${activeFile === item.name ? 'bg-vscode-selection' : 'hover:bg-vscode-hover'}`}
      style={{ paddingLeft: `${level * 20 + 24}px` }}
      onClick={() => onFileClick(item.name)}
    >
      <span>{item.icon || '📄'}</span>
      <span>{item.name}</span>
    </div>
  );
}