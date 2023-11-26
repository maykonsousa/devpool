import {
  GitHub,
  Instagram,
  Language,
  LinkedIn,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import { Avatar, Link } from '@mui/material';
import React from 'react';

interface ISocialIconProps {
  type:
    | 'linkedin_url'
    | 'github_url'
    | 'twitter_url'
    | 'instagram_url'
    | 'cell_phone'
    | 'personal_website';
  url: string;
  variant?: 'circular' | 'square' | 'rounded';
}

export function SocialIcon({
  type,
  url,
  variant = 'circular',
}: ISocialIconProps) {
  const generateWhatsappLink = (cellNumber: string) => {
    const phone = cellNumber.replace(/\D/g, '');
    return `https://wa.me/55${phone}`;
  };
  const socialIconEnum = {
    linkedin_url: {
      icon: (
        <LinkedIn
          fontSize="large"
          sx={{
            color: '#fff',
          }}
        />
      ),
      bgColor: '#0e76a8',
    },
    github_url: {
      icon: (
        <GitHub
          fontSize="large"
          sx={{
            color: '#fff',
          }}
        />
      ),
      bgColor: '#333',
    },
    twitter_url: {
      icon: (
        <Twitter
          fontSize="large"
          sx={{
            color: '#fff',
          }}
        />
      ),
      bgColor: '#1da1f2',
    },
    instagram_url: {
      icon: (
        <Instagram
          fontSize="large"
          sx={{
            color: '#fff',
          }}
        />
      ),
      bgColor: '#c13584',
    },
    cell_phone: {
      icon: (
        <WhatsApp
          fontSize="large"
          sx={{
            color: '#fff',
          }}
        />
      ),
      bgColor: '#128c7e',
    },
    personal_website: {
      icon: (
        <Language
          sx={{
            color: '#fff',
          }}
        />
      ),
      bgColor: 'primary.main',
    },
  };
  return (
    <Avatar
      variant={variant}
      sx={{
        'bgcolor': socialIconEnum[type].bgColor,
        'color': '#fff',
        'boxShadow': '0px 0px 10px rgba(0,0,0,0.5)',

        '&:hover': {
          boxShadow: '0px 0px 16px rgba(0,0,0,0.8)',
        },
      }}
    >
      <Link
        href={
          type === 'cell_phone' ? generateWhatsappLink(url) : (url as string)
        }
        target="_blank"
        rel="noreferrer"
      >
        {socialIconEnum[type].icon}
      </Link>
    </Avatar>
  );
}
