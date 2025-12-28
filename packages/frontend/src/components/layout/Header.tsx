'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useAuthStore } from '@/store/authStore';

const HeaderContainer = styled.header`
  background-color: ${(props) => 
    props.theme.mode === 'dark' 
      ? 'rgba(30, 41, 59, 0.8)' 
      : 'rgba(255, 255, 255, 0.8)'};
  border-bottom: 1px solid ${(props) => 
    props.theme.mode === 'dark' 
      ? 'rgba(51, 65, 85, 0.5)' 
      : 'rgba(222, 226, 230, 0.5)'};
  padding: ${(props) => props.theme.spacing[4]} ${(props) => props.theme.spacing[6]};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: ${(props) => 
    props.theme.mode === 'dark' 
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)' 
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)'};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primary.DEFAULT};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing[2]};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing[6]};
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.text.secondary};
  text-decoration: none;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary.DEFAULT};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing[4]};
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
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <ButtonGroup>
                <ThemeToggle />
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

