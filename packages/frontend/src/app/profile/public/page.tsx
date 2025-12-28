'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VerifiedIcon } from '@/components/ui/svgs';
import { theme } from '@/theme/theme';
import { useState } from 'react';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, ${theme.colors.secondary[50]}, ${theme.colors.white});
`;

const ProfileContainer = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: ${theme.spacing[12]} ${theme.spacing[6]};
`;

const ProfileCard = styled(Card)`
  text-align: center;
  padding: ${theme.spacing[12]};
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${theme.gradients.primary};
  margin: 0 auto ${theme.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes['4xl']};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
`;

const Name = styled.h1`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const Location = styled.div`
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[6]};
`;

const Bio = styled.p`
  color: ${theme.colors.gray[700]};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto ${theme.spacing[8]};
`;

const SkillsSection = styled.div`
  margin-top: ${theme.spacing[8]};
`;

const SkillsTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacing[6]};
`;

const SkillCard = styled(Card)`
  text-align: left;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[4]};
`;

const SkillName = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
`;

const SkillScore = styled.div<{ score: number }>`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${(props) => {
    if (props.score >= 90) return theme.colors.success.DEFAULT;
    if (props.score >= 70) return theme.colors.secondary.DEFAULT;
    if (props.score >= 50) return theme.colors.warning.DEFAULT;
    return theme.colors.error.DEFAULT;
  }};
`;

const VerifiedBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  color: ${theme.colors.secondary.DEFAULT};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  margin-top: ${theme.spacing[2]};
  
  svg {
    flex-shrink: 0;
  }
`;

const ShareSection = styled.div`
  margin-top: ${theme.spacing[8]};
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[4]};
`;

export default function PublicProfilePage() {
  // Mock data - will be replaced with actual data
  const profile = {
    name: 'John Doe',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer with 5+ years of experience building scalable web applications.',
    skills: [
      { skill: 'React', score: 85, verifiedAt: '2024-01-15', nftTokenId: '123' },
      { skill: 'Node.js', score: 78, verifiedAt: '2024-01-20', nftTokenId: '124' },
      { skill: 'TypeScript', score: 82, verifiedAt: '2024-02-01', nftTokenId: '125' },
    ],
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.name} - SkillProof Profile`,
          text: `Check out ${profile.name}'s verified skills on SkillProof`,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Main>
      <Header />
      <ProfileContainer>
        <ProfileCard>
          <Avatar>{profile.name.charAt(0)}</Avatar>
          <Name>{profile.name}</Name>
          <Location>{profile.location}</Location>
          <Bio>{profile.bio}</Bio>
          <ShareSection>
            <Button variant="outline" onClick={handleShare}>
              Share Profile
            </Button>
            <Button variant="outline">View on Blockchain</Button>
          </ShareSection>
        </ProfileCard>

        <SkillsSection>
          <SkillsTitle>Verified Skills</SkillsTitle>
          <SkillsGrid>
            {profile.skills.map((skill, idx) => (
              <SkillCard key={idx}>
                <SkillHeader>
                  <SkillName>{skill.skill}</SkillName>
                  <SkillScore score={skill.score}>{skill.score}/100</SkillScore>
                </SkillHeader>
                <div style={{ fontSize: theme.fontSizes.sm, color: theme.colors.gray[600] }}>
                  Verified: {new Date(skill.verifiedAt).toLocaleDateString()}
                </div>
                {skill.nftTokenId && (
                  <VerifiedBadge>
                    <VerifiedIcon width={16} height={16} color="currentColor" />
                    Verified on Blockchain
                  </VerifiedBadge>
                )}
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </ProfileContainer>
      <Footer />
    </Main>
  );
}

