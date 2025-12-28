'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/theme/theme';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

const TabsContainer = styled.div`
  width: 100%;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid ${theme.colors.gray[200]};
  gap: ${theme.spacing[2]};
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  background: none;
  border: none;
  border-bottom: 3px solid
    ${(props) => (props.active ? theme.colors.secondary.DEFAULT : 'transparent')};
  color: ${(props) => (props.active ? theme.colors.secondary.DEFAULT : theme.colors.gray[500])};
  font-weight: ${(props) => (props.active ? theme.fontWeights.semibold : theme.fontWeights.medium)};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: ${theme.fontSizes.base};

  &:hover {
    color: ${theme.colors.secondary.DEFAULT};
    background-color: ${theme.colors.secondary[50]};
  }
`;

const TabContent = styled.div`
  padding: ${theme.spacing[6]} 0;
`;

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>
      <TabContent>{activeTabContent}</TabContent>
    </TabsContainer>
  );
};

