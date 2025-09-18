import { X, Minus, Square } from 'lucide-react';

export default function TitleBar() {
  return (
    <div className="h-8 bg-vscode-tabs-dark border-b border-vscode-border-dark 
                    flex items-center justify-between px-3 no-select">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer" />
      </div>
      
      <span className="text-xs text-vscode-text-dim">
        Onkar Dehane - Portfolio - Visual Studio Code
      </span>
      
      <div className="flex items-center gap-4">
        <Minus size={14} className="text-vscode-text-dim hover:text-white cursor-pointer" />
        <Square size={12} className="text-vscode-text-dim hover:text-white cursor-pointer" />
        <X size={14} className="text-vscode-text-dim hover:text-white cursor-pointer" />
      </div>
    </div>
  );
}