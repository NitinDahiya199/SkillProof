'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { CodeEditor } from '@/components/interview/CodeEditor';
import { QuestionDisplay } from '@/components/interview/QuestionDisplay';
import { TestResults } from '@/components/interview/TestResults';
import { CheckIcon } from '@/components/ui/svgs';
import { theme } from '@/theme/theme';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const InterviewContainer = styled.div`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: ${theme.spacing[8]} ${theme.spacing[6]};
`;

const InterviewLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const TimerCard = styled(Card)`
  text-align: center;
`;

const Timer = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.secondary.DEFAULT};
  margin: ${theme.spacing[4]} 0;
`;

const InstructionsCard = styled(Card)`
  background-color: ${theme.colors.secondary[50]};
  border: 2px solid ${theme.colors.secondary[200]};
`;

const InstructionsTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const InstructionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InstructionItem = styled.li`
  padding: ${theme.spacing[2]} 0;
  color: ${theme.colors.gray[700]};
  padding-left: ${theme.spacing[6]};
  position: relative;

  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export default function InterviewPage() {
  const params = useParams();
  const sessionId = params?.sessionId as string;

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState<any>(null);

  useEffect(() => {
    // TODO: Fetch question from API
    setQuestion({
      title: 'Two Sum',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      difficulty: 'medium',
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
        },
      ],
      constraints: [
        '2 <= nums.length <= 10^4',
        '-10^9 <= nums[i] <= 10^9',
        '-10^9 <= target <= 10^9',
      ],
    });
  }, [sessionId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRunCode = async () => {
    setIsLoading(true);
    // TODO: Call API to execute code
    setTimeout(() => {
      setTestResults({
        testCases: [
          { name: 'Test 1', passed: true, input: '[2,7,11,15], 9', expected: '[0,1]', actual: '[0,1]' },
          { name: 'Test 2', passed: false, input: '[3,2,4], 6', expected: '[1,2]', actual: '[0,1]' },
        ],
        totalTests: 2,
        passedTests: 1,
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    if (!confirm('Are you sure you want to submit? You cannot modify your code after submission.')) {
      return;
    }
    setIsLoading(true);
    // TODO: Submit code for evaluation
    console.log('Submitting code:', code);
  };

  if (!question) {
    return (
      <Main>
        <Header />
        <InterviewContainer>
          <div style={{ display: 'flex', justifyContent: 'center', padding: theme.spacing[12] }}>
            <LoadingSpinner size="lg" />
          </div>
        </InterviewContainer>
      </Main>
    );
  }

  return (
    <Main>
      <Header />
      <InterviewContainer>
        <InterviewLayout>
          <Sidebar>
            <TimerCard>
              <h3 style={{ marginBottom: theme.spacing[2] }}>Time Elapsed</h3>
              <Timer>{formatTime(timeElapsed)}</Timer>
            </TimerCard>

            <InstructionsCard>
              <InstructionsTitle>Instructions</InstructionsTitle>
              <InstructionList>
                <InstructionItem>
                  <CheckIcon width={16} height={16} color={theme.colors.secondary.DEFAULT} />
                  Read the problem carefully
                </InstructionItem>
                <InstructionItem>
                  <CheckIcon width={16} height={16} color={theme.colors.secondary.DEFAULT} />
                  Write clean, efficient code
                </InstructionItem>
                <InstructionItem>
                  <CheckIcon width={16} height={16} color={theme.colors.secondary.DEFAULT} />
                  Test your solution before submitting
                </InstructionItem>
                <InstructionItem>
                  <CheckIcon width={16} height={16} color={theme.colors.secondary.DEFAULT} />
                  No external help or copy-paste allowed
                </InstructionItem>
              </InstructionList>
            </InstructionsCard>

            {testResults && <TestResults {...testResults} />}
          </Sidebar>

          <EditorSection>
            <QuestionDisplay question={question} />
            <CodeEditor
              language="javascript"
              initialCode={code}
              onCodeChange={setCode}
              onRun={handleRunCode}
              onSubmit={handleSubmit}
            />
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'center', padding: theme.spacing[4] }}>
                <LoadingSpinner />
              </div>
            )}
          </EditorSection>
        </InterviewLayout>
      </InterviewContainer>
    </Main>
  );
}

