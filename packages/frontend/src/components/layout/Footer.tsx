import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.gray[900]};
  color: ${(props) => props.theme.colors.gray[300]};
  padding: ${(props) => props.theme.spacing[16]} ${(props) => props.theme.spacing[6]};
  margin-top: ${(props) => props.theme.spacing[20]};
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${(props) => props.theme.spacing[12]};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[4]};
`;

const FooterTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => props.theme.spacing[2]};
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray[400]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

const Copyright = styled.div`
  max-width: 1280px;
  margin: ${(props) => props.theme.spacing[12]} auto 0;
  padding-top: ${(props) => props.theme.spacing[8]};
  border-top: 1px solid ${(props) => props.theme.colors.gray[800]};
  text-align: center;
  color: ${(props) => props.theme.colors.gray[500]};
  font-size: ${(props) => props.theme.fontSizes.sm};
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

