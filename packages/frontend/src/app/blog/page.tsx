'use client';

import styled from 'styled-components';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { theme } from '@/theme/theme';
import Link from 'next/link';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray[50]};
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary[600]} 0%, ${theme.colors.secondary[600]} 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: ${theme.fontSizes['5xl']};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing[6]};
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
`;

const BlogSection = styled.section`
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
`;

const BlogCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${theme.colors.primary[400]}, ${theme.colors.secondary[400]});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes['4xl']};
`;

const BlogContent = styled.div`
  padding: ${theme.spacing[6]};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BlogMeta = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[4]};
  flex-wrap: wrap;
`;

const BlogTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
`;

const BlogExcerpt = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
  margin-bottom: ${theme.spacing[4]};
  flex: 1;
`;

const BlogDate = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray[500]};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing[16]};
  color: ${theme.colors.gray[600]};
`;

export default function BlogPage() {
  // Mock blog posts - will be replaced with actual content
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Remote Hiring: Why Skill Verification Matters',
      excerpt:
        'Explore how AI and blockchain are revolutionizing remote hiring and why verifiable skills are becoming essential.',
      category: 'Industry',
      date: '2024-01-15',
      image: '🚀',
    },
    {
      id: 2,
      title: 'How SkillProof Uses AI to Assess Developer Skills',
      description:
        'A deep dive into our AI-powered interview system and how it objectively evaluates coding skills.',
      category: 'Technology',
      date: '2024-01-10',
      image: '🤖',
    },
    {
      id: 3,
      title: 'Blockchain Credentials: The New Standard for Trust',
      excerpt:
        'Learn how blockchain-based credentials create tamper-proof proof of skills that employers can trust.',
      category: 'Blockchain',
      date: '2024-01-05',
      image: '⛓️',
    },
  ];

  return (
    <Main>
      <Header />
      <HeroSection>
        <HeroTitle>SkillProof Blog</HeroTitle>
        <HeroSubtitle>
          Insights on remote hiring, AI assessment, and blockchain technology
        </HeroSubtitle>
      </HeroSection>

      <BlogSection>
        {blogPosts.length === 0 ? (
          <EmptyState>
            <h2 style={{ fontSize: theme.fontSizes['2xl'], marginBottom: theme.spacing[4] }}>
              Coming Soon
            </h2>
            <p>We're working on great content. Check back soon!</p>
          </EmptyState>
        ) : (
          <BlogGrid>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} as={Link} href={`/blog/${post.id}`}>
                <BlogImage>{post.image}</BlogImage>
                <BlogContent>
                  <BlogMeta>
                    <Badge variant="primary">{post.category}</Badge>
                    <BlogDate>{new Date(post.date).toLocaleDateString()}</BlogDate>
                  </BlogMeta>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        )}
      </BlogSection>
      <Footer />
    </Main>
  );
}

