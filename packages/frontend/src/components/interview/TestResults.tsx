import styled from 'styled-components';
import { theme } from '@/theme/theme';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface TestCase {
  name: string;
  passed: boolean;
  input?: string;
  expected?: string;
  actual?: string;
  error?: string;
}

interface TestResultsProps {
  testCases: TestCase[];
  totalTests: number;
  passedTests: number;
}

const ResultsCard = styled(Card)`
  margin-top: ${theme.spacing[6]};
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[6]};
`;

const ResultsTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
`;

const ResultsSummary = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  align-items: center;
`;

const TestCaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
`;

const TestCaseItem = styled.div<{ passed: boolean }>`
  padding: ${theme.spacing[4]};
  border: 2px solid
    ${(props) => (props.passed ? theme.colors.success[200] : theme.colors.error[200])};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${(props) =>
    props.passed ? theme.colors.success[50] : theme.colors.error[50]};
`;

const TestCaseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[2]};
`;

const TestCaseName = styled.div`
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
`;

const TestCaseDetails = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray[600]};
  margin-top: ${theme.spacing[2]};
`;

const CodeBlock = styled.pre`
  background-color: ${theme.colors.gray[900]};
  color: ${theme.colors.gray[100]};
  padding: ${theme.spacing[2]};
  border-radius: ${theme.borderRadius.md};
  font-family: 'Fira Code', monospace;
  font-size: ${theme.fontSizes.xs};
  overflow-x: auto;
  margin: ${theme.spacing[1]} 0;
`;

export const TestResults: React.FC<TestResultsProps> = ({
  testCases,
  totalTests,
  passedTests,
}) => {
  const allPassed = passedTests === totalTests;

  return (
    <ResultsCard>
      <ResultsHeader>
        <ResultsTitle>Test Results</ResultsTitle>
        <ResultsSummary>
          <Badge variant={allPassed ? 'success' : 'error'}>
            {passedTests}/{totalTests} passed
          </Badge>
        </ResultsSummary>
      </ResultsHeader>
      <TestCaseList>
        {testCases.map((testCase, idx) => (
          <TestCaseItem key={idx} passed={testCase.passed}>
            <TestCaseHeader>
              <TestCaseName>{testCase.name}</TestCaseName>
              <Badge variant={testCase.passed ? 'success' : 'error'}>
                {testCase.passed ? 'Passed' : 'Failed'}
              </Badge>
            </TestCaseHeader>
            {testCase.input && (
              <TestCaseDetails>
                <strong>Input:</strong>
                <CodeBlock>{testCase.input}</CodeBlock>
              </TestCaseDetails>
            )}
            {testCase.expected && (
              <TestCaseDetails>
                <strong>Expected:</strong>
                <CodeBlock>{testCase.expected}</CodeBlock>
              </TestCaseDetails>
            )}
            {testCase.actual && (
              <TestCaseDetails>
                <strong>Actual:</strong>
                <CodeBlock>{testCase.actual}</CodeBlock>
              </TestCaseDetails>
            )}
            {testCase.error && (
              <TestCaseDetails style={{ color: theme.colors.error[600] }}>
                <strong>Error:</strong> {testCase.error}
              </TestCaseDetails>
            )}
          </TestCaseItem>
        ))}
      </TestCaseList>
    </ResultsCard>
  );
};

