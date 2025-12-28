'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AIIcon, BlockchainIcon, SearchIcon, GlobeIcon, ShieldIcon, SparklesIcon } from '@/components/ui/svgs';
import Link from 'next/link';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.3s ease;
`;

const HeroSection = styled.section`
  background: ${(props) => props.theme.gradients.primary};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing[20]} ${(props) => props.theme.spacing[6]};
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes['5xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: ${(props) => props.theme.spacing[6]};
  line-height: 1.2;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-bottom: ${(props) => props.theme.spacing[10]};
  opacity: 0.95;
  line-height: 1.6;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
`;

const FeaturesSection = styled.section`
  padding: ${(props) => props.theme.spacing[20]} ${(props) => props.theme.spacing[6]};
  max-width: 1280px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.3s ease;
`;

const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes['4xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[4]};
  color: ${(props) => props.theme.colors.text.primary};
`;

const SectionSubtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  text-align: center;
  color: ${(props) => props.theme.colors.text.secondary};
  margin-bottom: ${(props) => props.theme.spacing[12]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing[8]};
  margin-top: ${(props) => props.theme.spacing[12]};
`;

const FeatureCard = styled(Card)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[4]};
  background-color: ${(props) => props.theme.colors.surface};
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  svg {
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors.white};
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.text.primary};
`;

const FeatureDescription = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
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
            <FeatureIcon>
              <AIIcon width={32} height={32} color="white" />
            </FeatureIcon>
            <FeatureTitle>AI-Powered Interviews</FeatureTitle>
            <FeatureDescription>
              Automated coding interviews that objectively assess real skills, not just resumes.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <BlockchainIcon width={32} height={32} color="white" />
            </FeatureIcon>
            <FeatureTitle>Blockchain Verification</FeatureTitle>
            <FeatureDescription>
              Tamper-proof SkillProof NFTs that prove verified skills on-chain. Trust that can't be faked.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <SparklesIcon width={32} height={32} color="white" />
            </FeatureIcon>
            <FeatureTitle>Instant Trust</FeatureTitle>
            <FeatureDescription>
              Employers can instantly verify candidate credentials without lengthy background checks.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <SearchIcon width={32} height={32} color="white" />
            </FeatureIcon>
            <FeatureTitle>Objective Scoring</FeatureTitle>
            <FeatureDescription>
              Transparent skill scores (0-100) based on code quality, correctness, and best practices.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <GlobeIcon width={32} height={32} color="white" />
            </FeatureIcon>
            <FeatureTitle>Global Reach</FeatureTitle>
            <FeatureDescription>
              Verify skills from anywhere. Perfect for remote teams and global talent pools.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <ShieldIcon width={32} height={32} color="white" />
            </FeatureIcon>
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
