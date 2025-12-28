'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
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

const SearchSection = styled(Card)`
  margin-bottom: ${theme.spacing[12]};
  padding: ${theme.spacing[6]};
`;

const SearchForm = styled.form`
  display: flex;
  gap: ${theme.spacing[4]};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[8]};
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[12]};
`;

const FAQCard = styled(Card)<{ isOpen: boolean }>`
  padding: ${theme.spacing[6]};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${theme.shadows.lg};
  }
`;

const FAQQuestion = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  color: ${theme.colors.gray[600]};
  line-height: 1.8;
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-top: ${(props) => (props.isOpen ? theme.spacing[4] : '0')};
`;

const ContactCard = styled(Card)`
  text-align: center;
  padding: ${theme.spacing[12]};
`;

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'How does skill verification work?',
      answer:
        'SkillProof uses AI-powered coding interviews to assess your skills. You\'ll solve coding problems, and our AI evaluates your solution based on correctness, code quality, complexity, and best practices. If you score 70 or above, you can mint a SkillProof NFT.',
    },
    {
      id: 2,
      question: 'What is a SkillProof NFT?',
      answer:
        'A SkillProof NFT is a blockchain-based credential that proves you\'ve verified a specific skill. It\'s stored on-chain (Polygon network) and can be verified by anyone. This creates tamper-proof proof of your verified skills.',
    },
    {
      id: 3,
      question: 'How much does it cost?',
      answer:
        'Candidates can verify one skill for free per month. Pro plans start at $9.99/month for unlimited verifications. Employers have subscription plans starting at $99/month. See our pricing page for details.',
    },
    {
      id: 4,
      question: 'Do I need a crypto wallet?',
      answer:
        'You can use SkillProof with just an email account. However, to mint SkillProof NFTs, you\'ll need to connect a crypto wallet (MetaMask, WalletConnect, etc.). We support gasless minting for eligible users.',
    },
    {
      id: 5,
      question: 'How long does an interview take?',
      answer:
        'Most interviews take 30-45 minutes. This includes reading the problem, writing your solution, testing it, and submitting. You can take your time, but we recommend completing it in one session.',
    },
    {
      id: 6,
      question: 'Can I retake an interview?',
      answer:
        'Yes! If you don\'t pass (score below 70), you can retake the interview. Free users get one retry per month. Pro users have unlimited retries.',
    },
    {
      id: 7,
      question: 'How do employers verify my credentials?',
      answer:
        'Employers can click "Verify on Blockchain" on your profile to check your SkillProof NFT on-chain. This confirms the credential is authentic and hasn\'t been tampered with.',
    },
    {
      id: 8,
      question: 'What programming languages are supported?',
      answer:
        'We support all major programming languages including JavaScript, Python, Java, C++, Go, Rust, and more. The interview questions are tailored to the skill you\'re verifying.',
    },
  ];

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>Help Center</HeroTitle>
        <HeroSubtitle>
          Find answers to common questions about SkillProof
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <SearchSection>
          <SearchForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
            />
            <Button type="submit">Search</Button>
          </SearchForm>
        </SearchSection>

        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQGrid>
          {filteredFAQs.map((faq) => (
            <FAQCard
              key={faq.id}
              isOpen={openFAQ === faq.id}
              onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
            >
              <FAQQuestion>
                {faq.question}
                <span>{openFAQ === faq.id ? '−' : '+'}</span>
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === faq.id}>{faq.answer}</FAQAnswer>
            </FAQCard>
          ))}
        </FAQGrid>

        <ContactCard>
          <h2 style={{ fontSize: theme.fontSizes['2xl'], marginBottom: theme.spacing[4] }}>
            Still Need Help?
          </h2>
          <p style={{ color: theme.colors.gray[600], marginBottom: theme.spacing[6] }}>
            Can't find what you're looking for? Contact our support team.
          </p>
          <div style={{ display: 'flex', gap: theme.spacing[4], justifyContent: 'center' }}>
            <Button as="a" href="mailto:support@skillproof.io">
              Email Support
            </Button>
            <Button variant="outline" as="a" href="/contact">
              Contact Form
            </Button>
          </div>
        </ContactCard>
      </ContentSection>
      <Footer />
    </Main>
  );
}

