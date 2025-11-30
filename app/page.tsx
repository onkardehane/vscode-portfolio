'use client';

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { FileSystemProvider } from '@/context/FileSystemContext';
import MainLayout from '@/components/layout/MainLayout';

export default function VSCodePortfolio() {
  return (
    <ThemeProvider>
      <FileSystemProvider>
        <MainLayout />
      </FileSystemProvider>
    </ThemeProvider>
  );
}