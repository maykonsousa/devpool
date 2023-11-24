/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
  TabScrollButton,
} from '@mui/material';
import { Build, IntegrationInstructions, Person } from '@mui/icons-material';
import {
  Cover,
  Header,
  TabExperiences,
  TabProfile,
  TabProjects,
} from './fragments';
import { ProfilePageContainer } from './ProfilePage.styles';

interface TabPanelProps {
  label: string;
  value: string;
  iconPosition: 'start' | 'end';
  icon: React.ReactElement;
  component: React.ReactNode;
}

interface ProfilePageProps {
  profileName: string;
}

export function ProfilePage({ profileName }: ProfilePageProps) {
  const INITIALTAB: TabPanelProps = {
    label: 'Perfil',
    value: 'perfil',
    iconPosition: 'start',
    icon: <Person />,
    component: <TabProfile username={profileName} />,
  };
  const [currentTab, setCurrentTab] = React.useState<TabPanelProps>(INITIALTAB);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const tabs: TabPanelProps[] = [
    {
      label: 'Perfil',
      value: 'perfil',
      iconPosition: 'start',
      icon: <Person />,
      component: <TabProfile username={profileName} />,
    },
    {
      label: 'Projetos',
      value: 'projetos',
      iconPosition: 'start',
      icon: <IntegrationInstructions />,
      component: <TabProjects username={profileName} />,
    },
    {
      label: 'Experiência',
      value: 'experiencia',
      iconPosition: 'start',
      icon: <Build />,
      component: <TabExperiences />,
    },
    {
      label: 'Contatos',
      value: 'contatos',
      iconPosition: 'start',
      icon: <Person />,
      component: <div>Contatos</div>,
    },
  ];

  const handleChangeTab = (value: string) => {
    const newTab = tabs.find((tab) => tab.value === value);
    if (newTab) setCurrentTab(newTab);
  };

  const handleScrollButtonClick = (direction: string) => {
    const indexCurrentTab = tabs.findIndex(
      (tab) => tab.value === currentTab.value,
    );
    if (direction === 'right') {
      if (indexCurrentTab + 1 < tabs.length) {
        const newTab = tabs[indexCurrentTab + 1];
        setCurrentTab(newTab);
      }
    } else if (direction === 'left') {
      if (indexCurrentTab - 1 >= 0) {
        const newTab = tabs[indexCurrentTab - 1];
        setCurrentTab(newTab);
      }
    }
  };

  return (
    <ProfilePageContainer>
      <Cover />
      <Header username={profileName} />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <Tabs
          onChange={(event, value) => handleChangeTab(value)}
          scrollButtons
          allowScrollButtonsMobile
          // eslint-disable-next-line react/no-unstable-nested-components
          ScrollButtonComponent={(props) => (
            <TabScrollButton
              {...props}
              onClick={() => handleScrollButtonClick(props.direction)}
            />
          )}
          variant={isMobile ? 'scrollable' : 'standard'}
          value={currentTab.value}
          sx={{
            display: 'flex',
            width: '100%',
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
              icon={tab.icon}
              sx={{
                [theme.breakpoints.down('md')]: {
                  width: '100%',
                },
              }}
              iconPosition={isMobile ? 'top' : 'start'}
            />
          ))}
        </Tabs>
      </Box>
      {currentTab.component}
    </ProfilePageContainer>
  );
}
