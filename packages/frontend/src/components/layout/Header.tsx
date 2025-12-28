'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '@/theme/theme';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/authStore';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${theme.shadows.sm};
`;

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary[600]};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[6]};
`;

const NavLink = styled(Link)`
  color: ${theme.colors.gray[700]};
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary[600]};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
`;

export const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <HeaderContainer>
      <Nav>
        <Logo href="/">SkillProof</Logo>
        <NavLinks>
          {isAuthenticated ? (
            <>
              <NavLink href={user?.role === 'candidate' ? '/dashboard/candidate' : '/dashboard/employer'}>
                Dashboard
              </NavLink>
              <NavLink href="/profile">Profile</NavLink>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <ButtonGroup>
                <Button variant="ghost" size="sm" as={Link} href="/login">
                  Login
                </Button>
                <Button size="sm" as={Link} href="/signup">
                  Get Started
                </Button>
              </ButtonGroup>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

