import React from 'react';
import { ProfilePage } from '@/components/pages/Profile';

interface ProfilePageProps {
  params: {
    profileName: string;
  };
}

const page = ({ params }: ProfilePageProps) => {
  const { profileName } = params;

  return <ProfilePage profileName={profileName} />;
};

export default page;
