'use client';

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/theme/theme';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: () => void;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const ToastContainer = styled.div<{ type: string; isClosing: boolean }>`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  min-width: 300px;
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  border-left: 4px solid
    ${(props) => {
      switch (props.type) {
        case 'success':
          return theme.colors.success[500];
        case 'error':
          return theme.colors.error[500];
        case 'warning':
          return theme.colors.warning[500];
        default:
          return theme.colors.primary[500];
      }
    }};
  animation: ${(props) => (props.isClosing ? slideOut : slideIn)} 0.3s ease;
`;

const Icon = styled.div<{ type: string }>`
  font-size: ${theme.fontSizes.xl};
  color: ${(props) => {
    switch (props.type) {
      case 'success':
        return theme.colors.success[600];
      case 'error':
        return theme.colors.error[600];
      case 'warning':
        return theme.colors.warning[600];
      default:
        return theme.colors.primary[600];
    }
  }};
`;

const Message = styled.div`
  flex: 1;
  color: ${theme.colors.gray[900]};
  font-size: ${theme.fontSizes.sm};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.gray[400]};
  cursor: pointer;
  font-size: ${theme.fontSizes.lg};
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${theme.colors.gray[600]};
  }
`;

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 5000,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  };

  return (
    <ToastContainer type={type} isClosing={isClosing}>
      <Icon type={type}>{getIcon()}</Icon>
      <Message>{message}</Message>
      <CloseButton onClick={() => {
        setIsClosing(true);
        setTimeout(onClose, 300);
      }}>
        ×
      </CloseButton>
    </ToastContainer>
  );
};

