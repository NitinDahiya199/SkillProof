'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { theme } from '@/theme/theme';
import { useState } from 'react';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const ProfileContainer = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: ${theme.spacing[8]} ${theme.spacing[6]};
`;

const ProfileHeader = styled.div`
  margin-bottom: ${theme.spacing[8]};
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const Subtitle = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSizes.lg};
`;

const ProfileCompletion = styled(Card)`
  margin-bottom: ${theme.spacing[8]};
`;

const CompletionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[4]};
`;

const CompletionTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
`;

const CompletionPercentage = styled.div`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary[600]};
`;

const Section = styled(Card)`
  margin-bottom: ${theme.spacing[6]};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[6]};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[6]};
`;

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
    linkedinUrl: '',
    portfolioUrl: '',
    githubUsername: '',
  });

  const profileCompletion = 65; // Mock data

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update
    console.log('Update profile:', profileData);
  };

  return (
    <Main>
      <Header />
      <ProfileContainer>
        <ProfileHeader>
          <Title>Profile Settings</Title>
          <Subtitle>Manage your profile information and preferences</Subtitle>
        </ProfileHeader>

        <ProfileCompletion>
          <CompletionHeader>
            <CompletionTitle>Profile Completion</CompletionTitle>
            <CompletionPercentage>{profileCompletion}%</CompletionPercentage>
          </CompletionHeader>
          <ProgressBar value={profileCompletion} showLabel={false} />
        </ProfileCompletion>

        <form onSubmit={handleSubmit}>
          <Section>
            <SectionHeader>
              <SectionTitle>Basic Information</SectionTitle>
            </SectionHeader>
            <FormGrid>
              <Input
                label="Full Name"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                fullWidth
              />
              <Input
                label="Email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                fullWidth
              />
              <Input
                label="Location"
                value={profileData.location}
                onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                placeholder="City, Country"
                fullWidth
              />
            </FormGrid>
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>About</SectionTitle>
            </SectionHeader>
            <Input
              label="Bio"
              value={profileData.bio}
              onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
              placeholder="Tell us about yourself..."
              fullWidth
            />
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>Links</SectionTitle>
            </SectionHeader>
            <FormGrid>
              <Input
                label="LinkedIn URL"
                type="url"
                value={profileData.linkedinUrl}
                onChange={(e) => setProfileData({ ...profileData, linkedinUrl: e.target.value })}
                placeholder="https://linkedin.com/in/yourprofile"
                fullWidth
              />
              <Input
                label="Portfolio URL"
                type="url"
                value={profileData.portfolioUrl}
                onChange={(e) => setProfileData({ ...profileData, portfolioUrl: e.target.value })}
                placeholder="https://yourportfolio.com"
                fullWidth
              />
              <Input
                label="GitHub Username"
                value={profileData.githubUsername}
                onChange={(e) => setProfileData({ ...profileData, githubUsername: e.target.value })}
                placeholder="yourusername"
                fullWidth
              />
            </FormGrid>
          </Section>

          <div style={{ display: 'flex', gap: theme.spacing[4], justifyContent: 'flex-end' }}>
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </ProfileContainer>
      <Footer />
    </Main>
  );
}

