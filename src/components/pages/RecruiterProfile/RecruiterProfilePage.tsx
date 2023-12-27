import React from 'react';
import { Card } from '@/components/Card';
import {
  Business,
  Computer,
  Email,
  Equalizer,
  Person,
} from '@mui/icons-material';
import { useGetRecruiterProfile, useSession } from '@/hooks';
import { AvatarGroup, Skeleton } from '@mui/material';
import { SocialIcon } from '@/components/SocialIcon';
import {
  Content,
  Main,
  ProfilePageContainer,
  Sidebar,
} from './RecruiterProfilePage.styles';
import { Cover } from './fragments/Cover/Cover';
import { Header } from './fragments/Header/Header';
import { InFormationRow } from './fragments/InformationRow/InformationRow';

interface IRecruiterProfilePageProps {
  id: string;
}

export function RecruiterProfilePage({ id }: IRecruiterProfilePageProps) {
  const { user: userLoged } = useSession();
  const { data, loading } = useGetRecruiterProfile({
    variables: {
      input: {
        id,
        userId: userLoged?.id as string,
      },
    },
  });

  const recruiter = data?.recruiter;
  return (
    <ProfilePageContainer>
      <Cover />
      <Header id={id} />
      <Main>
        <Sidebar>
          {loading || !recruiter ? (
            <Skeleton variant="rectangular" width="100%" height={200} />
          ) : (
            <Card title="Informações">
              <InFormationRow
                icon={<Person />}
                label="Nome:"
                value={recruiter?.name}
              />
              <InFormationRow
                icon={<Computer />}
                label="Cargo:"
                value={recruiter?.role}
              />
              <InFormationRow
                icon={<Equalizer />}
                label="Senioridade:"
                value={recruiter?.seniority}
              />

              <InFormationRow
                icon={<Business />}
                label="Empresa:"
                value={recruiter?.company}
              />
              <InFormationRow
                icon={<Email />}
                label="E-mail:"
                value={recruiter?.email}
              />
            </Card>
          )}
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={200} />
          ) : (
            <Card title="Contatos" direction="row">
              <AvatarGroup max={6}>
                {recruiter?.contacts?.linkedin_url && (
                  <SocialIcon
                    type="linkedin_url"
                    url={recruiter?.contacts?.linkedin_url}
                  />
                )}
                {recruiter?.contacts?.instagram_url && (
                  <SocialIcon
                    type="instagram_url"
                    url={recruiter?.contacts?.instagram_url}
                  />
                )}
                {recruiter?.contacts?.twitter_url && (
                  <SocialIcon
                    type="twitter_url"
                    url={recruiter?.contacts?.twitter_url}
                  />
                )}
                {recruiter?.contacts?.twitter_url && (
                  <SocialIcon
                    type="cell_phone"
                    url={recruiter?.contacts?.cell_phone}
                  />
                )}
              </AvatarGroup>
            </Card>
          )}
        </Sidebar>
        <Content>Contenido</Content>
      </Main>
    </ProfilePageContainer>
  );
}
