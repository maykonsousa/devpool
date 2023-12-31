'use client';

import React from 'react';
import {
  Box,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Build,
  CodeOff,
  ConnectWithoutContact,
  IntegrationInstructions,
  Person,
  School,
  Share,
  Translate,
} from '@mui/icons-material';
import { useSession } from '@/hooks';
import { PageContainer } from './SettingsPage.styles';
import {
  AccountTab,
  ContactsTab,
  CoursesTab,
  JobsTab,
  ProjectsTab,
  TechsTab,
} from './fragments';
import { LanguagesTab } from './fragments/LanguagesTab';

interface TabPanelProps {
  label: string;
  value: string;
  iconPosition: 'start' | 'end';
  icon: React.ReactElement;
  component: React.ReactNode;
  isVisible?: boolean;
}

const INITIALTAB: TabPanelProps = {
  label: 'Informações da Conta',
  value: 'account',
  iconPosition: 'start',
  isVisible: false,
  icon: <Person />,
  component: <AccountTab />,
};

export function SettingsPage() {
  const [currentTab, setCurrentTab] = React.useState<TabPanelProps>(INITIALTAB);
  const theme = useTheme();
  const { user } = useSession();

  const isDeveloper = !!user && user.type === 'developer';

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const tabs: TabPanelProps[] = [
    {
      label: 'Informações da Conta',
      value: 'account',
      iconPosition: 'start',
      icon: <Person fontSize="large" />,
      component: <AccountTab />,
      isVisible: true,
    },
    {
      label: 'Projetos',
      value: 'projects',
      iconPosition: 'start',
      icon: <IntegrationInstructions fontSize="large" />,
      component: <ProjectsTab />,
      isVisible: isDeveloper,
    },
    {
      label: 'Educação',
      value: 'courses',
      iconPosition: 'start',
      icon: <School fontSize="large" />,
      component: <CoursesTab />,
      isVisible: isDeveloper,
    },
    {
      label: 'Idiomas',
      value: 'languages',
      iconPosition: 'start',
      icon: <Translate fontSize="large" />,
      component: <LanguagesTab />,
      isVisible: isDeveloper,
    },
    {
      label: 'Experiências',
      value: 'jobs',
      iconPosition: 'start',
      icon: <Build fontSize="large" />,
      component: <JobsTab />,
      isVisible: isDeveloper,
    },
    {
      label: 'Tecnologias',
      value: 'techs',
      iconPosition: 'start',
      icon: <CodeOff fontSize="large" />,
      component: <TechsTab />,
      isVisible: isDeveloper,
    },
    {
      label: 'Redes Sociais',
      value: 'socials',
      iconPosition: 'start',
      icon: <ConnectWithoutContact fontSize="large" />,
      component: <ContactsTab />,
      isVisible: true,
    },
  ];

  const handleChangeTab = (value: string) => {
    const newTab = tabs.find((tab) => tab.value === value);
    if (newTab) setCurrentTab(newTab);
  };
  return (
    <PageContainer>
      <Box
        sx={{
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
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: !isMobile ? '300px 1fr' : '70px 1fr',
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
          {tabs.map(
            (tab) =>
              tab.isVisible && (
                <Tab
                  key={tab.value}
                  label={!isMobile ? tab.label : ''}
                  value={tab.value}
                  icon={tab.icon}
                  iconPosition="start"
                  sx={{
                    'textTransform': 'none',
                    'fontSize': '1.2rem',
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'flex-start',
                    'width': '100%',
                    'fontWeight': 'bold',
                    '&:hover': {
                      backgroundColor: 'background.paper',
                    },
                  }}
                />
              ),
          )}
        </Tabs>
        <Box
          sx={{
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
