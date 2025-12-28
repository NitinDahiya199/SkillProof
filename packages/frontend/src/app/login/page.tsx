'use client';

import { useState } from 'react';
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

const LoginSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[12]} ${theme.spacing[6]};
`;

const LoginCard = styled(Card)`
  width: 100%;
  max-width: 450px;
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

const SignUpLink = styled.div`
  text-align: center;
  margin-top: ${theme.spacing[6]};
  color: ${theme.colors.gray[600]};

  a {
    color: ${theme.colors.primary[600]};
    font-weight: ${theme.fontWeights.semibold};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // TODO: Implement actual login logic
    console.log('Login:', { email, password });
  };

  return (
    <Main>
      <Header />
      <LoginSection>
        <LoginCard>
          <Title>Welcome Back</Title>
          <Subtitle>Sign in to your SkillProof account</Subtitle>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            {error && <div style={{ color: theme.colors.error[600] }}>{error}</div>}
            <Button type="submit" fullWidth size="lg">
              Sign In
            </Button>
          </Form>
          <Divider>OR</Divider>
          <Button variant="outline" fullWidth size="lg">
            Connect Wallet
          </Button>
          <SignUpLink>
            Don't have an account? <Link href="/signup">Sign up</Link>
          </SignUpLink>
        </LoginCard>
      </LoginSection>
      <Footer />
    </Main>
  );
}

