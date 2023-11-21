import React, { useMemo } from 'react';
import {
  Box, Chip, Typography, useTheme, LinearProgress, Tooltip, AvatarGroup, Skeleton,
} from '@mui/material';
import {
  Computer, EqualizerSharp, LocationOn, Person,
} from '@mui/icons-material';
import { Card } from '@/components/Card';
import { SocialIcon } from '@/components/SocialIcon';
import { GridTable } from '@/components/GridTable';
import { useGetProfile } from '@/hooks';
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
interface ITabProfileProps {
  username: string;
}
export function TabProfile({ username }:ITabProfileProps) {
  const { data, loading } = useGetProfile({
    variables: {
      input: {
        username,
      },
    },
  });

  const user = useMemo(() => data?.user, [data]);
  return (
    <Container>
      <Sidebar>
        <Card title="informações">
          {loading ? (<Skeleton variant="rectangular" width="100%" height={200} />) : (
            <>
              <InFormationRow label="Nome:" value={user?.name} icon={<Person />} />
              <InFormationRow label="Atuação:" value={user?.role} icon={<Computer />} />
              <InFormationRow label="Senioridade:" value={user?.seniority} icon={<EqualizerSharp />} />
              <InFormationRow label="Localização:" value={`${user?.city}/${user?.state}`} icon={<LocationOn />} />
            </>
          )}
        </Card>

        <Card title="tecnologias" direction="row">
          {loading ? (<Skeleton variant="rectangular" width="100%" height={200} />) : (
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
            }}
            >
              {user?.technologies.map((tech) => (
                <Chip label={tech.name} key={tech.id} />
              ))}
            </Box>
          )}
        </Card>

        <Card title="social" direction="row">
          {loading ? (<Skeleton variant="rectangular" width="100%" height={50} />) : (
            <AvatarGroup max={6}>
              {user?.contacts[0].linkedin_url && (
              <SocialIcon
                type="linkedin_url"
                url={user?.contacts[0].linkedin_url}
              />
              )}
              {user?.contacts[0].github_url && (
              <SocialIcon
                type="github_url"
                url={user?.contacts[0].github_url}
              />
              )}
              {user?.contacts[0].twitter_url && (
              <SocialIcon
                type="twitter_url"
                url={user?.contacts[0].twitter_url}
              />
              )}
              {user?.contacts[0].instagram_url && (
              <SocialIcon
                type="instagram_url"
                url={user?.contacts[0].instagram_url}
              />
              )}
              {user?.contacts[0].personal_website && (
              <SocialIcon
                type="personal_website"
                url={user?.contacts[0].personal_website}
              />
              )}
              {user?.contacts[0].cell_phone && (
              <SocialIcon
                type="cell_phone"
                url={user?.contacts[0].cell_phone}
              />
              )}
            </AvatarGroup>
          )}

        </Card>
      </Sidebar>
      <Content>
        <Card title="sobre">
          {loading ? (<Skeleton variant="text" width="100%" height={80} />) : (
            <Typography variant="body1">
              {user?.bio}
            </Typography>
          )}
        </Card>

        <Card
          title="Cursos"
          sx={{
            flex: 1,
          }}
        >
          {loading ? (<Skeleton width="100%" height={400} />) : (
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
              rows={user?.courses?.map((course) => ({
                id: course.id,
                title: course.name,
                school: course.school,
                progress: course.progress,
              })) || []}
            />
          )}

        </Card>
      </Content>
    </Container>
  );
}
