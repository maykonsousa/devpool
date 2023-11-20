import {
  GitHub, Instagram, Language, LinkedIn, Twitter, WhatsApp,
} from '@mui/icons-material';
import { Avatar, Link } from '@mui/material';
import React from 'react';

interface ISocialIconProps {
  type: 'linkedin_url' | 'github_url' | 'twitter_url' | 'instagram_url' | 'cell_phone' | 'personal_website';
  url: string;
}

export function SocialIcon({ type, url }: ISocialIconProps) {
  const generateWhatsappLink = (cellNumber: string) => {
    const phone = cellNumber.replace(/\D/g, '');
    return `https://wa.me/55${phone}`;
  };
  const socialIconEnum = {
    linkedin_url: {
      icon: <LinkedIn
        sx={{
          color: '#fff',
        }}
      />,
      bgColor: '#0e76a8',
    },
    github_url: {
      icon: <GitHub
        sx={{
          color: '#fff',
        }}
      />,
      bgColor: '#333',
    },
    twitter_url: {
      icon: <Twitter
        sx={{
          color: '#fff',
        }}
      />,
      bgColor: '#1da1f2',
    },
    instagram_url: {
      icon: <Instagram
        sx={{
          color: '#fff',
        }}
      />,
      bgColor: '#c13584',
    },
    cell_phone: {
      icon: <WhatsApp
        sx={{
          color: '#fff',
        }}
      />,
      bgColor: '#128c7e',
    },
    personal_website: {
      icon: <Language
        sx={{
          color: '#fff',
        }}
      />,
      bgColor: 'primary.main',
    },

  };
  return (

    <Avatar sx={{
      bgcolor: socialIconEnum[type].bgColor,
      color: '#fff',
    }}
    >
      <Link
        href={
        type === 'cell_phone' ? generateWhatsappLink(url) : url as string
      }
        target="_blank"
        rel="noreferrer"
      >
        {socialIconEnum[type].icon}
      </Link>
    </Avatar>
  );
}
