import styled from 'styled-components';
import { theme } from '@/theme/theme';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BulletIcon } from '@/components/ui/svgs';

interface QuestionDisplayProps {
  question: {
    title: string;
    description: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    examples?: Array<{ input: string; output: string; explanation?: string }>;
    constraints?: string[];
  };
}

const QuestionCard = styled(Card)`
  margin-bottom: ${theme.spacing[6]};
`;

const QuestionTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
`;

const QuestionDescription = styled.div`
  color: ${theme.colors.gray[700]};
  line-height: 1.8;
  margin-bottom: ${theme.spacing[6]};
  white-space: pre-wrap;
`;

const Section = styled.div`
  margin-bottom: ${theme.spacing[6]};
`;

const SectionTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
`;

const ExampleCard = styled.div`
  background-color: ${theme.colors.gray[50]};
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[3]};
`;

const ExampleLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[2]};
`;

const CodeBlock = styled.pre`
  background-color: ${theme.colors.gray[900]};
  color: ${theme.colors.gray[100]};
  padding: ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.md};
  font-family: 'Fira Code', monospace;
  font-size: ${theme.fontSizes.sm};
  overflow-x: auto;
  margin: ${theme.spacing[2]} 0;
`;

const ConstraintList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ConstraintItem = styled.li`
  padding: ${theme.spacing[2]} 0;
  color: ${theme.colors.gray[700]};
  padding-left: ${theme.spacing[6]};
  position: relative;

  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy':
        return 'success';
      case 'hard':
        return 'error';
      default:
        return 'warning';
    }
  };

  return (
    <QuestionCard>
      <QuestionTitle>
        {question.title}
        {question.difficulty && (
          <Badge variant={getDifficultyColor(question.difficulty) as any}>
            {question.difficulty}
          </Badge>
        )}
      </QuestionTitle>
      <QuestionDescription>{question.description}</QuestionDescription>

      {question.examples && question.examples.length > 0 && (
        <Section>
          <SectionTitle>Examples</SectionTitle>
          {question.examples.map((example, idx) => (
            <ExampleCard key={idx}>
              <ExampleLabel>Example {idx + 1}:</ExampleLabel>
              <div>
                <div style={{ marginBottom: theme.spacing[2] }}>
                  <strong>Input:</strong>
                  <CodeBlock>{example.input}</CodeBlock>
                </div>
                <div>
                  <strong>Output:</strong>
                  <CodeBlock>{example.output}</CodeBlock>
                </div>
                {example.explanation && (
                  <div style={{ marginTop: theme.spacing[2], color: theme.colors.gray[600] }}>
                    <strong>Explanation:</strong> {example.explanation}
                  </div>
                )}
              </div>
            </ExampleCard>
          ))}
        </Section>
      )}

      {question.constraints && question.constraints.length > 0 && (
        <Section>
          <SectionTitle>Constraints</SectionTitle>
          <ConstraintList>
            {question.constraints.map((constraint, idx) => (
              <ConstraintItem key={idx}>
                <BulletIcon width={6} height={6} color={theme.colors.secondary.DEFAULT} />
                {constraint}
              </ConstraintItem>
            ))}
          </ConstraintList>
        </Section>
      )}
    </QuestionCard>
  );
};

