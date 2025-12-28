'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { theme } from '@/theme/theme';
import Link from 'next/link';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const ErrorContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[12]} ${theme.spacing[6]};
  text-align: center;
`;

const ErrorContent = styled.div`
  max-width: 600px;
`;

const ErrorCode = styled.div`
  font-size: ${theme.fontSizes['6xl']};
  font-weight: ${theme.fontWeights.bold};
  background: linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.secondary[600]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing[4]};
`;

const ErrorTitle = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const ErrorMessage = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[8]};
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
`;

export default function NotFound() {
  return (
    <Main>
      <Header />
      <ErrorContainer>
        <ErrorContent>
          <ErrorCode>404</ErrorCode>
          <ErrorTitle>Page Not Found</ErrorTitle>
          <ErrorMessage>
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or
            you entered the wrong URL.
          </ErrorMessage>
          <ButtonGroup>
            <Button size="lg" as={Link} href="/">
              Go Home
            </Button>
            <Button size="lg" variant="outline" as={Link} href="/help">
              Get Help
            </Button>
          </ButtonGroup>
        </ErrorContent>
      </ErrorContainer>
      <Footer />
    </Main>
  );
}

