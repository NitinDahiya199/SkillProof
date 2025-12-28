'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { theme } from '@/theme/theme';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: ${theme.spacing[12]};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
`;

const Paragraph = styled.p`
  color: ${theme.colors.gray[700]};
  line-height: 1.8;
  font-size: ${theme.fontSizes.lg};
  margin-bottom: ${theme.spacing[6]};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[8]};
`;

const ValueCard = styled(Card)`
  padding: ${theme.spacing[6]};
  text-align: center;
`;

const ValueIcon = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  margin-bottom: ${theme.spacing[4]};
`;

const ValueTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const ValueDescription = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
`;

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: 'Transparency',
      description: 'We believe in open, honest evaluation processes that benefit everyone.',
    },
    {
      icon: '🔒',
      title: 'Trust',
      description: 'Building trust through verifiable credentials and blockchain technology.',
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'Leveraging AI and blockchain to solve real hiring challenges.',
    },
    {
      icon: '🌍',
      title: 'Accessibility',
      description: 'Making skill verification accessible to developers worldwide.',
    },
  ];

  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>About SkillProof</HeroTitle>
        <HeroSubtitle>
          Building the future of trusted remote hiring
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            SkillProof was born from a simple observation: remote hiring is broken. Fake resumes,
            unverifiable credentials, and lengthy background checks create friction and distrust in
            the hiring process. We're here to fix that.
          </Paragraph>
          <Paragraph>
            Our mission is to create a trust layer for remote hiring by combining AI-powered skill
            assessment with blockchain-verified credentials. We believe that skills should be
            verifiable, transparent, and accessible to everyone.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>What We Do</SectionTitle>
          <Paragraph>
            SkillProof uses advanced AI to conduct objective coding interviews that evaluate real
            skills, not just resumes. Candidates receive transparent scores based on code quality,
            correctness, and best practices.
          </Paragraph>
          <Paragraph>
            Verified skills are minted as SkillProof NFTs on the blockchain, creating tamper-proof
            credentials that employers can instantly verify. This eliminates the need for lengthy
            background checks and builds trust in remote hiring.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            {values.map((value, idx) => (
              <ValueCard key={idx}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Section>

        <Section>
          <SectionTitle>The Future of Hiring</SectionTitle>
          <Paragraph>
            As remote work becomes the norm, the need for trusted skill verification has never been
            greater. SkillProof is at the forefront of this transformation, providing tools that
            benefit both candidates and employers.
          </Paragraph>
          <Paragraph>
            We're building a future where skills are verifiable, credentials are trustworthy, and
            hiring is efficient. Join us in revolutionizing how the world hires remote talent.
          </Paragraph>
        </Section>
      </ContentSection>
      <Footer />
    </Main>
  );
}

