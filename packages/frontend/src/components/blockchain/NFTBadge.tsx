import styled from 'styled-components';
import { theme } from '@/theme/theme';
import { Badge } from '@/components/ui/Badge';
import { BlockchainIcon } from '@/components/ui/svgs';

interface NFTBadgeProps {
  tokenId?: string;
  verified: boolean;
  network?: string;
  onClick?: () => void;
}

const BadgeContainer = styled.div<{ verified: boolean; clickable: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  background: ${(props) =>
    props.verified
      ? `linear-gradient(135deg, ${theme.colors.blockchain[100]}, ${theme.colors.secondary[100]})`
      : theme.colors.lightGray};
  border: 2px solid
    ${(props) => (props.verified ? theme.colors.blockchain.DEFAULT : theme.colors.mediumGray)};
  border-radius: ${theme.borderRadius.full};
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  transition: all 0.2s ease;

  ${(props) =>
    props.clickable &&
    `
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  `}
`;

const Icon = styled.span`
  font-size: ${theme.fontSizes.lg};
`;

const Text = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
`;

export const NFTBadge: React.FC<NFTBadgeProps> = ({
  tokenId,
  verified,
  network = 'Polygon',
  onClick,
}) => {
  if (!verified) {
    return (
      <Badge variant="gray">
        Not Verified
      </Badge>
    );
  }

  return (
    <BadgeContainer verified={verified} clickable={!!onClick} onClick={onClick}>
      <Icon>
        <BlockchainIcon width={16} height={16} color="currentColor" />
      </Icon>
      <Text>Verified on {network}</Text>
      {tokenId && (
        <Text style={{ color: theme.colors.gray[600], fontSize: theme.fontSizes.xs }}>
          #{tokenId}
        </Text>
      )}
    </BadgeContainer>
  );
};

