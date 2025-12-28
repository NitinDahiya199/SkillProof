'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { theme } from '@/theme/theme';
import Link from 'next/link';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const DashboardContainer = styled.div`
  flex: 1;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: ${theme.spacing[8]} ${theme.spacing[6]};
`;

const WelcomeSection = styled.section`
  margin-bottom: ${theme.spacing[8]};
`;

const WelcomeTitle = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const WelcomeSubtitle = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSizes.lg};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[8]};
`;

const StatCard = styled(Card)`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary[600]};
  margin-bottom: ${theme.spacing[2]};
`;

const StatLabel = styled.div`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
`;

const Section = styled.section`
  margin-bottom: ${theme.spacing[8]};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[6]};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacing[6]};
`;

const SkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
`;

const SkillScore = styled.div<{ score: number }>`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${(props) => {
    if (props.score >= 80) return theme.colors.success[600];
    if (props.score >= 60) return theme.colors.warning[600];
    return theme.colors.error[600];
  }};
`;

const SkillMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray[600]};
`;

const EmptyState = styled(Card)`
  text-align: center;
  padding: ${theme.spacing[12]};
  color: ${theme.colors.gray[600]};
`;

export default function CandidateDashboard() {
  // Mock data - will be replaced with actual data from API
  const stats = {
    verifiedSkills: 0,
    averageScore: 0,
    profileViews: 0,
  };

  const skills: Array<{
    id: string;
    skill: string;
    score: number;
    verifiedAt: string;
    nftTokenId?: string;
  }> = [];

  return (
    <Main>
      <Header />
      <DashboardContainer>
        <WelcomeSection>
          <WelcomeTitle>Welcome to SkillProof</WelcomeTitle>
          <WelcomeSubtitle>
            Verify your skills and showcase your expertise to employers
          </WelcomeSubtitle>
        </WelcomeSection>

        <StatsGrid>
          <StatCard>
            <StatValue>{stats.verifiedSkills}</StatValue>
            <StatLabel>Verified Skills</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.averageScore || '—'}</StatValue>
            <StatLabel>Average Score</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.profileViews}</StatValue>
            <StatLabel>Profile Views</StatLabel>
          </StatCard>
        </StatsGrid>

        <Section>
          <SectionHeader>
            <SectionTitle>Verified Skills</SectionTitle>
            <Button as={Link} href="/verify-skill">
              Verify New Skill
            </Button>
          </SectionHeader>

          {skills.length === 0 ? (
            <EmptyState>
              <div style={{ fontSize: theme.fontSizes['4xl'], marginBottom: theme.spacing[4] }}>
                🎯
              </div>
              <h3 style={{ marginBottom: theme.spacing[2], color: theme.colors.gray[900] }}>
                No verified skills yet
              </h3>
              <p style={{ marginBottom: theme.spacing[6] }}>
                Start by verifying your first skill to build your SkillProof profile
              </p>
              <Button as={Link} href="/verify-skill">
                Verify Your First Skill
              </Button>
            </EmptyState>
          ) : (
            <SkillsGrid>
              {skills.map((skill) => (
                <SkillCard key={skill.id} hover>
                  <SkillHeader>
                    <SkillName>{skill.skill}</SkillName>
                    <SkillScore score={skill.score}>{skill.score}/100</SkillScore>
                  </SkillHeader>
                  <SkillMeta>
                    <span>Verified: {new Date(skill.verifiedAt).toLocaleDateString()}</span>
                    {skill.nftTokenId && <span>✓ On-chain</span>}
                  </SkillMeta>
                  <Button variant="outline" size="sm" fullWidth>
                    View Details
                  </Button>
                </SkillCard>
              ))}
            </SkillsGrid>
          )}
        </Section>

        <Section>
          <SectionHeader>
            <SectionTitle>Quick Actions</SectionTitle>
          </SectionHeader>
          <div style={{ display: 'flex', gap: theme.spacing[4], flexWrap: 'wrap' }}>
            <Button variant="outline" as={Link} href="/profile">
              Complete Profile
            </Button>
            <Button variant="outline" as={Link} href="/profile/public">
              View Public Profile
            </Button>
            <Button variant="outline" as={Link} href="/settings">
              Settings
            </Button>
          </div>
        </Section>
      </DashboardContainer>
      <Footer />
    </Main>
  );
}

