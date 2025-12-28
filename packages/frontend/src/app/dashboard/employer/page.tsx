'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { theme } from '@/theme/theme';
import { useState } from 'react';

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

const SearchSection = styled(Card)`
  margin-bottom: ${theme.spacing[8]};
`;

const SearchForm = styled.form`
  display: flex;
  gap: ${theme.spacing[4]};
  flex-wrap: wrap;
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

const CandidatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${theme.spacing[6]};
`;

const CandidateCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const CandidateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const CandidateName = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[1]};
`;

const CandidateLocation = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray[600]};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  margin-top: ${theme.spacing[2]};
`;

const SkillBadge = styled.span<{ score: number }>`
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  background-color: ${(props) => {
    if (props.score >= 80) return theme.colors.success[100];
    if (props.score >= 60) return theme.colors.warning[100];
    return theme.colors.error[100];
  }};
  color: ${(props) => {
    if (props.score >= 80) return theme.colors.success[700];
    if (props.score >= 60) return theme.colors.warning[700];
    return theme.colors.error[700];
  }};
`;

const EmptyState = styled(Card)`
  text-align: center;
  padding: ${theme.spacing[12]};
  color: ${theme.colors.gray[600]};
`;

export default function EmployerDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Mock data - will be replaced with actual data from API
  const stats = {
    candidatesViewed: 0,
    savedCandidates: 0,
    searchesPerformed: 0,
  };

  const candidates: Array<{
    id: string;
    name: string;
    location?: string;
    skills: Array<{ skill: string; score: number }>;
  }> = [];

  return (
    <Main>
      <Header />
      <DashboardContainer>
        <WelcomeSection>
          <WelcomeTitle>Find Verified Talent</WelcomeTitle>
          <WelcomeSubtitle>
            Browse candidates with verified skills and blockchain credentials
          </WelcomeSubtitle>
        </WelcomeSection>

        <SearchSection>
          <SearchForm
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Implement search
            }}
          >
            <Input
              placeholder="Search by skill, name, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ flex: 1, minWidth: '200px' }}
            />
            <Button type="submit">Search</Button>
            <Button variant="outline" type="button">
              Advanced Filters
            </Button>
          </SearchForm>
        </SearchSection>

        <StatsGrid>
          <StatCard>
            <StatValue>{stats.candidatesViewed}</StatValue>
            <StatLabel>Candidates Viewed</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.savedCandidates}</StatValue>
            <StatLabel>Saved Candidates</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.searchesPerformed}</StatValue>
            <StatLabel>Searches Performed</StatLabel>
          </StatCard>
        </StatsGrid>

        <Section>
          <SectionHeader>
            <SectionTitle>Verified Candidates</SectionTitle>
            <Button variant="outline">Save Search</Button>
          </SectionHeader>

          {candidates.length === 0 ? (
            <EmptyState>
              <div style={{ fontSize: theme.fontSizes['4xl'], marginBottom: theme.spacing[4] }}>
                🔍
              </div>
              <h3 style={{ marginBottom: theme.spacing[2], color: theme.colors.gray[900] }}>
                No candidates found
              </h3>
              <p style={{ marginBottom: theme.spacing[6] }}>
                Try adjusting your search criteria or browse all verified candidates
              </p>
              <Button variant="outline">Browse All Candidates</Button>
            </EmptyState>
          ) : (
            <CandidatesGrid>
              {candidates.map((candidate) => (
                <CandidateCard key={candidate.id} hover>
                  <CandidateHeader>
                    <div>
                      <CandidateName>{candidate.name}</CandidateName>
                      {candidate.location && (
                        <CandidateLocation>{candidate.location}</CandidateLocation>
                      )}
                    </div>
                  </CandidateHeader>
                  <SkillsList>
                    {candidate.skills.map((skill, idx) => (
                      <SkillBadge key={idx} score={skill.score}>
                        {skill.skill} ({skill.score})
                      </SkillBadge>
                    ))}
                  </SkillsList>
                  <div style={{ display: 'flex', gap: theme.spacing[2], marginTop: theme.spacing[2] }}>
                    <Button size="sm" fullWidth>
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                  </div>
                </CandidateCard>
              ))}
            </CandidatesGrid>
          )}
        </Section>
      </DashboardContainer>
      <Footer />
    </Main>
  );
}

