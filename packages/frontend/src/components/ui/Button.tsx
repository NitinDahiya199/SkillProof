import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '@/theme/theme';

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
  font-weight: ${theme.fontWeights.semibold};
  border-radius: ${theme.borderRadius.lg};
  transition: all 0.2s ease;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  outline: none;
  font-family: ${theme.fonts.sans.join(', ')};

  /* Size variants */
  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `
          padding: ${theme.spacing[2]} ${theme.spacing[4]};
          font-size: ${theme.fontSizes.sm};
        `;
      case 'lg':
        return `
          padding: ${theme.spacing[4]} ${theme.spacing[8]};
          font-size: ${theme.fontSizes.lg};
        `;
      default:
        return `
          padding: ${theme.spacing[3]} ${theme.spacing[6]};
          font-size: ${theme.fontSizes.base};
        `;
    }
  }}

  /* Width */
  ${(props) => props.fullWidth && 'width: 100%;'}

  /* Variant styles */
  ${(props) => {
    if (props.disabled) {
      return `
        background-color: ${theme.colors.gray[300]};
        color: ${theme.colors.gray[500]};
        opacity: 0.6;
      `;
    }

    switch (props.variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary[600]};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.primary[700]};
          }
          &:active {
            background-color: ${theme.colors.primary[800]};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary[600]};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.secondary[700]};
          }
          &:active {
            background-color: ${theme.colors.secondary[800]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary[600]};
          border: 2px solid ${theme.colors.primary[600]};
          &:hover {
            background-color: ${theme.colors.primary[50]};
          }
          &:active {
            background-color: ${theme.colors.primary[100]};
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${theme.colors.gray[700]};
          &:hover {
            background-color: ${theme.colors.gray[100]};
          }
          &:active {
            background-color: ${theme.colors.gray[200]};
          }
        `;
      case 'danger':
        return `
          background-color: ${theme.colors.error[600]};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.error[700]};
          }
          &:active {
            background-color: ${theme.colors.error[800]};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary[600]};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.primary[700]};
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

