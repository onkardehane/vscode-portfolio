import { FileText, Search, GitBranch, Bug, Puzzle } from 'lucide-react';

interface ActivityBarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function ActivityBar({ activeView, onViewChange }: ActivityBarProps) {
  const items = [
    { icon: FileText, view: 'explorer', tooltip: 'Explorer' },
    { icon: Search, view: 'search', tooltip: 'Search' },
    { icon: GitBranch, view: 'git', tooltip: 'Source Control' },
    { icon: Bug, view: 'debug', tooltip: 'Debug' },
    { icon: Puzzle, view: 'extensions', tooltip: 'Extensions' },
  ];

  return (
    <div className="w-12 bg-vscode-activity-dark border-r border-vscode-border-dark 
                    flex flex-col items-center pt-2 gap-1">
      {items.map(({ icon: Icon, view, tooltip }) => (
        <button
          key={view}
          onClick={() => onViewChange(view)}
          className={`p-3 hover:bg-vscode-hover transition-colors ${
            activeView === view ? 'border-l-2 border-vscode-accent text-white' : 'text-vscode-text-dim'
          }`}
          title={tooltip}
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  );
}