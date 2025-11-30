import { FileText, Search, GitBranch, Bug, Puzzle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ActivityBarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function ActivityBar({ activeView, onViewChange }: ActivityBarProps) {
  const { colors } = useTheme();

  const items = [
    { icon: FileText, view: 'explorer', tooltip: 'Explorer' },
    { icon: Search, view: 'search', tooltip: 'Search' },
    { icon: GitBranch, view: 'git', tooltip: 'Source Control' },
    { icon: Bug, view: 'debug', tooltip: 'Debug' },
    { icon: Puzzle, view: 'extensions', tooltip: 'Extensions' },
  ];

  return (
    <div
      className="w-12 flex flex-col items-center pt-2 gap-1"
      style={{ background: colors.activity, borderRight: `1px solid ${colors.border}` }}
    >
      {items.map(({ icon: Icon, view, tooltip }) => (
        <button
          key={view}
          onClick={() => onViewChange(view)}
          className="p-3 transition-colors relative w-full flex justify-center"
          style={{
            color: activeView === view ? colors.accent : colors.textDim,
          }}
          title={tooltip}
          onMouseEnter={(e) => {
            if (activeView !== view) e.currentTarget.style.color = colors.text;
          }}
          onMouseLeave={(e) => {
            if (activeView !== view) e.currentTarget.style.color = colors.textDim;
          }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{ background: activeView === view ? colors.accent : 'transparent' }}
          />
          <Icon size={24} strokeWidth={1.5} />
        </button>
      ))}
    </div>
  );
}