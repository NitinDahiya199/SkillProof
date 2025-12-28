'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/themeStore';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { mode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    const body = document.body;
    
    if (mode === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      body.style.backgroundColor = '#0F172A';
      body.style.color = '#F1F5F9';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      body.style.backgroundColor = '#F8F9FA';
      body.style.color = '#1A1A1A';
    }
  }, [mode, mounted]);

  return <>{children}</>;
}

