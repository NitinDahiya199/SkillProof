import styled from 'styled-components';
import { theme } from '@/theme/theme';

interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

const StyledCard = styled.div<CardProps>`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.gray[200]};

  ${(props) => {
    switch (props.padding) {
      case 'sm':
        return `padding: ${theme.spacing[4]};`;
      case 'lg':
        return `padding: ${theme.spacing[8]};`;
      default:
        return `padding: ${theme.spacing[6]};`;
    }
  }}

  ${(props) =>
    props.hover &&
    `
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      box-shadow: ${theme.shadows.lg};
      transform: translateY(-2px);
    }
  `}
`;

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  hover = false,
  className,
}) => {
  return (
    <StyledCard padding={padding} hover={hover} className={className}>
      {children}
    </StyledCard>
  );
};

