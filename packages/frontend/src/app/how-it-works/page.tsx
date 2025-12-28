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
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary[600]} 0%, ${theme.colors.secondary[600]} 100%);
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

const StepCard = styled(Card)`
  margin-bottom: ${theme.spacing[8]};
  padding: ${theme.spacing[8]};
`;

const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.secondary[500]});
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing[6]};
`;

const StepTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const StepDescription = styled.p`
  color: ${theme.colors.gray[700]};
  line-height: 1.8;
  font-size: ${theme.fontSizes.lg};
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

const CTA = styled.div`
  text-align: center;
  padding: ${theme.spacing[16]} ${theme.spacing[6]};
  background-color: ${theme.colors.gray[50]};
`;

export default function HowItWorksPage() {
  const candidateSteps = [
    {
      number: 1,
      title: 'Create Your Profile',
      description:
        'Sign up as a candidate and complete your profile. Add your skills, experience, and link your GitHub or portfolio.',
    },
    {
      number: 2,
      title: 'Choose a Skill to Verify',
      description:
        'Select a skill you want to verify (e.g., React, Node.js, Python). You can verify multiple skills over time.',
    },
    {
      number: 3,
      title: 'Take the AI Interview',
      description:
        'Complete a 30-45 minute coding interview. Write code, test your solution, and submit when ready. Our AI evaluates your code in real-time.',
    },
    {
      number: 4,
      title: 'Get Your Score',
      description:
        'Receive an objective score (0-100) based on test cases, code quality, complexity, and best practices.',
    },
    {
      number: 5,
      title: 'Mint Your SkillProof NFT',
      description:
        'If you score 70 or above, mint a SkillProof NFT on the blockchain. This creates a tamper-proof credential that proves your verified skill.',
    },
    {
      number: 6,
      title: 'Share Your Profile',
      description:
        'Share your public SkillProof profile with employers. They can verify your credentials on-chain instantly.',
    },
  ];

  const employerSteps = [
    {
      number: 1,
      title: 'Sign Up as Employer',
      description:
        'Create an employer account and choose a subscription plan that fits your hiring needs.',
    },
    {
      number: 2,
      title: 'Search Verified Candidates',
      description:
        'Use our search to find candidates with verified skills. Filter by skill, score, location, and more.',
    },
    {
      number: 3,
      title: 'View Candidate Profiles',
      description:
        'Review detailed profiles with verified skills, scores, and AI interview reports.',
    },
    {
      number: 4,
      title: 'Verify on Blockchain',
      description:
        'Click to verify any candidate\'s SkillProof NFT on the blockchain. Confirm the credential is authentic and tamper-proof.',
    },
    {
      number: 5,
      title: 'Make Hiring Decisions',
      description:
        'Compare candidates, view interview reports, and make informed hiring decisions based on verified skills.',
    },
  ];

  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>How SkillProof Works</HeroTitle>
        <HeroSubtitle>
          A simple, transparent process for verifying skills and building trust
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <SectionTitle>For Candidates</SectionTitle>
        <SectionSubtitle>
          Verify your skills and showcase your expertise to employers
        </SectionSubtitle>
        {candidateSteps.map((step) => (
          <StepCard key={step.number}>
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepCard>
        ))}
      </ContentSection>

      <ContentSection>
        <SectionTitle>For Employers</SectionTitle>
        <SectionSubtitle>
          Find and verify talented developers with proven skills
        </SectionSubtitle>
        {employerSteps.map((step) => (
          <StepCard key={step.number}>
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepCard>
        ))}
      </ContentSection>

      <CTA>
        <h2 style={{ fontSize: theme.fontSizes['3xl'], marginBottom: theme.spacing[4] }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: theme.colors.gray[600], marginBottom: theme.spacing[8] }}>
          Join SkillProof today and start verifying skills
        </p>
        <div style={{ display: 'flex', gap: theme.spacing[4], justifyContent: 'center' }}>
          <Button size="lg" as={Link} href="/signup?role=candidate">
            Get Verified
          </Button>
          <Button size="lg" variant="outline" as={Link} href="/signup?role=employer">
            Find Talent
          </Button>
        </div>
      </CTA>
      <Footer />
    </Main>
  );
}

