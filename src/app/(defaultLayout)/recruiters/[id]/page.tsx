'use client';

import { RecruiterProfilePage } from '@/components/pages';
import React from 'react';

interface IPagesProps {
  params: {
    id: string;
  };
}

const page = ({ params }: IPagesProps) => {
  return <RecruiterProfilePage id={params.id} />;
};

export default page;
