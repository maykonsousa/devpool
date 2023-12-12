import React, { useMemo } from 'react';
import {
  Box,
  Chip,
  Typography,
  useTheme,
  AvatarGroup,
  Skeleton,
} from '@mui/material';
import {
  Computer,
  EqualizerSharp,
  LocationOn,
  Person,
} from '@mui/icons-material';
import { Card } from '@/components/Card';
import { SocialIcon } from '@/components/SocialIcon';
import { useGetProfile } from '@/hooks';
import { Container, Content, Sidebar } from './TabProfile.styles';
import { CoursesCard } from '../CoursesCard/CoursesCard';

interface InfoRowProps {
  icon: React.ReactElement;
  label: string;
  value?: string;
}

function InFormationRow({ label, icon, value }: InfoRowProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
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
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        {icon}
        <Typography variant="body1" fontWeight={700}>
          {label}
        </Typography>
      </Box>
      <Typography variant="body2" fontWeight={400}>
        {value}
      </Typography>
    </Box>
  );
}
interface ITabProfileProps {
  username: string;
}
export function TabProfile({ username }: ITabProfileProps) {
  const { data, loading } = useGetProfile({
    variables: {
      input: {
        username,
      },
    },
  });

  const user = useMemo(() => data?.user, [data]);
  const levelEnum = {
    A1: 'Básico',
    A2: 'Básico',
    B1: 'Intermediário',
    B2: 'Intermediário',
    C1: 'Avançado',
    C2: 'Avançado',
  };
  return (
    <Container>
      <Sidebar>
        <Card title="informações">
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={200} />
          ) : (
            <>
              <InFormationRow
                label="Nome:"
                value={user?.name}
                icon={<Person />}
              />
              <InFormationRow
                label="Atuação:"
                value={user?.role}
                icon={<Computer />}
              />
              <InFormationRow
                label="Senioridade:"
                value={user?.seniority}
                icon={<EqualizerSharp />}
              />
              <InFormationRow
                label="Localização:"
                value={`${user?.city}/${user?.state}`}
                icon={<LocationOn />}
              />
            </>
          )}
        </Card>

        <Card title="tecnologias" direction="row" sx={{ flex: 1 }}>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={200} />
          ) : (
            <Box
              sx={{
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
        <Card title="idiomas" direction="row">
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={200} />
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {user?.languages.map((lang) => (
                <Typography variant="body2" key={lang.id}>
                  {lang.name} -{' '}
                  {levelEnum[lang.level as keyof typeof levelEnum]}
                </Typography>
              ))}
            </Box>
          )}
        </Card>

        <Card title="social" direction="row">
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={50} />
          ) : (
            <AvatarGroup max={6}>
              {user?.contacts.linkedin_url && (
                <SocialIcon
                  type="linkedin_url"
                  url={user?.contacts.linkedin_url}
                />
              )}
              {user?.contacts.github_url && (
                <SocialIcon type="github_url" url={user?.contacts.github_url} />
              )}
              {user?.contacts.twitter_url && (
                <SocialIcon
                  type="twitter_url"
                  url={user?.contacts.twitter_url}
                />
              )}
              {user?.contacts.instagram_url && (
                <SocialIcon
                  type="instagram_url"
                  url={user?.contacts.instagram_url}
                />
              )}
              {user?.contacts.personal_website && (
                <SocialIcon
                  type="personal_website"
                  url={user?.contacts.personal_website}
                />
              )}
              {user?.contacts.cell_phone && (
                <SocialIcon type="cell_phone" url={user?.contacts.cell_phone} />
              )}
            </AvatarGroup>
          )}
        </Card>
      </Sidebar>
      <Content>
        <Card
          title="sobre"
          sx={{
            height: '100%',
            maxHeight: 300,
            paddingBottom: 2,
          }}
        >
          {loading ? (
            <Skeleton variant="text" width="100%" height={80} />
          ) : (
            <Typography variant="body1">{user?.bio}</Typography>
          )}
        </Card>
        <CoursesCard loading={loading} courses={user?.courses} />
      </Content>
    </Container>
  );
}
