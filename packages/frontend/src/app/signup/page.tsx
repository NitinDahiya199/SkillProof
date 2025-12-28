'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { theme } from '@/theme/theme';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, ${theme.colors.gray[50]}, ${theme.colors.white});
`;

const SignupSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[12]} ${theme.spacing[6]};
`;

const SignupCard = styled(Card)`
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${theme.colors.gray[600]};
  text-align: center;
  margin-bottom: ${theme.spacing[8]};
`;

const RoleSelector = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[6]};
`;

const RoleButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: ${theme.spacing[4]};
  border: 2px solid
    ${(props) => (props.active ? theme.colors.secondary.DEFAULT : theme.colors.mediumGray)};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${(props) => (props.active ? theme.colors.secondary[50] : theme.colors.white)};
  color: ${(props) => (props.active ? theme.colors.secondary[700] : theme.colors.gray[700])};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.secondary.DEFAULT};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  margin: ${theme.spacing[6]} 0;
  color: ${theme.colors.gray[500]};

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${theme.colors.gray[300]};
  }
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: ${theme.spacing[6]};
  color: ${theme.colors.gray[600]};

  a {
    color: ${theme.colors.secondary.DEFAULT};
    font-weight: ${theme.fontWeights.semibold};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function SignupPage() {
  const searchParams = useSearchParams();
  const [role, setRole] = useState<'candidate' | 'employer'>('candidate');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'candidate' || roleParam === 'employer') {
      setRole(roleParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // TODO: Implement actual signup logic
    console.log('Signup:', { role, ...formData });
  };

  return (
    <Main>
      <Header />
      <SignupSection>
        <SignupCard>
          <Title>Create Your Account</Title>
          <Subtitle>Join SkillProof and start verifying skills</Subtitle>
          <RoleSelector>
            <RoleButton
              type="button"
              active={role === 'candidate'}
              onClick={() => setRole('candidate')}
            >
              I'm a Developer
            </RoleButton>
            <RoleButton
              type="button"
              active={role === 'employer'}
              onClick={() => setRole('employer')}
            >
              I'm Hiring
            </RoleButton>
          </RoleSelector>
          <Form onSubmit={handleSubmit}>
            {role === 'employer' && (
              <Input
                type="text"
                label="Company Name"
                placeholder="Your company name"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
                fullWidth
              />
            )}
            <Input
              type="text"
              label={role === 'employer' ? 'Your Name' : 'Full Name'}
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              fullWidth
            />
            <Input
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              fullWidth
            />
            <Input
              type="password"
              label="Password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              fullWidth
            />
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              fullWidth
            />
            {error && <div style={{ color: theme.colors.error[600] }}>{error}</div>}
            <Button type="submit" fullWidth size="lg">
              Create Account
            </Button>
          </Form>
          <Divider>OR</Divider>
          <Button variant="outline" fullWidth size="lg">
            Connect Wallet
          </Button>
          <LoginLink>
            Already have an account? <Link href="/login">Sign in</Link>
          </LoginLink>
        </SignupCard>
      </SignupSection>
      <Footer />
    </Main>
  );
}

