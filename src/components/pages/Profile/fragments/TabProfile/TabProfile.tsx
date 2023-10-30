import React from 'react';
import {
  Box, Chip, Typography, useTheme, LinearProgress, Tooltip,
} from '@mui/material';
import {
  Computer, EqualizerSharp, LocationOn, Person,
} from '@mui/icons-material';
import { Card } from '@/components/Card';
import { SocialIcon } from '@/components/SocialIcon';
import { GridTable } from '@/components/GridTable';
import {
  Container, Content, Sidebar,
} from './TabProfile.styles';

interface InfoRowProps {
  icon: React.ReactElement;
  label: string;
  value?: string;
}

interface ICourse {
  title: string;
  description?: string;
  type: 'course' | 'graduate';
  school: string;
  progress?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const courses:ICourse[] = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    type: 'graduate',
    school: 'Faculdade Maurício de Nassau',
    progress: 80,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Sed vitae eros vitae nisl aliquam aliquet.',
  },
  {
    title: 'React Avançado',
    type: 'course',
    school: 'Udemy',
    progress: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Sed vitae eros vitae nisl aliquam aliquet.',
  },

];

function InFormationRow({ label, icon, value }:InfoRowProps) {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      gap: 1,
      alignItems: 'center',
      flexWrap: 'wrap',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 0,
      },
    }}
    >
      <Box sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',

      }}
      >
        {icon}
        <Typography variant="body1" fontWeight={700}>{label}</Typography>
      </Box>
      <Typography variant="body2" fontWeight={400}>{value}</Typography>
    </Box>
  );
}

export function TabProfile() {
  return (
    <Container>
      <Sidebar>
        <Card title="informações">
          <InFormationRow label="Nome:" value="Maykon Sousa" icon={<Person />} />
          <InFormationRow label="Atuação:" value="Front-end" icon={<Computer />} />
          <InFormationRow label="Senioridade:" value="Pleno" icon={<EqualizerSharp />} />
          <InFormationRow label="Localização:" value="João Pessoa/PB" icon={<LocationOn />} />
        </Card>

        <Card title="tecnologias" direction="row">
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
        </Card>

        <Card title="social" direction="row">
          <SocialIcon type="facebook" url="http://facebook.com/maykonsousa" />
          <SocialIcon type="instagram" url="https://www.instagram.com/mykesousa/" />
          <SocialIcon type="linkedin" url="https://www.linkedin.com/in/maykonsousa/" />
          <SocialIcon type="github" url="https://github.com/maykonsousa" />
          <SocialIcon type="whatsapp" url="https://wa.me/5561992943297" />

        </Card>
      </Sidebar>
      <Content>
        <Card title="sobre">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Typography>
        </Card>

        <Card title="Cursos" sx={{ flex: 1 }}>
          <GridTable
            columns={[
              {
                field: 'title',
                headerName: 'Título',
                minWidth: 100,
                flex: 1,
              },
              {
                field: 'school', headerName: 'Instituição', minWidth: 100, flex: 1,
              },
              {
                field: 'progress',
                headerName: 'Progresso',
                minWidth: 50,
                flex: 1,
                renderCell: ({ row }) => (
                  <Tooltip title={`${row.progress}%`}>
                    <LinearProgress
                      sx={{ width: '100%', height: '10px' }}
                      color="primary"
                      variant="determinate"
                      value={row.progress}
                      content="teste"
                    />
                  </Tooltip>
                ),
              },
            ]}
            rows={courses.map((course) => ({
              id: course.title,
              title: course.title,
              school: course.school,
              progress: course.progress,
            }))}
          />

        </Card>
      </Content>
    </Container>
  );
}
