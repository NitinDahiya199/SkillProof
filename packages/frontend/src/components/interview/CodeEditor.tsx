'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/theme/theme';
import { Button } from '@/components/ui/Button';

interface CodeEditorProps {
  language?: string;
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  onRun?: () => void;
  onSubmit?: () => void;
  readOnly?: boolean;
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  background-color: ${theme.colors.white};
`;

const EditorHeader = styled.div`
  background-color: ${theme.colors.gray[100]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

const LanguageBadge = styled.span`
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  background-color: ${theme.colors.primary[100]};
  color: ${theme.colors.primary[700]};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
`;

const EditorActions = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 400px;
  padding: ${theme.spacing[4]};
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: ${theme.fontSizes.base};
  line-height: 1.6;
  border: none;
  outline: none;
  resize: vertical;
  background-color: ${theme.colors.gray[50]};
  color: ${theme.colors.gray[900]};

  &:focus {
    background-color: ${theme.colors.white};
  }

  &::placeholder {
    color: ${theme.colors.gray[400]};
  }
`;

export const CodeEditor: React.FC<CodeEditorProps> = ({
  language = 'javascript',
  initialCode = '',
  onCodeChange,
  onRun,
  onSubmit,
  readOnly = false,
}) => {
  const [code, setCode] = useState(initialCode);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  return (
    <EditorContainer>
      <EditorHeader>
        <LanguageBadge>{language}</LanguageBadge>
        <EditorActions>
          {onRun && (
            <Button size="sm" variant="outline" onClick={onRun}>
              Run Code
            </Button>
          )}
          {onSubmit && (
            <Button size="sm" onClick={onSubmit}>
              Submit
            </Button>
          )}
        </EditorActions>
      </EditorHeader>
      <TextArea
        value={code}
        onChange={handleChange}
        placeholder={`Write your ${language} code here...`}
        readOnly={readOnly}
      />
    </EditorContainer>
  );
};

