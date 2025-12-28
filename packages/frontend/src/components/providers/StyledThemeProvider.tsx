'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useThemeStore } from '@/store/themeStore';
import { getTheme } from '@/theme/theme';

export const StyledThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { mode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use light theme during SSR to prevent hydration mismatch
  const theme = mounted ? getTheme(mode) : getTheme('light');

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

