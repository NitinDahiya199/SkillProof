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
  background-color: ${theme.colors.gray[50]};
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

const PricingSection = styled.section`
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[12]};
`;

const PricingCard = styled(Card)<{ featured?: boolean }>`
  position: relative;
  padding: ${theme.spacing[8]};
  ${(props) =>
    props.featured &&
    `
    border: 2px solid ${theme.colors.secondary.DEFAULT};
    transform: scale(1.05);
  `}
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.gradients.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing[2]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
`;

const PlanName = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const PlanPrice = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[1]};
`;

const PlanPeriod = styled.div`
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[6]};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing[8]} 0;
`;

const FeatureItem = styled.li`
  padding: ${theme.spacing[3]} 0;
  color: ${theme.colors.gray[700]};
  padding-left: ${theme.spacing[6]};
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${theme.colors.success[600]};
    font-weight: ${theme.fontWeights.bold};
  }
`;

export default function PricingPage() {
  const candidatePlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '1 skill verification per month',
        'Basic profile',
        'Public profile link',
        'View your scores',
      ],
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      features: [
        'Unlimited skill verifications',
        'Practice mode',
        'Advanced reports',
        'Priority support',
        'Skill growth tracking',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Custom difficulty levels',
        'Portfolio integration',
        'Analytics dashboard',
        'Early access to features',
      ],
    },
  ];

  const employerPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'per month',
      features: [
        '10 candidate views/month',
        'Basic search',
        'Skill filtering',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: '$299',
      period: 'per month',
      features: [
        '100 candidate views/month',
        'Advanced search & filters',
        'Saved searches',
        'Candidate comparison',
        'Interview reports',
        'Priority support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Unlimited candidate views',
        'API access',
        'ATS integration',
        'Dedicated support',
        'Custom features',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>Simple, Transparent Pricing</HeroTitle>
        <HeroSubtitle>
          Choose the plan that works best for you. All plans include core features.
        </HeroSubtitle>
      </HeroSection>

      <PricingSection>
        <h2
          style={{
            fontSize: theme.fontSizes['3xl'],
            fontWeight: theme.fontWeights.bold,
            textAlign: 'center',
            marginBottom: theme.spacing[12],
          }}
        >
          For Candidates
        </h2>
        <PricingGrid>
          {candidatePlans.map((plan, idx) => (
            <PricingCard key={idx} featured={plan.featured}>
              {plan.featured && <FeaturedBadge>Most Popular</FeaturedBadge>}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanPeriod>{plan.period}</PlanPeriod>
              <FeatureList>
                {plan.features.map((feature, fIdx) => (
                  <FeatureItem key={fIdx}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <Button fullWidth size="lg" variant={plan.featured ? 'primary' : 'outline'}>
                Get Started
              </Button>
            </PricingCard>
          ))}
        </PricingGrid>

        <h2
          style={{
            fontSize: theme.fontSizes['3xl'],
            fontWeight: theme.fontWeights.bold,
            textAlign: 'center',
            marginTop: theme.spacing[20],
            marginBottom: theme.spacing[12],
          }}
        >
          For Employers
        </h2>
        <PricingGrid>
          {employerPlans.map((plan, idx) => (
            <PricingCard key={idx} featured={plan.featured}>
              {plan.featured && <FeaturedBadge>Most Popular</FeaturedBadge>}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanPeriod>{plan.period}</PlanPeriod>
              <FeatureList>
                {plan.features.map((feature, fIdx) => (
                  <FeatureItem key={fIdx}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <Button
                fullWidth
                size="lg"
                variant={plan.featured ? 'primary' : 'outline'}
                as={plan.name === 'Enterprise' ? undefined : Link}
                href={plan.name === 'Enterprise' ? undefined : '/signup?role=employer'}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </PricingCard>
          ))}
        </PricingGrid>
      </PricingSection>
      <Footer />
    </Main>
  );
}

