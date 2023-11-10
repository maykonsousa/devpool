'use client';

import React from 'react';
import {
  Box, IconButton, Tab, Tabs, Typography,
} from '@mui/material';
import {
  Build, CodeOff, ConnectWithoutContact, IntegrationInstructions, Person, School, Share,
} from '@mui/icons-material';
import { PageContainer } from './MyProfilePage.styles';
import { AccountTab, ProjectsTab } from './fragments';

interface TabPanelProps {
  label: string;
  value: string;
  iconPosition: 'start' | 'end';
  icon: React.ReactElement;
  component: React.ReactNode;
}

const INITIALTAB:TabPanelProps = {
  label: 'Informações da Conta',
  value: 'account',
  iconPosition: 'start',
  icon: <Person />,
  component: <AccountTab />,
};

export function MyProfilePage() {
  const [currentTab, setCurrentTab] = React.useState<TabPanelProps>(INITIALTAB);

  const tabs:TabPanelProps[] = [
    {
      label: 'Informações da Conta',
      value: 'account',
      iconPosition: 'start',
      icon: <Person fontSize="large" />,
      component: <AccountTab />,
    },
    {
      label: 'Projetos',
      value: 'projects',
      iconPosition: 'start',
      icon: <IntegrationInstructions fontSize="large" />,
      component: <ProjectsTab />,
    },
    {
      label: 'Educação',
      value: 'courses',
      iconPosition: 'start',
      icon: <School fontSize="large" />,
      component: <ProjectsTab />,
    },
    {
      label: 'Experiências',
      value: 'jobs',
      iconPosition: 'start',
      icon: <Build fontSize="large" />,
      component: <ProjectsTab />,
    },
    {
      label: 'Tecnologias',
      value: 'techs',
      iconPosition: 'start',
      icon: <CodeOff fontSize="large" />,
      component: <ProjectsTab />,
    },
    {
      label: 'Redes Socias',
      value: 'socials',
      iconPosition: 'start',
      icon: <ConnectWithoutContact fontSize="large" />,
      component: <ProjectsTab />,
    },
  ];

  const handleChangeTab = (value:string) => {
    const newTab = tabs.find((tab) => tab.value === value);
    if (newTab) setCurrentTab(newTab);
  };
  return (
    <PageContainer>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '1rem',
        paddingBottom: '2rem',
      }}
      >
        <Typography variant="h4">Meu Perfil</Typography>
        <Box>
          <IconButton>
            <Share />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        flex: 1,
        gap: '1rem',
      }}
      >
        <Tabs
          onChange={(e, value) => handleChangeTab(value)}
          orientation="vertical"
          value={currentTab.value}
          sx={{ width: '100%', borderRight: 2, borderColor: 'divider' }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
              icon={tab.icon}
              iconPosition="start"
              sx={{
                textTransform: 'none',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'background.paper',

                },
              }}
            />
          ))}
        </Tabs>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
        >
          {currentTab.component}
        </Box>
      </Box>

    </PageContainer>
  );
}
