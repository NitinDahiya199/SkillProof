import styled from 'styled-components';
import { theme } from '@/theme/theme';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: Array<{ value: string; label: string }>;
}

const SelectWrapper = styled.div<{ fullWidth?: boolean }>`
  ${(props) => props.fullWidth && 'width: 100%;'}
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.gray[700]};
`;

const StyledSelect = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  font-size: ${theme.fontSizes.base};
  border: 2px solid
    ${(props) => (props.hasError ? theme.colors.error[500] : theme.colors.gray[300])};
  border-radius: ${theme.borderRadius.lg};
  outline: none;
  transition: all 0.2s ease;
  font-family: ${theme.fonts.sans.join(', ')};
  background-color: ${theme.colors.white};
  cursor: pointer;

  &:focus {
    border-color: ${(props) =>
      props.hasError ? theme.colors.error[500] : theme.colors.primary[500]};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError
          ? `${theme.colors.error[100]}`
          : `${theme.colors.primary[100]}`};
  }

  &:disabled {
    background-color: ${theme.colors.gray[100]};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ErrorText = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.error[600]};
`;

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  fullWidth = false,
  options,
  ...props
}) => {
  return (
    <SelectWrapper fullWidth={fullWidth}>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <StyledSelect hasError={!!error} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {error && <ErrorText>{error}</ErrorText>}
    </SelectWrapper>
  );
};

