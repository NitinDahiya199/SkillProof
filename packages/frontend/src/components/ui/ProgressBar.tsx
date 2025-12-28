import styled from 'styled-components';
import { theme } from '@/theme/theme';

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  showLabel?: boolean;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ProgressContainer = styled.div<{ size: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const ProgressWrapper = styled.div<{ size: string }>`
  width: 100%;
  background-color: ${theme.colors.gray[200]};
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;

  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `height: 4px;`;
      case 'lg':
        return `height: 12px;`;
      default:
        return `height: 8px;`;
    }
  }}
`;

const ProgressFill = styled.div<{ value: number; color: string }>`
  height: 100%;
  width: ${(props) => props.value}%;
  background-color: ${(props) => props.color};
  border-radius: ${theme.borderRadius.full};
  transition: width 0.3s ease;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray[600]};
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  showLabel = false,
  color,
  size = 'md',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const progressColor = color || theme.colors.primary[600];

  return (
    <ProgressContainer size={size}>
      {showLabel && (
        <Label>
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </Label>
      )}
      <ProgressWrapper size={size}>
        <ProgressFill value={percentage} color={progressColor} />
      </ProgressWrapper>
    </ProgressContainer>
  );
};

