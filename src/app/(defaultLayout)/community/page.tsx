import { CommunityPage } from '@components/pages/Community';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'DevPool | Comunidade',
  description:
    'Conecte-se com diferentes perfis de desenvolvedores e expanda a sua rede de contatos.',
  openGraph: {
    title: 'Comunidade DevPool',
    description:
      'Conecte-se com diferentes perfis de desenvolvedores e expanda a sua rede de contatos.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://devpoolbr.com.br/community',
    images: ['/metadadaImage.png'],
  },
};

function Community() {
  return <CommunityPage />;
}

export default Community;
