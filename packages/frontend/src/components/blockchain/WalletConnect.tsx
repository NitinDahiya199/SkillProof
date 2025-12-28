'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/theme/theme';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

const WalletOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const WalletOption = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[4]};
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    border-color: ${theme.colors.primary[500]};
    background-color: ${theme.colors.primary[50]};
  }
`;

const WalletIcon = styled.div`
  font-size: ${theme.fontSizes['2xl']};
`;

const WalletInfo = styled.div`
  flex: 1;
`;

const WalletName = styled.div`
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[1]};
`;

const WalletDescription = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray[600]};
`;

interface WalletConnectProps {
  onConnect?: (wallet: string, address: string) => void;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ onConnect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect using MetaMask wallet',
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: '🔗',
      description: 'Connect using WalletConnect',
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: '💼',
      description: 'Connect using Coinbase Wallet',
    },
  ];

  const handleConnect = async (walletId: string) => {
    setConnecting(true);
    try {
      // TODO: Implement actual wallet connection
      // This is a placeholder
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });
        const address = accounts[0];
        onConnect?.(walletId, address);
        setIsOpen(false);
      } else {
        alert(`${walletId} not found. Please install the extension.`);
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
      alert('Failed to connect wallet');
    } finally {
      setConnecting(false);
    }
  };

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Connect Wallet
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Connect Wallet"
        size="sm"
      >
        <WalletOptions>
          {wallets.map((wallet) => (
            <WalletOption
              key={wallet.id}
              onClick={() => handleConnect(wallet.id)}
              disabled={connecting}
            >
              <WalletIcon>{wallet.icon}</WalletIcon>
              <WalletInfo>
                <WalletName>{wallet.name}</WalletName>
                <WalletDescription>{wallet.description}</WalletDescription>
              </WalletInfo>
            </WalletOption>
          ))}
        </WalletOptions>
        {connecting && (
          <div style={{ textAlign: 'center', marginTop: theme.spacing[4], color: theme.colors.gray[600] }}>
            Connecting...
          </div>
        )}
      </Modal>
    </>
  );
};

