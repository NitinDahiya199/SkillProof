import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '@/theme/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.gray[900]};
  color: ${theme.colors.gray[300]};
  padding: ${theme.spacing[16]} ${theme.spacing[6]};
  margin-top: ${theme.spacing[20]};
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing[12]};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const FooterTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[2]};
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.gray[400]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.white};
  }
`;

const Copyright = styled.div`
  max-width: 1280px;
  margin: ${theme.spacing[12]} auto 0;
  padding-top: ${theme.spacing[8]};
  border-top: 1px solid ${theme.colors.gray[800]};
  text-align: center;
  color: ${theme.colors.gray[500]};
  font-size: ${theme.fontSizes.sm};
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>SkillProof</FooterTitle>
          <p>The Trust Layer for Remote Hiring</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Product</FooterTitle>
          <FooterLink href="/features">Features</FooterLink>
          <FooterLink href="/pricing">Pricing</FooterLink>
          <FooterLink href="/how-it-works">How It Works</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/careers">Careers</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="/help">Help Center</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/terms">Terms</FooterLink>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} SkillProof. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

