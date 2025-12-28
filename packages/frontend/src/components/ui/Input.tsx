import styled from 'styled-components';
import { theme } from '@/theme/theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
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

const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  font-size: ${theme.fontSizes.base};
  border: 2px solid
    ${(props) => (props.hasError ? theme.colors.error[500] : theme.colors.gray[300])};
  border-radius: ${theme.borderRadius.lg};
  outline: none;
  transition: all 0.2s ease;
  font-family: ${theme.fonts.sans.join(', ')};

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

  &::placeholder {
    color: ${theme.colors.gray[400]};
  }
`;

const ErrorText = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.error[600]};
`;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  ...props
}) => {
  return (
    <InputWrapper fullWidth={fullWidth}>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <StyledInput hasError={!!error} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

