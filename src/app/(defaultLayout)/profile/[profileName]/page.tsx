import React from 'react';
import { ProfilePage } from '@/components/pages/Profile';
import { Metadata, ResolvedMetadata } from 'next';

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
  const previewsImages = (await parent).openGraph?.images;

  return {
    title: `DevPool - ${profileName}`,
    openGraph: {
      title: `DevPool - ${profileName}`,
      images: previewsImages,
      description: `Acesse o perfil de ${profileName} no DevPool e veja seus projetos e informações de contato.`,
    },
  };
}

const page = ({ params }: ProfilePageProps) => {
  const { profileName } = params;

  return <ProfilePage profileName={profileName} />;
};

export default page;
