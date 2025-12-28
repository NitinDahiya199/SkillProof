'use client';

import styled from 'styled-components';
import { useThemeStore } from '@/store/themeStore';

const ToggleContainer = styled.button<{ isDark: boolean }>`
  position: relative;
  width: 56px;
  height: 32px;
  border-radius: 16px;
  border: none;
  background-color: ${(props) => 
    props.isDark 
      ? props.theme.colors.secondary.DEFAULT 
      : props.theme.colors.gray[300]};
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
  padding: 0;

  &:hover {
    background-color: ${(props) => 
      props.isDark 
        ? props.theme.colors.secondary[600] 
        : props.theme.colors.gray[400]};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.secondary[100]};
  }
`;

const ToggleSlider = styled.div<{ isDark: boolean }>`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isDark ? '26px' : '2px')};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useThemeStore();
  const isDark = mode === 'dark';

  return (
    <ToggleContainer
      isDark={isDark}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <ToggleSlider isDark={isDark} />
    </ToggleContainer>
  );
};
