import styled from 'styled-components';
import { theme } from '@/theme/theme';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface VerificationStatusProps {
  skill: string;
  score: number;
  tokenId?: string;
  transactionHash?: string;
  network?: string;
  verifiedAt?: string;
  onVerify?: () => void;
}

const StatusCard = styled(Card)`
  padding: ${theme.spacing[6]};
`;

const StatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: ${theme.spacing[6]};
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const Score = styled.div<{ score: number }>`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${(props) => {
    if (props.score >= 90) return theme.colors.success.DEFAULT;
    if (props.score >= 70) return theme.colors.secondary.DEFAULT;
    if (props.score >= 50) return theme.colors.warning.DEFAULT;
    return theme.colors.error.DEFAULT;
  }};
`;

const StatusDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  padding-top: ${theme.spacing[6]};
  border-top: 1px solid ${theme.colors.gray[200]};
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSizes.sm};
`;

const DetailLabel = styled.span`
  color: ${theme.colors.gray[600]};
`;

const DetailValue = styled.span`
  color: ${theme.colors.gray[900]};
  font-weight: ${theme.fontWeights.medium};
`;

const Link = styled.a`
  color: ${theme.colors.secondary.DEFAULT};
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};

  &:hover {
    text-decoration: underline;
  }
`;

export const VerificationStatus: React.FC<VerificationStatusProps> = ({
  skill,
  score,
  tokenId,
  transactionHash,
  network = 'Polygon',
  verifiedAt,
  onVerify,
}) => {
  const isVerified = !!tokenId;
  const explorerUrl = network === 'Polygon' 
    ? 'https://polygonscan.com' 
    : 'https://basescan.org';

  return (
    <StatusCard>
      <StatusHeader>
        <SkillInfo>
          <SkillName>{skill}</SkillName>
          <Score score={score}>{score}/100</Score>
        </SkillInfo>
        {isVerified ? (
          <Badge variant="success">Verified</Badge>
        ) : (
          <Badge variant="gray">Not Verified</Badge>
        )}
      </StatusHeader>

      <StatusDetails>
        {isVerified ? (
          <>
            <DetailRow>
              <DetailLabel>Status</DetailLabel>
              <DetailValue>✓ Verified on Blockchain</DetailValue>
            </DetailRow>
            {tokenId && (
              <DetailRow>
                <DetailLabel>Token ID</DetailLabel>
                <DetailValue>#{tokenId}</DetailValue>
              </DetailRow>
            )}
            {transactionHash && (
              <DetailRow>
                <DetailLabel>Transaction</DetailLabel>
                <DetailValue>
                  <Link
                    href={`${explorerUrl}/tx/${transactionHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Explorer
                  </Link>
                </DetailValue>
              </DetailRow>
            )}
            {network && (
              <DetailRow>
                <DetailLabel>Network</DetailLabel>
                <DetailValue>{network}</DetailValue>
              </DetailRow>
            )}
            {verifiedAt && (
              <DetailRow>
                <DetailLabel>Verified At</DetailLabel>
                <DetailValue>{new Date(verifiedAt).toLocaleString()}</DetailValue>
              </DetailRow>
            )}
          </>
        ) : (
          <>
            <DetailRow>
              <DetailLabel>Status</DetailLabel>
              <DetailValue>Not verified on blockchain</DetailValue>
            </DetailRow>
            {score >= 70 && (
              <div style={{ marginTop: theme.spacing[4] }}>
                <Button fullWidth onClick={onVerify}>
                  Mint SkillProof NFT
                </Button>
              </div>
            )}
          </>
        )}
      </StatusDetails>
    </StatusCard>
  );
};

