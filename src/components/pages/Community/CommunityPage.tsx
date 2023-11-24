'use client';

import React from 'react';
import { useGetProfiles } from '@/hooks';
import { Loading } from '@/components/Loading';
import { EmptyState } from '@/components/EmptyState';
import { Search } from '@mui/icons-material';
import { FormControl, TextField, InputAdornment } from '@mui/material';
import { CardsContainer, PageContainer, Title } from './CommunityPage.styles';
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
  const { data, loading, error } = useGetProfiles();
  const [searchText, setSearchText] = React.useState<string>('');
  const [filteredUsers, setFilteredUsers] = React.useState<IUserData[]>([]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  React.useEffect(() => {
    if (data as IUserData[]) {
      const filtered = data.filter((user: IUserData) =>
        user.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredUsers(filtered);
    }
  }, [searchText, data]);

  return (
    <PageContainer>
      <Title> Comunidade </Title>
      {!data && !loading && error && (
        <EmptyState
          message="Ocorreu um erro ao carregar os usuários."
          type="error"
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <>
          <FormControl
            fullWidth
            sx={{
              marginBottom: '20px',
            }}
          >
            <TextField
              label="Pesquisar"
              fullWidth
              value={searchText}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <CardsContainer>
            {filteredUsers.length ? (
              filteredUsers.map((user) => (
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
