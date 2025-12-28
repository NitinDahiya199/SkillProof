'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
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

const HeroSubtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const ContactCard = styled(Card)`
  padding: ${theme.spacing[8]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  font-size: ${theme.fontSizes.base};
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.lg};
  outline: none;
  transition: all 0.2s ease;
  font-family: ${theme.fonts.sans.join(', ')};
  resize: vertical;

  &:focus {
    border-color: ${theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${theme.colors.primary[100]};
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[12]};
`;

const InfoCard = styled(Card)`
  padding: ${theme.spacing[6]};
  text-align: center;
`;

const InfoIcon = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  margin-bottom: ${theme.spacing[4]};
`;

const InfoTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const InfoText = styled.p`
  color: ${theme.colors.gray[600]};
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: '',
  });

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', category: '' });
  };

  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>Get in Touch</HeroTitle>
        <HeroSubtitle>
          Have a question? We'd love to hear from you.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <ContactCard>
          <Form onSubmit={handleSubmit}>
            <Input
              label="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              fullWidth
            />
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              fullWidth
            />
            <Select
              label="Category"
              options={subjectOptions}
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              fullWidth
            />
            <Input
              label="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              fullWidth
            />
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.medium,
                  color: theme.colors.gray[700],
                  marginBottom: theme.spacing[2],
                }}
              >
                Message
              </label>
              <TextArea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us how we can help..."
                required
              />
            </div>
            <Button type="submit" size="lg" fullWidth>
              Send Message
            </Button>
          </Form>
        </ContactCard>

        <ContactInfo>
          <InfoCard>
            <InfoIcon>📧</InfoIcon>
            <InfoTitle>Email</InfoTitle>
            <InfoText>support@skillproof.io</InfoText>
          </InfoCard>
          <InfoCard>
            <InfoIcon>💬</InfoIcon>
            <InfoTitle>Live Chat</InfoTitle>
            <InfoText>Available 24/7</InfoText>
          </InfoCard>
          <InfoCard>
            <InfoIcon>⏰</InfoIcon>
            <InfoTitle>Response Time</InfoTitle>
            <InfoText>Within 24 hours</InfoText>
          </InfoCard>
        </ContactInfo>
      </ContentSection>
      <Footer />
    </Main>
  );
}

