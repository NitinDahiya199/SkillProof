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

const FeaturesSection = styled.section`
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
`;

const FeatureCard = styled(Card)`
  padding: ${theme.spacing[8]};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.secondary[500]});
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes['3xl']};
  margin-bottom: ${theme.spacing[6]};
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: 1.8;
  flex: 1;
`;

const CTA = styled.div`
  text-align: center;
  padding: ${theme.spacing[16]} ${theme.spacing[6]};
  background-color: ${theme.colors.gray[50]};
`;

export default function FeaturesPage() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Interviews',
      description: 'Automated coding interviews that objectively assess real skills. Our AI evaluates code quality, correctness, and best practices.',
    },
    {
      icon: '⛓️',
      title: 'Blockchain Verification',
      description: 'Tamper-proof SkillProof NFTs stored on-chain. Verify credentials that cannot be faked or manipulated.',
    },
    {
      icon: '📊',
      title: 'Objective Scoring',
      description: 'Transparent skill scores (0-100) based on multiple factors: test cases, code quality, complexity analysis, and best practices.',
    },
    {
      icon: '⚡',
      title: 'Instant Verification',
      description: 'Employers can instantly verify candidate credentials without lengthy background checks or manual verification.',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is secure. Blockchain verification without exposing personal information. GDPR compliant.',
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Verify skills from anywhere in the world. Perfect for remote teams and global talent pools.',
    },
    {
      icon: '📈',
      title: 'Skill Growth Tracking',
      description: 'Track your skill improvements over time. Show employers your continuous learning and growth.',
    },
    {
      icon: '🎯',
      title: 'Targeted Matching',
      description: 'Employers can find candidates with specific verified skills. Save time in the hiring process.',
    },
    {
      icon: '💼',
      title: 'Portfolio Integration',
      description: 'Link your GitHub, portfolio, and other professional profiles to showcase your complete expertise.',
    },
  ];

  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>Powerful Features for Trusted Hiring</HeroTitle>
        <HeroSubtitle>
          Everything you need to verify skills and build trust in remote hiring
        </HeroSubtitle>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why SkillProof?</SectionTitle>
        <SectionSubtitle>
          Combining cutting-edge AI with blockchain technology to revolutionize how skills are verified
        </SectionSubtitle>
        <FeaturesGrid>
          {features.map((feature, idx) => (
            <FeatureCard key={idx}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <CTA>
        <h2 style={{ fontSize: theme.fontSizes['3xl'], marginBottom: theme.spacing[4] }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: theme.colors.gray[600], marginBottom: theme.spacing[8] }}>
          Join thousands of developers and employers using SkillProof
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

