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
  background: ${theme.gradients.primary};
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

export default function PrivacyPage() {
  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>Privacy Policy</HeroTitle>
      </HeroSection>

      <ContentSection>
        <LastUpdated>Last updated: January 2024</LastUpdated>

        <Section>
          <SectionTitle>1. Introduction</SectionTitle>
          <Paragraph>
            SkillProof ("we", "our", or "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you
            use our platform.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Information We Collect</SectionTitle>
          <Paragraph>We collect information that you provide directly to us:</Paragraph>
          <List>
            <ListItem>Account information (name, email, password)</ListItem>
            <ListItem>Profile information (skills, experience, portfolio links)</ListItem>
            <ListItem>Interview responses and code submissions</ListItem>
            <ListItem>Blockchain wallet addresses (if you connect a wallet)</ListItem>
            <ListItem>Payment information (processed securely through third-party providers)</ListItem>
          </List>
          <Paragraph>
            We also automatically collect certain information when you use our service, including
            usage data, device information, and IP addresses.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>3. How We Use Your Information</SectionTitle>
          <Paragraph>We use the information we collect to:</Paragraph>
          <List>
            <ListItem>Provide and maintain our service</ListItem>
            <ListItem>Process skill verifications and generate scores</ListItem>
            <ListItem>Mint and manage SkillProof NFTs</ListItem>
            <ListItem>Enable employers to search and verify candidate credentials</ListItem>
            <ListItem>Send you updates, notifications, and support communications</ListItem>
            <ListItem>Improve our AI models and service quality</ListItem>
            <ListItem>Comply with legal obligations</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Blockchain and Public Data</SectionTitle>
          <Paragraph>
            When you mint a SkillProof NFT, certain information is stored on the blockchain and is
            publicly accessible:
          </Paragraph>
          <List>
            <ListItem>Skill name and score (hashed)</ListItem>
            <ListItem>Verification timestamp</ListItem>
            <ListItem>NFT token ID and transaction hash</ListItem>
          </List>
          <Paragraph>
            Your personal information (name, email) is NOT stored on the blockchain. Only
            verification credentials are stored on-chain.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>5. Data Sharing and Disclosure</SectionTitle>
          <Paragraph>We do not sell your personal information. We may share information:</Paragraph>
          <List>
            <ListItem>With employers who view your public profile (only verified skills)</ListItem>
            <ListItem>With service providers who help us operate our platform</ListItem>
            <ListItem>When required by law or to protect our rights</ListItem>
            <ListItem>In connection with a business transfer or merger</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Your Rights</SectionTitle>
          <Paragraph>You have the right to:</Paragraph>
          <List>
            <ListItem>Access your personal data</ListItem>
            <ListItem>Correct inaccurate data</ListItem>
            <ListItem>Request deletion of your data</ListItem>
            <ListItem>Export your data</ListItem>
            <ListItem>Opt-out of marketing communications</ListItem>
            <ListItem>Withdraw consent for data processing</ListItem>
          </List>
          <Paragraph>
            Note: Data stored on the blockchain cannot be deleted due to blockchain immutability.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Data Security</SectionTitle>
          <Paragraph>
            We implement appropriate technical and organizational measures to protect your
            information. However, no method of transmission over the internet is 100% secure.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Children's Privacy</SectionTitle>
          <Paragraph>
            Our service is not intended for users under 18 years of age. We do not knowingly collect
            information from children.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. International Data Transfers</SectionTitle>
          <Paragraph>
            Your information may be transferred to and processed in countries other than your own.
            We ensure appropriate safeguards are in place.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>10. Changes to This Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new policy on this page.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>11. Contact Us</SectionTitle>
          <Paragraph>
            If you have questions about this Privacy Policy, please contact us at:
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> privacy@skillproof.io
          </Paragraph>
        </Section>
      </ContentSection>
      <Footer />
    </Main>
  );
}

