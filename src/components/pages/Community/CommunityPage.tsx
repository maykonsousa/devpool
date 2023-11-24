'use client';

import { useGetProfiles } from '@/hooks';
import { Loading } from '@/components/Loading';
import { EmptyState } from '@/components/EmptyState';
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

  const users: IUserData[] = data || [];

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
        <CardsContainer>
          {users.length ? (
            users.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <EmptyState message="Nenhum usuário encontrado." type="empty" />
          )}
        </CardsContainer>
      )}
    </PageContainer>
  );
}
