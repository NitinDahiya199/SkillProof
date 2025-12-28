import styled from 'styled-components';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  as?: typeof Link | 'a' | 'button';
  href?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  transition: all 0.2s ease;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  outline: none;
  font-family: ${(props) => props.theme.fonts.sans.join(', ')};

  /* Size variants */
  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `
          padding: ${props.theme.spacing[2]} ${props.theme.spacing[4]};
          font-size: ${props.theme.fontSizes.sm};
        `;
      case 'lg':
        return `
          padding: ${props.theme.spacing[4]} ${props.theme.spacing[8]};
          font-size: ${props.theme.fontSizes.lg};
        `;
      default:
        return `
          padding: ${props.theme.spacing[3]} ${props.theme.spacing[6]};
          font-size: ${props.theme.fontSizes.base};
        `;
    }
  }}

  /* Width */
  ${(props) => props.fullWidth && 'width: 100%;'}

  /* Variant styles */
  ${(props) => {
    if (props.disabled) {
      return `
        background-color: ${props.theme.colors.gray[300]};
        color: ${props.theme.colors.gray[500]};
        opacity: 0.6;
      `;
    }

    switch (props.variant) {
      case 'primary':
        return `
          background-color: ${props.theme.colors.secondary.DEFAULT};
          color: ${props.theme.colors.white};
          &:hover {
            background-color: ${props.theme.colors.secondary[600]};
          }
          &:active {
            background-color: ${props.theme.colors.secondary[700]};
          }
        `;
      case 'secondary':
        return `
          background-color: ${props.theme.colors.primary.DEFAULT};
          color: ${props.theme.colors.white};
          &:hover {
            background-color: ${props.theme.colors.primary[600]};
          }
          &:active {
            background-color: ${props.theme.colors.primary[700]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${props.theme.colors.secondary.DEFAULT};
          border: 2px solid ${props.theme.colors.secondary.DEFAULT};
          &:hover {
            background-color: ${props.theme.colors.secondary[50]};
          }
          &:active {
            background-color: ${props.theme.colors.secondary[100]};
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${props.theme.colors.text.secondary};
          &:hover {
            background-color: ${props.theme.mode === 'dark' 
              ? props.theme.colors.gray[200] 
              : props.theme.colors.gray[100]};
          }
          &:active {
            background-color: ${props.theme.mode === 'dark' 
              ? props.theme.colors.gray[300] 
              : props.theme.colors.gray[200]};
          }
        `;
      case 'danger':
        return `
          background-color: ${props.theme.colors.error[600]};
          color: ${props.theme.colors.white};
          &:hover {
            background-color: ${props.theme.colors.error[700]};
          }
          &:active {
            background-color: ${props.theme.colors.error[800]};
          }
        `;
      default:
        return `
          background-color: ${props.theme.colors.primary[600]};
          color: ${props.theme.colors.white};
          &:hover {
            background-color: ${props.theme.colors.primary[700]};
          }
        `;
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  as,
  href,
  ...props
}) => {
  const Component = as || StyledButton;

  if (as === Link && href) {
    return (
      <StyledButton
        as={Link}
        href={href}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
