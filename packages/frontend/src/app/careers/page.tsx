'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { theme } from '@/theme/theme';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const HeroSection = styled.section`
  background: ${theme.gradients.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: ${theme.fontSizes['5xl']};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing[6]};
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[12]};
`;

const JobCard = styled(Card)`
  padding: ${theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const JobTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
`;

const JobMeta = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
  flex-wrap: wrap;
  margin-top: ${theme.spacing[2]};
`;

const JobDescription = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.gray[900]};
`;

const SectionSubtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  text-align: center;
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[12]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing[16]};
  color: ${theme.colors.gray[600]};
`;

export default function CareersPage() {
  // Mock job openings - will be replaced with actual data
  const jobs = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
    },
    {
      id: 3,
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Design',
    },
  ];

  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>Join the SkillProof Team</HeroTitle>
        <HeroSubtitle>
          Help us build the future of trusted remote hiring
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Open Positions</SectionTitle>
        <SectionSubtitle>
          We're looking for talented individuals to join our mission
        </SectionSubtitle>

        {jobs.length === 0 ? (
          <EmptyState>
            <h2 style={{ fontSize: theme.fontSizes['2xl'], marginBottom: theme.spacing[4] }}>
              No Open Positions
            </h2>
            <p>We're not currently hiring, but we'd love to hear from you!</p>
            <p style={{ marginTop: theme.spacing[4] }}>
              Send your resume to{' '}
              <a href="mailto:careers@skillproof.io" style={{ color: theme.colors.secondary.DEFAULT }}>
                careers@skillproof.io
              </a>
            </p>
          </EmptyState>
        ) : (
          <JobsGrid>
            {jobs.map((job) => (
              <JobCard key={job.id}>
                <JobHeader>
                  <div>
                    <JobTitle>{job.title}</JobTitle>
                    <JobMeta>
                      <Badge variant="gray">{job.location}</Badge>
                      <Badge variant="gray">{job.type}</Badge>
                      <Badge variant="primary">{job.department}</Badge>
                    </JobMeta>
                  </div>
                </JobHeader>
                <JobDescription>
                  We're looking for a talented {job.title.toLowerCase()} to join our team and help
                  build innovative solutions for remote hiring.
                </JobDescription>
                <Button variant="outline" fullWidth>
                  Apply Now
                </Button>
              </JobCard>
            ))}
          </JobsGrid>
        )}
      </ContentSection>
      <Footer />
    </Main>
  );
}

