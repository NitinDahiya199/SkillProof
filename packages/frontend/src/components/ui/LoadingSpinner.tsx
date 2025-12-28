import styled, { keyframes } from 'styled-components';
import { theme } from '@/theme/theme';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<{ size: string; color: string }>`
  border: 3px solid ${(props) => props.color}20;
  border-top: 3px solid ${(props) => props.color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `
          width: 20px;
          height: 20px;
          border-width: 2px;
        `;
      case 'lg':
        return `
          width: 48px;
          height: 48px;
          border-width: 4px;
        `;
      default:
        return `
          width: 32px;
          height: 32px;
          border-width: 3px;
        `;
    }
  }}
`;

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color,
}) => {
  const spinnerColor = color || theme.colors.primary[600];
  return <Spinner size={size} color={spinnerColor} />;
};

