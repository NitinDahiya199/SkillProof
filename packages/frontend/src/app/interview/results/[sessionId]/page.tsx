'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { VerificationStatus } from '@/components/blockchain/VerificationStatus';
import { WalletConnect } from '@/components/blockchain/WalletConnect';
import { Modal } from '@/components/ui/Modal';
import { theme } from '@/theme/theme';
import Link from 'next/link';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const ResultsContainer = styled.div`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: ${theme.spacing[12]} ${theme.spacing[6]};
`;

const ResultsCard = styled(Card)`
  text-align: center;
  padding: ${theme.spacing[12]};
  margin-bottom: ${theme.spacing[8]};
`;

const ScoreDisplay = styled.div<{ score: number }>`
  font-size: ${theme.fontSizes['6xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${(props) => {
    if (props.score >= 90) return theme.colors.success.DEFAULT;
    if (props.score >= 70) return theme.colors.secondary.DEFAULT;
    if (props.score >= 50) return theme.colors.warning.DEFAULT;
    return theme.colors.error.DEFAULT;
  }};
  margin: ${theme.spacing[6]} 0;
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const Message = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[8]};
`;

const ScoreBreakdown = styled(Card)`
  margin-bottom: ${theme.spacing[6]};
`;

const BreakdownTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
`;

const BreakdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing[4]};
`;

const BreakdownItem = styled.div`
  text-align: center;
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.gray[50]};
  border-radius: ${theme.borderRadius.lg};
`;

const BreakdownLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[2]};
`;

const BreakdownValue = styled.div`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
`;

export default function InterviewResultsPage() {
  const params = useParams();
  const router = useRouter();
  const sessionId = params?.sessionId as string;

  const [results, setResults] = useState<any>(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showMintModal, setShowMintModal] = useState(false);

  useEffect(() => {
    // TODO: Fetch results from API
    setResults({
      skill: 'React',
      score: 78,
      breakdown: {
        testCases: 32,
        codeQuality: 24,
        complexity: 15,
        bestPractices: 7,
      },
      eligibleForNFT: true,
    });
  }, [sessionId]);

  const handleMintNFT = () => {
    if (!walletConnected) {
      setShowMintModal(true);
      return;
    }
    // TODO: Implement NFT minting
    console.log('Minting NFT...');
  };

  if (!results) {
    return (
      <Main>
        <Header />
        <ResultsContainer>
          <div style={{ textAlign: 'center', padding: theme.spacing[12] }}>
            Loading results...
          </div>
        </ResultsContainer>
        <Footer />
      </Main>
    );
  }

  const passed = results.score >= 70;

  return (
    <Main>
      <Header />
      <ResultsContainer>
        <ResultsCard>
          <Title>Interview Complete!</Title>
          <ScoreDisplay score={results.score}>{results.score}/100</ScoreDisplay>
          <Message>
            {passed
              ? `Congratulations! You scored ${results.score}/100. You're eligible to mint a SkillProof NFT.`
              : `You scored ${results.score}/100. You need at least 70 to mint an NFT. You can retry the interview.`}
          </Message>
          <div style={{ display: 'flex', gap: theme.spacing[4], justifyContent: 'center' }}>
            {passed && (
              <Button size="lg" onClick={handleMintNFT}>
                Mint SkillProof NFT
              </Button>
            )}
            <Button size="lg" variant="outline" as={Link} href="/dashboard/candidate">
              Back to Dashboard
            </Button>
          </div>
        </ResultsCard>

        <ScoreBreakdown>
          <BreakdownTitle>Score Breakdown</BreakdownTitle>
          <BreakdownGrid>
            <BreakdownItem>
              <BreakdownLabel>Test Cases</BreakdownLabel>
              <BreakdownValue>{results.breakdown.testCases}/40</BreakdownValue>
            </BreakdownItem>
            <BreakdownItem>
              <BreakdownLabel>Code Quality</BreakdownLabel>
              <BreakdownValue>{results.breakdown.codeQuality}/30</BreakdownValue>
            </BreakdownItem>
            <BreakdownItem>
              <BreakdownLabel>Complexity</BreakdownLabel>
              <BreakdownValue>{results.breakdown.complexity}/20</BreakdownValue>
            </BreakdownItem>
            <BreakdownItem>
              <BreakdownLabel>Best Practices</BreakdownLabel>
              <BreakdownValue>{results.breakdown.bestPractices}/10</BreakdownValue>
            </BreakdownItem>
          </BreakdownGrid>
        </ScoreBreakdown>

        {passed && (
          <VerificationStatus
            skill={results.skill}
            score={results.score}
            onVerify={handleMintNFT}
          />
        )}
      </ResultsContainer>

      <Modal
        isOpen={showMintModal}
        onClose={() => setShowMintModal(false)}
        title="Connect Wallet to Mint NFT"
        size="md"
      >
        <div style={{ marginBottom: theme.spacing[6] }}>
          <p style={{ color: theme.colors.gray[600], marginBottom: theme.spacing[4] }}>
            You need to connect your wallet to mint a SkillProof NFT. The NFT will be stored on
            the blockchain and can be verified by employers.
          </p>
          <WalletConnect
            onConnect={(wallet, address) => {
              setWalletConnected(true);
              setShowMintModal(false);
              console.log('Wallet connected:', wallet, address);
            }}
          />
        </div>
      </Modal>

      <Footer />
    </Main>
  );
}

