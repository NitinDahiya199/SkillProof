import styled from 'styled-components';
import { theme } from '@/theme/theme';

interface BadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const StyledBadge = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.borderRadius.full};
  font-family: ${theme.fonts.sans.join(', ')};

  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `
          padding: ${theme.spacing[1]} ${theme.spacing[2]};
          font-size: ${theme.fontSizes.xs};
        `;
      case 'lg':
        return `
          padding: ${theme.spacing[2]} ${theme.spacing[4]};
          font-size: ${theme.fontSizes.base};
        `;
      default:
        return `
          padding: ${theme.spacing[1]} ${theme.spacing[3]};
          font-size: ${theme.fontSizes.sm};
        `;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary[100]};
          color: ${theme.colors.primary[700]};
        `;
      case 'success':
        return `
          background-color: ${theme.colors.success[100]};
          color: ${theme.colors.success[700]};
        `;
      case 'warning':
        return `
          background-color: ${theme.colors.warning[100]};
          color: ${theme.colors.warning[700]};
        `;
      case 'error':
        return `
          background-color: ${theme.colors.error[100]};
          color: ${theme.colors.error[700]};
        `;
      case 'gray':
        return `
          background-color: ${theme.colors.gray[100]};
          color: ${theme.colors.gray[700]};
        `;
      default:
        return `
          background-color: ${theme.colors.primary[100]};
          color: ${theme.colors.primary[700]};
        `;
    }
  }}
`;

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
}) => {
  return (
    <StyledBadge variant={variant} size={size}>
      {children}
    </StyledBadge>
  );
};

