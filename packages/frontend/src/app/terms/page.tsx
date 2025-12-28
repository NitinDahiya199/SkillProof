'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { theme } from '@/theme/theme';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary[600]} 0%, ${theme.colors.secondary[600]} 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing[16]} ${theme.spacing[6]};
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: ${theme.fontSizes['5xl']};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing[6]};
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
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
`;

const Paragraph = styled.p`
  color: ${theme.colors.gray[700]};
  line-height: 1.8;
  font-size: ${theme.fontSizes.base};
  margin-bottom: ${theme.spacing[4]};
`;

const List = styled.ul`
  color: ${theme.colors.gray[700]};
  line-height: 1.8;
  margin-bottom: ${theme.spacing[4]};
  padding-left: ${theme.spacing[6]};
`;

const ListItem = styled.li`
  margin-bottom: ${theme.spacing[2]};
`;

const LastUpdated = styled.div`
  color: ${theme.colors.gray[500]};
  font-size: ${theme.fontSizes.sm};
  font-style: italic;
  margin-bottom: ${theme.spacing[8]};
`;

export default function TermsPage() {
  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>Terms of Service</HeroTitle>
      </HeroSection>

      <ContentSection>
        <LastUpdated>Last updated: January 2024</LastUpdated>

        <Section>
          <SectionTitle>1. Acceptance of Terms</SectionTitle>
          <Paragraph>
            By accessing or using SkillProof, you agree to be bound by these Terms of Service. If
            you disagree with any part of these terms, you may not access the service.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Description of Service</SectionTitle>
          <Paragraph>
            SkillProof is an AI-powered skill verification platform that uses blockchain technology
            to create tamper-proof credentials. We provide:
          </Paragraph>
          <List>
            <ListItem>AI-powered coding interviews for skill assessment</ListItem>
            <ListItem>Blockchain-based credential minting (SkillProof NFTs)</ListItem>
            <ListItem>Candidate profile and verification services</ListItem>
            <ListItem>Employer search and verification tools</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. User Accounts</SectionTitle>
          <Paragraph>To use SkillProof, you must:</Paragraph>
          <List>
            <ListItem>Be at least 18 years old</ListItem>
            <ListItem>Provide accurate and complete information</ListItem>
            <ListItem>Maintain the security of your account</ListItem>
            <ListItem>Notify us immediately of any unauthorized access</ListItem>
            <ListItem>Not share your account credentials</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. User Conduct</SectionTitle>
          <Paragraph>You agree not to:</Paragraph>
          <List>
            <ListItem>Use the service for any illegal purpose</ListItem>
            <ListItem>Attempt to cheat, manipulate, or game the verification system</ListItem>
            <ListItem>Copy, share, or plagiarize interview questions or solutions</ListItem>
            <ListItem>Use automated tools or bots to complete interviews</ListItem>
            <ListItem>Impersonate another person or entity</ListItem>
            <ListItem>Interfere with or disrupt the service</ListItem>
            <ListItem>Reverse engineer or attempt to extract source code</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Skill Verification</SectionTitle>
          <Paragraph>
            SkillProof uses AI to evaluate your code submissions. Scores are determined by:
          </Paragraph>
          <List>
            <ListItem>Test case correctness (40%)</ListItem>
            <ListItem>Code quality (30%)</ListItem>
            <ListItem>Complexity analysis (20%)</ListItem>
            <ListItem>Best practices (10%)</ListItem>
          </List>
          <Paragraph>
            Scores are final and cannot be appealed unless there is a technical error on our part.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. SkillProof NFTs</SectionTitle>
          <Paragraph>
            SkillProof NFTs are minted on the Polygon blockchain. By minting an NFT, you
            acknowledge that:
          </Paragraph>
          <List>
            <ListItem>Blockchain transactions are irreversible</ListItem>
            <ListItem>You are responsible for gas fees (unless sponsored)</ListItem>
            <ListItem>The NFT represents a verified skill credential</ListItem>
            <ListItem>NFTs cannot be transferred or sold (Soulbound tokens)</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Payment and Refunds</SectionTitle>
          <Paragraph>
            Subscription fees are charged in advance. Refunds are available within 14 days of
            purchase if you haven't used the service. Skill verification fees are non-refundable
            once an interview is started.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Intellectual Property</SectionTitle>
          <Paragraph>
            All content on SkillProof, including but not limited to text, graphics, logos, and
            software, is the property of SkillProof or its licensors and is protected by copyright
            and other intellectual property laws.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. Limitation of Liability</SectionTitle>
          <Paragraph>
            SkillProof is provided "as is" without warranties of any kind. We are not liable for:
          </Paragraph>
          <List>
            <ListItem>Any loss or damage resulting from use of the service</ListItem>
            <ListItem>Inaccuracies in skill assessments</ListItem>
            <ListItem>Blockchain network issues or failures</ListItem>
            <ListItem>Loss of funds due to wallet security issues</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. Termination</SectionTitle>
          <Paragraph>
            We may terminate or suspend your account immediately, without prior notice, for conduct
            that we believe violates these Terms or is harmful to other users or SkillProof.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>11. Changes to Terms</SectionTitle>
          <Paragraph>
            We reserve the right to modify these terms at any time. We will notify users of
            significant changes. Continued use of the service constitutes acceptance of modified
            terms.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>12. Contact Information</SectionTitle>
          <Paragraph>
            For questions about these Terms, please contact us at:
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> legal@skillproof.io
          </Paragraph>
        </Section>
      </ContentSection>
      <Footer />
    </Main>
  );
}

