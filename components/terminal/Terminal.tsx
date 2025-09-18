import { X, Terminal as TerminalIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Terminal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([
    '$ npm run dev',
    '',
    '> vscode-portfolio@1.0.0 dev',
    '> next dev',
    '',
    '✨ Ready in 2.3s',
    '○ Compiling / ...',
    '✓ Compiled successfully',
    '',
    '  ▲ Next.js 14.0.0',
    '  - Local:        http://localhost:3000',
    '  - Environments: development',
    '',
    '$ git status',
    'On branch main',
    'Your branch is up to date with origin/main.',
    '',
    'nothing to commit, working tree clean',
    '$ |'
  ]);

  return (
    <div className="h-48 border-t border-vscode-border-dark flex flex-col">
      <div className="h-8 bg-vscode-tabs-dark flex items-center justify-between px-3">
        <div className="flex items-center gap-4 text-xs">
          <span className="text-white">TERMINAL</span>
          <span className="text-vscode-text-dim">OUTPUT</span>
          <span className="text-vscode-text-dim">PROBLEMS</span>
          <span className="text-vscode-text-dim">DEBUG CONSOLE</span>
        </div>
        <X size={14} onClick={onClose} className="cursor-pointer text-vscode-text-dim hover:text-white" />
      </div>
      
      <div className="flex-1 bg-vscode-bg-dark p-3 overflow-auto font-mono text-xs">
        {lines.map((line, i) => (
          <div key={i} className={`
            ${line.startsWith('$') ? 'text-vscode-accent' : ''}
            ${line.includes('✓') || line.includes('✨') ? 'text-green-400' : ''}
            ${line.includes('error') ? 'text-red-400' : 'text-vscode-text-dark'}
          `}>
            {line}
            {i === lines.length - 1 && <span className="animate-blink">_</span>}
          </div>
        ))}
      </div>
    </div>
  );
}