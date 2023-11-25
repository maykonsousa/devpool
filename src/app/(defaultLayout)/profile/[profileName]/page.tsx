import React from 'react';
import { ProfilePage } from '@/components/pages/Profile';
import { Metadata, ResolvedMetadata } from 'next';
import { getUserByUsernameService } from '@/app/api/services/getUserByUsername.service';

interface ProfilePageProps {
  params: {
    profileName: string;
  };
}

export async function generateMetadata(
  { params }: ProfilePageProps,
  parent: ResolvedMetadata,
): Promise<Metadata> {
  const { profileName } = params;
  const previewsImages = (await parent).openGraph?.images || [];

  const { user } = await getUserByUsernameService({ username: profileName });

  const title = `DevPool - ${user?.name || profileName}`;
  const description =
    user?.bio ||
    `Acesse o perfil de ${profileName} no DevPool e veja seus projetos e informações de contato.`;

  return {
    title,
    openGraph: {
      title,
      images: [user?.avatar_url as string, ...previewsImages],
      description,
    },
  };
}

const page = ({ params }: ProfilePageProps) => {
  const { profileName } = params;

  return <ProfilePage profileName={profileName} />;
};

export default page;
