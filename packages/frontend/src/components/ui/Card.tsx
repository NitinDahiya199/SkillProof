import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => 
    props.theme.mode === 'dark' 
      ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
      : props.theme.shadows.md};
  border: 1px solid ${(props) => props.theme.colors.border};

  ${(props) => {
    switch (props.padding) {
      case 'sm':
        return `padding: ${props.theme.spacing[4]};`;
      case 'lg':
        return `padding: ${props.theme.spacing[8]};`;
      default:
        return `padding: ${props.theme.spacing[6]};`;
    }
  }}

  ${(props) =>
    props.hover &&
    `
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      box-shadow: ${props.theme.shadows.lg};
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

