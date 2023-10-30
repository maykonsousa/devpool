import React from 'react';
import {
  Box, CardContent, CardHeader, Chip, Typography, Link, useTheme,
} from '@mui/material';
import {
  Computer, EqualizerSharp, Facebook, GitHub, Instagram, LinkedIn, LocationOn, Person,
} from '@mui/icons-material';
import {
  AboutCard, Container, Content, Sidebar, TechsCard,
} from './TabProfile.styles';

interface InfoRowProps {
  icon: React.ReactElement;
  label: string;
  value?: string;
}

interface SocialIconProps {
  icon: React.ReactElement;
  link: string;
}

function InFormationRow({ label, icon, value }:InfoRowProps) {
  return (
    <Box sx={{
      display: 'flex',
      gap: 1,
      alignItems: 'center',

    }}
    >
      {icon}
      <Typography variant="body1" fontWeight={700}>{label}</Typography>
      <Typography variant="body2" fontWeight={400}>{value}</Typography>
    </Box>
  );
}

function SocialIcon({ icon, link }:SocialIconProps) {
  const theme = useTheme();
  return (
    <Link
      href={link}
      sx={{
        color: 'text.primary',
        border: `2px solid ${theme.palette.text.primary}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        ':hover': {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.secondary.main,
        },

      }}
    >
      {icon}
    </Link>
  );
}

export function TabProfile() {
  return (
    <Container>
      <Sidebar>
        <AboutCard>
          <CardHeader title="Informações" />
          <CardContent sx={{
            gap: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
          >
            <InFormationRow label="Nome:" value="Maykon Sousa" icon={<Person />} />
            <InFormationRow label="Atuação:" value="Front-end" icon={<Computer />} />
            <InFormationRow label="Senioridade:" value="Pleno" icon={<EqualizerSharp />} />
            <InFormationRow label="Localização:" value="João Pessoa/PB" icon={<LocationOn />} />

          </CardContent>

        </AboutCard>

        <TechsCard>
          <CardHeader title="Tecnologias" />
          <CardContent sx={{
            gap: 1,
            display: 'flex',
            flexWrap: 'wrap',
          }}
          >
            <Chip label="React" />
            <Chip label="Next" />
            <Chip label="Node" />
            <Chip label="Material-ui" />
            <Chip label="AWS" />
            <Chip label="Typescript" />
            <Chip label="Tailwind" />
            <Chip label="Jira" />
            <Chip label="Jenkings" />
            <Chip label="Postgress" />
          </CardContent>
        </TechsCard>

        <TechsCard>
          <CardHeader title="Social" />
          <CardContent sx={{
            gap: 1,
            display: 'flex',
            flexWrap: 'wrap',
          }}
          >
            <SocialIcon link="https://www.facebook.com/maykon.sousa.5" icon={<Facebook />} />
            <SocialIcon link="https://www.instagram.com/maykon_sousa/" icon={<Instagram />} />
            <SocialIcon link="https://www.linkedin.com/in/maykon-sousa-9a3a5b1a3/" icon={<LinkedIn />} />
            <SocialIcon link="http" icon={<GitHub />} />
          </CardContent>

        </TechsCard>
      </Sidebar>
      <Content>
        <TechsCard>
          <CardHeader title="Sobre" />
          <CardContent>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </CardContent>
        </TechsCard>

        <TechsCard>
          <CardHeader title="Cursos" />
          <CardContent>
            <Typography variant="body1">
              Aqui vai uma tabela com os cursos que eu o dev fez
            </Typography>
          </CardContent>
        </TechsCard>
      </Content>
    </Container>
  );
}
