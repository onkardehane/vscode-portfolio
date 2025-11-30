import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TerminalProps {
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function Terminal({ onClose }: TerminalProps) {
  const { colors } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'help',
      output: <div className="mb-2">Type <span style={{ color: colors.accent }}>help</span> to see available commands.</div>
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode;

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <span style={{ color: colors.accent }}>about</span>
            <span>Who am I?</span>
            <span style={{ color: colors.accent }}>projects</span>
            <span>View my work</span>
            <span style={{ color: colors.accent }}>contact</span>
            <span>Get in touch</span>
            <span style={{ color: colors.accent }}>clear</span>
            <span>Clear terminal</span>
            <span style={{ color: colors.accent }}>help</span>
            <span>Show this help message</span>
          </div>
        );
        break;
      case 'about':
        output = (
          <div>
            <p>Hi! I'm Onkar Dehane.</p>
            <p>Senior Full-Stack Developer based in Germany 🇩🇪.</p>
            <p>Expert in Angular, Spring Boot, and Cloud Technologies.</p>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div>
            <p className="mb-1">Check out the Explorer sidebar for detailed project info!</p>
            <ul className="list-disc pl-4">
              <li>Event Management Platform</li>
              <li>Learning Management System</li>
              <li>Real-time Chat Application</li>
            </ul>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div>
            <p>Email: onkar.dehane24@gmail.com</p>
            <p>GitHub: github.com/onkardehane</p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        output = null;
        break;
      default:
        output = <span className="text-red-400">Command not found: {cmd}</span>;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div
      className="h-48 border-t flex flex-col"
      style={{ borderColor: colors.border, background: colors.terminal }}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className="h-8 flex items-center justify-between px-3 select-none"
        style={{ background: colors.tabs }}
      >
        <div className="flex items-center gap-4 text-xs">
          <span className="border-b pb-[2px]" style={{ color: colors.text, borderColor: colors.text }}>TERMINAL</span>
          <span style={{ color: colors.textDim }}>OUTPUT</span>
          <span style={{ color: colors.textDim }}>PROBLEMS</span>
          <span style={{ color: colors.textDim }}>DEBUG CONSOLE</span>
        </div>
        <X
          size={14}
          onClick={onClose}
          className="cursor-pointer hover:text-white"
          style={{ color: colors.textDim }}
        />
      </div>

      <div className="flex-1 p-3 overflow-auto font-mono text-xs" style={{ color: colors.text }}>
        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-green-400">➜</span>
              <span className="text-blue-400">~</span>
              <span style={{ color: colors.textDim }}>$</span>
              <span>{entry.command}</span>
            </div>
            {entry.output && <div className="mt-1 ml-4">{entry.output}</div>}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span style={{ color: colors.textDim }}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent outline-none border-none flex-1"
            style={{ color: colors.text }}
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}