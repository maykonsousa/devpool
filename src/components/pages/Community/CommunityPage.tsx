'use client';

import React from 'react';
import { useGetProfiles } from '@/hooks';
import { Loading } from '@/components/Loading';
import { EmptyState } from '@/components/EmptyState';
import { Shuffle } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import {
  CardsContainer,
  PageContainer,
  Subtitle,
  Title,
} from './CommunityPage.styles';
import { UserCard } from './fragments';

interface IContacts {
  linkedin_url: string;
  github_url: string;
  instagram_url: string;
  cell_phone: string;
  personal_website: string;
  twitter_url: string;
}

interface IUserData {
  id: string;
  name: string;
  avatar_url: string;
  cover_url: string;
  role: string;
  seniority: string;
  city: string;
  state: string;
  bio: string;
  email: string;
  username: string;
  contacts: IContacts;
}

export function CommunityPage() {
  const { data, loading, error, refetch } = useGetProfiles();
  const [isRefetching, setIsRefetching] = React.useState(false);

  const handleRefetch = async () => {
    setIsRefetching(true);
    await refetch();
    setIsRefetching(false);
  };

  return (
    <PageContainer>
      <Box width="100%">
        <Title> Comunidade </Title>
        <Subtitle>
          Lista aleatória de profissionais da nossa comunidade. Clique no botão
          para renovar a lista
        </Subtitle>
      </Box>
      {!data && !loading && error && (
        <EmptyState
          message="Ocorreu um erro ao carregar os usuários."
          type="error"
        />
      )}
      {loading || isRefetching ? (
        <Loading />
      ) : (
        <>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              paddingBottom: '1rem',
            }}
          >
            <Button
              variant="contained"
              onClick={handleRefetch}
              startIcon={<Shuffle />}
            >
              Shuffle
            </Button>
          </Box>
          <CardsContainer>
            {Array.isArray(data) && data.length ? (
              data.map((user: IUserData) => (
                <UserCard key={user.id} user={user} />
              ))
            ) : (
              <EmptyState message="Nenhum usuário encontrado." type="empty" />
            )}
          </CardsContainer>
        </>
      )}
    </PageContainer>
  );
}
