'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
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

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: ${theme.fontSizes['5xl']};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing[6]};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing[10]};
  opacity: 0.95;
  line-height: 1.6;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
`;

const FeaturesSection = styled.section`
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  max-width: 1280px;
  margin: 0 auto;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[12]};
`;

const FeatureCard = styled(Card)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.secondary[500]});
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: ${theme.fontSizes['3xl']};
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
`;

export default function Home() {
  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroContent>
          <HeroTitle>The Trust Layer for Remote Hiring</HeroTitle>
          <HeroSubtitle>
            Verify developer skills with AI-powered interviews and store verified proof on blockchain.
            Build trust in remote hiring with tamper-proof credentials.
          </HeroSubtitle>
          <CTAButtons>
            <Button size="lg" as={Link} href="/signup?role=candidate">
              Get Verified
            </Button>
            <Button size="lg" variant="outline" as={Link} href="/signup?role=employer">
              Find Talent
            </Button>
          </CTAButtons>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why SkillProof?</SectionTitle>
        <SectionSubtitle>
          Combining AI intelligence with blockchain security to revolutionize hiring
        </SectionSubtitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🤖</FeatureIcon>
            <FeatureTitle>AI-Powered Interviews</FeatureTitle>
            <FeatureDescription>
              Automated coding interviews that objectively assess real skills, not just resumes.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>⛓️</FeatureIcon>
            <FeatureTitle>Blockchain Verification</FeatureTitle>
            <FeatureDescription>
              Tamper-proof SkillProof NFTs that prove verified skills on-chain. Trust that can't be faked.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureTitle>Instant Trust</FeatureTitle>
            <FeatureDescription>
              Employers can instantly verify candidate credentials without lengthy background checks.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Objective Scoring</FeatureTitle>
            <FeatureDescription>
              Transparent skill scores (0-100) based on code quality, correctness, and best practices.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🌐</FeatureIcon>
            <FeatureTitle>Global Reach</FeatureTitle>
            <FeatureDescription>
              Verify skills from anywhere. Perfect for remote teams and global talent pools.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureTitle>Secure & Private</FeatureTitle>
            <FeatureDescription>
              Your data is secure. Blockchain verification without exposing personal information.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      <Footer />
    </Main>
  );
}
