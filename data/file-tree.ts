import { FileItem } from '@/types';

export const fileTree: FileItem = {
  name: 'portfolio',
  type: 'folder',
  children: [
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'README.md', type: 'file', icon: '📄' },
        { name: 'about.tsx', type: 'file', icon: '⚛️' },
        { name: 'skills.json', type: 'file', icon: '📋' },
        { name: 'projects.tsx', type: 'file', icon: '⚛️' },
        { name: 'contact.env', type: 'file', icon: '🔐' }
      ]
    },
    {
      name: 'experience',
      type: 'folder',
      children: [
        { name: 'CHANGELOG.md', type: 'file', icon: '📝' },
        { name: 'meetingmasters.log', type: 'file', icon: '📊' },
        { name: 'imc-ag.log', type: 'file', icon: '📊' },
        { name: 'sap.log', type: 'file', icon: '📊' }
      ]
    },
    { name: 'package.json', type: 'file', icon: '📦' },
    { name: '.gitignore', type: 'file', icon: '🙈' },
    { name: 'tsconfig.json', type: 'file', icon: '🔧' },
    {
      name: 'node_modules',
      type: 'folder',
      children: [
        { name: '... 1,247 packages', type: 'file', icon: '📦' }
      ]
    }
  ]
};
