import React from 'react';
import { Code, Minimize, Maximize2, X, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TitleBarProps {
  onMenuClick?: () => void;
}

export default function TitleBar({ onMenuClick }: TitleBarProps) {
  const { colors } = useTheme();

  return (
    <div style={{
      height: '30px',
      background: colors.tabs,
      borderBottom: `1px solid ${colors.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10px',
      userSelect: 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Menu
          size={16}
          className="md:hidden cursor-pointer"
          style={{ color: colors.text }}
          onClick={onMenuClick}
        />
        <Code size={14} style={{ color: colors.accent }} />
        <span style={{ fontSize: '12px', color: colors.text }}>
          Onkar Dehane - Portfolio - Visual Studio Code
        </span>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Minimize size={14} style={{ cursor: 'pointer', color: colors.textDim }} />
        <Maximize2 size={14} style={{ cursor: 'pointer', color: colors.textDim }} />
        <X size={14} style={{ cursor: 'pointer', color: colors.textDim }} />
      </div>
    </div>
  );
}