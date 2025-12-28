'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { theme } from '@/theme/theme';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const Container = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: ${theme.spacing[12]} ${theme.spacing[6]};
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  text-align: center;
  margin-bottom: ${theme.spacing[4]};
`;

const Subtitle = styled.p`
  color: ${theme.colors.gray[600]};
  text-align: center;
  font-size: ${theme.fontSizes.lg};
  margin-bottom: ${theme.spacing[12]};
`;

const InfoCard = styled(Card)`
  margin-bottom: ${theme.spacing[6]};
  background-color: ${theme.colors.primary[50]};
  border: 2px solid ${theme.colors.primary[200]};
`;

const InfoTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  padding: ${theme.spacing[2]} 0;
  color: ${theme.colors.gray[700]};
  padding-left: ${theme.spacing[6]};
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: ${theme.spacing[2]};
    color: ${theme.colors.secondary.DEFAULT};
    font-weight: ${theme.fontWeights.bold};
  }
`;

const skills = [
  { value: 'react', label: 'React' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
];

export default function VerifySkillPage() {
  const router = useRouter();
  const [selectedSkill, setSelectedSkill] = useState('');

  const handleStart = () => {
    if (!selectedSkill) {
      alert('Please select a skill to verify');
      return;
    }
    // TODO: Create interview session and redirect
    router.push(`/interview/new-session?skill=${selectedSkill}`);
  };

  return (
    <Main>
      <Header />
      <Container>
        <Title>Verify Your Skill</Title>
        <Subtitle>Take an AI-powered coding interview to verify your expertise</Subtitle>

        <Card>
          <div style={{ marginBottom: theme.spacing[6] }}>
            <Select
              label="Select Skill to Verify"
              options={skills}
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              fullWidth
            />
          </div>

          <InfoCard>
            <InfoTitle>What to Expect</InfoTitle>
            <InfoList>
              <InfoItem>30-45 minute coding interview</InfoItem>
              <InfoItem>Real-time code execution and testing</InfoItem>
              <InfoItem>AI-powered evaluation and scoring</InfoItem>
              <InfoItem>Get a SkillProof NFT upon passing (score ≥ 70)</InfoItem>
            </InfoList>
          </InfoCard>

          <div style={{ display: 'flex', gap: theme.spacing[4], marginTop: theme.spacing[6] }}>
            <Button variant="outline" fullWidth onClick={() => router.back()}>
              Cancel
            </Button>
            <Button fullWidth onClick={handleStart} disabled={!selectedSkill}>
              Start Interview
            </Button>
          </div>
        </Card>
      </Container>
      <Footer />
    </Main>
  );
}

